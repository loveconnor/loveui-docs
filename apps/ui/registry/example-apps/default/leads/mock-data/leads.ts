import { LeadStatus, LeadSource } from "../store/leads-store";

export interface Lead {
  id: string;
  leadId: string;
  name: string;
  email: string;
  avatar: string;
  status: LeadStatus;
  source: LeadSource;
  owner: string;
  ownerInitials: string;
  createdAt: string;
  createdTimestamp: number;
}

const firstNames = [
  "Avery", "Blake", "Casey", "Dakota", "Elliot", "Finley", "Gray", "Hayden",
  "Indigo", "Jules", "Kai", "Logan", "Morgan", "Noel", "Oakley", "Parker",
  "Quincy", "Reese", "Sage", "Taylor", "Urban", "Vale", "Winter", "Xen",
  "Yael", "Zion",
];

const lastNames = [
  "Adler", "Bennett", "Coleman", "Dalton", "Ellis", "Foster", "Greer", "Hayes",
  "Iverson", "Jordan", "Keller", "Lane", "Monroe", "Nash", "Owens", "Perry",
  "Quinn", "Reed", "Sullivan", "Turner", "Underwood", "Vasquez", "Walker", "Xu",
  "Young", "Zimmerman",
];

const sponsorDomains = [
  "northpeak.com",
  "harborlabs.io",
  "cedarworks.co",
  "atlasgrid.com",
  "summitforge.io",
  "lumenbridge.ai",
  "ravenpoint.dev",
  "stonepath.co",
  "beaconfield.com",
  "wildshore.io",
];

const owners = [
  { name: "Mara Quinn", initials: "MQ" },
  { name: "Dylan Park", initials: "DP" },
  { name: "Nora Chen", initials: "NC" },
  { name: "Ibrahim Lee", initials: "IL" },
];

const statuses: LeadStatus[] = [
  "new",
  "contacted",
  "qualified",
  "negotiation",
  "inactive",
  "recycled",
];

const sources: LeadSource[] = [
  "website",
  "paid_ads",
  "referral",
  "social",
  "email",
];

function getDateString(daysAgo: number): string {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return `${months[date.getMonth()]} ${date.getDate().toString().padStart(2, "0")}, ${date.getFullYear()}`;
}

function getTimestamp(daysAgo: number): number {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  return date.getTime();
}

export const leads: Lead[] = Array.from({ length: 50 }, (_, index) => {
  const firstName = firstNames[index % firstNames.length];
  const lastName = lastNames[index % lastNames.length];
  const owner = owners[index % owners.length];
  const status = statuses[index % statuses.length];
  const source = sources[index % sources.length];
  const domain = sponsorDomains[index % sponsorDomains.length];
  const daysAgo = index % 30;

  return {
    id: (index + 1).toString(),
    leadId: `SPN-${(901 + index).toString().padStart(4, "0")}`,
    name: `${firstName} ${lastName}`,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`,
    avatar: `https://api.dicebear.com/9.x/glass/svg?seed=sponsor-${firstName}${lastName}`,
    status,
    source,
    owner: owner.name,
    ownerInitials: owner.initials,
    createdAt: getDateString(daysAgo),
    createdTimestamp: getTimestamp(daysAgo),
  };
});

export const leadStats = {
  totalLeads: 128,
  totalLeadsChange: 11,
  totalLeadsChangeValue: 13,
  contactedLeads: 76,
  contactedLeadsChange: 9,
  contactedLeadsChangeValue: 6,
  qualifiedLeads: 34,
  qualifiedLeadsChange: 14,
  qualifiedLeadsChangeValue: 4,
  hotLeads: 18,
  hotLeadsChange: 20,
  hotLeadsChangeValue: 3,
};

export const leadsByStatus = {
  total: 128,
  totalChange: 11,
  totalChangeValue: 13,
  data: [
    { name: "Sponsor Prospects", value: 42, color: "#375dfb" },
    { name: "Contacted", value: 28, color: "#6985fc" },
    { name: "Deck Sent", value: 24, color: "#9baefd" },
    { name: "Contract Review", value: 14, color: "#7f69fc" },
    { name: "On Hold", value: 11, color: "#aa9bfd" },
    { name: "Re-engage", value: 9, color: "#b069fc" },
  ],
};

export const monthlyLeadGrowth = [
  { month: "Jan", leads: 14 },
  { month: "Feb", leads: 18 },
  { month: "Mar", leads: 22 },
  { month: "Apr", leads: 27 },
  { month: "May", leads: 24 },
  { month: "Jun", leads: 30 },
  { month: "Jul", leads: 34 },
  { month: "Aug", leads: 38 },
  { month: "Sep", leads: 42 },
  { month: "Oct", leads: 46 },
  { month: "Nov", leads: 40 },
  { month: "Dec", leads: 48 },
];
