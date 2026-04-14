import { ReactNode } from "react";
import { Sidebar } from "@/src/components/shared/Sidebar";
import { Topbar } from "@/src/components/shared/Topbar";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen bg-gradient-to-br from-background via-muted/10 to-background">
      <Sidebar />
      <div className="flex flex-1 flex-col">
        <Topbar />
        <main className="flex-1 p-6 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
