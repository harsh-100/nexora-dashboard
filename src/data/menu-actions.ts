export interface MenuAction {
  id: string;
  label: string;
  icon: string;
  shortcut?: string;
  dividerAfter?: boolean;
}

export const menuActions: MenuAction[] = [
  {
    id: "item-history",
    label: "Item History",
    icon: "history",
  },
  {
    id: "revision",
    label: "Revision",
    icon: "git-branch",
    dividerAfter: true,
  },
  {
    id: "import",
    label: "Import",
    icon: "upload",
  },
  {
    id: "duplicate",
    label: "Duplicate",
    icon: "copy",
  },
  {
    id: "export",
    label: "Export",
    icon: "download",
    dividerAfter: true,
  },
  {
    id: "delete",
    label: "Delete Project",
    icon: "trash-2",
  },
];
