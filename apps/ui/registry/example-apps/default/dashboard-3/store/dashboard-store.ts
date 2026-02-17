import { create } from "zustand";
import type { ProjectStatus } from "../mock-data/dashboard";

interface DashboardStore {
  tasksSearchQuery: string;
  tasksProjectFilter: string[];
  projectsSearchQuery: string;
  projectStatusFilter: ProjectStatus | "all";
  setTasksSearchQuery: (query: string) => void;
  setTasksProjectFilter: (projectIds: string[]) => void;
  toggleTasksProjectFilter: (projectId: string) => void;
  setProjectsSearchQuery: (query: string) => void;
  setProjectStatusFilter: (filter: ProjectStatus | "all") => void;
  clearFilters: () => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  tasksSearchQuery: "",
  tasksProjectFilter: [],
  projectsSearchQuery: "",
  projectStatusFilter: "all",
  setTasksSearchQuery: (query) => set({ tasksSearchQuery: query }),
  setTasksProjectFilter: (projectIds) => set({ tasksProjectFilter: projectIds }),
  toggleTasksProjectFilter: (projectId) =>
    set((state) => ({
      tasksProjectFilter: state.tasksProjectFilter.includes(projectId)
        ? state.tasksProjectFilter.filter((id) => id !== projectId)
        : [...state.tasksProjectFilter, projectId],
    })),
  setProjectsSearchQuery: (query) => set({ projectsSearchQuery: query }),
  setProjectStatusFilter: (filter) => set({ projectStatusFilter: filter }),
  clearFilters: () =>
    set({
      tasksSearchQuery: "",
      tasksProjectFilter: [],
      projectsSearchQuery: "",
      projectStatusFilter: "all",
    }),
}));
