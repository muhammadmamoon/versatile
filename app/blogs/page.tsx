"use main";
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Calendar, User, ArrowUpRight } from "lucide-react";

export default function BlogsPage() {
  const articles = [
    { slug: "preventing-hvac-failures-riyadh-summer", title: "Preventing Critical HVAC Failures During Riyadh's Summer Peak ", snippet: "Discover the industrial proactive maintenance routines required to ensure optimal chiller load distribution performance.", date: "June 14, 2026", author: "Engineering Desk", category: "HVAC Strategy" },
    { slug: "saudi-vision-2030-sustainable-facilities", title: "Sustainable Facility Infrastructure & Saudi Vision 2030 Transformation ", snippet: "How commercial facility managers are redesigning processes to hit strict economic and carbon footprints targets.", date: "May 28, 2026", author: "Compliance Unit", category: "Compliance Framework" },
    { slug: "importance-of-water-tank-sanitation", title: "The Operational Health Impact of High-Volume Water Tank Sanitation ", snippet: "An in-depth corporate analysis covering biological accumulation hazards across residential building networks.", date: "May 10, 2026", author: "Hygiene Lead", category: "Deep Cleaning" },
  ];

  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-b border-slate-100 pb-12 mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="text-blue-900 font-bold uppercase tracking-wider text-xs">Knowledge Base</span>
            <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-2">Versatile Pro Insights</h1>
          </div>
          <p className="text-slate-500 font-light max-w-md text-sm leading-relaxed">Strategic deep-dives, regulatory compliance frameworks, and infrastructure engineering updates tailored for modern facilities.</p>
        </div>

        {/* Dynamic List Stream Layout */}
        <div className="space-y-12">
          {articles.map((post, idx) => (
            <motion.article key={post.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: idx * 0.15 }} className="group border-b border-slate-100 pb-12 grid lg:grid-cols-12 gap-6 items-start">
              <div className="lg:col-span-3 flex flex-wrap items-center gap-4 text-xs font-medium text-slate-400">
                <span className="bg-slate-100 text-slate-800 font-bold px-3 py-1 rounded text-[10px] uppercase tracking-wider">{post.category}</span>
                <div className="flex items-center space-x-1"><Calendar size={12} /> <span>{post.date}</span></div>
                <div className="flex items-center space-x-1"><User size={12} /> <span>{post.author}</span></div>
              </div>
              
              <div className="lg:col-span-9 flex flex-col justify-between">
                <div>
                  <Link href={`/blogs/${post.slug}`} className="group-hover:text-blue-900 inline-flex items-start justify-between w-full text-slate-900 transition-colors">
                    <h2 className="text-xl md:text-2xl font-bold tracking-tight pr-4">{post.title}</h2>
                    <ArrowUpRight className="text-slate-300 group-hover:text-blue-900 transition-colors shrink-0 mt-1" size={20} />
                  </Link>
                  <p className="text-slate-600 font-light text-sm md:text-base leading-relaxed mt-3 max-w-3xl">{post.snippet}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}