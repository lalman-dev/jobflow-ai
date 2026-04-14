"use client";

import { ModeToggle } from "./mode-toggle";

export function Topbar() {
  return (
    <div className="flex h-16 items-center justify-between border-b border-border/50 bg-muted/50 backdrop-blur px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <ModeToggle />
    </div>
  );
}
