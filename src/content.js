// All editable site copy and case-study data lives here.
// Components read from this file instead of hardcoding text, so you can
// update the portfolio's content without touching any JSX.

export const profile = {
  name: 'Kathleen Kaye Rostata',
  initials: 'KR',
  // Where the circular frame crops into the photo. Try values like
  // 'center top', 'center 25%', 'left center', or 'center 40%'.
  avatarPosition: 'center 9%',
  kicker: 'Executive Assistant · Administrative & Operations Support',
  positioning:
    'I help busy business owners stay organized by managing administrative tasks, calendars, email, files, follow-ups, and recurring workflows.',
  toolsRow: 'Practiced with Gmail · Google Calendar · Google Drive · Sheets · Slack · Notion',
  heroPreview: {
    label: 'Inbox — after',
    items: [
      { label: '🔴 Action', labelClass: 'label-red', text: 'Client proposal follow-up' },
      { label: '🟣 Calendar', labelClass: 'label-purple', text: 'Reschedule request' },
      { label: '✈️ Travel', labelClass: 'label-blue', text: 'Flight confirmation' },
      { label: '🔵 Reference', labelClass: 'label-teal', text: 'Signed contract' },
    ],
  },
}

export const about = {
  paragraphs: [
    "Hi, I'm Kathleen — a fresh graduate building my experience as a remote Executive Assistant. I haven't managed these systems for a paying client yet, but I've practiced building them, I understand why they work, and I'm ready to learn how your business runs.",
    "This portfolio shows how I'd approach the day-to-day work of keeping a busy executive organized — inbox, calendar, travel, files, tasks, customer support, and the processes that hold it all together.",
  ],
}

export const contact = {
  heading: "Let's talk",
  message:
    "I'm currently building my experience as a remote Executive Assistant, and I'm happy to walk through how I'd handle your inbox, calendar, or day-to-day admin.",
  email: 'rostatakathleenk@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/rostatakathleenk/',
  linkedinLabel: 'linkedin.com/in/rostatakathleenk',
}

export const tools = {
  practiced: [
    'Google Workspace',
    'Gmail',
    'Google Calendar',
    'Google Drive',
    'Google Sheets',
    'Slack',
    'Notion',
  ],
  learning: ['Notion', 'Slack', 'CRM', 'Zapier', 'ClickUp', 'Asana', 'HubSpot', 'Claude'],
}

export const caseStudies = [
  {
    id: 'inbox',
    icon: '📧',
    number: '01',
    title: 'Inbox Zero Workflow',
    tagline: 'Gmail organization + inbox triage',
    problem:
      "The executive's inbox had 13 unread emails — client inquiries, newsletters, invoices, and meeting requests all mixed together. The objective: reduce clutter and make it easy to see what actually requires attention.",
    action:
      'Designed a 7-label system (Action/Urgent, Waiting/Delegated, Calendar, Executive/Personal, Travel, Reference, Archive) and sorted every email against it.',
    result:
      'The inbox went from a flat, unsorted list to a scannable system — urgent items surface immediately, reference material stays out of the way, and promotional email is cleared to archive.',
    tools: 'Gmail, Google Workspace',
  },
  {
    id: 'calendar',
    icon: '📅',
    number: '02',
    title: 'Calendar Management',
    tagline: 'Google Calendar scheduling + conflict resolution',
    problem:
      "A fictional CEO's week was packed with overlapping commitments and an unorganized calendar — client calls, school events, medical appointments and internal meetings colliding across Monday to Friday.",
    action:
      'Identified every conflict, prioritized events by urgency, importance, and business impact using color-coded categories, then rescheduled flexible meetings and added buffers between important appointments.',
    result:
      'The final calendar has no overlapping events, protected focus time, and a better balance between professional and personal commitments — a schedule that is realistic, organized, and practical to follow.',
    tools: 'Google Calendar',
  },
  {
    id: 'travel',
    icon: '✈️',
    number: '03',
    title: 'Travel Planning & Booking System',
    tagline: 'Flight, hotel, and itinerary planning',
    problem:
      "A CEO needed a 3-day business trip from Manila to Singapore planned around meetings and a partner call — and the cheapest option isn't necessarily the right one once schedule and logistics are factored in.",
    action:
      'Built a Notion project dashboard with a travel request, flight and hotel comparisons, an executive itinerary, a budget tracker, and a risk and contingency plan.',
    result:
      'Recommended the direct, early-arrival flight (Option C) and the hotel closest to the meetings (Hotel B) — an estimated ₱76,200 against an approved ₱85,000 budget, with backup plans for every major risk.',
    tools: 'Notion, structured research tables, budget tracking',
  },
  {
    id: 'files',
    icon: '🗂️',
    number: '04',
    title: 'File Organization',
    tagline: 'Google Drive + Google Sheets structure',
    problem:
      "A consulting firm's files had no consistent structure, so finding the current version of anything — or knowing its owner and status — took too long.",
    action:
      'Built a numbered Google Drive hierarchy (00 EA File Index through 10 Archive) and an Executive Office File Management Dashboard in Google Sheets with a searchable file index.',
    result:
      'Every one of 28 tracked files has a category, owner, status, priority, and confidentiality level, and the dashboard surfaces what is upcoming, pending, or needs review.',
    tools: 'Google Drive, Google Sheets',
  },
  {
    id: 'tasks',
    icon: '✅',
    number: '05',
    title: 'Project / Task Management',
    tagline: 'Executive task tracker + follow-up system',
    problem:
      'A small business owner was juggling multiple clients, operations, finances, marketing activities, and projects with no single place to see priorities, deadlines, or follow-ups.',
    action:
      'Centralized her workload in Notion: a task tracker and project tracker with filtered views for overdue tasks, upcoming deadlines, pending follow-ups, and active projects.',
    result:
      'What needs attention is obvious at a glance, competing priorities are visible, follow-ups are scheduled, and projects keep moving forward.',
    tools: 'Notion',
  },
  {
    id: 'support',
    icon: '💬',
    number: '06',
    title: 'Customer Support',
    tagline: 'Google Sheets tracker + response workflow',
    problem:
      'An online coaching business received customer emails — refunds, reschedules, missing confirmations — with no shared record of what had been answered or what was still open.',
    action:
      'Logged every inquiry in a Google Sheets support system: a dashboard, a ticket tracker with priority and status, a Gmail inquiry log, and ready-to-customize response templates.',
    result:
      'Nothing falls through the cracks — all 15 inquiries are categorized, high-priority cases are escalated, and every ticket has a next action and follow-up date.',
    tools: 'Gmail, Google Sheets',
  },
  {
    id: 'sop',
    icon: '📋',
    number: '07',
    title: 'SOP Creation',
    tagline: 'Clear, repeatable processes',
    problem:
      'New client meeting requests were handled ad hoc — steps like attaching prep documents or logging the meeting for the client record sometimes got missed.',
    action:
      'Documented a repeatable Standard Operating Procedure so the same 13-step process runs the same way every time, regardless of who is covering it.',
    result:
      'Meeting requests started getting processed consistently, and covering for someone during an absence got easier since the process was written down.',
    tools: 'Gmail, Google Calendar, Google Drive, Google Sheets',
  },
]

// ---------- 01 Inbox ----------

export const inboxDemoData = {
  labels: [
    {
      emoji: '🔴',
      name: 'Action / Urgent',
      className: 'label-red',
      purpose: "Requires the executive's attention or an immediate response/decision",
    },
    {
      emoji: '🟡',
      name: 'Waiting / Delegated',
      className: 'label-yellow',
      purpose: "Someone else needs to act, or you've delegated/followed up and are waiting",
    },
    {
      emoji: '🟣',
      name: 'Calendar',
      className: 'label-purple',
      purpose: 'Requires scheduling, rescheduling, or adding something to the calendar',
    },
    {
      emoji: '🟢',
      name: 'Executive / Personal',
      className: 'label-green',
      purpose: 'Personal matters, personal appointments, family, etc.',
    },
    {
      emoji: '✈️',
      name: 'Travel',
      className: 'label-blue',
      purpose: 'Flights, hotels, itineraries, transportation',
    },
    {
      emoji: '🔵',
      name: 'Reference',
      className: 'label-teal',
      purpose: "Important information/documents that don't require immediate action",
    },
    {
      emoji: '⚪',
      name: 'Archive',
      className: 'label-gray',
      purpose: 'Already handled/no action needed, but worth retaining',
    },
  ],
  // Each email lists the indexes (into `labels`) it ended up with.
  emails: [
    { subject: 'Re: Outstanding items from our last call', labels: [0] },
    { subject: 'September expense report — clarification needed', labels: [0] },
    { subject: 'Sunday lunch', labels: [3] },
    { subject: 'Booking Confirmation — Singapore to Tokyo', labels: [2, 4] },
    { subject: 'Company Update — New Remote Work Policy', labels: [5] },
    { subject: 'Following up on our proposal', labels: [3] },
    { subject: 'Save 30% on Canva Pro this week', labels: [6] },
    { subject: 'IMPORTANT — Updated Vendor Agreement', labels: [5] },
    { subject: "Quick question about Friday's client meeting", labels: [0] },
    { subject: 'Meeting Request — Q4 Partnership Discussion', labels: [2] },
    { subject: 'Your Adobe invoice is ready — September 2026', labels: [5] },
    { subject: '5 Ways Great Leaders Protect Their Time', labels: [6] },
    { subject: 'Re: Partnership Inquiry — BrightPath Consulting', labels: [0] },
  ],
}

// ---------- 02 Calendar ----------

export const calendarDemoData = {
  profile: [
    { label: 'Executive', value: 'Michael Carter' },
    { label: 'Role', value: 'CEO, Carter & Co. Consulting' },
    { label: 'Work hours', value: 'Monday–Friday, 8:00 AM–5:00 PM' },
    {
      label: 'Goal',
      value:
        'Protect CEO focus time, prioritize revenue/client commitments, avoid unnecessary overlaps, and maintain work-life balance.',
    },
  ],
  method: [
    { title: 'Identify the conflict', detail: 'Review the week for overlapping appointments.' },
    {
      title: 'Prioritize',
      detail: 'Rank events by urgency, importance, and business impact using color labels.',
    },
    { title: 'Reschedule', detail: 'Move flexible meetings around fixed commitments.' },
    { title: 'Add buffers', detail: 'Leave transition time between important meetings and appointments.' },
  ],
  colors: [
    { name: 'Focus / Deep Work', color: '#d81b60' },
    { name: 'Urgent / High Priority', color: '#d50000' },
    { name: 'Personal', color: '#f6bf26' },
    { name: 'Internal Meetings', color: '#0b8043' },
    { name: 'Client / External Meetings', color: '#4285f4' },
    { name: 'Executive / Leadership', color: '#8e24aa' },
    { name: 'Admin / Low Priority', color: '#616161' },
  ],
  changes: [
    {
      day: 'Monday',
      items: [
        'School meeting moved to Wednesday afternoon.',
        'Apex client meeting moved to 9:30.',
        'Finance Review moved to 10:30.',
        'Dentist moved from overlapping with strategy time.',
        'Added buffer before the afternoon appointment.',
      ],
    },
    {
      day: 'Tuesday',
      items: [
        'Gym moved slightly earlier.',
        'Marketing meeting shortened.',
        'Social Media Strategy shortened.',
        'School pickup protected.',
        'Administrative work kept at the end of the day because it is more flexible.',
      ],
    },
    {
      day: 'Wednesday',
      items: [
        'Accountant call moved from the overlapping 1:30 slot.',
        'Partnership call moved to 3:30.',
        'Preserved a full hour of uninterrupted focus time.',
        'Email follow-ups placed at the end of the day.',
      ],
    },
    {
      day: 'Thursday',
      items: [
        'Client follow-up shortened.',
        'Car service appointment moved to avoid budget review.',
        'Added transition time before investor meeting.',
        'Marketing meeting moved later because it was less time-sensitive.',
      ],
    },
    {
      day: 'Friday',
      items: [
        'Breakfast with spouse moved to 9:00.',
        'Operations Review shortened to 30 minutes.',
        'Personal appointment moved to 2:00.',
        'Added buffer before the afternoon partnership meeting.',
        'Preserved Friday afternoon for review and planning.',
      ],
    },
  ],
  // Monday, October 5 — before vs after
  before: [
    { time: '8:00', item: 'Weekly Leadership Meeting', flag: 'overlaps School Meeting' },
    { time: '8:30', item: 'School Meeting — Emma (Daughter)', flag: 'overlap' },
    { time: '9:00', item: 'Client: Apex Industries', flag: 'overlaps School Meeting' },
    { time: '10:00', item: 'Finance Review', flag: 'overlaps Coffee with James' },
    { time: '10:00', item: 'Coffee with James', flag: 'overlap' },
    { time: '11:00', item: 'Team 1:1s' },
    { time: '12:00', item: 'Lunch with Wife' },
    { time: '1:00', item: 'Deep Work — Q4 Strategy', flag: 'overlaps Dentist' },
    { time: '2:00', item: 'Dentist Appointment', flag: 'overlap' },
    { time: '3:00', item: 'Investor Call' },
    { time: '4:00', item: 'Review Emails & Approvals' },
  ],
  after: [
    { time: '8:00', item: 'Weekly Leadership Meeting', color: '#0b8043' },
    { time: '9:30', item: 'Client: Apex Industries', color: '#d50000', tag: 'moved' },
    { time: '10:30', item: 'Finance Review', color: '#0b8043', tag: 'moved' },
    { time: '11:00', item: 'Team 1:1s', color: '#0b8043' },
    { time: '12:00', item: 'Lunch with Wife', color: '#f6bf26' },
    { time: '1:00', item: 'Deep Work — Q4 Strategy', color: '#d81b60', tag: 'protected' },
    { time: '2:30', item: 'Travel / Buffer', color: '#795548', tag: 'buffer added' },
    { time: '3:00', item: 'Dentist Appointment', color: '#f6bf26', tag: 'moved' },
    { time: '4:00', item: 'Investor Call', color: '#d50000' },
  ],
}

// ---------- 03 Travel ----------

export const travelDemoData = {
  notionUrl:
    'https://app.notion.com/p/Executive-Travel-Planning-Booking-System-3eb703ba4a4b807eb0aae8333aba3da5?source=copy_link',
  snapshot: [
    { label: 'Client / traveler', value: 'Michael Carter, CEO' },
    { label: 'Destination', value: 'Singapore' },
    { label: 'Trip purpose', value: 'Business meetings and regional partner meeting' },
    { label: 'Trip duration', value: '3 days / 2 nights' },
    { label: 'Departure city', value: 'Manila, Philippines' },
    { label: 'Travel class', value: 'Business Class' },
    { label: 'Hotel preference', value: 'Business hotel near Marina Bay / Raffles Place' },
    {
      label: 'Planning focus',
      value: 'Schedule compatibility, convenience, flexibility, and business readiness',
    },
  ],
  tools: [
    'Notion — project dashboard, itinerary, comparison tables, and final brief',
    'Structured research framework — flight and hotel comparison',
    'Executive scheduling — meeting coordination and travel buffers',
    'Budget tracking — estimated cost, approved ceiling, and contingency',
    'Risk planning — preventive actions and backup plans',
  ],
  pages: [
    '📝 Travel Request',
    '✈️ Flight Comparison',
    '🏨 Hotel Comparison',
    '📆 Executive Itinerary',
    '💰 Travel Budget',
    '⚠️ Travel Risk & Contingency',
    '📑 Final Travel Brief',
  ],
  flights: {
    recommended: 'Option C',
    columns: ['Option A', 'Option B', 'Option C'],
    rows: [
      ['Airline', 'Airline A', 'Airline B', 'Airline C'],
      ['Cabin', 'Business', 'Business', 'Business'],
      ['Price', '₱28,500', '₱24,800', '₱31,200'],
      ['Departure', '8:00 AM', '2:00 PM', '6:00 AM'],
      ['Arrival', '11:30 AM', '5:30 PM', '9:30 AM'],
      ['Duration', '3h 30m', '5h 30m', '3h 30m'],
      ['Stops', 'Direct', '1 stop', 'Direct'],
      ['Checked baggage', '20 kg', '15 kg', '25 kg'],
      ['Carry-on', '7 kg', '7 kg', '10 kg'],
      ['Change policy', 'Fee applies', 'Restricted', 'Flexible'],
      ['Cancellation', 'Partial refund', 'Non-refundable', 'Refundable'],
      ['Arrival buffer', '3h 30m', 'Limited', '5h 30m'],
      ['Hotel transfer', 'Easy', 'Late arrival', 'Easy'],
      ['Meeting compatibility', 'Good', 'Poor', 'Excellent'],
    ],
    callout:
      'Option C has the highest fare but provides the best overall fit for the executive’s schedule. It is direct, arrives earlier, offers additional baggage allowance, and includes a flexible change policy.',
  },
  hotels: {
    recommended: 'Hotel B',
    columns: ['Hotel A', 'Hotel B', 'Hotel C'],
    rows: [
      ['Location', 'Marina Bay', 'Raffles Place', 'Orchard'],
      ['Nightly rate', '₱12,500', '₱14,000', '₱10,500'],
      ['Nights', '2', '2', '2'],
      ['Total', '₱25,000', '₱28,000', '₱21,000'],
      ['Distance to meeting', '1.2 km', '0.5 km', '4.0 km'],
      ['Airport transfer', '20 min', '25 min', '35 min'],
      ['Breakfast', 'Included', 'Included', 'Additional'],
      ['Wi-Fi', 'Included', 'Included', 'Included'],
      ['Cancellation', 'Flexible', 'Flexible', 'Restricted'],
      ['Meeting suitability', 'Good', 'Excellent', 'Moderate'],
    ],
    callout:
      'Hotel B has a higher rate but is closest to the executive’s meetings and provides a flexible cancellation policy. The reduced transfer burden and stronger meeting suitability support the premium.',
  },
  budget: [
    { label: 'Estimated cost', value: '₱76,200' },
    { label: 'Approved budget', value: '₱85,000' },
    { label: 'Headroom', value: '₱8,800' },
  ],
  itinerary: [
    {
      day: 'Day 1',
      items: [
        { time: '6:00 AM', activity: 'Flight departure', place: 'Manila', note: 'Business Class' },
        { time: '9:30 AM', activity: 'Arrive Singapore', place: 'SIN', note: 'Immigration + baggage' },
        { time: '10:30 AM', activity: 'Airport transfer', place: 'SIN → Hotel', note: 'Pre-arranged' },
        { time: '11:15 AM', activity: 'Hotel check-in / bag drop', place: 'Hotel', note: 'Early check-in requested' },
        { time: '12:00 PM', activity: 'Lunch', place: 'Near hotel' },
        { time: '1:30 PM', activity: 'Prepare for meeting', place: 'Hotel', note: 'Review materials and reset' },
        { time: '3:00 PM', activity: 'Partner meeting', place: 'Singapore CBD', note: '90 minutes' },
        { time: '5:00 PM', activity: 'Return to hotel', place: 'Singapore CBD → Hotel' },
        { time: '7:00 PM', activity: 'Dinner', place: 'Singapore' },
      ],
    },
    {
      day: 'Day 2',
      items: [
        { time: '9:00 AM', activity: 'Executive meeting', place: 'Singapore CBD' },
        { time: '2:00 PM', activity: 'Client meeting', place: 'Singapore CBD' },
      ],
    },
    {
      day: 'Day 3',
      items: [
        { time: '10:00 AM', activity: 'Final meeting', place: 'Singapore CBD' },
        { time: '6:00 PM', activity: 'Airport transfer', place: 'Hotel → SIN', note: 'Allow for airport process' },
        { time: '9:00 PM', activity: 'Flight to Manila', place: 'SIN', note: 'Evening return flight' },
      ],
    },
  ],
  risks: [
    { issue: 'Flight delay', prevent: 'Select reasonable connection/arrival buffer', backup: 'Identify alternative flight' },
    { issue: 'Meeting runs late', prevent: 'Avoid tightly scheduled departure', backup: 'Use flexible fare' },
    { issue: 'Lost baggage', prevent: 'Keep essential items in carry-on', backup: 'Follow airline baggage claim process' },
    { issue: 'Hotel unavailable', prevent: 'Confirm reservation before departure', backup: 'Identify backup hotel' },
    { issue: 'Airport transfer delay', prevent: 'Pre-book transportation', backup: 'Have taxi/rideshare alternative' },
    { issue: 'Schedule change', prevent: 'Use flexible bookings', backup: 'Change/cancel reservations if needed' },
    {
      issue: 'Time-zone confusion',
      prevent: 'Verify local time before scheduling',
      backup: 'Include location/time zone in calendar events',
    },
  ],
  checklist: [
    'Flight confirmation verified',
    'Hotel confirmation verified',
    'Transportation confirmed',
    'Meeting schedule confirmed',
    'Travel documents checked',
    'Passport details verified',
    'Travel insurance checked',
    'Emergency contacts available',
    'Backup transportation identified',
    'Flexible booking policies reviewed',
  ],
}

// ---------- 04 Files ----------

export const fileOrgDemoData = {
  sheetUrl: 'https://docs.google.com/spreadsheets/d/16Dz26SkpZ9OjZyLv5rh-iAQA2ZBGhDGg/edit?usp=sharing',
  driveUrl: 'https://drive.google.com/drive/folders/1eyRPQbPYSfPkJ8ptqqujU-W3OiAYoCkD?usp=drive_link',
  kpis: [
    { label: 'Total files', value: 28 },
    { label: 'Current', value: 17 },
    { label: 'Pending', value: 2 },
    { label: 'Upcoming', value: 3 },
    { label: 'Needs review', value: 1 },
    { label: 'Archived', value: 1 },
  ],
  statusSummary: [
    { status: 'Current', count: 17 },
    { status: 'In Progress', count: 3 },
    { status: 'Upcoming', count: 3 },
    { status: 'Pending', count: 2 },
    { status: 'Completed', count: 1 },
    { status: 'Needs Review', count: 1 },
    { status: 'Archived', count: 1 },
  ],
  highPriority: [
    { file: 'New York Business Trip — Master Itinerary', status: 'Upcoming' },
    { file: 'Flight Confirmation — Manila to New York', status: 'Upcoming' },
    { file: 'Hotel Confirmation — New York', status: 'Upcoming' },
    { file: 'INV-2026-001 — Acme Consulting', status: 'Pending' },
    { file: 'SOP — Travel Booking', status: 'Needs Review' },
  ],
  tree: `Carter & Co. Consulting
├── 00 – EA File Index
├── 01 – Executive
│   ├── Archive · Contacts · Correspondence
│   └── Executive Documents · Executive Profile
│       Personal Executive… · Priorities & Goals
├── 02 – Meetings
├── 03 – Clients
├── 04 – Travel
├── 05 – Finance
├── 06 – Operations
│   ├── Processes · Projects · Reports · SOPs
│   └── Team Resources · Templates · Vendors
├── 07 – Personal Admin
├── 08 – Templates & Resources
│   ├── Administrative · Email · Meeting
│   └── Project · Travel
├── 09 – Reports & Dashboards
└── 10 – Archive`,
  files: [
    { file: 'Weekly Leadership Meeting Minutes', category: 'Meetings', type: 'Google Doc', updated: '2026-09-28', status: 'Completed', priority: 'High', confidentiality: 'Internal' },
    { file: 'New York Business Trip — Master Itinerary', category: 'Travel', type: 'Google Doc', updated: '2026-09-29', status: 'Upcoming', priority: 'High', confidentiality: 'Confidential' },
    { file: 'Acme Consulting — Service Agreement', category: 'Clients', type: 'PDF', updated: '2026-09-05', status: 'Current', priority: 'High', confidentiality: 'Highly Confidential' },
    { file: 'INV-2026-001 — Acme Consulting', category: 'Finance', type: 'PDF', updated: '2026-09-25', status: 'Pending', priority: 'High', confidentiality: 'Highly Confidential' },
    { file: 'SOP — Travel Booking', category: 'Operations', type: 'Google Doc', updated: '2026-09-12', status: 'Needs Review', priority: 'High', confidentiality: 'Internal' },
    { file: 'Follow-Up Email Template', category: 'Templates & Resources', type: 'Google Doc', updated: '2026-09-18', status: 'Current', priority: 'Low', confidentiality: 'Internal' },
    { file: '2026 Q2 — Completed Projects', category: 'Archive', type: 'Drive Folder', updated: '2026-09-01', status: 'Archived', priority: 'Low', confidentiality: 'Internal' },
  ],
}

// ---------- 05 Tasks ----------

export const taskDemoData = {
  taskTrackerUrl: 'https://app.notion.com/p/12e6f0c82f8a4778a0c0bfed82315d51?source=copy_link',
  projectTrackerUrl: 'https://app.notion.com/p/7ab675301bd647b69346eb63630463a4?source=copy_link',
  skills: ['Task Management', 'Project Tracking', 'Prioritization', 'Follow-up', 'Deadline Management', 'Status Tracking'],
  taskViews: ['All Tasks', 'My Priority Tasks', 'Due Today', 'Upcoming — Next 7 Days', 'Overdue', 'Waiting / Follow-up'],
  projectViews: ['All Projects', 'Active Projects', 'At Risk', 'High Priority Projects'],
  tasks: [
    { task: 'Follow up with prospective client', priority: 'Urgent', status: 'Waiting for Client', tone: 'gold', due: 'Oct 1', followUp: 'Oct 2', owner: 'Client', flag: 'Due today' },
    { task: 'Review marketing proposal', priority: 'High', status: 'Waiting for Executive', tone: 'gold', due: 'Sep 30', followUp: 'Oct 2', owner: 'CEO', flag: 'Overdue' },
    { task: 'Schedule client consultation', priority: 'High', status: 'Scheduled', tone: 'blue', due: 'Oct 2', followUp: 'Oct 1', owner: 'Executive Assistant' },
    { task: 'Confirm website scope with agency', priority: 'High', status: 'Waiting for Vendor', tone: 'gold', due: 'Oct 3', followUp: 'Oct 2', owner: 'Vendor' },
    { task: 'Follow up on partnership opportunity', priority: 'High', status: 'Waiting for Client', tone: 'gold', due: 'Oct 8', followUp: 'Oct 2', owner: 'Client' },
    { task: 'Organize client files', priority: 'Medium', status: 'In Progress', tone: 'blue', due: 'Oct 4', followUp: 'Oct 3', owner: 'Executive Assistant' },
    { task: 'Approve homepage copy', priority: 'Medium', status: 'Waiting for Executive', tone: 'gold', due: 'Oct 5', followUp: 'Oct 4', owner: 'CEO' },
    { task: 'Document weekly reporting workflow', priority: 'Medium', status: 'Completed', tone: 'sage', due: 'Sep 15', followUp: '—', owner: 'Executive Assistant' },
  ],
  projects: [
    { name: 'Business Process Improvement', status: 'Completed', tone: 'sage', priority: 'Medium', progress: 100, next: 'Archive completed project documents', deadline: 'Sep 30', lead: 'Executive Assistant' },
    { name: 'Marketing Campaign', status: 'Waiting', tone: 'gold', priority: 'High', progress: 40, next: 'Obtain partnership confirmation', deadline: 'Oct 9', lead: 'Marketing Manager' },
    { name: 'Website Redesign', status: 'At Risk', tone: 'red', priority: 'High', progress: 35, next: 'Resolve scope questions with agency', deadline: 'Oct 18', lead: 'Marketing Manager' },
    { name: 'New Client Onboarding System', status: 'In Progress', tone: 'blue', priority: 'High', progress: 58, next: 'Organize client files', deadline: 'Oct 25', lead: 'Executive Assistant' },
    { name: 'CRM Implementation', status: 'Planning', tone: 'gray', priority: 'Medium', progress: 20, next: 'Complete software comparison', deadline: 'Nov 5', lead: 'Executive Assistant' },
  ],
  checkpoint: ['Task received', 'Categorized', 'Prioritized', 'Deadline tracked', 'Follow-up scheduled', 'Status updated'],
}

// ---------- 06 Support ----------

export const supportDemoData = {
  dashboardUrl: 'https://docs.google.com/spreadsheets/d/1roDMKQHIfeQjfmr7SWq6o8xvbXcbEvnv/edit?usp=sharing',
  business: 'Elevate Coaching Co. (fictional online coaching business)',
  kpis: [
    { label: 'Total inquiries', value: 15 },
    { label: 'Open', value: 4 },
    { label: 'Pending', value: 3 },
    { label: 'Escalated', value: 3 },
    { label: 'Resolved', value: 5 },
    { label: 'High priority', value: 7 },
  ],
  workflow: [
    'Receive inquiry through Gmail',
    'Record inquiry in the support tracker',
    'Categorize and assign priority',
    'Respond or escalate when needed',
    'Record the next action',
    'Set a follow-up date',
    'Update status until resolved',
  ],
  categories: ['Booking', 'Scheduling', 'Billing', 'Access', 'Pricing', 'General Inquiry', 'Cancellation', 'Follow-up', 'Onboarding'],
  tickets: [
    { date: 'Sep 18', customer: 'Sarah Miller', issue: 'Missing confirmation', category: 'Booking', priority: 'High', status: 'Open', next: 'Check booking record and resend confirmation.' },
    { date: 'Sep 18', customer: 'Mark Johnson', issue: 'Reschedule appointment', category: 'Scheduling', priority: 'Medium', status: 'Pending', next: 'Ask customer for preferred new date/time.' },
    { date: 'Sep 18', customer: 'Anna Lee', issue: 'Refund request', category: 'Billing', priority: 'High', status: 'Escalated', next: 'Review refund policy and send case to manager.' },
    { date: 'Sep 19', customer: 'Daniel Cruz', issue: 'No access to course portal', category: 'Access', priority: 'High', status: 'Open', next: 'Verify account email and resend login instructions.' },
    { date: 'Sep 19', customer: 'Rachel Kim', issue: 'Question about coaching price', category: 'Pricing', priority: 'Medium', status: 'Resolved', next: 'Sent current pricing and package details.' },
    { date: 'Sep 21', customer: 'Michael Brown', issue: 'Duplicate payment', category: 'Billing', priority: 'High', status: 'Escalated', next: 'Verify duplicate transaction before refund.' },
    { date: 'Sep 22', customer: 'Chris Taylor', issue: 'Cancellation request', category: 'Cancellation', priority: 'High', status: 'Open', next: 'Check cancellation terms and confirm eligibility.' },
    { date: 'Sep 24', customer: 'Alex Turner', issue: 'Refund status follow-up', category: 'Billing', priority: 'High', status: 'Escalated', next: 'Confirm refund status with manager and update customer.' },
    { date: 'Sep 24', customer: 'Olivia Reed', issue: 'Where are the onboarding materials?', category: 'Onboarding', priority: 'Low', status: 'Resolved', next: 'Sent onboarding guide and portal link.' },
  ],
  templates: [
    {
      scenario: 'Missing confirmation',
      subject: 'Your Coaching Appointment Confirmation',
      body: "Hi Sarah,\n\nThank you for reaching out. I've checked your booking and will resend your appointment confirmation to this email address. Please let me know if you do not receive it shortly.\n\nBest,\nCustomer Support",
      note: 'Confirm booking before sending.',
    },
    {
      scenario: 'Refund request',
      subject: 'Re: Refund Request',
      body: "Hi Anna,\n\nThank you for reaching out. I've received your refund request and have forwarded it for review. We'll update you once the request has been reviewed.\n\nBest,\nCustomer Support",
      note: 'Escalate according to refund policy.',
    },
    {
      scenario: 'Payment concern',
      subject: 'Re: Payment Concern',
      body: "Hi Michael,\n\nThank you for bringing this to our attention. We're checking the payment records to verify the duplicate charge. I've escalated this for review and will update you as soon as we have confirmation.\n\nBest,\nCustomer Support",
      note: 'Do not promise a refund before verification.',
    },
  ],
}

// ---------- 07 SOP ----------

export const sopDemoData = {
  notionUrl:
    'https://app.notion.com/p/SOP-Processing-New-Meeting-Requests-for-the-CEO-8bb6d44c0a364be9a05ce764348c3f12?source=copy_link',
  title: 'SOP: Processing New Client Meeting Requests',
  purpose: 'Ensure all client meeting requests are properly scheduled and documented.',
  steps: [
    'Review meeting request.',
    'Identify requested date and timezone.',
    "Check executive's calendar.",
    'Identify available time slots.',
    'Confirm meeting duration.',
    'Check for preparation requirements.',
    'Send available options to client.',
    'Confirm selected time.',
    'Add meeting to calendar.',
    'Add meeting link.',
    'Attach relevant documents.',
    'Send confirmation.',
    'Record meeting in the client tracker.',
  ],
  tools: 'Gmail, Google Calendar, Google Drive, Google Sheets',
}
