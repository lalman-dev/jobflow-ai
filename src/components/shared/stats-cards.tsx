import { Card, CardContent } from "../ui/card";
import { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string;
  icon: LucideIcon;
  description?: string;
}

export function StatsCard({ title, value, icon: Icon, description }: Props) {
  return (
    <Card className="rounded-2xl border border-border/50 bg-muted/50 backdrop-blur-xl shadow-sm hover:shadow-md transition-all">
      <CardContent className="p-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>
          <h3 className="text-2xl font-semibold tracking-tight mt-1">
            {value}
          </h3>
          {description && (
            <p className="text-xs text-muted-foreground mt-1">{description}</p>
          )}
        </div>
        <div className="p-2 rounded-xl bg-muted/50 border border-border/50">
          <Icon className="h-5 w-5 text-muted-foreground" />
        </div>
      </CardContent>
    </Card>
  );
}
