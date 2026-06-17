"use main";
"use client";

import { motion } from "framer-motion";
import { Eye, Target, Award, UserCheck } from "lucide-react";

export default function About() {
  const cards = [
    { title: "Our Mission", text: "To create clean, safe, and well-maintained environments that cater to the ever-evolving needs of modern facilities across both regions.", icon: Eye },
    { title: "Our Objectives", text: "Provide exceptional management solutions that enhance functionality, safety, and sustainability while exceeding client expectations via advanced technology.", icon: Target },
    { title: "Our Values", text: "Excellence, systematic customer focus, and operational collaboration are built directly into our day-to-day execution framework.", icon: Award },
  ];

  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center mb-20">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7">
            <span className="text-blue-900 font-bold uppercase tracking-wider text-xs">Corporate Overview</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-6">Decade of Excellence Expanding Into Saudi Arabia</h2>
            <p className="text-slate-600 font-light leading-relaxed mb-4">
              Versatile Pro Facility Management is a Dubai-based company that has been proudly offering comprehensive facility management solutions for a decade. As we expand our services to the Kingdom of Saudi Arabia, we remain committed to delivering efficient and reliable solutions, setting a benchmark for quality and innovation.
            </p>
            <p className="text-slate-600 font-light leading-relaxed">
              With a strong focus on customer satisfaction, we leverage advanced technology and industry expertise to ensure seamless execution and exceptional results for structural ecosystems.
            </p>
          </motion.div>
          
          {/* Founder Feature Spotlight */}
          <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-xl text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl" />
            <UserCheck className="text-amber-500 mb-6 h-10 w-10" />
            <h3 className="text-xl font-bold mb-1">Ibrahim Minhas</h3>
            <p className="text-amber-500 text-sm font-medium uppercase tracking-wider mb-4">Founder & Visionary Leader</p>
            <p className="text-slate-400 font-light text-sm leading-relaxed">
              At the core of Versatile Pro is Ibrahim Minhas, whose distinguished career spanning many years across large-scale commercial and industrial projects ensures top-tier operational execution.
            </p>
          </motion.div>
        </div>

        {/* Strategy Pillars Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => {
            const Icon = card.icon;
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.2 }} className="bg-slate-50 border border-slate-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-blue-900/10 rounded-lg flex items-center justify-center text-blue-900 mb-6">
                  <Icon size={24} />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-3">{card.title}</h4>
                <p className="text-slate-600 font-light text-sm leading-relaxed">{card.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}