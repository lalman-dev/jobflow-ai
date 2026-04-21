"use client";

import { AddApplicationModal } from "@/src/features/applications/add-application-modal";
import { ApplicationCard } from "@/src/features/applications/application-card";
import { useApplicationStore } from "@/store/useApplicationStore";

export default function ApplicationsPage() {
  const applications = useApplicationStore((state) => state.applications);

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-semibold">Applications</h2>
          <p className="text-muted-foreground">
            Track and manage your job applications
          </p>
        </div>
        <div className="border rounded-xl">
          <AddApplicationModal />
        </div>
      </div>

      {/* Content */}
      {applications.length === 0 ? (
        <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed bg-muted/50 p-16 text-center">
          <h3 className="text-lg font-semibold">No applications yet</h3>
          <p className="text-muted-foreground mt-2">
            Start tracking your job search 🚀
          </p>
        </div>
      ) : (
        <div className="grid gap-4">
          {applications.map((app) => (
            <ApplicationCard key={app.id} app={app} />
          ))}
        </div>
      )}
    </div>
  );
}
