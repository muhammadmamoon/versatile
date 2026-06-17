"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ShieldCheck, Download } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Project Gallery", href: "/gallery" },
    { name: "Corporate Blogs", href: "/blogs" },
    { name: "Contact", href: "/contact" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled || pathname !== "/" ? "bg-slate-900/95 backdrop-blur-md shadow-lg py-4" : "bg-transparent py-6"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-2 text-white font-bold text-xl tracking-wider"
        >
          <ShieldCheck className="text-amber-500 h-7 w-7" />
          <span>VERSATILE PRO</span>
        </Link>

        {/* Desktop Interface Layout */}
        <div className="hidden xl:flex items-center space-x-7">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-xs uppercase font-semibold tracking-wider transition-colors duration-200 ${isActive(link.href) ? "text-amber-500" : "text-slate-200 hover:text-amber-500"}`}
            >
              {link.name}
            </Link>
          ))}

          {/* Dynamic Asset Download Trigger */}
          <a
            href="https://drive.google.com/uc?export=download&id=1uTdL1Cm2PrIg_sVm_dS2e7Vx3B8zup8x"
            className="border border-amber-500/30 hover:border-amber-500 text-amber-500 px-4 py-2 rounded text-xs font-semibold tracking-wide flex items-center space-x-1.5 transition-all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Download size={14} />
            <span>Download Portfolio</span>
          </a>

          <Link
            href="/contact"
            className="bg-amber-500 hover:bg-amber-600 text-slate-950 px-5 py-2.5 rounded text-xs font-bold uppercase tracking-wider transition-all"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Controller Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="xl:hidden text-white hover:text-amber-500 transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Responsive Structural Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-slate-950 border-t border-slate-800 py-6 px-6 shadow-2xl xl:hidden"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm tracking-wide py-2 border-b border-slate-900 transition-colors ${isActive(link.href) ? "text-amber-500 font-semibold" : "text-slate-300"}`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href="/Versatile_Pro_Company_Profile.pdf"
                download
                className="bg-slate-900 text-slate-200 text-center py-3 rounded font-medium text-sm flex items-center justify-center space-x-2 border border-slate-800"
              >
                <Download size={16} className="text-amber-500" />
                <span>Download Portfolio PDF</span>
              </a>
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="bg-amber-500 text-center text-slate-950 py-3 rounded font-bold text-sm tracking-wide"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
