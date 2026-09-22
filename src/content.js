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
  learning: ['CRM tools', 'ClickUp', 'Asana', 'HubSpot', 'Claude', 'Zapier', 'Make', 'GoHighLevel'],
}

export const caseStudies = [
  {
    id: 'inbox',
    icon: '📧',
    number: '01',
    title: 'Inbox Management',
    tagline: 'Gmail organization + Inbox Zero workflow',
    problem:
      "The executive's inbox had 15+ unread emails — client inquiries, newsletters, invoices, and meeting requests all mixed together, making it hard to tell what actually needed attention.",
    action:
      'Built a 7-label system (Action/Urgent, Waiting/Delegated, Calendar, Executive/Personal, Travel, Reference, Archive) and re-sorted the inbox against it.',
    result:
      'The inbox went from a flat, unsorted list to a scannable system — urgent items surfaced immediately, delegated items were tracked instead of forgotten, and reference material stayed out of the way without being deleted.',
    tools: 'Gmail, Google Workspace',
  },
  {
    id: 'calendar',
    icon: '📅',
    number: '02',
    title: 'Calendar Management',
    tagline: 'Executive scheduling + conflict resolution',
    problem:
      "The executive's Monday had back-to-back meetings from 9:00 AM to 12:00 PM, no lunch break, and a client meeting immediately after, leaving no time to prepare.",
    action:
      'Reorganized the schedule: added a prep block and lunch, and moved the internal finance meeting to the afternoon to create transition time before the client meeting.',
    result:
      'I noticed that the executive had back-to-back meetings from 9:00 AM to 12:00 PM. I moved the internal meeting to the afternoon to create preparation and transition time before the client meeting.',
    tools: 'Google Calendar',
  },
  {
    id: 'travel',
    icon: '✈️',
    number: '03',
    title: 'Travel Coordination',
    tagline: 'Flight/hotel research + itinerary',
    problem:
      "A CEO traveling from Manila to Singapore for a 3-day business trip needed a flight — but the cheapest option isn't necessarily the right one once meetings and hotel logistics are factored in.",
    action:
      "Compared three flight options across price, timing, stops, baggage, and change policy, then weighed the recommendation against the CEO's meeting schedule.",
    result:
      'Recommended Option C despite it not being the cheapest, because its early arrival left enough buffer to reach the hotel and prepare for the afternoon meeting.',
    tools: 'Google Sheets, flight search',
  },
  {
    id: 'files',
    icon: '🗂️',
    number: '04',
    title: 'File & Document Management',
    tagline: 'Google Drive + Google Sheets organization',
    problem:
      "ABC Consulting's files were scattered with inconsistent names and no clear owner, making it hard to find the current version of anything.",
    action:
      'Built a consistent folder hierarchy by function (Executive, Clients, Finance, Operations, Archive) and a file index tracking category, owner, status, and last update.',
    result:
      'Anyone on the team could find the right file in seconds, and stale or duplicate versions were easy to spot.',
    tools: 'Google Drive, Google Sheets',
  },
  {
    id: 'tasks',
    icon: '✅',
    number: '05',
    title: 'Task & Project Management',
    tagline: 'Executive task tracker + follow-up system',
    problem:
      'Tasks across clients, finance, and internal ops lived in scattered messages, with no shared view of what was due, who owned it, or what was blocking it.',
    action:
      'Built an Executive Task Dashboard with priority, owner, deadline, status, and next action for every task.',
    result:
      'The executive could see what needed attention at a glance instead of digging through email threads.',
    tools: 'Google Sheets',
  },
  {
    id: 'support',
    icon: '💬',
    number: '06',
    title: 'Customer Support',
    tagline: 'Email handling + support tracker + escalation',
    problem:
      'A small online coaching business received 10–15 customer emails a day — refunds, reschedules, missing confirmations — with no shared record of what had been answered.',
    action:
      'Logged every inquiry in a Customer Support Tracker with issue, priority, status, and next action, then drafted responses and escalated the high-priority cases.',
    result:
      'Nothing fell through the cracks, and the business owner could see exactly what was open versus resolved.',
    tools: 'Gmail, Google Sheets',
  },
  {
    id: 'sop',
    icon: '📋',
    number: '07',
    title: 'SOP Documentation',
    tagline: 'Creating clear, repeatable processes',
    problem:
      'New client meeting requests were handled ad hoc — steps like attaching prep documents or logging the meeting for the client record sometimes got missed.',
    action:
      'Documented a repeatable Standard Operating Procedure so the same 13-step process runs the same way every time, regardless of who is covering it.',
    result:
      'Meeting requests started getting processed consistently, and covering for someone during an absence got easier since the process was written down.',
    tools: 'Gmail, Google Calendar, Google Drive, Google Sheets',
  },
  {
    id: 'automation',
    icon: '⚙️',
    number: '08',
    title: 'Workflow Automation',
    tagline: 'Simple Zapier/Make workflow',
    problem:
      'Meeting requests submitted through a contact form had to be manually copied into a tracker and confirmed by email every time — an easy step to forget.',
    action:
      'After mapping the manual process, connected the form to a sheet and an email confirmation so the repetitive part runs itself.',
    result:
      'Every request is captured and confirmed automatically, without depending on someone remembering to do it.',
    tools: 'Google Forms, Google Sheets, Zapier/Make',
  },
]

export const inboxDemoData = {
  labels: [
    { emoji: '🔴', name: 'Action / Urgent', className: 'label-red' },
    { emoji: '🟡', name: 'Waiting / Delegated', className: 'label-yellow' },
    { emoji: '🟣', name: 'Calendar', className: 'label-purple' },
    { emoji: '🟢', name: 'Executive / Personal', className: 'label-green' },
    { emoji: '✈️', name: 'Travel', className: 'label-blue' },
    { emoji: '🔵', name: 'Reference', className: 'label-teal' },
    { emoji: '⚪', name: 'Archive', className: 'label-gray' },
  ],
  before: [
    'Client inquiry',
    'Newsletter',
    'Invoice',
    'Meeting request',
    'Team question',
    'Important document',
    'Promotional email',
    'Follow-up that needs a response',
    'Internal company update',
    'Travel confirmation',
    'Personal appointment reminder',
    '...4 more, unsorted',
  ],
  after: [
    { labelIndex: 0, text: 'Client inquiry needing a same-day reply' },
    { labelIndex: 0, text: 'Follow-up that needs a response' },
    { labelIndex: 1, text: 'Team question — waiting on their update' },
    { labelIndex: 2, text: 'Meeting request to schedule' },
    { labelIndex: 3, text: 'Personal appointment reminder' },
    { labelIndex: 4, text: 'Travel confirmation' },
    { labelIndex: 5, text: 'Important document — reference' },
    { labelIndex: 6, text: 'Newsletter, promotional email' },
  ],
}

export const calendarDemoData = {
  before: [
    { time: '9:00', item: 'Team meeting', flag: false },
    { time: '10:00', item: 'Finance meeting', flag: false },
    { time: '11:00', item: 'Deep work', flag: false },
    { time: '12:00', item: 'Client meeting', flag: true },
    { time: '1:00', item: 'Candidate interview', flag: false },
    { time: '2:00', item: 'Project review', flag: false },
    { time: '3:00', item: 'Follow-ups', flag: false },
  ],
  after: [
    { time: '9:00', item: 'Team meeting' },
    { time: '10:00', item: 'Deep work' },
    { time: '11:00', item: 'Prep: client meeting brief', added: true },
    { time: '11:30', item: 'Client meeting' },
    { time: '12:30', item: 'Lunch', added: true },
    { time: '1:15', item: 'Finance meeting', moved: true },
    { time: '2:00', item: 'Candidate interview' },
    { time: '3:00', item: 'Project review' },
  ],
  quote:
    'I noticed that the executive had back-to-back meetings from 9:00 AM to 12:00 PM. I moved the internal meeting to the afternoon to create preparation and transition time before the client meeting.',
}

export const travelDemoData = {
  caption: 'CEO — Manila to Singapore, 3-day business trip',
  rows: [
    { label: 'Price', a: '₱18,500', b: '₱14,200', c: '₱16,800' },
    { label: 'Departure', a: '8:00 AM', b: '2:00 PM', c: '6:00 AM' },
    { label: 'Arrival', a: '11:30 AM', b: '5:30 PM', c: '9:30 AM' },
    { label: 'Stops', a: 'Direct', b: '1 stop', c: 'Direct' },
    { label: 'Baggage', a: '20kg', b: '15kg', c: '25kg' },
    { label: 'Change policy', a: 'Free change up to 24h', b: 'Non-refundable', c: 'Free change up to 48h' },
  ],
  calloutLabel: 'Recommended based on schedule:',
  calloutText:
    'Option C — arrives 9:30 AM, leaving enough time to reach the hotel, freshen up, and prepare for the 2:00 PM client meeting.',
}

export const fileOrgDemoData = {
  caption: 'ABC Consulting — folder structure',
  tree: `ABC Consulting
├── 01 – Executive
│   ├── Meetings
│   ├── Travel
│   └── Personal Admin
├── 02 – Clients
│   ├── Client A
│   ├── Client B
│   └── Client C
├── 03 – Finance
│   ├── Invoices
│   ├── Receipts
│   └── Reports
├── 04 – Operations
│   ├── SOPs
│   ├── Processes
│   └── Templates
└── 05 – Archive`,
  files: [
    { file: 'Client A Proposal', category: 'Client', owner: 'CEO', status: 'Final', updated: 'Sept 18' },
    { file: 'September Invoice', category: 'Finance', owner: 'Finance', status: 'Paid', updated: 'Sept 15' },
    { file: 'Team SOP', category: 'Operations', owner: 'EA', status: 'Draft', updated: 'Sept 19' },
  ],
}

export const taskDemoData = {
  tasks: [
    { task: 'Client proposal', priority: 'High', owner: 'CEO', deadline: 'Sept 22', status: 'In Progress', next: 'Review draft' },
    { task: 'Book Singapore hotel', priority: 'High', owner: 'EA', deadline: 'Sept 21', status: 'Pending', next: 'Compare options' },
    { task: 'Update CRM', priority: 'Medium', owner: 'Sales', deadline: 'Sept 23', status: 'Waiting', next: 'Follow up' },
    { task: 'Team meeting agenda', priority: 'Medium', owner: 'EA', deadline: 'Sept 22', status: 'Not Started', next: 'Request updates' },
    { task: 'Invoice #104', priority: 'Low', owner: 'Finance', deadline: 'Sept 25', status: 'Completed', next: '—' },
  ],
}

export const supportDemoData = {
  tickets: [
    { date: 'Sept 18', customer: 'Sarah', issue: 'Missing confirmation', priority: 'High', status: 'Open', next: 'Check booking' },
    { date: 'Sept 18', customer: 'Mark', issue: 'Reschedule', priority: 'Medium', status: 'Pending', next: 'Awaiting date' },
    { date: 'Sept 19', customer: 'Anna', issue: 'Refund request', priority: 'High', status: 'Escalated', next: 'Notify manager' },
  ],
}

export const sopDemoData = {
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

export const automationDemoData = {
  caption: 'Meeting request automation',
  steps: [
    { title: 'Form submitted', detail: '"Request a meeting"' },
    { title: 'Sheet logs request', detail: 'Google Sheets records the entry' },
    { title: 'Confirmation email', detail: 'Automation sends confirmation to requester' },
    { title: 'Task added', detail: 'Task added to the tracker' },
  ],
}
