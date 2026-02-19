export const dashboardStats = {
  totalProjects: { value: 24, change: 6 },
  totalTasks: { value: 186, change: 24 },
  inReviews: { value: 14, change: 4 },
  completedTasks: { value: 128, change: 19 },
};

export const performanceScore = 92;
export const performanceChange = 8;

export const performanceChartData = [
  { day: "Mon", value: 74 },
  { day: "Tue", value: 81 },
  { day: "Wed", value: 89 },
  { day: "Thu", value: 93 },
  { day: "Fri", value: 90 },
  { day: "Sat", value: 86 },
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
    name: "Publish revised syllabus notes",
    projectId: "p1",
    projectName: "Computer Science 201",
    projectColor: "blue",
    dueDate: "20 Feb 2026",
  },
  {
    id: "2",
    name: "Approve teaching assistant schedule",
    projectId: "p2",
    projectName: "TA Coordination",
    projectColor: "violet",
    dueDate: "21 Feb 2026",
  },
  {
    id: "3",
    name: "Upload week-5 lab rubric",
    projectId: "p3",
    projectName: "Lab Program",
    projectColor: "cyan",
    dueDate: "21 Feb 2026",
  },
  {
    id: "4",
    name: "Finalize advisor office hours",
    projectId: "p4",
    projectName: "Student Support",
    projectColor: "pink",
    dueDate: "22 Feb 2026",
  },
  {
    id: "5",
    name: "Lock exam room assignments",
    projectId: "p5",
    projectName: "Midterm Planning",
    projectColor: "amber",
    dueDate: "22 Feb 2026",
  },
];

const projectSeeds: Omit<Project, "id">[] = [
  { name: "Computer Science 201", color: "blue", status: "in_progress", progress: 78, totalTasks: 32, completedTasks: 25, dueDate: "24 Feb 2026", ownerName: "Prof. Miles", ownerAvatarSeed: "miles" },
  { name: "TA Coordination", color: "violet", status: "in_progress", progress: 66, totalTasks: 18, completedTasks: 12, dueDate: "25 Feb 2026", ownerName: "Dr. Nina", ownerAvatarSeed: "nina" },
  { name: "Lab Program", color: "cyan", status: "in_progress", progress: 71, totalTasks: 21, completedTasks: 15, dueDate: "27 Feb 2026", ownerName: "Prof. Owen", ownerAvatarSeed: "owen" },
  { name: "Student Support", color: "pink", status: "in_progress", progress: 58, totalTasks: 17, completedTasks: 10, dueDate: "01 Mar 2026", ownerName: "Dean Harper", ownerAvatarSeed: "harper" },
  { name: "Midterm Planning", color: "amber", status: "on_hold", progress: 31, totalTasks: 15, completedTasks: 4, dueDate: "03 Mar 2026", ownerName: "Dr. Sato", ownerAvatarSeed: "sato" },
  { name: "Admissions Outreach", color: "blue", status: "in_progress", progress: 64, totalTasks: 24, completedTasks: 16, dueDate: "06 Mar 2026", ownerName: "R. Collins", ownerAvatarSeed: "collins" },
  { name: "Accreditation Audit", color: "violet", status: "completed", progress: 100, totalTasks: 12, completedTasks: 12, dueDate: "18 Feb 2026", ownerName: "L. Grant", ownerAvatarSeed: "grant" },
  { name: "Career Fair Prep", color: "cyan", status: "in_progress", progress: 60, totalTasks: 20, completedTasks: 12, dueDate: "02 Mar 2026", ownerName: "M. Price", ownerAvatarSeed: "price" },
  { name: "Library Digitization", color: "pink", status: "on_hold", progress: 26, totalTasks: 19, completedTasks: 5, dueDate: "10 Mar 2026", ownerName: "A. Rivera", ownerAvatarSeed: "rivera" },
  { name: "Course Catalog Refresh", color: "amber", status: "completed", progress: 100, totalTasks: 11, completedTasks: 11, dueDate: "17 Feb 2026", ownerName: "J. Kim", ownerAvatarSeed: "kim" },
  { name: "Faculty Onboarding", color: "blue", status: "in_progress", progress: 75, totalTasks: 14, completedTasks: 11, dueDate: "01 Mar 2026", ownerName: "P. Noor", ownerAvatarSeed: "noor" },
  { name: "Peer Tutoring", color: "violet", status: "in_progress", progress: 63, totalTasks: 16, completedTasks: 10, dueDate: "04 Mar 2026", ownerName: "E. Brooks", ownerAvatarSeed: "brooks" },
  { name: "Exam Proctoring", color: "cyan", status: "completed", progress: 100, totalTasks: 9, completedTasks: 9, dueDate: "16 Feb 2026", ownerName: "C. Walsh", ownerAvatarSeed: "walsh" },
  { name: "Scholarship Review", color: "pink", status: "in_progress", progress: 55, totalTasks: 22, completedTasks: 12, dueDate: "08 Mar 2026", ownerName: "T. Ali", ownerAvatarSeed: "ali" },
  { name: "Alumni Mentorship", color: "amber", status: "on_hold", progress: 24, totalTasks: 13, completedTasks: 3, dueDate: "12 Mar 2026", ownerName: "D. West", ownerAvatarSeed: "west" },
];

export const projects: Project[] = projectSeeds.map((p, i) => ({ ...p, id: `p${i + 1}` }));

export const welcomeSummary = {
  userName: "Connor",
  tasksDueToday: 8,
  overdueTasks: 2,
  upcomingDeadlines: 13,
};

export const lastUpdated = "18 Feb 2026";
