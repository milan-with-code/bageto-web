import type { Icon as LucideIcon } from "lucide-react";

export interface Stat {
    label: string;
    value: string;
    icon: LucideIcon;
}

export interface TeamMember {
    name: string;
    role: string;
    image: string;
    bio: string;
}

export interface CompanyValue {
    title: string;
    description: string;
}
