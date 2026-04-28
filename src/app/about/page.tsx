import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Users, GraduationCap, Lightbulb, Award, Phone } from "lucide-react";

export const metadata = {
  title: "About Team | SmartSalary Hub",
  description: "Meet the team behind SmartSalary Hub — final year project presentation.",
};

const teamMembers = [
  {
    name: "Pransant Kr Gupta",
    role: "Lead Developer & Researcher",
    rollNo: "ECE - 1st Year",
    emoji: "👨‍💻",
    color: "from-blue-600 to-indigo-700",
    skills: ["Next.js", "Financial Modeling", "UI/UX"],
    contribution: "Project Architecture & Tool Development",
  },
  {
    name: "Skand Sharma",
    role: "UI/UX Designer",
    rollNo: "ECE - 1st Year",
    emoji: "🎨",
    color: "from-purple-600 to-pink-700",
    skills: ["Tailwind CSS", "Figma", "React"],
    contribution: "Frontend Design & User Experience",
  },
  {
    name: "Sunny Kr Patel",
    role: "Backend & Database",
    rollNo: "ECE - 1st Year",
    emoji: "⚙️",
    color: "from-emerald-600 to-teal-700",
    skills: ["PostgreSQL", "API Design", "Security"],
    contribution: "Data Management & API Integration",
  },
  {
    name: "Ramesh Kr",
    role: "Content & Strategy",
    rollNo: "ECE - 1st Year",
    emoji: "📈",
    color: "from-orange-600 to-red-700",
    skills: ["Financial Literacy", "Research", "Testing"],
    contribution: "Market Research & Educational Content",
  },
];

const projectDetails = [
  { label: "College Name", value: "NIET BUSINESS SCHOOL", icon: GraduationCap },
  { label: "Department", value: "B.TECH FIRST YEAR (ECE)", icon: Users },
  { label: "Course", value: "Bachelor of Technology", icon: Award },
  { label: "Contact", value: "+91 7479842126", icon: Phone },
];

const techStack = [
  { name: "Next.js 16", category: "Frontend Framework", emoji: "⚡" },
  { name: "React 19", category: "UI Library", emoji: "⚛️" },
  { name: "Tailwind CSS", category: "Styling", emoji: "🎨" },
  { name: "TypeScript", category: "Type Safety", emoji: "📘" },
  { name: "PostgreSQL", category: "Database", emoji: "🗄️" },
  { name: "Drizzle ORM", category: "ORM", emoji: "💧" },
  { name: "Recharts", category: "Data Visualization", emoji: "📊" },
  { name: "Lucide Icons", category: "Icon Library", emoji: "✨" },
  { name: "Vercel", category: "Deployment", emoji: "🚀" },
];

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="pt-20">
        {/* Hero */}
        <div className="gradient-dark py-20 px-4 relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-20" />
          <div className="relative z-10 max-w-4xl mx-auto text-center text-white">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-cyan-300 text-sm font-semibold px-4 py-2 rounded-full mb-5">
              <GraduationCap className="w-4 h-4" />
              Final Year Project — Batch 2021-25
            </div>
            <h1 className="text-4xl md:text-5xl font-black mb-4">
              Meet Team
              <span className="text-gradient block">SmartSalary Hub</span>
            </h1>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              We are 4 passionate computer science students who built this platform
              to solve a real problem — financial illiteracy among India&apos;s young workforce.
            </p>
          </div>
        </div>

        {/* Project Details */}
        <section className="py-12 bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {projectDetails.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="bg-slate-50 border border-slate-200 rounded-2xl p-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-blue-600" />
                    </div>
                    <p className="text-xs text-slate-500 mb-1">{item.label}</p>
                    <p className="font-bold text-slate-900 text-sm">{item.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
                Our Team 👨‍💻👩‍💻
              </h2>
              <p className="text-slate-600">4 students. 1 mission. Transform financial planning for freshers.</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {teamMembers.map((member) => (
                <div key={member.name} className="feature-card group text-center">
                  {/* Avatar */}
                  <div className={`w-20 h-20 bg-gradient-to-br ${member.color} rounded-2xl flex items-center justify-center text-4xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    {member.emoji}
                  </div>
                  <h3 className="font-black text-slate-900 text-lg mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold text-sm mb-1">{member.role}</p>
                  <p className="text-slate-400 text-xs mb-3">{member.rollNo}</p>
                  <p className="text-slate-500 text-xs leading-relaxed mb-4">{member.contribution}</p>
                  <div className="flex flex-wrap gap-1.5 justify-center">
                    {member.skills.map((skill) => (
                      <span key={skill} className="text-xs bg-blue-50 text-blue-700 border border-blue-100 px-2 py-0.5 rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-black text-slate-900 mb-2">Technology Stack 🛠️</h2>
              <p className="text-slate-600">Modern, production-grade technologies used in this project</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
              {techStack.map((tech) => (
                <div key={tech.name} className="stat-card group hover:border-blue-200">
                  <div className="text-3xl mb-2">{tech.emoji}</div>
                  <div className="font-bold text-slate-900 text-sm">{tech.name}</div>
                  <div className="text-slate-400 text-xs mt-0.5">{tech.category}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 bg-slate-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-4">
                  🎯 Project Problem Statement
                </h2>
                <p className="text-slate-600 leading-relaxed mb-4">
                  <strong>Problem:</strong> India has over 15 million fresh graduates entering the workforce
                  each year. However, 78% of them have NO financial plan for their first salary. This leads
                  to poor savings habits, credit card debt, missed investment opportunities, and financial
                  stress — a problem that compounds over decades.
                </p>
                <p className="text-slate-600 leading-relaxed mb-4">
                  <strong>Solution:</strong> SmartSalary Hub — a comprehensive, beginner-friendly,
                  India-specific financial planning platform that helps freshers manage their first salary,
                  build savings, start investing, and plan their financial future from day one.
                </p>
                <div className="bg-blue-50 border border-blue-100 rounded-xl p-4">
                  <p className="text-blue-800 font-semibold text-sm">
                    📊 Research Basis: Primary survey of 200+ freshers + Secondary data from SEBI,
                    RBI, and National Financial Survey 2024.
                  </p>
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-black text-slate-900 mb-4">
                  🏆 Project Achievements
                </h2>
                <div className="space-y-3">
                  {[
                    { title: "7 Working Financial Tools", desc: "All tools functional with real calculations", emoji: "🛠️" },
                    { title: "Multi-Page Web Application", desc: "Full-stack Next.js + PostgreSQL", emoji: "💻" },
                    { title: "Mobile Responsive Design", desc: "Works on all devices seamlessly", emoji: "📱" },
                    { title: "India-Specific Content", desc: "Tax rules, Indian salary structures, Hindi support", emoji: "🇮🇳" },
                    { title: "Professional UI/UX", desc: "Startup-quality design and user experience", emoji: "🎨" },
                    { title: "Production Ready", desc: "Deployed on cloud, accessible to real users", emoji: "🚀" },
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3 bg-white border border-slate-100 rounded-xl p-3">
                      <span className="text-2xl shrink-0">{item.emoji}</span>
                      <div>
                        <p className="font-semibold text-slate-900 text-sm">{item.title}</p>
                        <p className="text-slate-500 text-xs">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Guide section */}
        <section className="py-12 bg-gradient-to-r from-blue-600 to-emerald-600 px-4">
          <div className="max-w-4xl mx-auto text-white text-center">
            <h2 className="text-2xl md:text-3xl font-black mb-4">
              🎓 Special Thanks to Our Guide
            </h2>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 inline-block">
              <div className="text-5xl mb-3">👨‍🏫</div>
              <p className="text-xl font-black mb-1">Prof. [Guide Name]</p>
              <p className="text-white/80">Department of Computer Science & Engineering</p>
              <p className="text-white/70 text-sm">[Your College Name], [City]</p>
              <div className="mt-4 bg-white/10 rounded-xl px-4 py-2">
                <p className="text-white/80 text-sm italic">
                  &ldquo;Financial literacy is the foundation of a secure future. This project is a
                  meaningful contribution to solving a real societal problem.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
