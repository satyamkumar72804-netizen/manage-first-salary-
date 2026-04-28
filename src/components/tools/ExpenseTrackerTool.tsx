"use client";

import { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";
import { BarChart2, Plus, Trash2, AlertCircle, CheckCircle } from "lucide-react";

const categories = [
  { name: "Rent / PG", emoji: "🏠", color: "#1a56db", limit: 0.4 },
  { name: "Food & Groceries", emoji: "🍱", color: "#10b981", limit: 0.15 },
  { name: "Transport", emoji: "🚌", color: "#f59e0b", limit: 0.1 },
  { name: "Dining Out", emoji: "🍕", color: "#ef4444", limit: 0.08 },
  { name: "Shopping", emoji: "🛍️", color: "#8b5cf6", limit: 0.08 },
  { name: "Entertainment", emoji: "🎬", color: "#ec4899", limit: 0.05 },
  { name: "Gym & Health", emoji: "💪", color: "#06b6d4", limit: 0.04 },
  { name: "EMI / Loan", emoji: "💳", color: "#dc2626", limit: 0.15 },
  { name: "Education", emoji: "📚", color: "#6366f1", limit: 0.05 },
  { name: "Others", emoji: "📦", color: "#94a3b8", limit: 0.05 },
];

interface Expense {
  id: number;
  name: string;
  amount: number;
  category: string;
  date: string;
}

export default function ExpenseTrackerTool() {
  const [salary, setSalary] = useState(45000);
  const [expenses, setExpenses] = useState<Expense[]>([
    { id: 1, name: "PG Rent", amount: 8000, category: "Rent / PG", date: "2025-04-01" },
    { id: 2, name: "Groceries", amount: 3500, category: "Food & Groceries", date: "2025-04-03" },
    { id: 3, name: "Zomato", amount: 1800, category: "Dining Out", date: "2025-04-05" },
    { id: 4, name: "Metro + Auto", amount: 1200, category: "Transport", date: "2025-04-07" },
    { id: 5, name: "Amazon Shopping", amount: 2500, category: "Shopping", date: "2025-04-10" },
    { id: 6, name: "Netflix + Hotstar", amount: 699, category: "Entertainment", date: "2025-04-01" },
  ]);
  const [form, setForm] = useState({ name: "", amount: "", category: "Food & Groceries", date: new Date().toISOString().split("T")[0] });

  const totalExpenses = expenses.reduce((s, e) => s + e.amount, 0);
  const remaining = salary - totalExpenses;
  const pct = Math.min((totalExpenses / salary) * 100, 100);

  const categoryTotals = categories.map((cat) => ({
    ...cat,
    spent: expenses.filter((e) => e.category === cat.name).reduce((s, e) => s + e.amount, 0),
    limit: Math.round(salary * cat.limit),
  }));

  const addExpense = () => {
    if (!form.name || !form.amount) return;
    setExpenses((prev) => [
      ...prev,
      { id: Date.now(), name: form.name, amount: Number(form.amount), category: form.category, date: form.date },
    ]);
    setForm({ name: "", amount: "", category: "Food & Groceries", date: new Date().toISOString().split("T")[0] });
  };

  const removeExpense = (id: number) => setExpenses((prev) => prev.filter((e) => e.id !== id));

  const chartData = categoryTotals.filter((c) => c.spent > 0).map((c) => ({
    name: c.emoji + " " + c.name.split(" ")[0],
    Spent: c.spent,
    Limit: c.limit,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-white">
      {/* Hero */}
      <div className="gradient-green py-12 px-4">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm mb-4">
            <BarChart2 className="w-4 h-4" />
            Track Every Rupee
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">Expense Tracker 📊</h1>
          <p className="text-emerald-100 text-lg max-w-xl mx-auto">
            Know exactly where your money goes every month. Spot overspending and redirect to savings.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Salary input */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 mb-6 flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3">
            <label className="font-semibold text-slate-700">Monthly Salary:</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold">₹</span>
              <input
                type="number"
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="input-premium pl-8 w-36"
              />
            </div>
          </div>
          <div className="flex-1 text-right">
            <span className={`font-bold text-lg ${remaining >= 0 ? "text-emerald-600" : "text-red-600"}`}>
              {remaining >= 0 ? `✅ ₹${remaining.toLocaleString("en-IN")} remaining` : `❌ ₹${Math.abs(remaining).toLocaleString("en-IN")} overspent!`}
            </span>
          </div>
        </div>

        {/* Overview bar */}
        <div className="bg-white rounded-2xl p-5 border border-slate-100 mb-6">
          <div className="flex justify-between text-sm mb-2">
            <span className="font-semibold text-slate-700">
              Spent: ₹{totalExpenses.toLocaleString("en-IN")}
            </span>
            <span className="text-slate-500">
              Budget: ₹{salary.toLocaleString("en-IN")} | {pct.toFixed(1)}% used
            </span>
          </div>
          <div className="progress-bar">
            <div
              className={`progress-fill ${pct > 90 ? "bg-red-500" : pct > 70 ? "bg-yellow-500" : ""}`}
              style={{ width: `${pct}%` }}
            />
          </div>
          {pct > 80 && (
            <div className="mt-2 flex items-center gap-2 text-sm text-red-600">
              <AlertCircle className="w-4 h-4" />
              Warning: You&apos;ve used {pct.toFixed(0)}% of your budget!
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Add Expense + List */}
          <div className="lg:col-span-1 space-y-5">
            {/* Add Form */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Plus className="w-4 h-4 text-emerald-600" /> Add Expense
              </h3>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Expense name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="input-premium"
                />
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold">₹</span>
                  <input
                    type="number"
                    placeholder="Amount"
                    value={form.amount}
                    onChange={(e) => setForm({ ...form, amount: e.target.value })}
                    className="input-premium pl-8"
                  />
                </div>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="input-premium"
                >
                  {categories.map((c) => (
                    <option key={c.name} value={c.name}>
                      {c.emoji} {c.name}
                    </option>
                  ))}
                </select>
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => setForm({ ...form, date: e.target.value })}
                  className="input-premium"
                />
                <button onClick={addExpense} className="btn-green w-full justify-center">
                  <Plus className="w-4 h-4" /> Add Expense
                </button>
              </div>
            </div>

            {/* Expense list */}
            <div className="bg-white rounded-2xl p-5 border border-slate-100 max-h-80 overflow-y-auto">
              <h3 className="font-bold text-slate-900 mb-3">Recent Expenses</h3>
              <div className="space-y-2">
                {expenses.map((exp) => {
                  const cat = categories.find((c) => c.name === exp.category);
                  return (
                    <div key={exp.id} className="flex items-center justify-between bg-slate-50 rounded-xl px-3 py-2">
                      <div className="flex items-center gap-2">
                        <span className="text-lg">{cat?.emoji}</span>
                        <div>
                          <p className="text-sm font-medium text-slate-800">{exp.name}</p>
                          <p className="text-xs text-slate-400">{exp.category} · {exp.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-red-500 text-sm">₹{exp.amount.toLocaleString()}</span>
                        <button onClick={() => removeExpense(exp.id)} className="text-slate-400 hover:text-red-500 transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Charts + Category Breakdown */}
          <div className="lg:col-span-2 space-y-5">
            {/* Bar Chart */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4">Spending vs Budget Limit</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={chartData} barSize={20}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="name" tick={{ fontSize: 10 }} />
                  <YAxis tickFormatter={(v) => `₹${(v / 1000).toFixed(0)}K`} tick={{ fontSize: 11 }} />
                  <Tooltip formatter={(value) => [`₹${Number(value).toLocaleString("en-IN")}`, ""]} />
                  <Bar dataKey="Spent" radius={[4, 4, 0, 0]}>
                    {chartData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={entry.Spent > entry.Limit ? "#ef4444" : "#10b981"}
                      />
                    ))}
                  </Bar>
                  <Bar dataKey="Limit" radius={[4, 4, 0, 0]} fill="#e2e8f0" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Category breakdown */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-4">Category Analysis</h3>
              <div className="space-y-3">
                {categoryTotals.filter((c) => c.spent > 0 || c.limit > 1000).map((cat) => {
                  const catPct = Math.min((cat.spent / cat.limit) * 100, 100);
                  const over = cat.spent > cat.limit;
                  return (
                    <div key={cat.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium text-slate-700">
                          {cat.emoji} {cat.name}
                        </span>
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-bold ${over ? "text-red-600" : "text-slate-700"}`}>
                            ₹{cat.spent.toLocaleString()}
                          </span>
                          <span className="text-xs text-slate-400">/ ₹{cat.limit.toLocaleString()}</span>
                          {over ? (
                            <AlertCircle className="w-3.5 h-3.5 text-red-500" />
                          ) : cat.spent > 0 ? (
                            <CheckCircle className="w-3.5 h-3.5 text-emerald-500" />
                          ) : null}
                        </div>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${over ? "bg-red-500" : catPct > 75 ? "bg-yellow-400" : "bg-emerald-500"}`}
                          style={{ width: `${catPct}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
