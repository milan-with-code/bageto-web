import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ShippingPolicyPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 px-4 bg-leather-dark">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold text-white mb-6">Shipping Policy</h1>
                    <p className="text-xl text-leather-cream max-w-3xl mx-auto leading-relaxed">
                        Learn about our shipping options, delivery times, and international shipping policies.
                    </p>
                    <p className="text-leather-tan mt-4">Last updated: March 15, 2024</p>
                </div>
            </section>

            {/* Shipping Content */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Shipping Overview</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    All orders are carefully handcrafted in our Florence, Italy workshop and shipped worldwide. We partner
                                    with trusted carriers to ensure your leather goods arrive safely and on time.
                                </p>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-leather-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-2xl">📦</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-leather-dark mb-2">Secure Packaging</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Each item is carefully wrapped and packaged to prevent damage during transit.
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-leather-brown rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-2xl">🚚</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-leather-dark mb-2">Tracked Delivery</h3>
                                        <p className="text-muted-foreground text-sm">
                                            All shipments include tracking information so you can monitor your order's progress.
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-leather-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-2xl">🌍</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-leather-dark mb-2">Worldwide Shipping</h3>
                                        <p className="text-muted-foreground text-sm">
                                            We ship to over 50 countries with various delivery options available.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Shipping Zones and Times</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="text-lg font-semibold text-leather-dark mb-3 flex items-center gap-2">
                                                <Badge className="bg-leather-gold text-leather-dark">Zone 1</Badge>
                                                Italy
                                            </h3>
                                            <div className="space-y-2 text-muted-foreground">
                                                <div className="flex justify-between">
                                                    <span>Standard Shipping</span>
                                                    <span>2-3 business days</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Express Shipping</span>
                                                    <span>1-2 business days</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Free shipping on orders over</span>
                                                    <span>€75</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-leather-dark mb-3 flex items-center gap-2">
                                                <Badge className="bg-leather-brown text-white">Zone 2</Badge>
                                                European Union
                                            </h3>
                                            <div className="space-y-2 text-muted-foreground">
                                                <div className="flex justify-between">
                                                    <span>Standard Shipping</span>
                                                    <span>5-7 business days</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Express Shipping</span>
                                                    <span>3-4 business days</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Free shipping on orders over</span>
                                                    <span>€150</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-leather-dark mb-3 flex items-center gap-2">
                                                <Badge className="bg-leather-tan text-leather-dark">Zone 3</Badge>
                                                North America
                                            </h3>
                                            <div className="space-y-2 text-muted-foreground">
                                                <div className="flex justify-between">
                                                    <span>Standard Shipping</span>
                                                    <span>10-14 business days</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Express Shipping</span>
                                                    <span>5-7 business days</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Free shipping on orders over</span>
                                                    <span>€300</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-semibold text-leather-dark mb-3 flex items-center gap-2">
                                                <Badge className="bg-leather-dark text-white">Zone 4</Badge>
                                                Rest of World
                                            </h3>
                                            <div className="space-y-2 text-muted-foreground">
                                                <div className="flex justify-between">
                                                    <span>Standard Shipping</span>
                                                    <span>14-21 business days</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Express Shipping</span>
                                                    <span>7-10 business days</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Free shipping on orders over</span>
                                                    <span>€400</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Shipping Costs</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Shipping costs are calculated based on destination, package weight, and selected shipping method.
                                    Exact costs will be displayed at checkout before you complete your order.
                                </p>
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse">
                                        <thead>
                                            <tr className="border-b border-leather-tan">
                                                <th className="text-left py-3 px-4 font-semibold text-leather-dark">Destination</th>
                                                <th className="text-left py-3 px-4 font-semibold text-leather-dark">Standard</th>
                                                <th className="text-left py-3 px-4 font-semibold text-leather-dark">Express</th>
                                                <th className="text-left py-3 px-4 font-semibold text-leather-dark">Free Shipping</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="border-b border-leather-cream">
                                                <td className="py-3 px-4 font-medium">Italy</td>
                                                <td className="py-3 px-4 text-muted-foreground">€8.50</td>
                                                <td className="py-3 px-4 text-muted-foreground">€15.00</td>
                                                <td className="py-3 px-4 text-muted-foreground">Orders €75+</td>
                                            </tr>
                                            <tr className="border-b border-leather-cream">
                                                <td className="py-3 px-4 font-medium">European Union</td>
                                                <td className="py-3 px-4 text-muted-foreground">€12.50</td>
                                                <td className="py-3 px-4 text-muted-foreground">€25.00</td>
                                                <td className="py-3 px-4 text-muted-foreground">Orders €150+</td>
                                            </tr>
                                            <tr className="border-b border-leather-cream">
                                                <td className="py-3 px-4 font-medium">United Kingdom</td>
                                                <td className="py-3 px-4 text-muted-foreground">€18.00</td>
                                                <td className="py-3 px-4 text-muted-foreground">€35.00</td>
                                                <td className="py-3 px-4 text-muted-foreground">Orders €200+</td>
                                            </tr>
                                            <tr className="border-b border-leather-cream">
                                                <td className="py-3 px-4 font-medium">North America</td>
                                                <td className="py-3 px-4 text-muted-foreground">€25.00</td>
                                                <td className="py-3 px-4 text-muted-foreground">€45.00</td>
                                                <td className="py-3 px-4 text-muted-foreground">Orders €300+</td>
                                            </tr>
                                            <tr>
                                                <td className="py-3 px-4 font-medium">Rest of World</td>
                                                <td className="py-3 px-4 text-muted-foreground">€30.00</td>
                                                <td className="py-3 px-4 text-muted-foreground">€55.00</td>
                                                <td className="py-3 px-4 text-muted-foreground">Orders €400+</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Order Processing</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Processing Time</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Most orders are processed and shipped within 1-2 business days. Custom orders require 4-8 weeks for
                                        production before shipping. You will receive an email confirmation when your order ships, including
                                        tracking information.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Business Days</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Business days are Monday through Friday, excluding Italian national holidays. Orders placed on
                                        weekends or holidays will be processed on the next business day.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Order Changes</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Once an order is placed, changes or cancellations may not be possible if the item has already been
                                        processed or shipped. Please contact us immediately if you need to modify your order.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">International Shipping</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Customs and Duties</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        International customers may be subject to import duties, taxes, and customs fees determined by the
                                        destination country. These charges are the responsibility of the recipient and are not included in
                                        our shipping costs.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Customs Documentation</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We provide accurate customs declarations and commercial invoices for all international shipments.
                                        Items are declared at their full retail value as required by international shipping regulations.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Restricted Countries</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Due to shipping restrictions, we cannot ship to certain countries. Please contact us if you're
                                        unsure whether we can ship to your location.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Delivery Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Delivery Requirements</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Someone must be available to receive the package during normal business hours. If no one is
                                        available, the carrier will leave a delivery notice with instructions for redelivery or pickup.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Address Accuracy</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Please ensure your shipping address is complete and accurate. We are not responsible for packages
                                        delivered to incorrect addresses provided by the customer. Address changes after shipping may incur
                                        additional fees.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Damaged or Lost Packages</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        If your package arrives damaged or goes missing during transit, please contact us within 48 hours.
                                        We will work with the carrier to resolve the issue and ensure you receive your order.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    For questions about shipping or to track your order, please contact us:
                                </p>
                                <div className="bg-leather-cream p-4 rounded-lg">
                                    <p className="text-leather-dark">
                                        <strong>LeatherCraft Shipping Department</strong>
                                        <br />
                                        Email: shipping@leathercraft.com
                                        <br />
                                        Phone: +39 055 123 4567
                                        <br />
                                        Hours: Monday-Friday, 9:00 AM - 6:00 PM CET
                                    </p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
