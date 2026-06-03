import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FileText, Users, Shield, Zap, CheckCircle2, ArrowRight } from 'lucide-react';
import { branding } from '@/config/branding';
import { Button } from '@/components/ui/button';

const NotarizationPage = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Connect in Minutes',
      description: 'Skip the office visit and connect with a licensed notary instantly from your computer or smartphone.'
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Wide Range of Documents',
      description: 'Affidavits, contracts, power of attorney forms, real estate documents, business agreements, and more.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Multiple Signers Supported',
      description: 'Two or more individuals can have their signatures notarized in the same session or separately.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Secure & Legally Compliant',
      description: 'Our platform meets all legal requirements for online notarization, giving you peace of mind.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`Online Notarization - ${branding.companyName}`}</title>
        <meta name="description" content="Skip the office visit and get your documents notarized from anywhere. Connect with a licensed notary in minutes using your computer or smartphone." />
      </Helmet>

      {/* Hero */}
      <section className="bg-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Online Notarization Made Simple</h1>
          <p className="text-xl text-brand-100 max-w-3xl">
            Skip the office visit and get your documents notarized from anywhere. Connect with a licensed notary in minutes using your computer or smartphone. No appointments, no hassle.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Document Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Documents We Can Notarize</h2>
          <p className="text-lg text-gray-600 text-center mb-12">
            You can notarize a wide range of documents on our platform. If your document requires a notary seal, chances are we can handle it quickly and securely.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['Affidavits', 'Contracts', 'Power of Attorney Forms', 'Real Estate Documents', 'Business Agreements', 'And much more'].map((doc, index) => (
              <div key={index} className="flex items-center gap-3 bg-white rounded-lg p-4 border border-gray-200">
                <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{doc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multiple Signers */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-6">
            <Users className="w-8 h-8" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Multiple Signers? No Problem.</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Need multiple signatures notarized? Our platform supports multiple signers, so two or more individuals can have their signatures notarized in the same session or separately, depending on your needs.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-brand-900">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-brand-900 mb-8">
            Fast, convenient, and legally compliant—online notarization has never been easier.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book-call">
              <Button size="lg" className="bg-brand-900 hover:bg-brand-800 text-white w-full sm:w-auto">
                Schedule a Call
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/intake">
              <Button size="lg" variant="outline" className="border-brand-900 text-brand-900 hover:bg-brand-900/10 w-full sm:w-auto">
                Start Intake
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotarizationPage;
