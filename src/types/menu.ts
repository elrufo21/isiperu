export interface MenuItem {
  href: string;
  label: string;
  description?: string;
  icon?: string;
  external?: boolean;
}

export interface MenuColumn {
  title?: string;
  items: MenuItem[];
}

export interface MenuSection {
  title?: string;
  columns: MenuColumn[];
}

export interface NavigationItem {
  href: string;
  label: string;
  match: (path: string) => boolean;
  hasSubmenu?: boolean;
  submenu?: MenuSection[];
  columns?: number; // 1, 2, 3, etc.
}

export type MenuLayout = "single" | "multi-column" | "none";
