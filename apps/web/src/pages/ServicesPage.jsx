import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { FileText, RefreshCw, UserCheck, CreditCard, Award, CheckCircle2, X, Clock, ArrowRight, PenLine, Users } from 'lucide-react';
import { branding } from '@/config/branding';
import { Button } from '@/components/ui/button';

const ServicesPage = () => {
  const services = [
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Initial Credentialing',
      description: 'Complete support for first-time credentialing applications with hospitals, facilities, and insurance networks.'
    },
    {
      icon: <RefreshCw className="w-8 h-8" />,
      title: 'Renewal Support',
      description: 'Timely reminders and assistance with license, certification, and credential renewals.'
    },
    {
      icon: <UserCheck className="w-8 h-8" />,
      title: 'Re-credentialing',
      description: 'Streamlined support for periodic re-credentialing requirements with existing organizations.'
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: 'Reinstatement Services',
      description: 'Administrative assistance with reinstatement enrollment and panel applications.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Privileging Support',
      description: 'Help organizing and submitting documentation for clinical privileging applications.'
    },
    {
      icon: <PenLine className="w-8 h-8" />,
      title: 'Notary Services',
      description: 'Certified notary services to authenticate and verify credentialing documents as required.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Practice Agreements',
      description: 'Professionally drafted collaboration agreements that define roles, responsibilities, and compliance between supervisors and collaborators.'
    }
  ];

  const whatWeDo = [
    'Organize and track credentialing documents',
    'Monitor application deadlines and requirements',
    'Manage communications with credentialing entities',
    'Provide renewal reminders and deadline alerts',
    'Maintain organized records of credentials',
    'Coordinate document collection and submission'
  ];

  const whatWeDont = [
    'Influence credentialing decisions or outcomes',
    'Provide legal or professional advice',
    'Guarantee approval or acceptance',
    'Make decisions on your behalf',
    'Represent you in disputes or appeals',
    'Store or handle protected health information (PHI)'
  ];

  const processSteps = [
    {
      step: 1,
      title: 'Intake & Assessment',
      description: 'We review your credentialing needs and create a customized plan',
      duration: '1-2 days'
    },
    {
      step: 2,
      title: 'Document Collection',
      description: 'We provide a checklist and help you gather all required documents',
      duration: '1-2 weeks'
    },
    {
      step: 3,
      title: 'Organization & Review',
      description: 'We organize your documents and ensure completeness',
      duration: '3-5 days'
    },
    {
      step: 4,
      title: 'Tracking & Monitoring',
      description: 'We track your applications and monitor deadlines',
      duration: 'Ongoing'
    },
    {
      step: 5,
      title: 'Renewal Reminders',
      description: 'We send timely reminders for upcoming renewals',
      duration: 'Ongoing'
    }
  ];

  const deliverables = [
    'Organized digital credential file',
    'Deadline tracking calendar',
    'Document checklist and status updates',
    'Renewal reminder notifications',
    'Regular progress reports',
    'Secure document storage access'
  ];

  return (
    <>
      <Helmet>
        <title>{`Services - ${branding.companyName}`}</title>
        <meta name="description" content="Comprehensive credentialing administrative support services including initial credentialing, renewals, re-credentialing, reinstatement enrollment, and privileging support." />
      </Helmet>

      {/* Hero */}
      <section className="bg-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-brand-100 max-w-3xl">
            Comprehensive administrative support for all your credentialing needs
          </p>
        </div>
      </section>

      {/* Service Packages */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Service Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8 hover:shadow-lg transition-shadow flex flex-col">
                <div className="w-16 h-16 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 flex-1">{service.description}</p>
                <Link
                  to="/book-call"
                  className="mt-6 inline-block w-full text-center bg-brand-600 hover:bg-brand-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaborative Practice Agreements Detail */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600 flex-shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Collaborative Practice Agreements</h2>
          </div>
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Purpose</h3>
            <p className="text-gray-600">
              The purpose of this Agreement is to establish a collaborative working relationship in which the Supervisor provides oversight, guidance, and/or professional support to the Collaborator/Primary Supervisor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Supervisor Responsibilities */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">The Supervisor Agrees To:</h3>
              <ul className="space-y-3">
                {[
                  'Provide professional supervision and guidance as needed',
                  'Review and/or approve work when required by regulation or contract',
                  'Offer consultation on complex cases or escalations',
                  'Ensure compliance with applicable laws and industry standards'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Collaborator Responsibilities */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">The Collaborator Agrees To:</h3>
              <ul className="space-y-3">
                {[
                  'Perform day-to-day operational tasks',
                  'Maintain accurate records and documentation',
                  'Communicate regularly with the Supervisor',
                  'Follow all applicable compliance guidelines'
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do / Don't Do */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What We Do & What We Don't Do
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* What We Do */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6 text-brand-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What We Do</h3>
              </div>
              <ul className="space-y-3">
                {whatWeDo.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What We Don't Do */}
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                  <X className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">What We Don't Do</h3>
              </div>
              <ul className="space-y-3">
                {whatWeDont.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Process</h2>
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-brand-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {step.step}
                </div>
                <div className="flex-1 bg-gray-50 rounded-lg p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      {step.duration}
                    </div>
                  </div>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What You'll Receive</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <CheckCircle2 className="w-8 h-8 text-brand-600 mb-3" />
                <p className="text-gray-900 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notarization Teaser */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-900 rounded-2xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">Online Notarization Made Simple</h2>
              <p className="text-brand-100 max-w-xl">
                Skip the office visit and get your documents notarized from anywhere. Connect with a licensed notary in minutes—no appointments, no hassle.
              </p>
            </div>
            <Link to="/notarization" className="flex-shrink-0">
              <Button size="lg" className="bg-white text-brand-900 hover:bg-gray-100 w-full sm:w-auto">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-brand-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-200 mb-8">
            Complete our intake form or schedule a discovery call to learn more
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/intake">
              <Button size="lg" className="bg-brand-600 hover:bg-brand-700 text-white w-full sm:w-auto">
                Start Intake Form
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/book-call">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 w-full sm:w-auto">
                Book a Discovery Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;