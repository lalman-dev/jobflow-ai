"use client";

import { StatsCard } from "@/src/components/shared/stats-cards";
import { Briefcase, TrendingUp, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function DashboardPage() {
  const hasData = false;

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold tracking-tight">
          Welcome back 👋
        </h2>
        <p className="text-muted-foreground">
          Track your progress and stay consistent.
        </p>
      </div>

      {/* Stats */}
      <div className="grid gap-5 md:grid-cols-3">
        {[
          {
            title: "Applications",
            value: "12",
            icon: Briefcase,
            desc: "+2 this week",
          },
          {
            title: "Response Rate",
            value: "25%",
            icon: TrendingUp,
            desc: "Improving",
          },
          {
            title: "Interviews",
            value: "3",
            icon: MessageSquare,
            desc: "Keep going 💪",
          },
        ].map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <StatsCard
              title={item.title}
              value={item.value}
              icon={item.icon}
              description={item.desc}
            />
          </motion.div>
        ))}
      </div>

      {/* Main Section */}
      {!hasData ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center rounded-2xl border border-dashed bg-muted/50 p-16 text-center"
        >
          <h3 className="text-lg font-semibold">No applications yet</h3>
          <p className="text-muted-foreground mt-2">
            Let’s land your first one 🚀
          </p>
        </motion.div>
      ) : (
        <div className="rounded-2xl border p-6 bg-background/50">
          Charts coming soon
        </div>
      )}
    </div>
  );
}
