export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  verified?: boolean;
}

export const users: User[] = [
  {
    id: "1",
    name: "Ava Patel",
    email: "ava.patel@opsbridge.io",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=Ava Patel",
    verified: true,
  },
  {
    id: "2",
    name: "PagerDuty Alerts",
    email: "alerts@pagerduty.com",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=PagerDuty",
    verified: true,
  },
  {
    id: "3",
    name: "CloudWatch Monitor",
    email: "monitor@aws.amazon.com",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=CloudWatch",
    verified: false,
  },
  {
    id: "4",
    name: "Kim from SRE",
    email: "kim.sre@opsbridge.io",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=Kim SRE",
    verified: true,
  },
  {
    id: "5",
    name: "On-Call Scheduler",
    email: "schedule@opsbridge.io",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=On Call Scheduler",
    verified: true,
  },
  {
    id: "6",
    name: "Security Response Bot",
    email: "soc-bot@opsbridge.io",
    avatar: "https://api.dicebear.com/9.x/glass/svg?seed=SOC Bot",
    verified: false,
  },
];

export const currentUser = users[0];
