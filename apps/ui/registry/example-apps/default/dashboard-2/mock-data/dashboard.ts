export type LeadType = "cold" | "warm";
export type LeadStatus = "closed" | "lost";
export type LeadSource =
  | "linkedin"
  | "google"
  | "referral"
  | "website"
  | "cold-call";

export interface Lead {
  id: string;
  name: string;
  avatar: string;
  type: LeadType;
  email: string;
  followUp: string;
  status: LeadStatus;
  website: string;
  score: number;
  source: LeadSource;
}

export interface TopPerformer {
  id: string;
  name: string;
  avatar: string;
  score: number;
  icon: "star" | "user";
}

export const dashboardStats = {
  generatedRevenue: {
    value: "$9.4M",
    change: 14,
  },
  signedClients: {
    value: "38",
    change: 10,
  },
  totalLeads: {
    value: "712",
    change: 8,
  },
  teamMembers: {
    value: "16",
    activeCount: 12,
  },
};

export const leadsChartDataWeek = [
  { date: "Mon", line1: 55, line2: 74, line3: 88, line4: 110 },
  { date: "Tue", line1: 62, line2: 80, line3: 96, line4: 124 },
  { date: "Wed", line1: 58, line2: 76, line3: 92, line4: 118 },
  { date: "Thu", line1: 68, line2: 88, line3: 105, line4: 132 },
  { date: "Fri", line1: 72, line2: 94, line3: 116, line4: 141 },
  { date: "Sat", line1: 84, line2: 102, line3: 130, line4: 156 },
  { date: "Sun", line1: 70, line2: 90, line3: 108, line4: 136 },
];

export const leadsChartDataMonth = [
  { date: "Jan 3", line1: 180, line2: 220, line3: 260, line4: 320 },
  { date: "Jan 7", line1: 190, line2: 234, line3: 278, line4: 338 },
  { date: "Jan 11", line1: 205, line2: 250, line3: 295, line4: 355 },
  { date: "Jan 15", line1: 218, line2: 266, line3: 315, line4: 374 },
  { date: "Jan 19", line1: 225, line2: 282, line3: 330, line4: 392 },
  { date: "Jan 23", line1: 214, line2: 274, line3: 320, line4: 382 },
  { date: "Jan 27", line1: 236, line2: 298, line3: 346, line4: 410 },
  { date: "Jan 31", line1: 244, line2: 312, line3: 360, line4: 428 },
  { date: "Feb 4", line1: 252, line2: 320, line3: 372, line4: 440 },
];

export const leadsChartDataQuarter = [
  { date: "Jan", line1: 210, line2: 275, line3: 320, line4: 385 },
  { date: "Feb", line1: 232, line2: 298, line3: 346, line4: 412 },
  { date: "Mar", line1: 248, line2: 318, line3: 370, line4: 438 },
  { date: "Apr", line1: 262, line2: 336, line3: 392, line4: 464 },
  { date: "May", line1: 276, line2: 352, line3: 412, line4: 488 },
  { date: "Jun", line1: 288, line2: 368, line3: 428, line4: 510 },
  { date: "Jul", line1: 274, line2: 354, line3: 408, line4: 486 },
  { date: "Aug", line1: 296, line2: 382, line3: 438, line4: 522 },
  { date: "Sep", line1: 308, line2: 396, line3: 452, line4: 540 },
];

export const topPerformers: TopPerformer[] = [
  {
    id: "1",
    name: "Maya R.",
    avatar: "https://api.dicebear.com/9.x/icons/svg?seed=maya",
    score: 118,
    icon: "star",
  },
  {
    id: "2",
    name: "Jordan F.",
    avatar: "https://api.dicebear.com/9.x/icons/svg?seed=jordan",
    score: 96,
    icon: "user",
  },
  {
    id: "3",
    name: "Evan K.",
    avatar: "https://api.dicebear.com/9.x/icons/svg?seed=evan",
    score: 88,
    icon: "user",
  },
  {
    id: "4",
    name: "Lena P.",
    avatar: "https://api.dicebear.com/9.x/icons/svg?seed=lena",
    score: 73,
    icon: "user",
  },
  {
    id: "5",
    name: "Omar T.",
    avatar: "https://api.dicebear.com/9.x/icons/svg?seed=omar",
    score: 67,
    icon: "user",
  },
];

export const leads: Lead[] = [
  {
    id: "1",
    name: "Ava Mitchell",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=ava-mitchell",
    type: "warm",
    email: "ava.mitchell@email.com",
    followUp: "Today",
    status: "closed",
    website: "harborheightshomes.com",
    score: 94,
    source: "website",
  },
  {
    id: "2",
    name: "Noah Bennett",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=noah-bennett",
    type: "cold",
    email: "noah.bennett@email.com",
    followUp: "In 2 days",
    status: "lost",
    website: "-",
    score: 41,
    source: "google",
  },
  {
    id: "3",
    name: "Mia Carter",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=mia-carter",
    type: "warm",
    email: "mia.carter@email.com",
    followUp: "Tomorrow",
    status: "closed",
    website: "oakglenrealty.com",
    score: 89,
    source: "referral",
  },
  {
    id: "4",
    name: "Liam Flores",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=liam-flores",
    type: "cold",
    email: "liam.flores@email.com",
    followUp: "In 3 days",
    status: "lost",
    website: "-",
    score: 36,
    source: "cold-call",
  },
  {
    id: "5",
    name: "Emma King",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=emma-king",
    type: "warm",
    email: "emma.king@email.com",
    followUp: "In 1 week",
    status: "closed",
    website: "baylineproperties.com",
    score: 91,
    source: "linkedin",
  },
  {
    id: "6",
    name: "Ethan Cruz",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=ethan-cruz",
    type: "cold",
    email: "ethan.cruz@email.com",
    followUp: "In 4 days",
    status: "lost",
    website: "maplecrestliving.com",
    score: 48,
    source: "google",
  },
  {
    id: "7",
    name: "Sophia Ward",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=sophia-ward",
    type: "warm",
    email: "sophia.ward@email.com",
    followUp: "In 2 days",
    status: "closed",
    website: "northgatehomes.com",
    score: 87,
    source: "website",
  },
  {
    id: "8",
    name: "James Price",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=james-price",
    type: "cold",
    email: "james.price@email.com",
    followUp: "In 5 days",
    status: "lost",
    website: "-",
    score: 39,
    source: "cold-call",
  },
  {
    id: "9",
    name: "Olivia Reed",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=olivia-reed",
    type: "warm",
    email: "olivia.reed@email.com",
    followUp: "In 1 day",
    status: "closed",
    website: "cedarpointrealty.com",
    score: 93,
    source: "referral",
  },
  {
    id: "10",
    name: "Benjamin Hale",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=benjamin-hale",
    type: "cold",
    email: "benjamin.hale@email.com",
    followUp: "In 1 week",
    status: "lost",
    website: "-",
    score: 33,
    source: "google",
  },
  {
    id: "11",
    name: "Charlotte Kim",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=charlotte-kim",
    type: "warm",
    email: "charlotte.kim@email.com",
    followUp: "In 3 days",
    status: "closed",
    website: "riversideestates.com",
    score: 85,
    source: "linkedin",
  },
  {
    id: "12",
    name: "Lucas Patel",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=lucas-patel",
    type: "cold",
    email: "lucas.patel@email.com",
    followUp: "In 6 days",
    status: "lost",
    website: "greystoneproperties.com",
    score: 52,
    source: "website",
  },
  {
    id: "13",
    name: "Amelia Ross",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=amelia-ross",
    type: "warm",
    email: "amelia.ross@email.com",
    followUp: "Tomorrow",
    status: "closed",
    website: "seaviewresidences.com",
    score: 90,
    source: "referral",
  },
  {
    id: "14",
    name: "Henry Moore",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=henry-moore",
    type: "cold",
    email: "henry.moore@email.com",
    followUp: "In 2 weeks",
    status: "lost",
    website: "-",
    score: 29,
    source: "cold-call",
  },
  {
    id: "15",
    name: "Harper Young",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=harper-young",
    type: "warm",
    email: "harper.young@email.com",
    followUp: "In 2 days",
    status: "closed",
    website: "hillsidehomes.com",
    score: 88,
    source: "website",
  },
  {
    id: "16",
    name: "Alexander Scott",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=alexander-scott",
    type: "cold",
    email: "alexander.scott@email.com",
    followUp: "In 4 days",
    status: "lost",
    website: "sunridge-realty.com",
    score: 47,
    source: "google",
  },
  {
    id: "17",
    name: "Evelyn Diaz",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=evelyn-diaz",
    type: "warm",
    email: "evelyn.diaz@email.com",
    followUp: "In 1 week",
    status: "closed",
    website: "harborlightliving.com",
    score: 82,
    source: "linkedin",
  },
  {
    id: "18",
    name: "Sebastian Clark",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=sebastian-clark",
    type: "cold",
    email: "sebastian.clark@email.com",
    followUp: "In 5 days",
    status: "lost",
    website: "-",
    score: 38,
    source: "cold-call",
  },
  {
    id: "19",
    name: "Ella Rivera",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=ella-rivera",
    type: "warm",
    email: "ella.rivera@email.com",
    followUp: "Today",
    status: "closed",
    website: "citypointcondos.com",
    score: 96,
    source: "referral",
  },
  {
    id: "20",
    name: "Jack Nguyen",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=jack-nguyen",
    type: "cold",
    email: "jack.nguyen@email.com",
    followUp: "In 3 days",
    status: "lost",
    website: "pinegroverealty.com",
    score: 43,
    source: "google",
  },
];
