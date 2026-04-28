import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer, Pune",
    company: "First Job at TCS",
    avatar: "RS",
    rating: 5,
    text: "SmartSalary Hub changed my life! I used to spend my entire salary by the 20th. Now I save ₹8,000 every month and have started my first SIP. Best app for freshers!",
    hindi: "Pehle salary khatam ho jaati thi, ab savings ho rahi hai! 🙌",
    badge: "💰 Saved ₹96K in 1 year",
    color: "from-blue-500 to-blue-600",
  },
  {
    name: "Priya Verma",
    role: "Marketing Executive, Delhi",
    company: "2nd Month at Job",
    avatar: "PV",
    rating: 5,
    text: "The Tax Calculator showed me I was overpaying tax. Switched to New Regime and saved ₹18,000! The salary planner is so visual and easy to understand.",
    hindi: "Tax bachana hua asaan, paise bachane lage! 🎉",
    badge: "🧾 Saved ₹18K in Tax",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    name: "Amit Patel",
    role: "Data Analyst, Bangalore",
    company: "Fresher at Infosys",
    avatar: "AP",
    rating: 5,
    text: "The SIP Calculator showed me that investing ₹3,000/month will give me ₹1.2 Crore in 20 years. I immediately started my SIP. This tool is genuinely life-changing!",
    hindi: "3000 rupaye se 1 crore? Believe it — it's true! 📈",
    badge: "📈 Started SIP at 22",
    color: "from-purple-500 to-purple-600",
  },
  {
    name: "Sneha Joshi",
    role: "HR Executive, Mumbai",
    company: "Fresher at Wipro",
    avatar: "SJ",
    rating: 5,
    text: "Emergency Fund Calculator told me I need ₹90,000 as safety net. Built it in 6 months using the plan. Now I feel financially secure for the first time!",
    hindi: "Security fund hua ready, tension khatam! 🛡️",
    badge: "🛡️ Built ₹90K Emergency Fund",
    color: "from-orange-500 to-red-500",
  },
  {
    name: "Karan Malhotra",
    role: "Civil Engineer, Hyderabad",
    company: "L&T Construction",
    avatar: "KM",
    rating: 5,
    text: "Goal Planner helped me plan for bike purchase in 8 months and home down payment in 3 years. Very realistic and motivating. Highly recommend to all freshers!",
    hindi: "Goals set kiye, plan banaya, achieve kar raha hoon! 🎯",
    badge: "🏍️ Bought Bike in 8 Months",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Divya Reddy",
    role: "UX Designer, Chennai",
    company: "Startup Employee",
    avatar: "DR",
    rating: 5,
    text: "Expense tracker helped me realize I was spending ₹4,000/month on food delivery alone! Cut it to ₹1,500 and redirected savings to mutual funds. Life-changing!",
    hindi: "Zomato pe ₹4000? Nahi chalega bhai! 😄",
    badge: "🥗 Cut Food Waste by 62%",
    color: "from-pink-500 to-rose-600",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="section-badge">
            <Star className="w-4 h-4" />
            User Stories
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 mb-4">
            Real Results from
            <span className="text-gradient block">Real Freshers</span>
          </h2>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto">
            Thousands of first-job employees have transformed their finances
            using SmartSalary Hub. Here are their stories.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="feature-card group border-2 border-slate-100 hover:border-blue-200 relative"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-blue-600" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-slate-600 text-sm leading-relaxed mb-3">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Hindi Quote */}
              <div className="bg-blue-50 border border-blue-100 rounded-lg px-3 py-2 mb-4">
                <p className="text-blue-700 text-sm italic">{t.hindi}</p>
              </div>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-4 border border-emerald-100">
                {t.badge}
              </div>

              {/* User info */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}
                >
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-slate-900 text-sm">
                    {t.name}
                  </div>
                  <div className="text-slate-500 text-xs">{t.role}</div>
                  <div className="text-slate-400 text-xs">{t.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { value: "10,000+", label: "Happy Users", emoji: "😊" },
            { value: "4.9★", label: "Average Rating", emoji: "⭐" },
            { value: "₹2.4Cr", label: "Wealth Created", emoji: "💰" },
            { value: "98%", label: "Would Recommend", emoji: "❤️" },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-slate-50 border border-slate-200 rounded-2xl p-4 text-center"
            >
              <div className="text-2xl mb-1">{item.emoji}</div>
              <div className="text-2xl font-black text-slate-900">
                {item.value}
              </div>
              <div className="text-slate-500 text-sm">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
