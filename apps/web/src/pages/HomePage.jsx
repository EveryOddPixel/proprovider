import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { CheckCircle2, FileText, Bell, Shield, Calendar, ArrowRight, Users, Stethoscope, Brain, Briefcase } from 'lucide-react';
import { branding } from '@/config/branding';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const benefits = [
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: 'Relief from Administrative Burden',
      description: 'Focus on patient care while we handle the paperwork'
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Document Organization',
      description: 'Keep all your credentialing documents organized and accessible'
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: 'Deadline Tracking',
      description: 'Never miss an important credentialing deadline'
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: 'Renewal Reminders',
      description: 'Timely reminders for license and certification renewals'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Compliance Support',
      description: 'Stay compliant with credentialing requirements'
    }
  ];

  const steps = [
    {
      number: '01',
      title: 'Submit Information',
      description: 'Complete our simple intake form with your credentialing needs'
    },
    {
      number: '02',
      title: 'We Organize & Track',
      description: 'We organize your documents and track all deadlines and requirements'
    },
    {
      number: '03',
      title: 'You Stay Informed',
      description: 'Receive regular updates and reminders about your credentialing status'
    }
  ];

  const providerTypes = [
    { icon: <Stethoscope className="w-8 h-8" />, name: 'Physicians (MD/DO)' },
    { icon: <Users className="w-8 h-8" />, name: 'Nurse Practitioners' },
    { icon: <Briefcase className="w-8 h-8" />, name: 'Physician Assistants' },
    { icon: <Users className="w-8 h-8" />, name: 'Dentists' },
    { icon: <Brain className="w-8 h-8" />, name: 'Pharmacy/Pharmacy Technicians' },
    { icon: <Users className="w-8 h-8" />, name: 'Other Healthcare Professionals' }
  ];

  const faqs = [
    {
      question: 'What is credentialing?',
      answer: 'Credentialing is the process of verifying and assessing the qualifications of healthcare providers. It includes verification of education, training, licenses, certifications, and work history.'
    },
    {
      question: 'Do you influence credentialing decisions?',
      answer: 'No. We provide administrative support only. All credentialing decisions are made independently by boards, facilities, and payors. We do not influence or guarantee any outcomes.'
    },
    {
      question: 'How long does credentialing typically take?',
      answer: 'Credentialing timelines vary by organization and can range from 90-180 days. We help track deadlines and ensure timely submission of all required documents.'
    },
    {
      question: 'What documents do I need?',
      answer: 'Common documents include medical licenses, DEA certificates, board certifications, CV, malpractice insurance, and education verification. We\'ll provide a complete checklist based on your specific needs.'
    },
    {
      question: 'Is my information secure?',
      answer: 'Yes. We use secure systems to handle your information and follow strict privacy protocols. We never collect or store protected health information (PHI).'
    },
    {
      question: 'Do you provide legal advice?',
      answer: 'No. We provide administrative support for credentialing processes. We do not provide legal, medical, or professional advice. Consult appropriate professionals for such guidance.'
    },
    {
      question: 'What happens after I submit the intake form?',
      answer: 'After submission, we\'ll review your information and schedule a discovery call to discuss your needs in detail and explain how we can help.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`${branding.companyName} - ${branding.tagline}`}</title>
        <meta name="description" content="Focus on patients while we handle credentialing paperwork. Administrative support for healthcare provider credentialing, renewals, and compliance." />
      </Helmet>

      {/* Top Banner */}
      <div className="bg-brand-900 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm sm:text-base font-medium">{branding.tagline}</p>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Logo left */}
            <div className="flex-shrink-0 flex items-center justify-center w-full md:w-1/2">
              <img
                src="/colored-logo.png"
                alt={branding.companyName}
                className="max-w-xs sm:max-w-sm lg:max-w-md w-full object-contain"
              />
            </div>
            {/* Content right */}
            <div className="w-full md:w-1/2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-brand-900">
                Focus on Patients.<br />We Handle the Paperwork.
              </h1>
              <p className="text-xl sm:text-2xl text-brand-900 mb-8">
                {branding.companyName} provides administrative support for credentialing, so you can focus on what matters most.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/book-call">
                  <Button size="lg" className="bg-brand-900 text-white hover:bg-brand-800 w-full sm:w-auto">
                    <Calendar className="w-5 h-5 mr-2" />
                    Book a Discovery Call
                  </Button>
                </Link>
                <Link to="/intake">
                  <Button size="lg" variant="outline" className="border-brand-900 text-brand-900 hover:bg-brand-900/10 w-full sm:w-auto">
                    Start Intake
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-100 rounded-lg flex items-center justify-center text-brand-600">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-brand-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-lg shadow-md p-8 h-full">
                  <div className="text-5xl font-bold text-brand-600 opacity-20 mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-brand-400" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Snapshot */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive administrative support for all your credentialing needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {['Initial Credentialing', 'Renewal Support', 'Re-credentialing', 'Reinstatement Enrollment', 'Privileging Support', 'Notarization for Affidavits', 'Document Organization', 'Supervisor Collaboration'].map((service, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-lg hover:border-brand-500 transition-colors">
                <CheckCircle2 className="w-8 h-8 text-brand-600 mb-3" />
                <h3 className="font-semibold text-gray-900">{service}</h3>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/services">
              <Button variant="outline" className="border-brand-600 text-brand-600 hover:bg-brand-50">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Provider Types */}
      <section className="py-16 bg-gradient-to-br from-brand-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Who We Serve
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {providerTypes.map((type, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                <div className="text-brand-600 flex justify-center mb-3">
                  {type.icon}
                </div>
                <p className="text-sm font-medium text-gray-700">{type.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-900 rounded-2xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-8 text-center">Built on Trust & Transparency</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Privacy First</h3>
                <p className="text-brand-100 text-sm">Your information is handled with the highest level of security and confidentiality</p>
              </div>
              <div className="text-center">
                <FileText className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Secure Handling</h3>
                <p className="text-brand-100 text-sm">We use secure systems and follow strict protocols for document management</p>
              </div>
              <div className="text-center">
                <CheckCircle2 className="w-12 h-12 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Transparent Process</h3>
                <p className="text-brand-100 text-sm">Clear communication and regular updates throughout the credentialing process</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-white rounded-lg shadow-sm p-6 group">
                <summary className="font-semibold text-gray-900 cursor-pointer list-none flex items-center justify-between">
                  {faq.question}
                  <ArrowRight className="w-5 h-5 text-brand-600 transform group-open:rotate-90 transition-transform" />
                </summary>
                <p className="mt-4 text-gray-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-brand-900">
            Ready to Simplify Your Credentialing?
          </h2>
          <p className="text-xl text-brand-900 mb-8">
            Let us handle the administrative burden so you can focus on patient care
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/intake">
              <Button size="lg" className="bg-brand-900 hover:bg-brand-800 text-white w-full sm:w-auto">
                Start Your Intake
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link to="/book-call">
              <Button size="lg" variant="outline" className="border-brand-900 text-brand-900 hover:bg-brand-900/10 w-full sm:w-auto">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule a Call
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;