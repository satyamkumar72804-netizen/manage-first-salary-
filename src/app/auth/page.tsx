"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { TrendingUp, Eye, EyeOff, CheckCircle, ArrowLeft, Zap } from "lucide-react";

function AuthForm() {
  const searchParams = useSearchParams();
  const defaultTab = searchParams.get("tab") === "signup" ? "signup" : "login";
  const [tab, setTab] = useState<"login" | "signup">(defaultTab);
  const [showPass, setShowPass] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    salary: "",
    city: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-10 h-10 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">
          {tab === "signup" ? "Welcome to SmartSalary Hub! 🎉" : "Welcome Back! 🎉"}
        </h3>
        <p className="text-slate-600 mb-6">
          {tab === "signup"
            ? `Your account has been created! Start your financial journey today.`
            : `Successfully logged in. Redirecting to your dashboard...`}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/tools/salary-planner" className="btn-primary">
            <Zap className="w-4 h-4" />
            Start Planning Now
          </Link>
          <Link href="/" className="btn-secondary">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Tabs */}
      <div className="flex bg-slate-100 rounded-xl p-1 mb-7">
        {(["login", "signup"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              tab === t
                ? "bg-white text-blue-600 shadow-sm"
                : "text-slate-500 hover:text-slate-700"
            }`}
          >
            {t === "login" ? "Sign In" : "Create Account"}
          </button>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {tab === "signup" && (
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="input-premium"
              placeholder="Rahul Sharma"
              required
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address *</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="input-premium"
            placeholder="rahul@example.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">Password *</label>
          <div className="relative">
            <input
              type={showPass ? "text" : "password"}
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="input-premium pr-10"
              placeholder="Min. 8 characters"
              required
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              {showPass ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {tab === "signup" && (
          <>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="input-premium"
                  placeholder="+91 99999 99999"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">City</label>
                <input
                  type="text"
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  className="input-premium"
                  placeholder="Mumbai"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Monthly Salary (₹)</label>
              <input
                type="number"
                value={form.salary}
                onChange={(e) => setForm({ ...form, salary: e.target.value })}
                className="input-premium"
                placeholder="45000"
              />
              <p className="text-xs text-slate-400 mt-1">For personalized recommendations</p>
            </div>
          </>
        )}

        {tab === "login" && (
          <div className="flex justify-end">
            <button type="button" className="text-sm text-blue-600 hover:text-blue-700 font-medium">
              Forgot Password?
            </button>
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="btn-primary w-full justify-center py-3.5 text-base mt-2"
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              {tab === "signup" ? "Creating Account..." : "Signing In..."}
            </span>
          ) : tab === "signup" ? (
            <>
              <Zap className="w-5 h-5" />
              Create Free Account
            </>
          ) : (
            <>
              <ArrowLeft className="w-5 h-5 rotate-180" />
              Sign In
            </>
          )}
        </button>
      </form>

      {/* Divider */}
      <div className="flex items-center gap-3 my-5">
        <div className="flex-1 h-px bg-slate-200" />
        <span className="text-slate-400 text-sm">or continue with</span>
        <div className="flex-1 h-px bg-slate-200" />
      </div>

      {/* Social */}
      <div className="space-y-3">
        <button 
          onClick={() => {
            setLoading(true);
            setTimeout(() => {
              window.location.href = "/dashboard";
            }, 1000);
          }}
          className="w-full flex items-center justify-center gap-3 border border-slate-200 rounded-xl py-3.5 text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all shadow-sm active:scale-95"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-1.02.68-2.33 1.09-3.71 1.09-2.85 0-5.27-1.92-6.13-4.51H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.87 14.15c-.21-.62-.33-1.28-.33-1.96s.12-1.35.33-1.96V7.39H2.18C1.43 8.85 1 10.46 1 12s.43 3.15 1.18 4.61l3.69-2.85z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.39l3.69 2.85c.86-2.59 3.28-4.51 6.13-4.51z" fill="#EA4335"/>
          </svg>
          Continue with Google
        </button>
      </div>

      {/* Switch */}
      <p className="text-center text-slate-500 text-sm mt-5">
        {tab === "login" ? "New to SmartSalary Hub? " : "Already have an account? "}
        <button
          onClick={() => setTab(tab === "login" ? "signup" : "login")}
          className="text-blue-600 font-semibold hover:underline"
        >
          {tab === "login" ? "Create Free Account" : "Sign In"}
        </button>
      </p>
    </>
  );
}

export default function AuthPage() {
  return (
    <div className="min-h-screen hero-bg grid-pattern flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Back link */}
        <Link href="/" className="flex items-center gap-2 text-white/70 hover:text-white mb-6 transition-colors text-sm">
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        {/* Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-7 md:p-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5 mb-6">
            <div className="w-10 h-10 gradient-primary rounded-xl flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="font-black text-slate-900 text-lg leading-none">SmartSalary Hub</p>
              <p className="text-emerald-600 text-xs font-semibold">Apni First Salary Se Smart Future Banao</p>
            </div>
          </div>

          <Suspense fallback={<div className="h-40 flex items-center justify-center text-slate-500">Loading...</div>}>
            <AuthForm />
          </Suspense>
        </div>

        {/* Trust badge */}
        <div className="mt-4 text-center">
          <p className="text-white/50 text-xs">
            🔒 Secure · No Spam · 100% Free · Made in India 🇮🇳
          </p>
        </div>
      </div>
    </div>
  );
}
