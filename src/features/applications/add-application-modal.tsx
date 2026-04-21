"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/src/components/ui/dialog";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useApplicationStore } from "@/store/useApplicationStore";

import { Application } from "@/src/types/application";

type Props = {
  mode?: "create" | "edit";
  initialData?: Application;
  trigger?: React.ReactNode;
};

export function AddApplicationModal({
  mode = "create",
  initialData,
  trigger,
}: Props) {
  const addApplication = useApplicationStore((state) => state.addApplication);
  const updateApplication = useApplicationStore(
    (state) => state.updateApplication,
  );

  const [company, setCompany] = useState(initialData?.company || "");

  const [role, setRole] = useState(initialData?.role || "");

  const [status, setStatus] = useState<"applied" | "interview" | "rejected">(
    initialData?.status || "applied",
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (mode === "edit") {
      updateApplication({
        ...initialData,
        company,
        role,
        status,
      });
    } else {
      addApplication({
        id: crypto.randomUUID(),
        company,
        role,
        status,
        date: "Today",
      });
    }

    setCompany("");
    setRole("");
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          {" "}
          <Plus />
          Add Application
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{mode==="edit"
   ? "Edit Application"
   : "Add Application"}</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input value={company} onChange={(e) => setCompany(e.target.value)} />

          <Input value={role} onChange={(e) => setRole(e.target.value)} />

          <div>
            <Label>Status</Label>
            <Select
              value={status}
              onValueChange={(value) =>
                setStatus(value as "applied" | "interview" | "rejected")
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Select status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="applied">Applied</SelectItem>
                <SelectItem value="interview">Interview</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button className="w-full">Save Application</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
