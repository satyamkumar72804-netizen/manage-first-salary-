"use client";

import { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, Sparkles, TrendingUp, Shield, Calculator } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const responses: Record<string, string> = {
  "default": "I'm your SmartSalary AI Assistant. How can I help you manage your first salary today? You can ask about budgeting, SIP, taxes, or emergency funds.",
  "budget": "The best way to start is the 50/30/20 rule. 50% for Needs, 30% for Wants, and 20% for Savings. Use our Salary Planner tool to see your exact breakdown!",
  "sip": "A Systematic Investment Plan (SIP) allows you to invest a fixed amount regularly. Even ₹1000/month can grow significantly over 10-20 years due to compounding.",
  "tax": "For most freshers earning up to ₹7-8 Lakhs, the New Tax Regime is often better because of the higher rebate limit. Check out our Tax Calculator to compare!",
  "emergency": "You should aim to save 3-6 months of your essential expenses in an Emergency Fund before you start aggressive investing. This is your safety net.",
  "hi": "Namaste! I am your SmartSalary AI. How can I help you secure your financial future today?",
  "hello": "Hello! Ready to make some smart financial moves today?",
  "debt": "Avoid high-interest debt like credit card rollovers. If you have multiple loans, try the 'Debt Snowball' method — pay off the smallest debt first for motivation!",
  "investment": "For beginners, Index Funds or Blue-chip Mutual Funds are great starting points. Always diversify and think long-term.",
};

export default function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Namaste! 🙏 I am your SmartSalary AI Assistant. Apni first salary ko manage karne mein main aapki kya madad kar sakta hoon?" },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = input.toLowerCase();
    setMessages((prev) => [...prev, { role: "user", text: input }]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = responses.default;
      if (userMsg.includes("budget") || userMsg.includes("salary")) botResponse = responses.budget;
      else if (userMsg.includes("sip") || userMsg.includes("invest")) botResponse = responses.sip;
      else if (userMsg.includes("tax")) botResponse = responses.tax;
      else if (userMsg.includes("emergency") || userMsg.includes("save")) botResponse = responses.emergency;
      else if (userMsg.includes("hi") || userMsg.includes("hello")) botResponse = responses.hi;
      else if (userMsg.includes("debt") || userMsg.includes("loan")) botResponse = responses.debt;
      else if (userMsg.includes("investment")) botResponse = responses.investment;

      setMessages((prev) => [...prev, { role: "bot", text: botResponse }]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="bg-white rounded-3xl shadow-2xl border border-slate-200 w-[350px] sm:w-[400px] overflow-hidden mb-4 flex flex-col h-[500px]"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-5 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-bold">SmartSalary AI</p>
                  <p className="text-[10px] text-blue-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                    Online & Ready to Help
                  </p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-1.5 rounded-lg transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-3.5 rounded-2xl text-sm ${
                    m.role === "user" 
                      ? "bg-blue-600 text-white rounded-tr-none" 
                      : "bg-white border border-slate-100 text-slate-700 shadow-sm rounded-tl-none"
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-100 p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-slate-300 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
            </div>

            {/* Quick Suggestions */}
            <div className="px-4 py-2 bg-slate-50 border-t border-slate-100 flex gap-2 overflow-x-auto scrollbar-hide">
              {[
                { text: "Budget Tips", icon: Sparkles },
                { text: "SIP Meaning", icon: TrendingUp },
                { text: "Emergency Fund", icon: Shield },
                { text: "Tax Help", icon: Calculator },
              ].map((s) => (
                <button
                  key={s.text}
                  onClick={() => { setInput(s.text); }}
                  className="whitespace-nowrap bg-white border border-slate-200 px-3 py-1.5 rounded-full text-xs font-semibold text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-all flex items-center gap-1.5"
                >
                  <s.icon className="w-3 h-3" />
                  {s.text}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-4 bg-white border-t border-slate-100 flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                placeholder="Ask me anything about money..."
                className="flex-1 bg-slate-100 border-none rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-blue-500 outline-none"
              />
              <button
                onClick={handleSend}
                className="bg-blue-600 text-white p-2.5 rounded-xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-2xl flex items-center justify-center hover:scale-110 transition-transform active:scale-95 group relative"
      >
        <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20 group-hover:hidden"></div>
        {isOpen ? <X className="w-8 h-8" /> : <MessageSquare className="w-8 h-8" />}
      </button>
    </div>
  );
}
