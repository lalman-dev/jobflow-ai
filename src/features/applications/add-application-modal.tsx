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

export function AddApplicationModal() {
  const addApplication = useApplicationStore((state) => state.addApplication);

  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState<"applied" | "interview" | "rejected">(
    "applied",
  );

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    addApplication({
      id: crypto.randomUUID(),
      company,
      role,
      status,
      date: "Today",
    });

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
          <DialogTitle>Add Application</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input value={company} onChange={(e) => setCompany(e.target.value)} />

          <Input value={role} onChange={(e) => setRole(e.target.value)} />

          <div>
            <Label>Status</Label>
            <Select>
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
