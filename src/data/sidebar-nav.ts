export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
  isActive?: boolean;
}

export const sidebarNavItems: NavItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: "layout-dashboard",
    href: "/dashboard",
    isActive: true,
  },
  {
    id: "account",
    label: "Account Management",
    icon: "building-2",
    href: "/account",
  },
  {
    id: "settings",
    label: "Project Settings",
    icon: "settings",
    href: "/settings",
  },
  {
    id: "ai-config",
    label: "AI Configuration",
    icon: "user-cog",
    href: "/ai-config",
  },
];

export interface LegalLink {
  label: string;
  href: string;
}

export const legalLinks: LegalLink[] = [
  { label: "Terms of Use", href: "#" },
  { label: "Data Policy", href: "#" },
  { label: "Cookie Policy", href: "#" },
  { label: "Imprint", href: "#" },
];

export const userInfo = {
  email: "26harshagarwal@gmail.com",
  status: "Logged in",
  omegaVersion: "0.1.0",
  aiPackageVersion: "1.3.34",
};
