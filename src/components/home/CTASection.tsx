import Link from "next/link";
import { ArrowRight, Zap, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-yellow-400 text-sm font-semibold px-4 py-2 rounded-full mb-6">
          <Zap className="w-4 h-4" />
          Start Your Financial Journey Today
        </div>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
          Ab Aur Wait Mat Karo —
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            Pehla Kadam Uthao Aaj!
          </span>
        </h2>

        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Join 10,000+ freshers who have already taken control of their finances.
          Free tools, no credit card required, no financial jargon.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/auth?tab=signup"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            <Zap className="w-5 h-5" />
            Start for Free — No Card Needed
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-xl hover:bg-white/20 transition-all duration-300 hover:-translate-y-1 text-lg"
          >
            <Phone className="w-5 h-5" />
            Contact Us
          </Link>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "🔒 100% Secure",
            "✅ No Hidden Fees",
            "🇮🇳 Made in India",
            "⚡ Instant Access",
            "📱 Works on Mobile",
          ].map((badge) => (
            <span
              key={badge}
              className="bg-white/10 border border-white/20 text-white text-sm px-3 py-1.5 rounded-full"
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
