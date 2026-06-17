    "use main";
"use client";

import { motion } from "framer-motion";
import { PhoneCall } from "lucide-react";

export default function FloatingWA() {
  return (
    <motion.a href="https://wa.me/966593597373" target="_blank" rel="noopener noreferrer" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ delay: 1.5, type: "spring" }} whileHover={{ scale: 1.1 }} className="fixed bottom-6 right-6 z-50 bg-emerald-500 text-white p-4 rounded-full shadow-2xl hover:bg-emerald-600 transition-colors flex items-center justify-center group" aria-label="Chat via WhatsApp">
      <PhoneCall size={22} className="animate-pulse" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs font-semibold transition-all duration-350 group-hover:max-w-xs group-hover:ml-2">WhatsApp Emergency Desk</span>
    </motion.a>
  );
}