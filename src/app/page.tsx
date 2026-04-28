import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/home/HeroSection";
import StatsSection from "@/components/home/StatsSection";
import ProblemsSection from "@/components/home/ProblemsSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import ToolsPreview from "@/components/home/ToolsPreview";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import InquiryForm from "@/components/InquiryForm";
import CTASection from "@/components/home/CTASection";
import { MessageSquare } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <StatsSection />
      <ProblemsSection />
      <SolutionsSection />
      <FeaturesSection />
      <ToolsPreview />
      
      {/* Premium Subscription Plans */}
      <PricingSection />
      
      <TestimonialsSection />

      {/* Inquiry System */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-600 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest mb-4">
              <MessageSquare className="w-4 h-4" />
              Contact Our Team
            </div>
            <h2 className="text-4xl font-black text-slate-900 mb-4">Any Questions? <span className="text-blue-600">Poocho!</span></h2>
            <p className="text-slate-500 font-medium">Hindi ya English dono chalega 😊. We usually reply in 24 hours.</p>
          </div>
          <InquiryForm />
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
}
