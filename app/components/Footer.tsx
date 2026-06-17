"use main";
"use client";

import { ShieldCheck, MessageSquare,  ShieldAlert } from "lucide-react";
import { FaLinkedinIn ,FaFacebookF,FaInstagram} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8 mb-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-2 text-white font-bold tracking-wider">
            <ShieldCheck className="text-amber-500 h-6 w-6" />
            <span>VERSATILE PRO</span>
          </div>
          <p className="text-xs font-light leading-relaxed">Setting the absolute operational standard for facility management solutions across the GCC network region.</p>
        </div>
        <div>
          <h5 className="text-white text-xs font-semibold tracking-wider uppercase mb-4">Navigation</h5>
          <div className="flex flex-col space-y-2 text-sm font-light">
            <a href="#home" className="hover:text-amber-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-amber-500 transition-colors">About Story</a>
            <a href="#services" className="hover:text-amber-500 transition-colors">Services</a>
            <a href="#vision" className="hover:text-amber-500 transition-colors">Vision 2030 Alignment</a>
          </div>
        </div>
        <div>
          <h5 className="text-white text-xs font-semibold tracking-wider uppercase mb-4">Compliance Registrations</h5>
          <div className="flex items-center space-x-2 text-sm font-light text-slate-300">
            <ShieldAlert className="text-amber-500 h-4 w-4 shrink-0" />
            <span>CR No. 1009179193</span>
          </div>
        </div>
        <div>
          <h5 className="text-white text-xs font-semibold tracking-wider uppercase mb-4">Social Interface Channels</h5>
          <div className="flex items-center space-x-4 text-slate-300">
            <a href="https://wa.me/966593597373" target="_blank" rel="noopener noreferrer" className="hover:text-emerald-500 transition-colors"><MessageSquare size={18} /></a>
            <a href="#" className="hover:text-blue-500 transition-colors"><FaLinkedinIn size={18} /></a>
            <a href="#" className="hover:text-amber-500 transition-colors"><FaInstagram size={18} /></a>
            <a href="#" className="hover:text-amber-500 transition-colors"><FaFacebookF  size={18} /></a>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 border-t border-slate-900 pt-8 text-center text-xs font-light">
        <p>&copy; {new Date().getFullYear()} Versatile Pro Facility Management. All Rights Reserved.</p>
      </div>
    </footer>
  );
}