"use client";

import { Users, TrendingUp, IndianRupee, Star } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "10,000+",
    label: "Active Users",
    sub: "Freshers & First Jobbers",
    color: "from-blue-500 to-blue-600",
    bg: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    icon: IndianRupee,
    value: "₹50 Cr+",
    label: "Money Planned",
    sub: "By our community",
    color: "from-emerald-500 to-emerald-600",
    bg: "bg-emerald-50",
    textColor: "text-emerald-600",
  },
  {
    icon: TrendingUp,
    value: "₹2.4 Cr",
    label: "Wealth Created",
    sub: "Through SIP guidance",
    color: "from-purple-500 to-purple-600",
    bg: "bg-purple-50",
    textColor: "text-purple-600",
  },
  {
    icon: Star,
    value: "4.9 / 5",
    label: "User Rating",
    sub: "Based on 2,500+ reviews",
    color: "from-yellow-500 to-orange-500",
    bg: "bg-yellow-50",
    textColor: "text-yellow-600",
  },
];

export default function StatsSection() {
  return (
    <section className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="stat-card group hover:border-blue-200"
              >
                <div
                  className={`w-12 h-12 ${stat.bg} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 ${stat.textColor}`} />
                </div>
                <div
                  className={`text-2xl md:text-3xl font-black ${stat.textColor} mb-1`}
                >
                  {stat.value}
                </div>
                <div className="text-slate-800 font-semibold text-sm mb-0.5">
                  {stat.label}
                </div>
                <div className="text-slate-500 text-xs">{stat.sub}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
