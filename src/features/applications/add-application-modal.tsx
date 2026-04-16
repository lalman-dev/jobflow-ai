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

export function AddApplicationModal() {
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

        <form className="space-y-4">
          <div>
            <Label>Company</Label>
            <Input placeholder="Google" />
          </div>

          <div>
            <Label>Role</Label>
            <Input placeholder="Frontend Developer" />
          </div>

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
