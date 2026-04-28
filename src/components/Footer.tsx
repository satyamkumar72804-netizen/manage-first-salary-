import Link from "next/link";
import {
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  Share2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center shadow-lg">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-bold">SmartSalary Hub</span>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Apni First Salary Se Smart Future Banao. India ka #1 financial
              planning platform for first-job employees and freshers.
            </p>
            <div className="flex gap-3">
              {[
                { label: "TW", href: "#" },
                { label: "LI", href: "#" },
                { label: "IG", href: "#" },
                { label: "GH", href: "#" },
              ].map(({ label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-9 h-9 bg-slate-800 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors duration-200 text-xs font-bold text-slate-400 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Smart Tools
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Salary Planner", href: "/tools/salary-planner" },
                { label: "Expense Tracker", href: "/tools/expense-tracker" },
                { label: "SIP Calculator", href: "/tools/sip-calculator" },
                { label: "Emergency Fund", href: "/tools/emergency-fund" },
                { label: "Tax Calculator", href: "/tools/tax-calculator" },
                { label: "Goal Planner", href: "/tools/goal-planner" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-emerald-400 text-sm flex items-center gap-1.5 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", href: "/" },
                { label: "Solutions", href: "/solutions" },
                { label: "Innovation", href: "/innovation" },
                { label: "About Team", href: "/about" },
                { label: "Contact Us", href: "/contact" },
                { label: "Sign In / Sign Up", href: "/auth" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-slate-400 hover:text-blue-400 text-sm flex items-center gap-1.5 transition-colors group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm">
                  Computer Science Department,
                  <br />
                  Your College Name, City, State
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="mailto:hello@smartsalaryhub.in"
                  className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                >
                  hello@smartsalaryhub.in
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href="tel:+91747984212"
                  className="text-slate-400 hover:text-blue-400 text-sm transition-colors"
                >
                  +91 747984212
                </a>
              </li>
            </ul>
            <div className="mt-5 p-3 bg-slate-800 rounded-xl">
              <p className="text-xs text-slate-400 mb-1">
                🎓 Final Year Project
              </p>
              <p className="text-xs text-slate-300 font-medium">
                Financial Planning for First Job Employees
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-center md:text-left">
              <p className="text-slate-500 text-sm mb-1">© 2025 SmartSalary Hub. All rights reserved.</p>
              <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">
                NIET BUSINESS SCHOOL • B.TECH FIRST YEAR • ECE
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.2em] mb-3">Created By</p>
              <div className="flex flex-wrap justify-center md:justify-end gap-x-4 gap-y-2">
                {["Pransant Kr Gupta", "Skand Sharma", "Sunny Kr Patel", "Ramesh Kr"].map((name) => (
                  <span key={name} className="bg-blue-600/10 text-blue-400 px-3 py-1 rounded-lg text-sm font-black border border-blue-500/20">{name}</span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-800/30 flex justify-center gap-8">
            <span className="text-slate-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              Trust
            </span>
            <span className="text-slate-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              <span className="w-1 h-1 bg-emerald-500 rounded-full"></span>
              Growth
            </span>
            <span className="text-slate-600 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              <span className="w-1 h-1 bg-blue-500 rounded-full"></span>
              Security
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
