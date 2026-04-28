"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Play, BookOpen, Video, ArrowRight, Lightbulb, GraduationCap, TrendingUp, Shield, Calculator } from "lucide-react";
import Link from "next/link";

const videos = [
  {
    id: "AkMTxMN7res",
    title: "Financial Planning for Beginners",
    channel: "Asset Yogi",
    description: "Learn the fundamentals of managing your first salary and building a strong financial base.",
    color: "bg-red-50",
    icon: <Calculator className="w-5 h-5 text-red-500" />,
  },
  {
    id: "qNATvBDifpk",
    title: "How to Invest Your First Salary?",
    channel: "Warikoo",
    description: "Step-by-step guide on where to put your money when you start earning.",
    color: "bg-blue-50",
    icon: <TrendingUp className="w-5 h-5 text-blue-500" />,
  },
  {
    id: "0laavBo25ew",
    title: "The 50/30/20 Rule Explained",
    channel: "Pranjal Kamra",
    description: "Deep dive into the most effective budgeting rule for young professionals.",
    color: "bg-emerald-50",
    icon: <Shield className="w-5 h-5 text-emerald-500" />,
  },
];

const smartTips = [
  { title: "Start SIP at 22", desc: "Even ₹500/month can grow into lakhs by the time you're 35." },
  { title: "Avoid EMI Traps", desc: "Don't buy depreciating assets like phones on high-interest EMIs." },
  { title: "Tax is Income", desc: "Every rupee saved in tax is a rupee earned. Plan before March." },
];

export default function EducationPage() {
  return (
    <main className="min-h-screen bg-[#F8FAFC]">
      <Navbar />
      <div className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-500 hover:text-[#2563EB] font-bold text-sm transition-colors group">
              <ArrowRight className="w-4 h-4 rotate-180 group-hover:-translate-x-1 transition-transform" />
              Back to Home
            </Link>
          </div>
          
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#2563EB] px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <BookOpen className="w-4 h-4" />
              Knowledge Hub
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-[#0F172A] mb-4 leading-tight">
              Art of <span className="text-[#2563EB]">Financial Freedom.</span>
            </h1>
            <p className="text-[#475569] text-xl max-w-2xl mx-auto font-medium">
              Curated financial wisdom for India&apos;s next generation. 
              Built with ❤️ for NIET students by NIET students.
            </p>
          </div>

          {/* Videos Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-20">
            {videos.map((video) => (
              <div key={video.id} className="bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-100 group hover:border-[#2563EB] transition-all">
                <div className="aspect-video relative">
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-xl ${video.color}`}>
                      {video.icon}
                    </div>
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{video.channel}</span>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-2 leading-tight">{video.title}</h3>
                  <p className="text-slate-500 text-sm font-medium">{video.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Tips Section */}
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-[#0F172A] rounded-[2.5rem] p-10 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 rounded-full -mr-20 -mt-20 blur-3xl"></div>
              <Lightbulb className="w-12 h-12 text-[#10B981] mb-6" />
              <h2 className="text-3xl font-black mb-6">Smart Salary Tips 💡</h2>
              <div className="space-y-6">
                {smartTips.map((tip) => (
                  <div key={tip.title} className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center shrink-0 mt-1">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">{tip.title}</h4>
                      <p className="text-slate-400 text-sm">{tip.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl font-black text-slate-900 leading-tight">
                Financial literacy is the foundation of <span className="text-[#2563EB]">Freedom</span>.
              </h2>
              <p className="text-slate-600 font-medium">
                Our mission is to help every first-job employee in India become financially independent. 
                Use these lessons as your roadmap to a secure future.
              </p>
              <div className="flex flex-col gap-4">
                <Link href="/tools/salary-planner" className="btn-primary w-fit">
                  Start Planning Now <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-2 text-sm text-slate-500 font-bold">
                  <GraduationCap className="w-4 h-4" />
                  Free & Open for all NIET Students
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
