"use client";

import { useState } from "react";
import { FileText, CheckCircle, TrendingUp } from "lucide-react";

function calcOldRegime(income: number, deductions: { sec80c: number; hra: number; nps: number; others: number }) {
  const totalDeductions = Math.min(deductions.sec80c, 150000) + deductions.hra + Math.min(deductions.nps, 50000) + deductions.others + 50000; // standard deduction
  const taxableIncome = Math.max(0, income - totalDeductions);
  let tax = 0;
  if (taxableIncome > 1000000) tax += (taxableIncome - 1000000) * 0.3;
  if (taxableIncome > 500000) tax += (Math.min(taxableIncome, 1000000) - 500000) * 0.2;
  if (taxableIncome > 250000) tax += (Math.min(taxableIncome, 500000) - 250000) * 0.05;
  const cess = tax * 0.04;
  const rebate = taxableIncome <= 500000 ? tax : 0;
  return { taxableIncome, tax: Math.max(0, tax - rebate), cess: Math.max(0, (tax - rebate) * 0.04), total: Math.max(0, tax - rebate + cess) };
}

function calcNewRegime(income: number) {
  const taxableIncome = Math.max(0, income - 75000); // standard deduction in new regime
  let tax = 0;
  if (taxableIncome > 1500000) tax += (taxableIncome - 1500000) * 0.3;
  if (taxableIncome > 1200000) tax += (Math.min(taxableIncome, 1500000) - 1200000) * 0.2;
  if (taxableIncome > 900000) tax += (Math.min(taxableIncome, 1200000) - 900000) * 0.15;
  if (taxableIncome > 600000) tax += (Math.min(taxableIncome, 900000) - 600000) * 0.1;
  if (taxableIncome > 300000) tax += (Math.min(taxableIncome, 600000) - 300000) * 0.05;
  const rebate = taxableIncome <= 700000 ? tax : 0;
  const netTax = Math.max(0, tax - rebate);
  return { taxableIncome, tax: netTax, cess: netTax * 0.04, total: netTax + netTax * 0.04 };
}

export default function TaxCalculatorTool() {
  const [income, setIncome] = useState(600000);
  const [sec80c, setSec80c] = useState(100000);
  const [hra, setHra] = useState(60000);
  const [nps, setNps] = useState(30000);
  const [others, setOthers] = useState(20000);

  const oldResult = calcOldRegime(income, { sec80c, hra, nps, others });
  const newResult = calcNewRegime(income);
  const savings = newResult.total - oldResult.total;
  const betterRegime = savings > 0 ? "old" : "new";

  const slabs = [
    { range: "Up to ₹2.5 Lakh", oldRate: "NIL", newRate: "NIL" },
    { range: "₹2.5L – ₹3L", oldRate: "5%", newRate: "NIL (New 2024)" },
    { range: "₹3L – ₹6L", oldRate: "5%", newRate: "5%" },
    { range: "₹6L – ₹7L", oldRate: "20%", newRate: "5%" },
    { range: "₹7L – ₹9L", oldRate: "20%", newRate: "10%" },
    { range: "₹9L – ₹10L", oldRate: "20%", newRate: "15%" },
    { range: "₹10L – ₹12L", oldRate: "30%", newRate: "15%" },
    { range: "₹12L – ₹15L", oldRate: "30%", newRate: "20%" },
    { range: "Above ₹15 Lakh", oldRate: "30%", newRate: "30%" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-white">
      {/* Hero */}
      <div
        style={{ background: "linear-gradient(135deg, #0e7490 0%, #0891b2 50%, #1a56db 100%)" }}
        className="py-12 px-4"
      >
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 px-4 py-1.5 rounded-full text-sm mb-4">
            <FileText className="w-4 h-4" />
            Income Tax Calculator FY 2025-26
          </div>
          <h1 className="text-3xl md:text-4xl font-black mb-3">Tax Calculator 🧾</h1>
          <p className="text-cyan-100 text-lg max-w-xl mx-auto">
            Compare Old vs New Tax Regime instantly. Find which one saves you more money.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Input */}
          <div className="space-y-5">
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              <h3 className="font-bold text-slate-900 text-xl mb-5">Your Income Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    Annual Income (CTC / Gross)
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 font-bold">₹</span>
                    <input
                      type="number"
                      value={income}
                      onChange={(e) => setIncome(Number(e.target.value))}
                      className="input-premium pl-8"
                    />
                  </div>
                  <input
                    type="range"
                    min={300000}
                    max={3000000}
                    step={50000}
                    value={income}
                    onChange={(e) => setIncome(Number(e.target.value))}
                    className="w-full mt-2"
                  />
                  <div className="flex justify-between text-xs text-slate-400">
                    <span>₹3L</span><span>₹30L</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <p className="text-sm font-bold text-slate-700 mb-3">Deductions (Old Regime only)</p>
                  {[
                    { label: "Section 80C (PF, ELSS, LIC)", value: sec80c, setter: setSec80c, max: 150000 },
                    { label: "HRA Exemption", value: hra, setter: setHra, max: 300000 },
                    { label: "NPS Contribution (80CCD)", value: nps, setter: setNps, max: 50000 },
                    { label: "Other Deductions (80D, etc.)", value: others, setter: setOthers, max: 100000 },
                  ].map((item) => (
                    <div key={item.label} className="mb-3">
                      <div className="flex justify-between mb-1">
                        <label className="text-xs font-medium text-slate-600">{item.label}</label>
                        <span className="text-xs font-bold text-cyan-600">₹{item.value.toLocaleString()}</span>
                      </div>
                      <div className="relative">
                        <span className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-bold">₹</span>
                        <input
                          type="number"
                          value={item.value}
                          onChange={(e) => item.setter(Math.min(Number(e.target.value), item.max))}
                          className="input-premium pl-6 py-2 text-sm"
                          max={item.max}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="lg:col-span-2 space-y-5">
            {/* Winner banner */}
            <div
              className={`rounded-2xl p-5 ${
                betterRegime === "old"
                  ? "bg-gradient-to-r from-blue-600 to-cyan-600"
                  : "bg-gradient-to-r from-emerald-600 to-teal-600"
              } text-white`}
            >
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-white" />
                <div>
                  <p className="text-white/70 text-sm">Better for You:</p>
                  <p className="text-2xl font-black">
                    {betterRegime === "old" ? "Old Tax Regime" : "New Tax Regime"} saves you more!
                  </p>
                  <p className="text-white/80">
                    You save{" "}
                    <strong className="text-yellow-300">
                      ₹{Math.abs(savings).toLocaleString("en-IN")}
                    </strong>{" "}
                    per year with the {betterRegime} regime
                  </p>
                </div>
              </div>
            </div>

            {/* Side-by-side comparison */}
            <div className="grid sm:grid-cols-2 gap-4">
              {/* Old Regime */}
              <div className={`rounded-2xl p-5 border-2 ${betterRegime === "old" ? "border-blue-400 bg-blue-50" : "bg-white border-slate-100"}`}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-slate-900 text-lg">Old Regime</h4>
                  {betterRegime === "old" && (
                    <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">✓ Better</span>
                  )}
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: "Gross Income", value: income },
                    { label: "Total Deductions", value: Math.min(sec80c, 150000) + hra + Math.min(nps, 50000) + others + 50000 },
                    { label: "Taxable Income", value: oldResult.taxableIncome },
                    { label: "Base Tax", value: oldResult.tax },
                    { label: "Cess (4%)", value: oldResult.cess },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between text-sm">
                      <span className="text-slate-600">{item.label}</span>
                      <span className="font-semibold text-slate-900">₹{Math.round(item.value).toLocaleString("en-IN")}</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 flex justify-between">
                    <span className="font-bold text-slate-900">Total Tax Payable</span>
                    <span className="text-xl font-black text-blue-700">₹{Math.round(oldResult.total).toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>

              {/* New Regime */}
              <div className={`rounded-2xl p-5 border-2 ${betterRegime === "new" ? "border-emerald-400 bg-emerald-50" : "bg-white border-slate-100"}`}>
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-bold text-slate-900 text-lg">New Regime</h4>
                  {betterRegime === "new" && (
                    <span className="bg-emerald-500 text-white text-xs font-bold px-2 py-1 rounded-full">✓ Better</span>
                  )}
                </div>
                <div className="space-y-2.5">
                  {[
                    { label: "Gross Income", value: income },
                    { label: "Standard Deduction", value: 75000 },
                    { label: "Taxable Income", value: newResult.taxableIncome },
                    { label: "Base Tax", value: newResult.tax },
                    { label: "Cess (4%)", value: newResult.cess },
                  ].map((item) => (
                    <div key={item.label} className="flex justify-between text-sm">
                      <span className="text-slate-600">{item.label}</span>
                      <span className="font-semibold text-slate-900">₹{Math.round(item.value).toLocaleString("en-IN")}</span>
                    </div>
                  ))}
                  <div className="border-t pt-2 flex justify-between">
                    <span className="font-bold text-slate-900">Total Tax Payable</span>
                    <span className="text-xl font-black text-emerald-700">₹{Math.round(newResult.total).toLocaleString("en-IN")}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Tax Slabs */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100">
              <h3 className="font-bold text-slate-900 text-lg mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-cyan-600" />
                FY 2025-26 Tax Slab Comparison
              </h3>
              <div className="table-responsive">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-50">
                      <th className="text-left p-2.5 rounded-l-lg text-slate-600 font-semibold">Income Range</th>
                      <th className="text-center p-2.5 text-blue-600 font-semibold">Old Regime</th>
                      <th className="text-center p-2.5 rounded-r-lg text-emerald-600 font-semibold">New Regime</th>
                    </tr>
                  </thead>
                  <tbody>
                    {slabs.map((slab, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                        <td className="p-2.5 text-slate-700">{slab.range}</td>
                        <td className="p-2.5 text-center text-blue-700 font-semibold">{slab.oldRate}</td>
                        <td className="p-2.5 text-center text-emerald-700 font-semibold">{slab.newRate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-4 bg-yellow-50 border border-yellow-100 rounded-xl p-3">
                <p className="text-yellow-800 text-sm">
                  💡 <strong>Key Difference:</strong> Old Regime allows deductions (80C, HRA, etc.) but has higher slab rates. New Regime has lower rates but no major deductions. Choose based on your deductions!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
