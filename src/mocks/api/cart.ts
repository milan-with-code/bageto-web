import type { CartStep } from "@/types/cart";

export const steps: CartStep[] = [
    { id: 1, name: "Shipping", description: "Delivery information" },
    { id: 2, name: "Payment", description: "Payment details" },
    { id: 3, name: "Review", description: "Order confirmation" },
];
