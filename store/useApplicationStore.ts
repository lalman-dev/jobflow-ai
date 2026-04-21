import { create } from "zustand";
import { Application } from "@/src/types/application";

type AppState = {
  applications: Application[];
  addApplication: (app: Application) => void;
};

export const useApplicationStore = create<AppState>((set) => ({
  applications: [],
  
  addApplication: (app) =>
    set((state) => ({
      applications: [app, ...state.applications],
    })),
}));