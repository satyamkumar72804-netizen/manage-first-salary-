"use client";

import { useState } from "react";
import { Send, CheckCircle, Bell, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function InquiryForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setShowPopup(true);
      setForm({ name: "", phone: "", email: "", message: "" });
      
      // Auto hide popup after 5 seconds
      setTimeout(() => setShowPopup(false), 5000);
    }, 1500);
  };

  return (
    <div className="relative">
      <div className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl shadow-slate-200 border border-slate-100">
        <h2 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-3">
          Send us a Message
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">
                Your Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-slate-900 font-bold outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="Rahul Sharma"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">
                Phone Number
              </label>
              <input
                type="tel"
                required
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-slate-900 font-bold outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                placeholder="+91 99999 99999"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-slate-900 font-bold outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              placeholder="rahul@example.com"
            />
          </div>

          <div className="space-y-2">
            <label className="text-xs font-black text-slate-400 uppercase tracking-widest px-1">
              General Inquiry
            </label>
            <textarea
              required
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-slate-50 border-none rounded-2xl px-5 py-4 text-slate-900 font-bold outline-none focus:ring-2 focus:ring-blue-500 transition-all min-h-[150px] resize-none"
              placeholder="Write your message here... (Hindi ya English dono chalega 😊)"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#2563EB] text-white py-4.5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-xl shadow-blue-100 flex items-center justify-center gap-3 active:scale-95 disabled:opacity-70"
          >
            {loading ? (
              <Loader2 className="w-6 h-6 animate-spin" />
            ) : (
              <>
                Send Message
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        </form>
      </div>

      {/* Floating Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] w-max"
          >
            <div className="bg-emerald-600 text-white px-8 py-4 rounded-3xl shadow-[0_20px_50px_rgba(16,185,129,0.3)] flex items-center gap-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="font-black text-lg">Message Sent Successfully!</p>
                <p className="text-emerald-100 text-sm font-medium">We will contact you within 24 hours.</p>
              </div>
              <button 
                onClick={() => setShowPopup(false)}
                className="ml-4 text-white/60 hover:text-white transition-colors"
              >
                ✕
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
