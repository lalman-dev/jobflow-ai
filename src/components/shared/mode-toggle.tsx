"use client";

import { useTheme } from "next-themes";
import { Button } from "@/src/components/ui/button";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div className="flex gap-2">
      <Button variant="outline" onClick={() => setTheme("light")}>
        Light
      </Button>
      <Button variant="outline" onClick={() => setTheme("dark")}>
        Dark
      </Button>
    </div>
  );
}
