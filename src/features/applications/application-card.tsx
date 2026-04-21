import { Card, CardContent } from "@/src/components/ui/card";
import { Badge } from "@/src/components/ui/badge";
import { MoreHorizontal } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { useApplicationStore } from "@/store/useApplicationStore";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";

export function ApplicationCard({ app }: any) {
  const deleteApplication = useApplicationStore(
    (state) => state.deleteApplication,
  );

  return (
    <Card className="rounded-2xl border border-border/50 bg-background/60 backdrop-blur hover:shadow-md transition">
      <CardContent className="p-5 flex items-center justify-between">
        {/* Left */}
        <div className="space-y-1">
          <h3 className="font-semibold text-lg">{app.role}</h3>
          <p className="text-sm text-muted-foreground">{app.company}</p>

          <div className="flex items-center gap-2 mt-2">
            <Badge variant="secondary">{app.status}</Badge>
            <span className="text-xs text-muted-foreground">
              Applied {app.date}
            </span>
          </div>
        </div>

        {/* Right */}
        <Button variant="ghost" size="icon">
          <MoreHorizontal className="h-4 w-4" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent align="end">
            <DropdownMenuItem>Edit</DropdownMenuItem>

            <DropdownMenuItem
              onClick={() => deleteApplication(app.id)}
              className="text-red-500"
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardContent>
    </Card>
  );
}
