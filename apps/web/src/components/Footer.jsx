import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { branding } from '@/config/branding';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="font-bold text-xl text-white">
                {branding.companyName}
              </span>
            </div>
            <p className="text-sm text-gray-400 mb-4">
              {branding.tagline}
            </p>
            <p className="text-xs text-gray-500 italic">
              {branding.complianceDisclaimer}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-sm hover:text-brand-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm hover:text-brand-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm hover:text-brand-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:text-brand-400 transition-colors">
                  Terms & Disclaimers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm">
                <Mail className="w-4 h-4 text-brand-400" />
                <a href={`mailto:${branding.contactEmail}`} className="hover:text-brand-400 transition-colors">
                  {branding.contactEmail}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-brand-400" />
                <a href={`tel:${branding.contactPhone}`} className="hover:text-brand-400 transition-colors">
                  {branding.contactPhone}
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <span>{branding.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {currentYear} {branding.companyName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;