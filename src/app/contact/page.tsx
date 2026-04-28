"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import InquiryForm from "@/components/InquiryForm";
import { Mail, Phone, MessageSquare, GraduationCap, Users } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2563EB] px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <MessageSquare className="w-4 h-4" />
              Get In Touch
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-[#0F172A] mb-4 leading-tight">
              Let&apos;s talk about <br /> your <span className="text-[#2563EB]">Financial Journey</span>.
            </h1>
            <p className="text-[#475569] text-xl max-w-2xl mx-auto font-medium">
              We&apos;re here to help you navigate your first salary and beyond.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Details */}
            <div className="space-y-8">
              <div className="bg-white p-10 rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h3 className="text-2xl font-black text-slate-900 mb-8">Official Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <GraduationCap className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-0.5">College</p>
                      <p className="text-lg font-bold text-slate-900">NIET BUSINESS SCHOOL</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                      <Users className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-0.5">Department</p>
                      <p className="text-lg font-bold text-slate-900">B.TECH FIRST YEAR, ECE</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-0.5">Call Us</p>
                      <p className="text-lg font-bold text-slate-900">+917479842126</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center group-hover:bg-orange-600 group-hover:text-white transition-all">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest mb-0.5">Email Us</p>
                      <p className="text-lg font-bold text-slate-900">contact@smartsalaryhub.in</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-[#0F172A] p-10 rounded-[2.5rem] text-white">
                <h3 className="text-xl font-black mb-6">Designed & Developed By</h3>
                <div className="grid grid-cols-2 gap-4">
                  {["Pransant Kr Gupta", "Skand Sharma", "Sunny Kr Patel", "Ramesh Kr"].map((name) => (
                    <div key={name} className="bg-white/5 border border-white/10 px-4 py-3 rounded-xl">
                      <p className="text-sm font-bold text-blue-400">{name}</p>
                      <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">ECE Team</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <InquiryForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
