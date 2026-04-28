import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "SmartSalary Hub – Apni First Salary Se Smart Future Banao",
  description:
    "SmartSalary Hub helps freshers and first-job employees manage salary, build savings, invest smartly, avoid debt, and secure their future from day one.",
  keywords:
    "salary planner, financial planning, first job, SIP calculator, expense tracker, tax calculator, emergency fund, goal planner",
  openGraph: {
    title: "SmartSalary Hub – Smart Financial Planning for First Job Employees",
    description:
      "Manage salary, build savings, invest smartly, and secure your future from day one.",
    type: "website",
  },
};

import FloatingChatbot from "@/components/FloatingChatbot";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <FloatingChatbot />
      </body>
    </html>
  );
}
