"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  TrendingUp,
  Menu,
  X,
  ChevronDown,
  Zap,
} from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/dashboard", label: "Dashboard" },
  {
    label: "Smart Tools",
    dropdown: [
      { href: "/tools/salary-planner", label: "Salary Planner" },
      { href: "/tools/expense-tracker", label: "Expense Tracker" },
      { href: "/tools/sip-calculator", label: "SIP Calculator" },
      { href: "/tools/emergency-fund", label: "Emergency Fund" },
      { href: "/tools/tax-calculator", label: "Tax Calculator" },
      { href: "/tools/goal-planner", label: "Goal Planner" },
      { href: "/tools/ai-budget-coach", label: "AI Budget Coach" },
      { href: "/tools/salary-hike-planner", label: "Hike Planner" },
      { href: "/tools/portfolio-tracker", label: "Portfolio Tracker" },
    ],
  },
  { href: "/education", label: "Knowledge Hub" },
  { href: "/about", label: "About Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [toolsOpen, setToolsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-lg border-b border-slate-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-18">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-110">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <span
                className={`text-lg font-bold tracking-tight ${
                  scrolled ? "text-slate-900" : "text-white"
                }`}
              >
                SmartSalary
                <span className="text-gradient"> Hub</span>
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onMouseEnter={() => setToolsOpen(true)}
                    onMouseLeave={() => setToolsOpen(false)}
                    className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      scrolled
                        ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {link.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                  {toolsOpen && (
                    <div
                      onMouseEnter={() => setToolsOpen(true)}
                      onMouseLeave={() => setToolsOpen(false)}
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-xl shadow-2xl border border-slate-100 py-2 z-50"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2.5 text-sm text-slate-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href!}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    pathname === link.href
                      ? scrolled
                        ? "text-blue-600 bg-blue-50 font-semibold"
                        : "text-white bg-white/20 font-semibold"
                      : scrolled
                      ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                      : "text-white/90 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/auth"
              className={`text-sm font-medium px-4 py-2 rounded-lg transition-all duration-200 ${
                scrolled
                  ? "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              }`}
            >
              Sign In
            </Link>
            <Link
              href="/auth?tab=signup"
              className="flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
            >
              <Zap className="w-4 h-4" />
              Get Started Free
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? "text-slate-700 hover:bg-slate-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2.5 text-sm font-medium text-slate-700 rounded-lg hover:bg-blue-50 hover:text-blue-600"
            >
              Home
            </Link>
            <div className="px-3 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Tools
            </div>
            {navLinks[1].dropdown?.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block pl-6 pr-3 py-2 text-sm text-slate-600 rounded-lg hover:bg-blue-50 hover:text-blue-600"
              >
                {item.label}
              </Link>
            ))}
            {[
              { href: "/solutions", label: "Solutions" },
              { href: "/innovation", label: "Innovation" },
              { href: "/about", label: "About" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2.5 text-sm font-medium text-slate-700 rounded-lg hover:bg-blue-50 hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/auth"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-center text-sm font-medium text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-50"
              >
                Sign In
              </Link>
              <Link
                href="/auth?tab=signup"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2.5 text-center text-sm font-semibold text-white gradient-primary rounded-xl"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
