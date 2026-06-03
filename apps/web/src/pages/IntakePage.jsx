import React from 'react';
import { Helmet } from 'react-helmet';
import { branding } from '@/config/branding';
import IntakeForm from '@/components/IntakeForm';

const IntakePage = () => {
  return (
    <>
      <Helmet>
        <title>{`Start Intake - ${branding.companyName}`}</title>
        <meta name="description" content="Begin your credentialing journey with our simple intake form. Tell us about your needs and we'll help you get started." />
      </Helmet>

      <div className="py-12 bg-gradient-to-br from-gray-50 to-brand-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Start Your Intake</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete this form to tell us about your credentialing needs. We'll review your information and reach out to discuss how we can help.
            </p>
          </div>

          <IntakeForm />
        </div>
      </div>
    </>
  );
};

export default IntakePage;