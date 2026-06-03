import React from 'react';
import { Helmet } from 'react-helmet';
import { Target, Heart, Shield, Zap } from 'lucide-react';
import { branding } from '@/config/branding';

const AboutPage = () => {
  const values = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards and operate with complete transparency in all our interactions.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Transparency',
      description: 'Clear communication and honest guidance throughout the credentialing process.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Compliance',
      description: 'Strict adherence to all regulatory requirements and industry best practices.'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Efficiency',
      description: 'Streamlined processes that save you time while ensuring accuracy and completeness.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>{`About Us - ${branding.companyName}`}</title>
        <meta name="description" content="Learn about our mission to simplify credentialing for healthcare providers through administrative support and transparent service." />
      </Helmet>

      {/* Hero */}
      <section className="bg-brand-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-brand-100 max-w-3xl">
            Dedicated to simplifying credentialing through administrative excellence
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                To simplify the credentialing process by handling administrative burden so healthcare providers can focus on patient care.
              </p>
              <p className="text-gray-600 mb-6">
                We understand that credentialing can be time-consuming and complex. Our goal is to provide reliable administrative support that helps healthcare professionals navigate the credentialing process efficiently and accurately.
              </p>
              <p className="text-gray-600">
                By organizing documents, tracking deadlines, and managing communications, we free up your time to focus on what matters most—providing excellent patient care.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1516841273335-e39b37888115"
                alt="Healthcare professionals collaborating"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm text-center">
                <div className="w-16 h-16 bg-brand-100 rounded-full flex items-center justify-center text-brand-600 mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ethics Stance */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-brand-900 rounded-2xl p-12 text-white text-center">
            <Shield className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6">Our Ethics Commitment</h2>
            <p className="text-xl text-brand-100 mb-6">
              We maintain strict independence and do not influence credentialing decisions.
            </p>
            <p className="text-brand-100">
              All credentialing decisions are made independently by boards, facilities, and payors. 
              We provide administrative support only and never guarantee outcomes or attempt to influence decisions.
            </p>
          </div>
        </div>
      </section>

      {/* Founder Narrative */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Story</h2>
          <div className="bg-white rounded-lg shadow-md p-8">
            <p className="text-gray-700 mb-6">
              {branding.companyName} was founded with a simple observation: healthcare providers spend countless hours managing credentialing paperwork when they could be focusing on patient care.
            </p>
            <p className="text-gray-700 mb-6">
              Having witnessed the administrative burden that credentialing places on busy healthcare professionals, we set out to create a service that would handle the organizational and tracking aspects of credentialing, allowing providers to focus on their practice.
            </p>
            <p className="text-gray-700">
              Today, we're proud to support healthcare providers across multiple specialties and states, helping them navigate the credentialing process with confidence and efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Team Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Team</h2>
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-lg text-gray-600 mb-8">
              Our team consists of experienced professionals dedicated to providing exceptional administrative support for credentialing processes.
            </p>
            <p className="text-gray-600">
              We combine industry knowledge with meticulous attention to detail to ensure your credentialing needs are handled efficiently and accurately.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;