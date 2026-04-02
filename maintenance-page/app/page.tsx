import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);

const Twitter = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const Whatsapp = ({ size = 24 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
);

const MaintenancePage = () => {
  // Brand Color Constants
  const brandIndigo = "#4B2489";
  
  return (
    <div className="min-h-screen bg-[#F8F9FF] flex flex-col items-center justify-center p-6 text-center font-sans">
      
      {/* 1. Logo Section */}
      <div className="mb-12">
        {/* Replace 'logo.png' with your actual logo file path */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src="/logo.png" 
          alt="MIGHT International Education Planet" 
          className="h-24 md:h-32 w-auto object-contain mx-auto"
        />
      </div>

      {/* 2. Main Content */}
      <div className="max-w-2xl">
        <h1 
          className="text-3xl md:text-5xl font-extrabold tracking-tight mb-6 uppercase font-heading"
          style={{ color: brandIndigo }}
        >
          Our Site is Under Maintenance
        </h1>
        
        <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8">
          We are currently performing scheduled updates to improve your experience. 
          We appreciate your patience and will be back online shortly.
        </p>

        {/* Expected Uptime Box */}
        <div className="inline-block px-6 py-3 bg-white border border-slate-200 rounded-full shadow-sm mb-10">
          <p className="text-slate-700 font-medium">
            Expected uptime: <span className="font-bold">5 days</span>
          </p>
        </div>

        <div className="mb-12">
          <p className="text-slate-600 mb-4">For immediate assistance, please contact us:</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="mailto:sancnepal@gmail.com" 
              className="inline-flex items-center gap-2 font-semibold underline decoration-2 underline-offset-4 transition-colors hover:text-indigo-700"
              style={{ color: brandIndigo }}
            >
              <Mail size={18} />
              email support
            </a>
            <span className="hidden sm:inline text-slate-300">|</span>
            <a 
              href="tel:+9779808541753" 
              className="inline-flex items-center gap-2 font-semibold underline decoration-2 underline-offset-4 transition-colors hover:text-indigo-700"
              style={{ color: brandIndigo }}
            >
              <Phone size={18} />
              +977 9808541753
            </a>
          </div>
        </div>
      </div>

      {/* 3. Footer & Socials */}
      <footer className="mt-auto pt-12">
        <div className="flex justify-center gap-6 mb-6">
          <a href="https://www.facebook.com/mightint" className="text-slate-400 hover:text-[#4B2489] transition-colors">
            <Facebook size={24} />
          </a>
          <a href="https://wa.me/9779808541753" className="text-slate-400 hover:text-[#4B2489] transition-colors">
            <Whatsapp size={24} />
          </a>
        </div>
        <div className="text-slate-400 text-sm space-y-1">
          <p>© {new Date().getFullYear()} MIGHT International Education Planet. All rights reserved.</p>
          <p className="opacity-80">
            Built and Maintained by <span className="font-semibold text-slate-500">Pi Innovations</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MaintenancePage;