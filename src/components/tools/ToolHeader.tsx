"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import { useRouter } from "next/navigation";

interface ToolHeaderProps {
  title: string;
  category: string;
  icon: React.ReactNode;
  gradient: string;
}

export default function ToolHeader({ title, category, icon, gradient }: ToolHeaderProps) {
  const router = useRouter();

  return (
    <div className={`${gradient} py-12 px-4 relative overflow-hidden`}>
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-xl backdrop-blur-md border border-white/20 transition-all font-semibold text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
          <Link 
            href="/"
            className="w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20 transition-all"
          >
            <Home className="w-5 h-5" />
          </Link>
        </div>

        <div className="text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
            {icon}
            {category}
          </div>
          <h1 className="text-4xl md:text-5xl font-black mb-3 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-white/80 text-lg max-w-xl mx-auto font-medium">
            Smart financial tools by SmartSalary Hub
          </p>
        </div>
      </div>
    </div>
  );
}
