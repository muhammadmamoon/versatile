"use client";

import { motion } from "framer-motion";
import { Wrench, Home, Paintbrush, Building, ShieldAlert, CheckCircle2, Sparkles } from "lucide-react";

export default function Services() {
  const primaryServices = [
    { 
      title: "General Maintenance", 
      desc: "Daily physical upkeep offering cost-effective architectural structural tuning at your doorstep.", 
      icon: Wrench 
    },
    { 
      title: "Villa & Apartment Maintenance", 
      desc: "Scheduled on-call preventative packages for custom emergency residential repairs.", 
      icon: Home 
    },
    { 
      title: "Renovation & Redesign", 
      desc: "Expert physical redesign execution for modern offices, commercial complexes, and luxury residential villas.", 
      icon: Paintbrush 
    },
    { 
      title: "Building Maintenance", 
      desc: "High-tier operational upkeep minimizing disruptions across complex structural configurations.", 
      icon: Building 
    },
    { 
      title: "Professional Cleaning", 
      desc: "Motivated hygiene execution teams enforcing deep structural and environmental sanitation.", 
      icon: Sparkles 
    }
  ];

  const breakdowns = [
    {
      category: "General Services Breakdown",
      items: ["Pest Control", "A/C Repairs & Maintenance", "Corporate Paint Jobs", "Comprehensive Renovations", "Plumbing Audits", "Electrical Configurations", "Landscaping Layouts"]
    },
    {
      category: "Building System Maintenance",
      items: ["HVAC Mechanical Systems", "Fire Alarm & Suppression Safety Systems", "CCTV & Observation Security Networks", "Elevators & Lift Synchronization", "High-Volume Water Heaters & Distribution Pumps"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-900 font-bold uppercase tracking-wider text-xs">Capabilities</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-4">Comprehensive Facility Engineering Solutions</h2>
          <p className="text-slate-600 font-light">Leveraging advanced infrastructure technology to achieve quality operational execution across structural layouts.</p>
        </div>

        {/* Animated Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {primaryServices.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, scale: 0.95 }} 
                whileInView={{ opacity: 1, scale: 1 }} 
                viewport={{ once: true }} 
                whileHover={{ y: -8, scale: 1.02 }} 
                transition={{ type: "spring", stiffness: 300 }} 
                className="bg-white border border-slate-100 p-8 rounded-xl shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="w-12 h-12 bg-blue-900 text-white rounded-lg flex items-center justify-center transition-colors group-hover:bg-amber-500 group-hover:text-slate-950 mb-6">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{svc.title}</h3>
                <p className="text-slate-600 font-light text-sm leading-relaxed">{svc.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Detailed Infrastructure Lists Breakdown */}
        <div className="grid md:grid-cols-2 gap-8">
          {breakdowns.map((b, bIdx) => (
            <motion.div key={bIdx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: bIdx * 0.2 }} className="bg-white border border-slate-200/60 rounded-xl p-8 shadow-sm">
              <h4 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-4 mb-6 flex items-center space-x-2">
                <ShieldAlert className="text-amber-500 h-5 w-5" />
                <span>{b.category}</span>
              </h4>
              <ul className="grid sm:grid-cols-2 gap-3">
                {b.items.map((item, iIdx) => (
                  <li key={iIdx} className="flex items-start space-x-2 text-sm text-slate-600 font-light">
                    <CheckCircle2 className="text-blue-900 h-4 w-4 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}