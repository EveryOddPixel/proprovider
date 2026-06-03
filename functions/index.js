import { onDocumentCreated } from 'firebase-functions/v2/firestore';
import { defineSecret } from 'firebase-functions/params';
import { logger } from 'firebase-functions/v2';

// Mailjet API credentials — stored in Secret Manager, never in source or the client.
// Set with:  firebase functions:secrets:set MAILJET_API_KEY
//            firebase functions:secrets:set MAILJET_SECRET_KEY
const MAILJET_API_KEY = defineSecret('MAILJET_API_KEY');
const MAILJET_SECRET_KEY = defineSecret('MAILJET_SECRET_KEY');

// Where notifications are delivered.
const NOTIFY_TO = 'services@proproviderllc.com';
// Verified Mailjet sender. This address/domain MUST be validated in your Mailjet
// account (Account settings → Sender domains & addresses) or the send is rejected.
const NOTIFY_FROM = 'services@proproviderllc.com';
const FROM_NAME = 'Pro Provider Website';

const esc = (v) =>
  String(v ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

const asList = (v) => (Array.isArray(v) ? v.join(', ') : v || '');

function buildEmail(lead) {
  const rows = [
    ['Name', lead.name],
    ['Email', lead.email],
    ['Phone', lead.phone],
    ['Provider Type', lead.providerType],
    ['States', asList(lead.states)],
    ['Needs', asList(lead.needs)],
    ['Urgency', lead.urgency],
    ['Message', lead.message],
    ['Source', lead.source],
  ];

  const text = rows
    .map(([k, v]) => `${k}: ${v || '-'}`)
    .join('\n');

  const html = `
    <h2 style="margin:0 0 16px;font-family:Arial,sans-serif;color:#003388">New Intake Submission</h2>
    <table style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px">
      ${rows
        .map(
          ([k, v]) =>
            `<tr>
               <td style="padding:6px 12px;border:1px solid #e5e7eb;background:#f9fafb;font-weight:bold;vertical-align:top">${esc(k)}</td>
               <td style="padding:6px 12px;border:1px solid #e5e7eb">${esc(v) || '-'}</td>
             </tr>`,
        )
        .join('')}
    </table>`;

  return {
    subject: `New Intake Submission — ${lead.name || 'Unknown'}`,
    text,
    html,
  };
}

export const notifyOnLead = onDocumentCreated(
  {
    document: 'leads/{leadId}',
    secrets: [MAILJET_API_KEY, MAILJET_SECRET_KEY],
  },
  async (event) => {
    const lead = event.data?.data();
    if (!lead) {
      logger.warn('No lead data on create event', { leadId: event.params.leadId });
      return;
    }

    const { subject, text, html } = buildEmail(lead);

    const payload = {
      Messages: [
        {
          From: { Email: NOTIFY_FROM, Name: FROM_NAME },
          To: [{ Email: NOTIFY_TO }],
          // Reply goes straight to the prospect.
          ...(lead.email ? { ReplyTo: { Email: lead.email, Name: lead.name || '' } } : {}),
          Subject: subject,
          TextPart: text,
          HTMLPart: html,
        },
      ],
    };

    const auth = Buffer.from(
      `${MAILJET_API_KEY.value()}:${MAILJET_SECRET_KEY.value()}`,
    ).toString('base64');

    const res = await fetch('https://api.mailjet.com/v3.1/send', {
      method: 'POST',
      headers: {
        Authorization: `Basic ${auth}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    const body = await res.text();
    if (!res.ok) {
      logger.error('Mailjet send failed', { status: res.status, body });
      throw new Error(`Mailjet send failed: ${res.status}`);
    }

    logger.info('Lead notification sent', { leadId: event.params.leadId, status: res.status });
  },
);
