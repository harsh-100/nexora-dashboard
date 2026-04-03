export type ItemStatus = "active" | "pending" | "draft" | "completed" | "failed";

export interface ProjectItem {
  id: number;
  name: string;
  status: ItemStatus;
  lastUpdated: string;
  owner: string;
  description: string;
  category: string;
}

export const projectItems: ProjectItem[] = [
  {
    id: 1,
    name: "Battery Cell Specification",
    status: "active",
    lastUpdated: "2026-03-28",
    owner: "John Doe",
    description:
      "Detailed specification document for BMS battery cells including voltage ranges, thermal limits, charge/discharge curves, and cell chemistry requirements for the automotive-grade battery management system.",
    category: "Requirements Engineering",
  },
  {
    id: 2,
    name: "Thermal Management Design",
    status: "pending",
    lastUpdated: "2026-03-25",
    owner: "Jane Smith",
    description:
      "Thermal design requirements and cooling system architecture for battery pack thermal management. Includes heat dissipation modeling, coolant flow paths, and thermal runaway prevention strategies.",
    category: "Architecture and Design",
  },
  {
    id: 3,
    name: "Safety Compliance Report",
    status: "active",
    lastUpdated: "2026-04-01",
    owner: "Alex Johnson",
    description:
      "ISO 26262 compliance documentation covering ASIL classification, safety goals, functional safety concept, and hazard analysis for the battery management system.",
    category: "Requirements Engineering",
  },
  {
    id: 4,
    name: "Communication Protocol Design",
    status: "completed",
    lastUpdated: "2026-03-20",
    owner: "Maria Garcia",
    description:
      "CAN bus communication protocol design for inter-module communication, including message definitions, signal mappings, DBC file specifications, and diagnostic protocol implementation.",
    category: "Architecture and Design",
  },
  {
    id: 5,
    name: "Power Electronics Module",
    status: "draft",
    lastUpdated: "2026-03-15",
    owner: "Robert Chen",
    description:
      "Power electronics module design including DC-DC converter specifications, power MOSFET selection, gate driver circuits, and EMC compliance requirements.",
    category: "Implementation",
  },
  {
    id: 6,
    name: "State of Charge Algorithm",
    status: "pending",
    lastUpdated: "2026-03-22",
    owner: "Sarah Wilson",
    description:
      "SoC estimation algorithm development using Extended Kalman Filter approach. Includes coulomb counting fallback, OCV-SoC lookup tables, and temperature compensation.",
    category: "Implementation",
  },
  {
    id: 7,
    name: "Cell Balancing Strategy",
    status: "active",
    lastUpdated: "2026-03-30",
    owner: "David Kim",
    description:
      "Active and passive cell balancing strategy design. Covers balancing thresholds, energy dissipation calculations, balancing current limitations, and control algorithm specifications.",
    category: "Requirements Engineering",
  },
  {
    id: 8,
    name: "HIL Test Environment Setup",
    status: "draft",
    lastUpdated: "2026-03-10",
    owner: "Lisa Anderson",
    description:
      "Hardware-in-the-Loop test environment configuration for BMS validation. Includes dSPACE setup, battery emulator configuration, fault injection framework, and test automation scripts.",
    category: "Testing",
  },
];
