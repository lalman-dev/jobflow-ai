import { StatsCard } from "@/src/components/shared/stats-cards";
import { Briefcase, TrendingUp, MessageSquare } from "lucide-react";

export default function DashboardPage() {
  const hasData = false;
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Welcome back 👋</h2>
        <p className="text-muted-foreground">
          Track your progress and stay consistent.
        </p>
      </div>
      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <StatsCard
          title="Application"
          value="12"
          icon={Briefcase}
          description="+2 this week"
        />
        <StatsCard
          title="Response Rate"
          value="25%"
          icon={TrendingUp}
          description="Improving"
        />
        <StatsCard
          title="Interviews"
          value="3"
          icon={MessageSquare}
          description="Keep going 💪🏻"
        />
      </div>
      {/* Main section */}
      {!hasData ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed p-12 text-center">
          <h3 className="text-lg font-semibold">No applications yet</h3>
          <p className="text-muted-foreground mt-2">
            Let’s land your first one 🚀
          </p>
        </div>
      ) : (
        <div className="rounded-2xl border p-6">
          Activity / charts will go here
        </div>
      )}
    </div>
  );
}
