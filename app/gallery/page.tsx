"use main";
"use client";

import { useState } from "react";
import { motion, LayoutGroup } from "framer-motion";
import { Hammer, Building2, Droplet, Sparkles } from "lucide-react";

export default function GalleryPage() {
  const categories = ["All Projects", "Building Maintenance", "Renovations", "Deep Cleaning"];
  const [activeTab, setActiveTab] = useState("All Projects");

  const projects = [
    { id: 1, title: "Commercial HVAC Overhaul", category: "Building Maintenance", location: "Riyadh District", desc: "Complex industrial chilling tower restoration.", icon: Building2 },
    { id: 2, title: "Executive Office Partitioning", category: "Renovations", location: "Al Wahah Complex", desc: "Sleek glass structural partitioning installations.", icon: Hammer },
    { id: 3, title: "High-Rise Window Remediation", category: "Deep Cleaning", location: "Dubai Marina Tower", desc: "Rigorous high-altitude safety exterior polish.", icon: Sparkles },
    { id: 4, title: "Hydraulic Pump Synchronization", category: "Building Maintenance", location: "Riyadh Logistics Center", desc: "Industrial dual-distribution plumbing configurations.", icon: Droplet },
    { id: 5, title: "Luxury Villa Marble Refinement", category: "Deep Cleaning", location: "Palm Jumeirah", desc: "Diamond-grit marble polishing execution.", icon: Sparkles },
    { id: 6, title: "Corporate Facility Redesign", category: "Renovations", location: "Olaya Business Hub", desc: "Full architectural interior remodeling execution.", icon: Hammer },
  ];

  const filteredProjects = activeTab === "All Projects" ? projects : projects.filter(p => p.category === activeTab);

  return (
    <section className="pt-32 pb-24 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-blue-900 font-bold uppercase tracking-wider text-xs">Visual Portfolios</span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2 mb-4">Our Projects In Action</h1>
          <p className="text-slate-600 font-light text-sm md:text-base">Explore our structural and technical maintenance executions delivered across Saudi Arabia and the UAE.</p>
        </div>

        {/* Dynamic Category Filtering Control Elements */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((tab) => (
            <button key={tab} onClick={() => setActiveTab(tab)} className={`px-5 py-2.5 rounded-full text-xs font-semibold tracking-wide border transition-all ${activeTab === tab ? "bg-blue-900 text-white border-blue-900 shadow-md" : "bg-white text-slate-600 border-slate-200/80 hover:bg-slate-100"}`}>
              {tab}
            </button>
          ))}
        </div>

        {/* Animated Grid Container */}
        <LayoutGroup>
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => {
              const IconComp = project.icon;
              return (
                <motion.div layout id={`proj-${project.id}`} key={project.id} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.4 }} className="bg-white border border-slate-200/60 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group flex flex-col justify-between">
                  {/* Visual Context Placeholder Wrapper */}
                  <div className="bg-slate-900 p-8 h-48 flex flex-col justify-between relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-950 to-slate-950 opacity-90" />
                    <div className="relative z-10 bg-white/10 text-amber-500 w-10 h-10 rounded flex items-center justify-center"><IconComp size={20} /></div>
                    <span className="relative z-10 text-[10px] font-bold tracking-widest text-slate-400 uppercase bg-slate-900/60 px-2.5 py-1 rounded w-fit">{project.location}</span>
                  </div>
                  
                  <div className="p-6">
                    <span className="text-blue-900 text-[11px] uppercase font-bold tracking-wider">{project.category}</span>
                    <h3 className="text-lg font-bold text-slate-900 mt-1 mb-2">{project.title}</h3>
                    <p className="text-slate-500 font-light text-xs md:text-sm leading-relaxed">{project.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </LayoutGroup>
      </div>
    </section>
  );
}