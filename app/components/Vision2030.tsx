"use main";
"use client";

import { motion } from "framer-motion";
import { Leaf, Cpu, Landmark } from "lucide-react";

export default function Vision2030() {
  const pillars = [
    { title: "Economic Diversification", desc: "Supporting local structural transformations with elite property infrastructure standards.", icon: Landmark },
    { title: "Sustainable Development", desc: "Utilizing green operational frameworks to improve system performance and efficiency.", icon: Leaf },
    { title: "Advanced Automation", desc: "Integrating clean modern technology into building maintenance protocols.", icon: Cpu }
  ];

  return (
    <section id="vision" className="py-24 bg-gradient-to-br from-slate-900 to-slate-950 text-white overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-amber-500 font-semibold tracking-widest text-xs uppercase">Strategic Benchmark Alignment</span>
          <h2 className="text-3xl md:text-4xl font-extrabold mt-2 mb-4">Aligned with Saudi Vision 2030 </h2>
          <p className="text-slate-400 font-light text-sm md:text-base">
            We are proud to support and align with Saudi Arabia's Vision 2030, contributing to the Kingdom's ambitious goals for economic diversification and sustainable development.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((p, idx) => {
            const Icon = p.icon;
            return (
              <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: idx * 0.2 }} className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 p-8 rounded-xl text-center">
                <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                <p className="text-slate-400 font-light text-xs md:text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}