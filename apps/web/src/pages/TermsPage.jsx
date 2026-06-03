import React from 'react';
import { Helmet } from 'react-helmet';
import { branding } from '@/config/branding';

const TermsPage = () => {
  return (
    <>
      <Helmet>
        <title>{`Terms & Disclaimers - ${branding.companyName}`}</title>
        <meta name="description" content="Terms of service and important disclaimers for our credentialing administrative support services." />
      </Helmet>

      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Disclaimers</h1>
          <p className="text-sm text-gray-600 mb-8">Last Updated: {new Date().toLocaleDateString()}</p>

          <div className="prose prose-lg max-w-none">
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Description</h2>
              <p className="text-gray-700 mb-4">
                {branding.companyName} provides administrative support services for healthcare provider credentialing. Our services are limited to organizational, tracking, and administrative assistance.
              </p>
            </section>

            <section className="mb-8 bg-yellow-50 border-l-4 border-yellow-400 p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Disclaimers</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Legal Advice</h3>
                  <p className="text-gray-700">
                    We do not provide legal advice. Our services are administrative in nature. For legal guidance regarding credentialing, licensing, or regulatory matters, please consult with a qualified attorney.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Influence on Decisions</h3>
                  <p className="text-gray-700">
                    We do not influence, guarantee, or control credentialing decisions. All credentialing decisions are made independently by third-party entities including medical boards, healthcare facilities, insurance payors, and credentialing organizations.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Provider Responsibility</h3>
                  <p className="text-gray-700">
                    Healthcare providers are solely responsible for the accuracy and completeness of all information and documents submitted for credentialing. We assist with organization and tracking but do not verify the accuracy of submitted information.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Third-Party Decisions</h3>
                  <p className="text-gray-700">
                    Credentialing decisions are made by third-party entities (boards, payors, facilities) based on their own criteria and processes. We have no control over these decisions or timelines.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">No Guarantees</h3>
                  <p className="text-gray-700">
                    We do not guarantee approval, acceptance, or any specific outcome from credentialing applications. Success depends on multiple factors outside our control.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Scope of Services</h2>
              <p className="text-gray-700 mb-4">Our services include:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                <li>Organizing credentialing documents</li>
                <li>Tracking application deadlines and requirements</li>
                <li>Managing communications with credentialing entities</li>
                <li>Providing renewal reminders</li>
                <li>Maintaining organized credential records</li>
              </ul>
              <p className="text-gray-700 mb-4">Our services do NOT include:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Legal advice or representation</li>
                <li>Medical or professional advice</li>
                <li>Influencing credentialing decisions</li>
                <li>Guaranteeing outcomes or approvals</li>
                <li>Handling protected health information (PHI)</li>
                <li>Representing providers in disputes or appeals</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Obligations</h2>
              <p className="text-gray-700 mb-4">By using our services, you agree to:</p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Provide accurate and complete information</li>
                <li>Respond promptly to requests for information or documents</li>
                <li>Review all documents before submission</li>
                <li>Maintain current licenses and certifications</li>
                <li>Notify us of any changes to your credentials or contact information</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                To the fullest extent permitted by law, {branding.companyName} shall not be liable for:
              </p>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Decisions made by credentialing entities</li>
                <li>Delays in credentialing processes</li>
                <li>Denials or rejections of applications</li>
                <li>Errors or omissions in information provided by users</li>
                <li>Actions or inactions of third-party credentialing organizations</li>
                <li>Consequential, indirect, or incidental damages</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Confidentiality</h2>
              <p className="text-gray-700">
                We maintain strict confidentiality of your information as outlined in our Privacy Policy. However, we may be required to disclose information in response to legal process or regulatory requirements.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-700">
                Either party may terminate services with written notice. Upon termination, we will provide you with copies of your documents and records in our possession.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms</h2>
              <p className="text-gray-700">
                We reserve the right to modify these terms at any time. Material changes will be communicated to active clients. Continued use of our services after changes constitutes acceptance of modified terms.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-700">
                These terms shall be governed by and construed in accordance with applicable federal and state laws.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 mb-4">
                For questions about these terms, please contact us:
              </p>
              <div className="bg-gray-50 rounded-lg p-6">
                <p className="text-gray-700"><strong>{branding.companyName}</strong></p>
                <p className="text-gray-700">Email: <a href={`mailto:${branding.contactEmail}`} className="text-brand-600 hover:underline">{branding.contactEmail}</a></p>
                <p className="text-gray-700">Phone: <a href={`tel:${branding.contactPhone}`} className="text-brand-600 hover:underline">{branding.contactPhone}</a></p>
              </div>
            </section>

            <section className="mb-8 bg-brand-50 border-l-4 border-brand-600 p-6">
              <p className="text-gray-700 font-semibold">
                By using our services, you acknowledge that you have read, understood, and agree to these terms and disclaimers.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default TermsPage;