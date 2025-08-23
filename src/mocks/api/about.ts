import { Award, Users, Globe, Heart } from "lucide-react";
import type { Stat, TeamMember, CompanyValue } from "@/types/about";

export const stats: Stat[] = [
    { label: "Years of Excellence", value: "39", icon: Award },
    { label: "Happy Customers", value: "50K+", icon: Users },
    { label: "Countries Served", value: "25", icon: Globe },
    { label: "Products Crafted", value: "100K+", icon: Heart },
];

export const team: TeamMember[] = [
    {
        name: "Marco Bageto",
        role: "Founder & Master Craftsman",
        image: "/placeholder.svg?height=300&width=300&text=Marco+Bageto",
        bio: "With over 40 years of experience, Marco founded Bageto with a vision to create timeless leather goods.",
    },
    {
        name: "Sofia Bageto",
        role: "Creative Director",
        image: "/placeholder.svg?height=300&width=300&text=Sofia+Bageto",
        bio: "Sofia brings modern design sensibilities while honoring traditional craftsmanship techniques.",
    },
    {
        name: "Alessandro Romano",
        role: "Head of Production",
        image: "/placeholder.svg?height=300&width=300&text=Alessandro+Romano",
        bio: "Alessandro ensures every piece meets our exacting standards of quality and durability.",
    },
];

export const values: CompanyValue[] = [
    {
        title: "Craftsmanship",
        description:
            "Every piece is meticulously handcrafted by skilled artisans using time-honored techniques passed down through generations.",
    },
    {
        title: "Quality",
        description:
            "We source only the finest materials from trusted suppliers, ensuring each product meets our exacting standards.",
    },
    {
        title: "Sustainability",
        description:
            "We're committed to responsible sourcing and sustainable practices that respect both people and the environment.",
    },
    {
        title: "Heritage",
        description:
            "Our designs honor traditional leatherworking while incorporating modern functionality for today's lifestyle.",
    },
];
