"use client";

import { useState } from "react";
import { Plus, Trash2, Edit3, FileText, Wrench, LayoutDashboard, Check, X } from "lucide-react";

// Mock Data Initial States
const initialServices = [
  { id: "1", title: "General Maintenance", desc: "Daily physical upkeep and cost-effective structural tuning." },
  { id: "2", title: "Building Maintenance", desc: "High-tier operational upkeep minimizing disruptions." }
];

const initialBlogs = [
  { id: "1", title: "Preventing HVAC Failures", category: "HVAC Strategy", snippet: "Discover proactive maintenance routines for summer peak." }
];

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"services" | "blogs">("services");
  
  // States for CRUD
  const [services, setServices] = useState(initialServices);
  const [blogs, setBlogs] = useState(initialBlogs);

  // Form States
  const [serviceForm, setServiceForm] = useState({ id: "", title: "", desc: "" });
  const [blogForm, setBlogForm] = useState({ id: "", title: "", category: "", snippet: "" });
  const [isEditing, setIsEditing] = useState(false);

  // --- SERVICE CRUD HANDLERS ---
  const handleServiceSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      setServices(services.map(s => s.id === serviceForm.id ? serviceForm : s));
      setIsEditing(false);
    } else {
      setServices([...services, { ...serviceForm, id: Date.now().toString() }]);
    }
    setServiceForm({ id: "", title: "", desc: "" });
  };

  const handleServiceEdit = (item: typeof initialServices[0]) => {
    setServiceForm(item);
    setIsEditing(true);
  };

  const handleServiceDelete = (id: string) => {
    setServices(services.filter(s => s.id !== id));
  };

  // --- BLOG CRUD HANDLERS ---
  const handleBlogSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isEditing) {
      setBlogs(blogs.map(b => b.id === blogForm.id ? blogForm : b));
      setIsEditing(false);
    } else {
      setBlogs([...blogs, { ...blogForm, id: Date.now().toString() }]);
    }
    setBlogForm({ id: "", title: "", category: "", snippet: "" });
  };

  const handleBlogEdit = (item: typeof initialBlogs[0]) => {
    setBlogForm(item);
    setIsEditing(true);
  };

  const handleBlogDelete = (id: string) => {
    setBlogs(blogs.filter(b => b.id !== id));
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-100 flex flex-col md:flex-row pt-20">
      
      {/* Sidebar Navigation */}
      <aside className="w-full md:w-64 bg-slate-950 p-6 flex flex-col space-y-6 border-r border-slate-800">
        <div className="flex items-center space-x-2 text-amber-500 font-bold text-lg tracking-wider">
          <LayoutDashboard size={22} />
          <span>V-PRO ADMIN</span>
        </div>
        
        <nav className="flex flex-col space-y-2">
          <button 
            onClick={() => { setActiveTab("services"); setIsEditing(false); }}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === "services" ? "bg-blue-900 text-white shadow-md" : "text-slate-400 hover:bg-slate-900 hover:text-white"}`}
          >
            <Wrench size={18} />
            <span>Manage Services</span>
          </button>
          
          <button 
            onClick={() => { setActiveTab("blogs"); setIsEditing(false); }}
            className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${activeTab === "blogs" ? "bg-blue-900 text-white shadow-md" : "text-slate-400 hover:bg-slate-900 hover:text-white"}`}
          >
            <FileText size={18} />
            <span>Manage Blogs</span>
          </button>
        </nav>
      </aside>

      {/* Main Content Workspace */}
      <main className="flex-1 p-6 md:p-10 max-w-7xl mx-auto w-full">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-extrabold capitalize tracking-tight">
            {activeTab === "services" ? "Services Control Desk" : "Corporate Insights Editor"}
          </h1>
          <p className="text-xs md:text-sm text-slate-400 mt-1">Website data ko real-time upload, update ya delete karein.</p>
        </header>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Dynamic Form Layout */}
          <section className="lg:col-span-5 bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-xl">
            <h2 className="text-lg font-bold mb-4 text-amber-500 flex items-center space-x-2">
              <Plus size={18} />
              <span>{isEditing ? "Update Existing Entry" : "Create New Entry"}</span>
            </h2>

            {activeTab === "services" ? (
              <form onSubmit={handleServiceSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Service Title</label>
                  <input type="text" required value={serviceForm.title} onChange={(e) => setServiceForm({ ...serviceForm, title: e.target.value })} className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 text-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Description</label>
                  <textarea rows={4} required value={serviceForm.desc} onChange={(e) => setServiceForm({ ...serviceForm, desc: e.target.value })} className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 text-white resize-none" />
                </div>
                <div className="flex space-x-2">
                  <button type="submit" className="flex-1 bg-blue-900 hover:bg-blue-950 text-white font-semibold py-2.5 rounded-lg text-sm flex items-center justify-center space-x-2 transition-all">
                    <Check size={16} />
                    <span>{isEditing ? "Save Updates" : "Upload Service"}</span>
                  </button>
                  {isEditing && (
                    <button type="button" onClick={() => { setIsEditing(false); setServiceForm({ id: "", title: "", desc: "" }); }} className="bg-slate-800 hover:bg-slate-700 text-white px-4 rounded-lg"><X size={16} /></button>
                  )}
                </div>
              </form>
            ) : (
              <form onSubmit={handleBlogSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Blog Title</label>
                  <input type="text" required value={blogForm.title} onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })} className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 text-white" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Category</label>
                  <input type="text" required value={blogForm.category} onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })} className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 text-white" placeholder="e.g. HVAC, Compliance" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-slate-400 uppercase mb-2">Short Snippet</label>
                  <textarea rows={3} required value={blogForm.snippet} onChange={(e) => setBlogForm({ ...blogForm, snippet: e.target.value })} className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-900 text-white resize-none" />
                </div>
                <div className="flex space-x-2">
                  <button type="submit" className="flex-1 bg-blue-900 hover:bg-blue-950 text-white font-semibold py-2.5 rounded-lg text-sm flex items-center justify-center space-x-2 transition-all">
                    <Check size={16} />
                    <span>{isEditing ? "Save Updates" : "Publish Post"}</span>
                  </button>
                  {isEditing && (
                    <button type="button" onClick={() => { setIsEditing(false); setBlogForm({ id: "", title: "", category: "", snippet: "" }); }} className="bg-slate-800 hover:bg-slate-700 text-white px-4 rounded-lg"><X size={16} /></button>
                  )}
                </div>
              </form>
            )}
          </section>

          {/* Data Records View List */}
          <section className="lg:col-span-7 bg-slate-950 p-6 rounded-xl border border-slate-800 shadow-xl overflow-hidden">
            <h2 className="text-lg font-bold mb-4 text-slate-200">Active Records Data Stream</h2>
            
            <div className="space-y-4">
              {activeTab === "services" ? (
                services.length === 0 ? <p className="text-sm text-slate-500">No services active.</p> :
                services.map((svc) => (
                  <div key={svc.id} className="flex items-start justify-between p-4 bg-slate-900/60 border border-slate-800/80 rounded-lg">
                    <div className="pr-4">
                      <h3 className="text-sm font-bold text-slate-200">{svc.title}</h3>
                      <p className="text-xs text-slate-400 font-light mt-1 line-clamp-2">{svc.desc}</p>
                    </div>
                    <div className="flex space-x-2 shrink-0">
                      <button onClick={() => handleServiceEdit(svc)} className="p-2 bg-blue-900/40 text-blue-400 hover:bg-blue-900/60 rounded-md transition-colors"><Edit3 size={14} /></button>
                      <button onClick={() => handleServiceDelete(svc.id)} className="p-2 bg-red-900/40 text-red-400 hover:bg-red-900/60 rounded-md transition-colors"><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))
              ) : (
                blogs.length === 0 ? <p className="text-sm text-slate-500">No blog articles published.</p> :
                blogs.map((bg) => (
                  <div key={bg.id} className="flex items-start justify-between p-4 bg-slate-900/60 border border-slate-800/80 rounded-lg">
                    <div className="pr-4">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-sm font-bold text-slate-200">{bg.title}</h3>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-800 px-2 py-0.5 rounded text-amber-500">{bg.category}</span>
                      </div>
                      <p className="text-xs text-slate-400 font-light mt-1 line-clamp-2">{bg.snippet}</p>
                    </div>
                    <div className="flex space-x-2 shrink-0">
                      <button onClick={() => handleBlogEdit(bg)} className="p-2 bg-blue-900/40 text-blue-400 hover:bg-blue-900/60 rounded-md transition-colors"><Edit3 size={14} /></button>
                      <button onClick={() => handleBlogDelete(bg.id)} className="p-2 bg-red-900/40 text-red-400 hover:bg-red-900/60 rounded-md transition-colors"><Trash2 size={14} /></button>
                    </div>
                  </div>
                ))
              )}
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}