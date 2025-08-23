import { MapPin, Phone, Mail, Clock } from "lucide-react";
import type { ContactInfo } from "@/types/contact";

export const contactInfo: ContactInfo[] = [
    {
        icon: MapPin,
        title: "Visit Our Store",
        details: [
            "Flat-1102, Axar Heights",
            "Dabholi Circle",
            "Ved Road",
            "Katargam",
            "Aksharwadi, Surat - 395004",
        ],
    },
    {
        icon: Phone,
        title: "Call Us",
        details: ["+91 8200349568", "Mon-Fri: 9AM-6PM", "Sat: 10AM-4PM"],
    },
    {
        icon: Mail,
        title: "Email Us",
        details: [
            "hello@bageto.com",
            "support@bageto.com",
            "We reply within 24 hours",
        ],
    },
    {
        icon: Clock,
        title: "Store Hours",
        details: [
            "Monday - Friday: 9AM - 6PM",
            "Saturday: 10AM - 4PM",
            "Sunday: Closed",
        ],
    },
];
