"use main";
"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, AlertCircle, CheckCircle } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "General Maintenance", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Web3Forms API Submission Payload
    const payload = {
      // ⚠️ APNA ACCESS KEY IDHAR PASTE KAREIN
      access_key: "9cb30996-d906-412a-bf3a-88c37d0eaeab", 
      subject: `New B2B Lead: ${form.service} - ${form.name}`,
      from_name: "Versatile Pro Web Portal",
      ...form
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        // Form fields ko clear karna
        setForm({ name: "", email: "", phone: "", service: "General Maintenance", message: "" });
      } else {
        setStatus("error");
        console.error("Web3Forms Error:", result);
      }
    } catch (error) {
      setStatus("error");
      console.error("Submission Network Error:", error);
    }
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Information Block Column */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-5 lg:sticky lg:top-28">
            <span className="text-blue-900 font-bold uppercase tracking-wider text-xs">Connect</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mt-2 mb-6">Let's Discuss Your Custom Facility Plan</h2>
            <p className="text-slate-600 font-light mb-8">Whether you have questions, require an accurate system quote, or want to explore customized facility ecosystem blueprints, our engineering team is ready to assist.</p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-blue-900 shrink-0"><Phone size={18} /></div>
                <div><p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Phone Contact</p><a href="tel:+966593597373" className="text-slate-800 text-sm font-medium hover:text-amber-500 transition-colors">+966 59 3597373</a></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-blue-900 shrink-0"><Mail size={18} /></div>
                <div><p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Email Dispatch</p><a href="mailto:Ibrahim.minhas@hotmail.com" className="text-slate-800 text-sm font-medium hover:text-amber-500 transition-colors">Ibrahim.minhas@hotmail.com</a></div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-11 h-11 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center text-blue-900 shrink-0"><MapPin size={18} /></div>
                <div><p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Regional HQ Address</p><p className="text-slate-800 text-sm font-medium leading-relaxed">Suite 204, Uthman Ibn Affan Road, Al Wahah, Riyadh, Saudi Arabia</p></div>
              </div>
            </div>
          </motion.div>

          {/* Functional Web3Forms Form Column */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="lg:col-span-7 bg-slate-50 border border-slate-100 p-8 rounded-2xl shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Name</label><input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-slate-900" /></div>
                <div><label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Email Address</label><input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-slate-900" /></div>
              </div>
              <div className="grid sm:grid-cols-2 gap-5">
                <div><label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Phone</label><input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-slate-900" /></div>
                <div>
                  <label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Service Portfolio Track</label>
                  <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-slate-900">
                    <option>General Maintenance</option>
                    <option>Villa & Apartment Maintenance</option>
                    <option>Renovation & Redesign</option>
                    <option>Building Maintenance</option>
                    <option>Professional Cleaning</option>
                  </select>
                </div>
              </div>
              <div><label className="block text-xs font-semibold text-slate-700 uppercase mb-2">Requirements Message</label><textarea rows={4} required value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 transition-all text-slate-900 resize-none" /></div>
              
              <button type="submit" disabled={status === "sending"} className="w-full bg-blue-900 hover:bg-blue-950 disabled:bg-slate-400 text-white font-semibold py-4 rounded-lg flex items-center justify-center space-x-2 shadow-md transition-colors">
                <Send size={16} />
                <span>
                  {status === "idle" && "Submit Proposal Request"}
                  {status === "sending" && "Sending Message..."}
                  {status === "success" && "Message Sent Successfully!"}
                  {status === "error" && "Error! Try Again."}
                </span>
              </button>

              {/* Success Notification Alert */}
              {status === "success" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-sm flex items-center space-x-2">
                  <CheckCircle size={18} className="shrink-0 text-emerald-600" />
                  <span>Thank you! Your facility query has been successfully transmitted to Ibrahim Minhas.</span>
                </motion.div>
              )}

              {/* Error Notification Alert */}
              {status === "error" && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800 text-sm flex items-center space-x-2">
                  <AlertCircle size={18} className="shrink-0 text-red-600" />
                  <span>Submission failed. Please verify your internet connection or check the configuration key.</span>
                </motion.div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}