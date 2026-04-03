export interface AIAgent {
  id: string;
  name: string;
  description: string;
  icon: string;
  status: "available" | "beta" | "coming-soon";
}

export const aiAgents: AIAgent[] = [
  {
    id: "generate-requirements",
    name: "Generate Requirements",
    description:
      "Automatically generate structured requirements from natural language descriptions and specifications.",
    icon: "file-text",
    status: "available",
  },
  {
    id: "change-request",
    name: "Change Request Analysis",
    description:
      "Analyze the impact of change requests across requirements, design, and test artifacts.",
    icon: "git-pull-request",
    status: "available",
  },
  {
    id: "data-consistency",
    name: "Data Consistency Check",
    description:
      "Verify consistency and traceability across all project data, requirements, and design elements.",
    icon: "shield-check",
    status: "beta",
  },
];

export const modePopupItems = [
  {
    id: "mode-item-1",
    name: "Requirements Traceability Matrix",
  },
  {
    id: "mode-item-2",
    name: "System Architecture View",
  },
  {
    id: "mode-item-3",
    name: "Test Coverage Report",
  },
];
