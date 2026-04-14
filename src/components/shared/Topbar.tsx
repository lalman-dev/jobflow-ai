"use client";

import { ModeToggle } from "./mode-toggle";

export function Topbar() {
  return (
    <div className="flex h-16 items-center justify-between border-b px-6">
      <h1 className="text-lg font-semibold">Dashboard</h1>
      <ModeToggle />
    </div>
  );
}
