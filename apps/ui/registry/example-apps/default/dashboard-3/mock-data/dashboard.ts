export const dashboardStats = {
  totalProjects: { value: 15, change: 5 },
  totalTasks: { value: 10, change: 2 },
  inReviews: { value: 23, change: 12 },
  completedTasks: { value: 50, change: 15 },
};

export const performanceScore = 86;
export const performanceChange = 15;

export const performanceChartData = [
  { day: "Mon", value: 78 },
  { day: "Tue", value: 82 },
  { day: "Wed", value: 92 },
  { day: "Thu", value: 85 },
  { day: "Fri", value: 88 },
  { day: "Sat", value: 80 },
].map((d, i, arr) => {
  const isMax = d.value === Math.max(...arr.map((x) => x.value));
  return { ...d, isHighlight: isMax };
});

export type ProjectStatus = "in_progress" | "completed" | "on_hold";

export interface TodayTask {
  id: string;
  name: string;
  projectId: string;
  projectName: string;
  projectColor: string;
  dueDate: string;
}

export interface Project {
  id: string;
  name: string;
  color: string;
  status: ProjectStatus;
  progress: number;
  totalTasks: number;
  completedTasks: number;
  dueDate: string;
  ownerName: string;
  ownerAvatarSeed: string;
}

export const todayTasks: TodayTask[] = [
  {
    id: "1",
    name: "Prepare Q2 report",
    projectId: "p1",
    projectName: "Fintech Project",
    projectColor: "blue",
    dueDate: "12 Mar 2024",
  },
  {
    id: "2",
    name: "Review design mockups",
    projectId: "p2",
    projectName: "Design System",
    projectColor: "violet",
    dueDate: "14 Mar 2024",
  },
  {
    id: "3",
    name: "Update API documentation",
    projectId: "p3",
    projectName: "Backend API",
    projectColor: "cyan",
    dueDate: "15 Mar 2024",
  },
  {
    id: "4",
    name: "Fix login flow bug",
    projectId: "p1",
    projectName: "Fintech Project",
    projectColor: "blue",
    dueDate: "12 Mar 2024",
  },
  {
    id: "5",
    name: "Schedule team sync",
    projectId: "p4",
    projectName: "Marketing",
    projectColor: "pink",
    dueDate: "16 Mar 2024",
  },
];

const projectSeeds: Omit<Project, "id">[] = [
  { name: "Fintech Project", color: "blue", status: "in_progress", progress: 70, totalTasks: 20, completedTasks: 14, dueDate: "12 Mar 2024", ownerName: "Michael M.", ownerAvatarSeed: "michael" },
  { name: "Design System", color: "violet", status: "in_progress", progress: 45, totalTasks: 15, completedTasks: 7, dueDate: "20 Mar 2024", ownerName: "Sarah K.", ownerAvatarSeed: "sarah" },
  { name: "Backend API", color: "cyan", status: "completed", progress: 100, totalTasks: 12, completedTasks: 12, dueDate: "10 Mar 2024", ownerName: "James L.", ownerAvatarSeed: "james" },
  { name: "Marketing", color: "pink", status: "on_hold", progress: 30, totalTasks: 8, completedTasks: 2, dueDate: "25 Mar 2024", ownerName: "Emily R.", ownerAvatarSeed: "emily" },
  { name: "Mobile App", color: "amber", status: "in_progress", progress: 60, totalTasks: 25, completedTasks: 15, dueDate: "18 Mar 2024", ownerName: "David T.", ownerAvatarSeed: "david" },
  { name: "Brodo Redesign", color: "blue", status: "in_progress", progress: 55, totalTasks: 18, completedTasks: 10, dueDate: "22 Mar 2024", ownerName: "Alex P.", ownerAvatarSeed: "alex" },
  { name: "HR Setup", color: "violet", status: "completed", progress: 100, totalTasks: 10, completedTasks: 10, dueDate: "08 Mar 2024", ownerName: "Jordan L.", ownerAvatarSeed: "jordan" },
  { name: "Data Pipeline", color: "cyan", status: "in_progress", progress: 80, totalTasks: 14, completedTasks: 11, dueDate: "15 Mar 2024", ownerName: "Sam R.", ownerAvatarSeed: "sam" },
  { name: "Customer Portal", color: "pink", status: "on_hold", progress: 25, totalTasks: 22, completedTasks: 5, dueDate: "30 Mar 2024", ownerName: "Morgan K.", ownerAvatarSeed: "morgan" },
  { name: "API Gateway", color: "amber", status: "in_progress", progress: 90, totalTasks: 8, completedTasks: 7, dueDate: "14 Mar 2024", ownerName: "Casey M.", ownerAvatarSeed: "casey" },
  { name: "Dashboard v2", color: "blue", status: "in_progress", progress: 40, totalTasks: 30, completedTasks: 12, dueDate: "28 Mar 2024", ownerName: "Taylor W.", ownerAvatarSeed: "taylor" },
  { name: "Auth Service", color: "violet", status: "completed", progress: 100, totalTasks: 6, completedTasks: 6, dueDate: "05 Mar 2024", ownerName: "Riley B.", ownerAvatarSeed: "riley" },
  { name: "Email Campaign", color: "pink", status: "on_hold", progress: 15, totalTasks: 12, completedTasks: 2, dueDate: "02 Apr 2024", ownerName: "Quinn F.", ownerAvatarSeed: "quinn" },
  { name: "Docs Site", color: "cyan", status: "in_progress", progress: 65, totalTasks: 16, completedTasks: 10, dueDate: "19 Mar 2024", ownerName: "Avery S.", ownerAvatarSeed: "avery" },
  { name: "Payment Flow", color: "amber", status: "in_progress", progress: 75, totalTasks: 11, completedTasks: 8, dueDate: "21 Mar 2024", ownerName: "Reese N.", ownerAvatarSeed: "reese" },
  { name: "Onboarding", color: "blue", status: "completed", progress: 100, totalTasks: 9, completedTasks: 9, dueDate: "11 Mar 2024", ownerName: "Parker D.", ownerAvatarSeed: "parker" },
  { name: "Analytics", color: "violet", status: "in_progress", progress: 50, totalTasks: 20, completedTasks: 10, dueDate: "24 Mar 2024", ownerName: "Drew H.", ownerAvatarSeed: "drew" },
  { name: "Notifications", color: "cyan", status: "on_hold", progress: 35, totalTasks: 7, completedTasks: 2, dueDate: "05 Apr 2024", ownerName: "Blake J.", ownerAvatarSeed: "blake" },
  { name: "Search Index", color: "pink", status: "in_progress", progress: 85, totalTasks: 13, completedTasks: 11, dueDate: "16 Mar 2024", ownerName: "Cameron T.", ownerAvatarSeed: "cameron" },
  { name: "Reporting", color: "amber", status: "completed", progress: 100, totalTasks: 15, completedTasks: 15, dueDate: "09 Mar 2024", ownerName: "Jamie V.", ownerAvatarSeed: "jamie" },
];

export const projects: Project[] = projectSeeds.map((p, i) => ({ ...p, id: `p${i + 1}` }));

export const welcomeSummary = {
  userName: "Connor",
  tasksDueToday: 4,
  overdueTasks: 2,
  upcomingDeadlines: 8,
};

export const lastUpdated = "12 May 2025";
