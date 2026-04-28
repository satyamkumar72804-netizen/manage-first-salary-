"use client";

import Link from "next/link";
import { ArrowRight, PlayCircle, TrendingUp, Shield, Target, Sparkles, CheckCircle2, DollarSign } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-[#F8FAFC] flex items-center overflow-hidden pt-20">
      {/* Background Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/50 rounded-full blur-[100px] -mr-64 -mt-64"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-100/50 rounded-full blur-[100px] -ml-64 -mb-64"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              India&apos;s Most Trusted Fintech for Freshers
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-[#0F172A] leading-[1.1] mb-6">
              Smart Planning for <br />
              <span className="text-[#2563EB]">First Job</span> Employees.
            </h1>

            <p className="text-[#475569] text-xl leading-relaxed mb-10 max-w-lg font-medium">
              Manage your salary like a pro. Build savings, avoid debt, and 
              start investing with India&apos;s first smart budget cockpit.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <Link
                href="/auth?tab=signup"
                className="btn-primary py-4 px-8 text-lg"
              >
                Get Started Free
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/education"
                className="btn-secondary bg-white text-slate-900 border-slate-200 hover:bg-slate-50 py-4 px-8 text-lg"
              >
                <PlayCircle className="w-5 h-5 text-blue-600" />
                Knowledge Hub
              </Link>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-[10px] font-bold">
                    U{i}
                  </div>
                ))}
              </div>
              <p className="text-sm text-slate-500 font-semibold">
                <span className="text-slate-900 font-bold">10,000+</span> young professionals trust us
              </p>
            </div>
          </div>

          {/* Right Preview */}
          <div className="relative animate-fade-in hidden lg:block">
            <div className="bg-white rounded-[2.5rem] p-8 shadow-[0_32px_64px_-16px_rgba(15,23,42,0.1)] border border-slate-100 relative z-20">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="font-black text-2xl text-slate-900">Salary Cockpit</h3>
                  <p className="text-slate-500 text-sm font-bold">APRIL 2025</p>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                  <DollarSign className="w-6 h-6 text-white" />
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-slate-50 p-5 rounded-2xl">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-500 font-bold text-sm">MONTHLY SALARY</span>
                    <span className="text-slate-900 font-black text-lg">₹45,000</span>
                  </div>
                  <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-[70%] rounded-full"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl border border-slate-100 bg-blue-50/50">
                    <p className="text-blue-600 text-[10px] font-black uppercase mb-1">Savings</p>
                    <p className="text-slate-900 font-black text-xl">₹9,000</p>
                  </div>
                  <div className="p-4 rounded-2xl border border-slate-100 bg-emerald-50/50">
                    <p className="text-emerald-600 text-[10px] font-black uppercase mb-1">Growth</p>
                    <p className="text-slate-900 font-black text-xl">12.4%</p>
                  </div>
                </div>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm text-slate-600 font-medium">Emergency Fund: <span className="text-slate-900 font-bold">Active</span></span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                    <span className="text-sm text-slate-600 font-medium">Tax Planning: <span className="text-slate-900 font-bold">Optimized</span></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-600/5 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-emerald-600/5 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
