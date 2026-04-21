import { create } from "zustand";
import { Application } from "@/src/types/application";

type AppState = {
  applications: Application[];

  addApplication: (app: Application) => void;

  deleteApplication: (id: string) => void;

  updateApplication: (updated: Application) => void;
};

export const useApplicationStore = create<AppState>((set) => ({
  applications: [],

  addApplication: (app) =>
    set((state) => ({
      applications: [app, ...state.applications],
    })),

  deleteApplication: (id) =>
    set((state) => ({
      applications: state.applications.filter((app) => app.id !== id),
    })),

  updateApplication: (updated) =>
    set((state) => ({
      applications: state.applications.map((app) =>
        app.id === updated.id ? updated : app,
      ),
    })),
}));
