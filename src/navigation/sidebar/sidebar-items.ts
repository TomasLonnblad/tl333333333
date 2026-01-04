import {
  Banknote,
  Calendar,
  ChartBar,
  Fingerprint,
  Forklift,
  Gauge,
  GraduationCap,
  Kanban,
  LayoutDashboard,
  Lock,
  type LucideIcon,
  Mail,
  MessageSquare,
  ReceiptText,
  ShoppingBag,
  SquareArrowUpRight,
  Users,
} from "lucide-react";

export interface NavSubItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavMainItem {
  title: string;
  url: string;
  icon?: LucideIcon;
  subItems?: NavSubItem[];
  comingSoon?: boolean;
  newTab?: boolean;
  isNew?: boolean;
}

export interface NavGroup {
  id: number;
  label?: string;
  items: NavMainItem[];
}

export const sidebarItems: NavGroup[] = [
  {
    id: 1,
    label: "Dashboards",
    items: [
      {
        title: "Default",
        url: "/dashboard/default",
        icon: LayoutDashboard,
      },
      {
        title: "CRM",
        url: "/dashboard/crm",
        icon: ChartBar,
      },
      {
        title: "Finance",
        url: "/dashboard/finance",
        icon: Banknote,
      },
      {
        title: "Analytics",
        url: "/dashboard/finance",
        icon: Gauge,
    
      },
      {
        title: "E-commerce",
        url: "/dashboard/coming-soon",
        icon: ShoppingBag,
      
      },
      {
        title: "Academy",
        url: "/dashboard/coming-soon3",
        icon: GraduationCap,
       
      },
      {
        title: "Logistics",
        url: "/dashboard/gesap",
        icon: Forklift,
      
      },
    ],
  },
  {
    id: 2,
    label: "Pages",
    items: [
      {
        title: "Email",
        url: "/dashboard/gesap2",
        icon: Mail,
       
      },
      {
        title: "Chat",
        url: "/dashboard/gesap3",
        icon: MessageSquare,
     
      },
      {
        title: "Calendar",
        url: "/dashboard/gesap4",
        icon: Calendar,
       
      },
      {
        title: "Kanban",
        url: "/dashboard/gesap5",
        icon: Kanban,
       
      },
      {
        title: "Invoice",
        url: "/dashboard/gesap6",
        icon: ReceiptText,
     
      },
      {
        title: "Users",
        url: "/dashboard/gesap7",
        icon: Users,
      
      },
      {
        title: "Roles",
        url: "/dashboard/gesap8",
        icon: Lock,
        
      },
      {
        title: "Authentication",
        url: "/auth",
        icon: Fingerprint,
        subItems: [
          { title: "Login v1", url: "/auth/v1/login", newTab: true },
          { title: "Login v2", url: "/auth/v2/login", newTab: true },
          { title: "Register v1", url: "/auth/v1/register", newTab: true },
          { title: "Register v2", url: "/auth/v2/register", newTab: true },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Misc",
    items: [
      {
        title: "Others",
        url: "/dashboard/coming-soon",
        icon: SquareArrowUpRight,
       
      },
    ],
  },
];
