"use main";
"use client";

import { motion } from "framer-motion";
import { MessageSquare, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden">
      {/* Background Graphic Tint */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-slate-950 to-slate-950 z-0" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white mt-16">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-amber-500 font-semibold tracking-widest text-xs uppercase mb-4">
          Premium Facility Infrastructure Management 
        </motion.p>

        <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6">
          “We Get Things Done.” 
        </motion.h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }} className="text-slate-400 max-w-3xl mx-auto text-base md:text-xl font-light leading-relaxed mb-10">
          Versatile Pro Facility Management delivers reliable, efficient, and innovative facility solutions across Saudi Arabia & UAE.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#contact" className="w-full sm:w-auto bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold px-8 py-4 rounded-md shadow-lg flex items-center justify-center space-x-2 transition-all">
            <span>Get a Quote</span>
            <ArrowRight size={18} />
          </a>
          <a href="https://wa.me/966593597373" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-slate-900 hover:bg-slate-850 text-white border border-slate-800 font-semibold px-8 py-4 rounded-md flex items-center justify-center space-x-2 transition-all">
            <MessageSquare size={18} className="text-emerald-500" />
            <span>WhatsApp Us</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}