"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock, ShieldCheck } from "lucide-react";

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params?.slug;

  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    // LocalStorage se active blogs array read karna
    const savedBlogs = localStorage.getItem("vpro_blogs");
    if (savedBlogs) {
      const blogsArray = JSON.parse(savedBlogs);
      
      // Slug match karke exact post find karna
      const foundPost = blogsArray.find((b: any) => {
        const currentSlug = b.slug || b.title.toLowerCase().replace(/[^a-z0-9]+/g, "-");
        return currentSlug === slug;
      });

      if (foundPost) {
        setPost(foundPost);
      }
    }
    setLoading(false);
  }, [slug]);

  // Loading State UI
  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <p className="text-slate-500 animate-pulse text-sm font-medium">Loading Article Details...</p>
      </div>
    );
  }

  // Error State UI (Agar post nahi milti)
  if (!post) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center px-6 pt-32">
        <h2 className="text-2xl font-bold text-slate-800 mb-2">Article Not Found</h2>
        <p className="text-slate-500 text-sm mb-6">Yeh blog post ya to delete ho chuki hai ya phir URL path galat hai.</p>
        <Link href="/blogs" className="bg-blue-900 text-white px-5 py-2.5 rounded-lg text-sm font-semibold flex items-center space-x-2 hover:bg-blue-950 transition-all">
          <ArrowLeft size={16} />
          <span>Back to Blogs</span>
        </Link>
      </div>
    );
  }

  return (
    <section className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Back Link Button */}
        <Link href="/blogs" className="inline-flex items-center space-x-2 text-sm font-medium text-slate-500 hover:text-blue-900 mb-8 transition-colors group">
          <ArrowLeft size={16} className="transform group-hover:-translate-x-1 transition-transform" />
          <span>Back to Insights Hub</span>
        </Link>

        {/* Dynamic Article Meta Header */}
        <div className="space-y-4 mb-8">
          <span className="bg-blue-900/10 text-blue-950 font-bold px-3 py-1 rounded text-[10px] uppercase tracking-wider">
            {post.category || "Facility Insight"}
          </span>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {post.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-400 border-b border-slate-100 pb-6 pt-2">
            <div className="flex items-center space-x-1.5">
              <Calendar size={14} />
              <span>{post.date || "June 17, 2026"}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <User size={14} />
              <span>{post.author || "Admin Desk"}</span>
            </div>
            <div className="flex items-center space-x-1.5">
              <Clock size={14} />
              <span>5 Min Read</span>
            </div>
          </div>
        </div>

        {/* Article Core Body Layout */}
        <div className="text-slate-700 font-light text-base md:text-lg leading-relaxed space-y-6">
          
          {/* Dynamic Admin Snippet Short Text */}
          <p className="font-medium text-slate-900 border-l-4 border-amber-500 pl-4 italic bg-slate-50 py-3 pr-2 rounded-r-lg">
            {post.snippet}
          </p>
          
          {/* Static Professional Deep Contents for Better Corporate Look */}
          <p className="pt-2">
            Facilities engineering management stands as a critical checkpoint for large-scale operations across the Gulf Cooperation Council (GCC) zones, especially during seasonal thermal peaks. When dealing with extreme external temperatures exceeding 45°C in regions like Riyadh, HVAC systems bear double the standard operational layout threshold load.
          </p>
          
          <h3 className="text-xl font-bold text-slate-900 pt-4">1. Proactive Dynamic Inspections</h3>
          <p>
            Relying heavily on reactive maintenance mechanics causes immense systematic breakdowns. Technical teams must ensure quarterly calibration cycles across hydraulic compressors, cooling fins, and dynamic airflow pathways to mitigate system shutdowns before they manifest.
          </p>

          <h3 className="text-xl font-bold text-slate-900 pt-4">2. Clean Filters and Energy Optimization</h3>
          <p>
            Particulate accumulation increases baseline power draw thresholds by almost 22%. Systematic pressure testing and swift mechanical purges ensure seamless building operational performance, aligning seamlessly with modern infrastructural sustainability compliance metrics under Saudi Vision 2030 guidelines.
          </p>

          {/* Trust Banner Inside Article */}
          <div className="mt-12 bg-slate-50 border border-slate-100 rounded-xl p-6 flex items-start space-x-4">
            <ShieldCheck className="text-amber-500 h-6 w-6 mt-0.5 shrink-0" />
            <div>
              <h4 className="font-bold text-slate-900 text-sm">Versatile Pro Corporate Guarantee</h4>
              <p className="text-slate-500 text-xs md:text-sm font-light mt-1">
                Our premium engineering calibration protocols reduce breakdowns in your high-end commercial HVAC systems by up to 35%. Contact us today for custom facility engineering audits.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}