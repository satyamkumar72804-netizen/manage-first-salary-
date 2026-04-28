"use client";

import { useState } from "react";
import { Target, Plus, Trash2, CheckCircle, TrendingUp } from "lucide-react";

const goalTemplates = [
  { name: "🏍️ Buy a Bike", amount: 120000, months: 12, emoji: "🏍️", color: "from-orange-500 to-red-500" },
  { name: "🏠 House Down Payment", amount: 500000, months: 36, emoji: "🏠", color: "from-blue-500 to-blue-700" },
  { name: "✈️ Europe Trip", amount: 150000, months: 18, emoji: "✈️", color: "from-cyan-500 to-teal-600" },
  { name: "💒 Wedding Fund", amount: 300000, months: 24, emoji: "💒", color: "from-pink-500 to-rose-600" },
  { name: "🎓 Higher Education", amount: 200000, months: 24, emoji: "🎓", color: "from-purple-500 to-violet-600" },
  { name: "🏦 Retirement Corpus", amount: 10000000, months: 360, emoji: "🏦", color: "from-emerald-600 to-teal-700" },
];

interface Goal {
  id: number;
  name: string;
  amount: number;
  months: number;
  saved: number;
  emoji: string;
  color: string;
}

export default function GoalPlannerTool() {
  const [goals, setGoals] = useState<Goal[]>([
    { id: 1, name: "🏍️ Buy a Bike", amount: 120000, months: 12, saved: 30000, emoji: "🏍️", color: "from-orange-500 to-red-500" },
    { id: 2, name: "✈️ Europe Trip", amount: 150000, months: 18, saved: 20000, emoji: "✈️", color: "from-cyan-500 to-teal-600" },
  ]);
  const [rate, setRate] = useState(8);
  const [showAdd, setShowAdd] = useState(false);
  const [newGoal, setNewGoal] = useState({ name: "", amount: 100000, months: 12, saved: 0, emoji: "🎯", color: "from-slate-500 to-slate-700" });

  const addGoal = () => {
    setGoals((prev) => [...prev, { ...newGoal, id: Date.now() }]);
    setShowAdd(false);
    setNewGoal({ name: "", amount: 100000, months: 12, saved: 0, emoji: "🎯", color: "from-slate-500 to-slate-700" });
  };

  const removeGoal = (id: number) => setGoals((prev) => prev.filter((g) => g.id !== id));

  const updateSaved = (id: number, saved: number) =>
    setGoals((prev) => prev.map((g) => (g.id === id ? { ...g, saved } : g)));

  const calcMonthlyRequired = (goal: Goal) => {
    const remaining = Math.max(0, goal.amount - goal.saved);
    if (remaining === 0) return 0;
    const monthlyRate = rate / 100 / 12;
    if (monthlyRate === 0) return Math.ceil(remaining / goal.months);
    const pmt = (remaining * monthlyRate) / (Math.pow(1 + monthlyRate, goal.months) - 1);
    return Math.ceil(pmt);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white">
      {/* Hero */}
      <div
        style={{ background: "linear-gradient(135deg, #9d174d 0%, #db2777 50%, #ec4899 100%)" }}
        className="py-12 px-4"
      >
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm mb-4">
            <Target className="w-4 h-4" />
            Dream. Plan. Achieve.
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">Goal Planner 🎯</h1>
          <p className="text-pink-100 text-lg max-w-xl mx-auto">
            Plan for your big life goals — Bike, House, Travel, Marriage, Retirement. Track progress and invest wisely.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header controls */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-xl p-3">
            <TrendingUp className="w-5 h-5 text-pink-600" />
            <label className="text-sm font-semibold text-slate-700">Expected Return:</label>
            <input
              type="range"
              min={4}
              max={20}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              className="w-24"
            />
            <span className="font-bold text-pink-600 w-10">{rate}%</span>
          </div>
          <button
            onClick={() => setShowAdd(!showAdd)}
            className="btn-primary"
          >
            <Plus className="w-4 h-4" /> Add New Goal
          </button>
        </div>

        {/* Add goal form */}
        {showAdd && (
          <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm mb-6">
            <h3 className="font-bold text-slate-900 mb-4">Add Custom Goal</h3>

            {/* Template buttons */}
            <div className="mb-4">
              <p className="text-sm text-slate-600 mb-2">Quick select a template:</p>
              <div className="flex flex-wrap gap-2">
                {goalTemplates.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => setNewGoal({ ...newGoal, name: t.name, amount: t.amount, months: t.months, emoji: t.emoji, color: t.color })}
                    className="text-xs px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full hover:border-pink-400 transition-colors"
                  >
                    {t.name}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Goal Name</label>
                <input
                  type="text"
                  value={newGoal.name}
                  onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
                  className="input-premium"
                  placeholder="e.g. Buy a Car"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Target Amount</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                  <input
                    type="number"
                    value={newGoal.amount}
                    onChange={(e) => setNewGoal({ ...newGoal, amount: Number(e.target.value) })}
                    className="input-premium pl-8"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Time (Months)</label>
                <input
                  type="number"
                  value={newGoal.months}
                  onChange={(e) => setNewGoal({ ...newGoal, months: Number(e.target.value) })}
                  className="input-premium"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Already Saved</label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold">₹</span>
                  <input
                    type="number"
                    value={newGoal.saved}
                    onChange={(e) => setNewGoal({ ...newGoal, saved: Number(e.target.value) })}
                    className="input-premium pl-8"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <button onClick={addGoal} className="btn-primary">
                <Plus className="w-4 h-4" /> Add Goal
              </button>
              <button onClick={() => setShowAdd(false)} className="btn-secondary">
                Cancel
              </button>
            </div>
          </div>
        )}

        {/* Goals grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
          {goals.map((goal) => {
            const progress = Math.min((goal.saved / goal.amount) * 100, 100);
            const remaining = Math.max(0, goal.amount - goal.saved);
            const monthly = calcMonthlyRequired(goal);
            const done = progress >= 100;
            const yearsMonths = goal.months >= 12
              ? `${Math.floor(goal.months / 12)}yr ${goal.months % 12 > 0 ? goal.months % 12 + "mo" : ""}`
              : `${goal.months} months`;

            return (
              <div key={goal.id} className={`bg-white rounded-2xl border-2 overflow-hidden shadow-sm ${done ? "border-emerald-300" : "border-slate-100"}`}>
                {/* Card header */}
                <div className={`bg-gradient-to-r ${goal.color} p-5 text-white`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="font-bold text-xl">{goal.name}</p>
                      <p className="text-white/70 text-sm">Target: ₹{goal.amount.toLocaleString("en-IN")}</p>
                      <p className="text-white/70 text-sm">Timeline: {yearsMonths}</p>
                    </div>
                    <button
                      onClick={() => removeGoal(goal.id)}
                      className="text-white/60 hover:text-white"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Card body */}
                <div className="p-5">
                  {/* Progress */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-slate-600">Progress</span>
                      <span className={`font-bold ${done ? "text-emerald-600" : "text-slate-900"}`}>
                        {progress.toFixed(0)}% {done && "✓"}
                      </span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${goal.color} transition-all duration-500`}
                        style={{ width: `${progress}%` }}
                      />
                    </div>
                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <span>₹{goal.saved.toLocaleString()} saved</span>
                      <span>₹{remaining.toLocaleString()} left</span>
                    </div>
                  </div>

                  {/* Update saved */}
                  <div className="mb-4">
                    <label className="block text-xs font-semibold text-slate-600 mb-1">Update Saved Amount:</label>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm">₹</span>
                      <input
                        type="number"
                        value={goal.saved}
                        onChange={(e) => updateSaved(goal.id, Number(e.target.value))}
                        className="input-premium pl-8 text-sm py-2"
                      />
                    </div>
                  </div>

                  {/* Monthly required */}
                  {done ? (
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <p className="text-emerald-700 font-bold text-sm">Goal Achieved! 🎉</p>
                    </div>
                  ) : (
                    <div className="bg-slate-50 border border-slate-100 rounded-xl p-3">
                      <p className="text-slate-500 text-xs">Monthly investment needed</p>
                      <p className="text-2xl font-black text-slate-900">₹{monthly.toLocaleString("en-IN")}</p>
                      <p className="text-slate-400 text-xs">at {rate}% return per annum</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Add new card */}
          <button
            onClick={() => setShowAdd(true)}
            className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-8 flex flex-col items-center justify-center gap-3 hover:border-pink-400 hover:bg-pink-50/30 transition-all duration-200 cursor-pointer"
          >
            <div className="w-12 h-12 bg-pink-50 rounded-xl flex items-center justify-center">
              <Plus className="w-6 h-6 text-pink-500" />
            </div>
            <div className="text-center">
              <p className="font-semibold text-slate-700">Add New Goal</p>
              <p className="text-slate-400 text-sm">Bike, House, Travel...</p>
            </div>
          </button>
        </div>

        {/* Summary */}
        {goals.length > 0 && (
          <div className="mt-8 bg-gradient-to-r from-slate-900 to-pink-900 rounded-2xl p-6 text-white">
            <h3 className="font-bold text-xl mb-4">📊 Goals Summary</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-pink-400">{goals.length}</p>
                <p className="text-white/70 text-sm">Active Goals</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-yellow-400">
                  ₹{(goals.reduce((s, g) => s + g.amount, 0) / 100000).toFixed(1)}L
                </p>
                <p className="text-white/70 text-sm">Total Target</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-emerald-400">
                  ₹{(goals.reduce((s, g) => s + g.saved, 0) / 100000).toFixed(1)}L
                </p>
                <p className="text-white/70 text-sm">Total Saved</p>
              </div>
              <div className="bg-white/10 rounded-xl p-4 text-center">
                <p className="text-3xl font-black text-cyan-400">
                  ₹{goals.reduce((s, g) => s + calcMonthlyRequired(g), 0).toLocaleString()}
                </p>
                <p className="text-white/70 text-sm">Monthly Needed</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
