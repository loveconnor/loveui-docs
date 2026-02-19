export interface Event {
  id: string;
  title: string;
  startTime: string;
  endTime: string;
  date: string;
  participants: string[];
  meetingLink?: string;
  timezone?: string;
}

export const events: Event[] = [
  {
    id: "1",
    title: "Unit call and safety briefing",
    startTime: "06:30",
    endTime: "07:15",
    date: "2024-02-04",
    participants: ["user1", "user2", "user3", "user4"],
    meetingLink: "https://meet.google.com/film-prod-room",
  },
  {
    id: "2",
    title: "Sunrise drone establishing shots",
    startTime: "07:30",
    endTime: "09:00",
    date: "2024-02-04",
    participants: ["user1", "user3", "user4"],
  },
  {
    id: "3",
    title: "Wardrobe continuity check",
    startTime: "09:20",
    endTime: "10:00",
    date: "2024-02-04",
    participants: ["user2", "user5"],
  },
  {
    id: "4",
    title: "Scene 12 blocking rehearsal",
    startTime: "10:30",
    endTime: "12:00",
    date: "2024-02-04",
    participants: ["user1", "user2", "user3", "user5"],
    meetingLink: "https://meet.google.com/film-blocking-a",
  },
  {
    id: "5",
    title: "Crew lunch",
    startTime: "12:15",
    endTime: "13:00",
    date: "2024-02-04",
    participants: [],
  },
  {
    id: "6",
    title: "Client playback review call",
    startTime: "16:00",
    endTime: "16:45",
    date: "2024-02-04",
    participants: ["user1", "user2", "user5"],
    meetingLink: "https://meet.google.com/film-client-review",
    timezone: "PST",
  },
  {
    id: "7",
    title: "Night exterior lighting test",
    startTime: "19:30",
    endTime: "20:30",
    date: "2024-02-04",
    participants: ["user1", "user3", "user4"],
  },
  {
    id: "8",
    title: "Daily wrap report",
    startTime: "21:00",
    endTime: "21:30",
    date: "2024-02-04",
    participants: ["user1", "user2"],
  },
  {
    id: "9",
    title: "Location handoff meeting",
    startTime: "07:00",
    endTime: "07:45",
    date: "2024-02-05",
    participants: ["user1", "user4", "user5"],
    meetingLink: "https://meet.google.com/location-handoff",
  },
  {
    id: "10",
    title: "Truck load-out checklist",
    startTime: "08:00",
    endTime: "08:30",
    date: "2024-02-05",
    participants: ["user1", "user3"],
  },
  {
    id: "11",
    title: "Scene 18 principal photography",
    startTime: "09:00",
    endTime: "11:30",
    date: "2024-02-05",
    participants: ["user1", "user2", "user3", "user4", "user5"],
  },
  {
    id: "12",
    title: "Sound team coordination call",
    startTime: "11:45",
    endTime: "12:15",
    date: "2024-02-05",
    participants: ["user1", "user3", "user4"],
    meetingLink: "https://meet.google.com/sound-sync",
  },
  {
    id: "13",
    title: "Lunch reset",
    startTime: "12:30",
    endTime: "13:15",
    date: "2024-02-05",
    participants: [],
  },
  {
    id: "14",
    title: "Props continuity sweep",
    startTime: "13:30",
    endTime: "14:10",
    date: "2024-02-05",
    participants: ["user2", "user5"],
  },
  {
    id: "15",
    title: "VFX marker pass",
    startTime: "15:00",
    endTime: "16:00",
    date: "2024-02-05",
    participants: ["user1", "user3", "user4"],
  },
  {
    id: "16",
    title: "Executive review meeting",
    startTime: "17:30",
    endTime: "18:15",
    date: "2024-02-05",
    participants: ["user1", "user2", "user5"],
    meetingLink: "https://meet.google.com/executive-review",
    timezone: "EST",
  },
  {
    id: "17",
    title: "Second unit prep",
    startTime: "06:45",
    endTime: "07:30",
    date: "2024-02-06",
    participants: ["user1", "user3", "user4"],
  },
  {
    id: "18",
    title: "Stunt rehearsal meeting",
    startTime: "08:30",
    endTime: "09:15",
    date: "2024-02-06",
    participants: ["user1", "user2", "user3", "user5"],
    meetingLink: "https://meet.google.com/stunt-rehearsal",
  },
  {
    id: "19",
    title: "Scene 23 chase coverage",
    startTime: "09:30",
    endTime: "12:00",
    date: "2024-02-06",
    participants: ["user1", "user2", "user3", "user4", "user5"],
  },
  {
    id: "20",
    title: "Catering break",
    startTime: "12:00",
    endTime: "12:45",
    date: "2024-02-06",
    participants: [],
  },
  {
    id: "21",
    title: "Insurance paperwork call",
    startTime: "13:00",
    endTime: "13:30",
    date: "2024-02-06",
    participants: ["user1", "user5"],
    meetingLink: "https://meet.google.com/insurance-desk",
  },
  {
    id: "22",
    title: "Golden hour pickup shots",
    startTime: "16:30",
    endTime: "18:00",
    date: "2024-02-06",
    participants: ["user1", "user3", "user4"],
  },
  {
    id: "23",
    title: "Post pipeline sync call",
    startTime: "18:30",
    endTime: "19:00",
    date: "2024-02-06",
    participants: ["user1", "user2", "user4"],
    meetingLink: "https://meet.google.com/post-pipeline",
    timezone: "UTC",
  },
  {
    id: "24",
    title: "Call sheet release",
    startTime: "07:10",
    endTime: "07:40",
    date: "2024-02-07",
    participants: ["user1", "user2"],
  },
  {
    id: "25",
    title: "Scene 31 interior dialogue",
    startTime: "08:15",
    endTime: "10:45",
    date: "2024-02-07",
    participants: ["user1", "user2", "user3", "user5"],
  },
  {
    id: "26",
    title: "Hair and makeup check-in",
    startTime: "11:00",
    endTime: "11:30",
    date: "2024-02-07",
    participants: ["user2", "user5"],
  },
  {
    id: "27",
    title: "Lunch break",
    startTime: "12:00",
    endTime: "12:45",
    date: "2024-02-07",
    participants: [],
  },
  {
    id: "28",
    title: "Director notes meeting",
    startTime: "13:00",
    endTime: "13:45",
    date: "2024-02-07",
    participants: ["user1", "user2", "user5"],
    meetingLink: "https://meet.google.com/director-notes",
  },
  {
    id: "29",
    title: "Second camera inserts",
    startTime: "14:30",
    endTime: "15:30",
    date: "2024-02-07",
    participants: ["user1", "user3", "user4"],
  },
  {
    id: "30",
    title: "Wrap and media backup",
    startTime: "20:30",
    endTime: "21:15",
    date: "2024-02-07",
    participants: ["user1", "user3"],
  },
  {
    id: "31",
    title: "Sunrise pickup call",
    startTime: "06:30",
    endTime: "07:00",
    date: "2024-02-08",
    participants: ["user1", "user4"],
    meetingLink: "https://meet.google.com/sunrise-pickup",
  },
  {
    id: "32",
    title: "Airport talent transfer",
    startTime: "08:00",
    endTime: "09:00",
    date: "2024-02-08",
    participants: ["user1", "user5"],
  },
  {
    id: "33",
    title: "Scene 40 final rehearsal",
    startTime: "09:30",
    endTime: "10:30",
    date: "2024-02-08",
    participants: ["user1", "user2", "user3", "user5"],
  },
  {
    id: "34",
    title: "Vendor status meeting",
    startTime: "11:30",
    endTime: "12:00",
    date: "2024-02-08",
    participants: ["user1", "user2", "user5"],
    meetingLink: "https://meet.google.com/vendor-status",
  },
  {
    id: "35",
    title: "Studio reset",
    startTime: "13:00",
    endTime: "13:30",
    date: "2024-02-08",
    participants: ["user3", "user4"],
  },
  {
    id: "36",
    title: "Client progress call",
    startTime: "15:00",
    endTime: "15:30",
    date: "2024-02-08",
    participants: ["user1", "user2", "user5"],
    meetingLink: "https://meet.google.com/client-progress",
    timezone: "PST",
  },
  {
    id: "37",
    title: "Festival teaser cut review",
    startTime: "18:00",
    endTime: "19:00",
    date: "2024-02-08",
    participants: ["user1", "user2", "user4", "user5"],
    meetingLink: "https://meet.google.com/teaser-review",
  },
  {
    id: "38",
    title: "Week close-out standup",
    startTime: "07:30",
    endTime: "08:00",
    date: "2024-02-09",
    participants: ["user1", "user2", "user3", "user4"],
  },
  {
    id: "39",
    title: "Scene 44 rain rig setup",
    startTime: "09:00",
    endTime: "10:30",
    date: "2024-02-09",
    participants: ["user1", "user3", "user4"],
  },
  {
    id: "40",
    title: "Finance checkpoint meeting",
    startTime: "11:00",
    endTime: "11:30",
    date: "2024-02-09",
    participants: ["user1", "user2", "user5"],
    meetingLink: "https://meet.google.com/finance-checkpoint",
  },
  {
    id: "41",
    title: "Lunch",
    startTime: "12:15",
    endTime: "13:00",
    date: "2024-02-09",
    participants: [],
  },
  {
    id: "42",
    title: "Shot log and continuity lock",
    startTime: "14:00",
    endTime: "15:00",
    date: "2024-02-09",
    participants: ["user1", "user2", "user5"],
  },
  {
    id: "43",
    title: "Weekend equipment return call",
    startTime: "16:00",
    endTime: "16:30",
    date: "2024-02-09",
    participants: ["user1", "user3"],
    meetingLink: "https://meet.google.com/equipment-return",
  },
  {
    id: "44",
    title: "Weekend location scout",
    startTime: "08:00",
    endTime: "10:00",
    date: "2024-02-10",
    participants: ["user1", "user4", "user5"],
  },
  {
    id: "45",
    title: "Storyboard revision meeting",
    startTime: "10:30",
    endTime: "11:30",
    date: "2024-02-10",
    participants: ["user1", "user2", "user5"],
    meetingLink: "https://meet.google.com/storyboard-revision",
  },
  {
    id: "46",
    title: "Quiet prep block",
    startTime: "12:00",
    endTime: "13:00",
    date: "2024-02-10",
    participants: [],
  },
  {
    id: "47",
    title: "Remote producer call",
    startTime: "14:00",
    endTime: "14:30",
    date: "2024-02-10",
    participants: ["user1", "user2"],
    meetingLink: "https://meet.google.com/remote-producer",
    timezone: "EST",
  },
  {
    id: "48",
    title: "Weekly archive handoff",
    startTime: "17:00",
    endTime: "17:45",
    date: "2024-02-10",
    participants: ["user1", "user3", "user4"],
  },
];

export function getEventsForDate(date: string): Event[] {
  return events.filter((event) => event.date === date);
}

export function getEventsForWeek(startDate: Date): Event[] {
  const endDate = new Date(startDate);
  endDate.setDate(endDate.getDate() + 6);

  return events.filter((event) => {
    const eventDate = new Date(event.date);
    return eventDate >= startDate && eventDate <= endDate;
  });
}

export function getTodayEvents(): Event[] {
  const today = new Date();
  const dayOfWeek = today.getDay() === 0 ? 6 : today.getDay() - 1;

  return events.filter((event) => {
    const eventDate = new Date(event.date);
    const eventDayOfWeek =
      eventDate.getDay() === 0 ? 6 : eventDate.getDay() - 1;
    return eventDayOfWeek === dayOfWeek;
  });
}

export function addEvent(event: Omit<Event, "id">): void {
  const newId = String(events.length + 1);
  events.push({
    ...event,
    id: newId,
  });
}
