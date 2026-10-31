import {
  Activity,
  ArrowLeftRight,
  FileSpreadsheet,
  FileText,
  Gauge,
  Landmark,
  ReceiptText,
  Settings2,
  Users,
  UsersRound,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ModuleDefinition = {
  label: string;
  path: string;
  icon: LucideIcon;
  description: string;
};

/** Keep this list in the exact order approved for the DIVYA AGRO FARMS sidebar. */
export const modules: ModuleDefinition[] = [
  {
    label: "Dashboard",
    path: "/",
    icon: Gauge,
    description: "Business overview and approved dashboard information.",
  },
  {
    label: "Customers",
    path: "/customers",
    icon: UsersRound,
    description: "Customer records and related information.",
  },
  {
    label: "Quotations",
    path: "/quotations",
    icon: FileText,
    description: "Quotation records and document workflows.",
  },
  {
    label: "Invoices",
    path: "/invoices",
    icon: ReceiptText,
    description: "Invoice records and approved invoice workflows.",
  },
  {
    label: "Sales & Purchases",
    path: "/sales-purchases",
    icon: ArrowLeftRight,
    description: "Sales and purchase records.",
  },
  {
    label: "Export Center",
    path: "/export-center",
    icon: FileSpreadsheet,
    description: "Approved export and reporting workflows.",
  },
  {
    label: "Bank Details",
    path: "/bank-details",
    icon: Landmark,
    description: "Business bank account information.",
  },
  {
    label: "Settings",
    path: "/settings",
    icon: Settings2,
    description: "Company and application settings.",
  },
  {
    label: "Audit Logs",
    path: "/audit-logs",
    icon: Activity,
    description: "Review important system activity.",
  },
  {
    label: "Users",
    path: "/users",
    icon: Users,
    description: "User accounts and access management.",
  },
];
