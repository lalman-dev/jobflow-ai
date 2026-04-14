"use client";

import Link from "next/link";
import { LayoutDashboard, Briefcase, Sparkles, MessageSquare } from "lucide-react";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Applications", href: "/applications", icon: Briefcase },
  { name: "AI Assistant", href: "/ai", icon: Sparkles },
  { name: "Recruiter Chat", href: "/chat", icon: MessageSquare },
];

export function Sidebar() {
  return (
    <aside className="w-64 border-r bg-muted/50 backdrop-blur">
      <div className="p-6 text-xl font-semibold">JobFlow AI</div>

      <nav className="space-y-2 px-4">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm hover:bg-accent transition"
          >
            <item.icon className="h-4 w-4" />
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}