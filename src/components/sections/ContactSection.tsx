import React from 'react';
import { Mail, Phone, MessageCircle } from 'lucide-react';
import { ContactInfoData } from '@/lib/sanity/queries';

interface ContactSectionProps {
  contactInfo?: ContactInfoData | null;
}

export default function ContactSection({ contactInfo }: ContactSectionProps) {
  if (!contactInfo || (!contactInfo.emails?.length && !contactInfo.phoneNumbers?.length)) {
    return null;
  }

  const emails = contactInfo.emails || [];
  const phones = contactInfo.phoneNumbers || [];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageCircle className="w-3.5 h-3.5 text-blue-500" />
            <span>Get In Touch</span>
          </div>
          <h2
            className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900"
            style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
          >
            Contact Us
          </h2>
          <p className="mt-4 text-slate-500 text-base sm:text-lg">
            Have questions about the conference? Reach out to our organizing secretariats.
          </p>
        </div>

        {/* Contact Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Email Card */}
          {emails.length > 0 && (
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 rounded-2xl p-8 flex items-start gap-5 hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 group">
              <div className="w-13 h-13 w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-blue-200 group-hover:scale-110 transition-transform duration-200">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Email Desk</h3>
                <div className="space-y-1.5 text-sm">
                  {emails.map((email, idx) => (
                    <div key={idx}>
                      <a
                        href={`mailto:${email}`}
                        className="font-medium text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                      >
                        {email}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Phone Card */}
          {phones.length > 0 && (
            <div className="bg-gradient-to-br from-indigo-50 to-violet-50 border border-indigo-200 rounded-2xl p-8 flex items-start gap-5 hover:shadow-lg hover:shadow-indigo-100 transition-all duration-300 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-indigo-200 group-hover:scale-110 transition-transform duration-200">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Helpline Phone</h3>
                <div className="space-y-1.5 text-sm">
                  {phones.map((phone, idx) => (
                    <div key={idx}>
                      <a
                        href={`tel:${phone}`}
                        className="font-medium text-indigo-600 hover:text-indigo-800 hover:underline transition-colors"
                      >
                        {phone}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
