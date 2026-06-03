import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { CheckCircle2, FileText, Clock, Shield } from 'lucide-react';
import { branding } from '@/config/branding';
import Cal, { getCalApi } from '@calcom/embed-react';

const BookCallPage = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#00163a"}},"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const prepItems = [
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Current Credentials',
      description: 'Have a list of your current licenses, certifications, and credentials ready'
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Credentialing Needs',
      description: 'Know which organizations or 3rd party sources you need for credentialing purposes.'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Timeline',
      description: 'Have an idea of your timeline and any urgent deadlines'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Questions',
      description: 'Prepare any questions you have about our services and process'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`Book a Discovery Call - ${branding.companyName}`}</title>
        <meta name="description" content="Schedule a free discovery call to discuss your credentialing needs and learn how we can help." />
      </Helmet>

      <div className="py-12 bg-gradient-to-br from-gray-50 to-brand-50 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Book a Discovery Call</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Schedule a free consultation to discuss your credentialing needs and learn how we can help
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* What to Prepare */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-8 sticky top-24">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Prepare</h2>
                <div className="space-y-6">
                  {prepItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600">
                        {item.icon}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-4 bg-brand-50 rounded-lg">
                  <p className="text-sm text-brand-900">
                    <strong>Note:</strong> This is a no-obligation consultation. We'll discuss your needs and explain how we can help.
                  </p>
                </div>
              </div>
            </div>

            {/* Cal.com Embed */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <Cal
                  namespace="30min"
                  calLink="proprovider/30min"
                  style={{ width: '100%', height: '700px', overflow: 'scroll' }}
                  config={{ layout: 'month_view', useSlotsViewOnSmallScreen: 'true' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookCallPage;