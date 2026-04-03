export type CardStatus = "active" | "pending" | "empty" | "failed";

export interface ProcessCard {
  id: number;
  title: string;
  group: string;
  icon: string;
  status: CardStatus;
  items: number;
  description: string;
  subLabel?: string;
}

export const processCards: ProcessCard[] = [
  {
    id: 1,
    title: "Initiation and Planning",
    group: "Planning",
    icon: "calendar",
    status: "empty",
    items: 0,
    description:
      "Define project scope, objectives, milestones, and timelines for effective delivery.",
  },
  {
    id: 2,
    title: "Requirements Engineering",
    group: "Planning",
    icon: "clipboard-list",
    status: "active",
    items: 3,
    description:
      "Capture, analyze, and manage functional and non-functional requirements.",
    subLabel: "Functional Safety",
  },
  {
    id: 3,
    title: "Architecture and Design",
    group: "Execution",
    icon: "blocks",
    status: "active",
    items: 4,
    description:
      "Define system architecture, component design, and interface specifications.",
  },
  {
    id: 4,
    title: "Implementation",
    group: "Execution",
    icon: "code",
    status: "pending",
    items: 2,
    description:
      "Code development, module integration, and feature implementation.",
  },
  {
    id: 5,
    title: "Testing",
    group: "Validation",
    icon: "flask-conical",
    status: "empty",
    items: 0,
    description:
      "Test planning, execution, and defect tracking across all test levels.",
  },
  {
    id: 6,
    title: "Verification & Validation",
    group: "Validation",
    icon: "check-circle",
    status: "empty",
    items: 0,
    description:
      "Formal verification and validation activities to ensure compliance.",
  },
  {
    id: 7,
    title: "Configuration Management",
    group: "Support",
    icon: "settings",
    status: "pending",
    items: 1,
    description:
      "Version control, configuration tracking, and baseline management.",
  },
  {
    id: 8,
    title: "Quality Assurance",
    group: "Support",
    icon: "bar-chart",
    status: "empty",
    items: 0,
    description:
      "Quality gates, audits, metrics, and process compliance reviews.",
  },
  {
    id: 9,
    title: "Deployment & Release",
    group: "Release",
    icon: "rocket",
    status: "empty",
    items: 0,
    description:
      "Release management, deployment pipelines, and delivery coordination.",
  },

  // Configuration management
  {
    id: 9,
    title: "Configuration Management",
    group: "Support",
    icon: "settings",
    status: "empty",
    items: 0,
    description:
      "Version control, configuration tracking, and baseline management.",
  },


  // Compliance and audit

  {
    id: 10,
    title: "Compliance and Audit",
    group: "Support",
    icon: "settings",
    status: "empty",
    items: 0,
    description:
      "Version control, configuration tracking, and baseline management.",
    subLabel: "Done at 12:00 PM",
  }
];
