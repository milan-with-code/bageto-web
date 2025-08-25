import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ReturnsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 px-4 bg-leather-dark">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold text-white mb-6">Returns & Exchanges</h1>
                    <p className="text-xl text-leather-cream max-w-3xl mx-auto leading-relaxed">
                        We want you to be completely satisfied with your purchase. Learn about our return policy and process.
                    </p>
                </div>
            </section>

            {/* Return Policy Overview */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <Card className="border-leather-tan mb-8">
                            <CardHeader>
                                <CardTitle className="text-3xl text-leather-dark">Our Return Policy</CardTitle>
                                <p className="text-muted-foreground">Simple, fair, and customer-focused</p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-3 gap-6">
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-leather-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-2xl font-bold text-leather-dark">30</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-leather-dark mb-2">Days to Return</h3>
                                        <p className="text-muted-foreground text-sm">
                                            You have 30 days from delivery to return your item for a full refund
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-leather-brown rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-2xl">📦</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-leather-dark mb-2">Free Returns</h3>
                                        <p className="text-muted-foreground text-sm">
                                            We provide prepaid return labels for all eligible returns within Europe
                                        </p>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-16 h-16 bg-leather-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                                            <span className="text-2xl">💰</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-leather-dark mb-2">Full Refund</h3>
                                        <p className="text-muted-foreground text-sm">
                                            Receive a full refund to your original payment method within 5-7 business days
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Return Process */}
                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">How to Return an Item</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-leather-gold rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-lg font-bold text-leather-dark">1</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-leather-dark mb-2">Initiate Return</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Contact our customer service team at returns@leathercraft.com or use our online return form.
                                                Provide your order number and reason for return.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-leather-brown rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-lg font-bold text-white">2</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-leather-dark mb-2">Receive Return Label</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                We'll email you a prepaid return shipping label within 24 hours. Print the label and attach it
                                                to your package.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-leather-dark rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-lg font-bold text-white">3</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-leather-dark mb-2">Package & Ship</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Pack the item in its original packaging (if available) and drop it off at any authorized
                                                shipping location or schedule a pickup.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex gap-4">
                                        <div className="w-10 h-10 bg-leather-tan rounded-full flex items-center justify-center flex-shrink-0">
                                            <span className="text-lg font-bold text-leather-dark">4</span>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-leather-dark mb-2">Receive Refund</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Once we receive and inspect your return, we'll process your refund within 2-3 business days.
                                                You'll receive an email confirmation.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Return Conditions */}
            <section className="py-16 px-4 bg-leather-cream">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-leather-dark mb-12">Return Conditions</h2>
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
                        {/* Eligible Returns */}
                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark flex items-center gap-2">
                                    <span className="text-green-600">✅</span>
                                    Eligible for Return
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Badge className="bg-green-100 text-green-800 mt-1">✓</Badge>
                                        <span className="text-muted-foreground">Items in original, unused condition</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Badge className="bg-green-100 text-green-800 mt-1">✓</Badge>
                                        <span className="text-muted-foreground">Items with original tags and packaging</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Badge className="bg-green-100 text-green-800 mt-1">✓</Badge>
                                        <span className="text-muted-foreground">Items returned within 30 days of delivery</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Badge className="bg-green-100 text-green-800 mt-1">✓</Badge>
                                        <span className="text-muted-foreground">Defective or damaged items (any time)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Badge className="bg-green-100 text-green-800 mt-1">✓</Badge>
                                        <span className="text-muted-foreground">Wrong item received</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>

                        {/* Non-Eligible Returns */}
                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark flex items-center gap-2">
                                    <span className="text-red-600">❌</span>
                                    Not Eligible for Return
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-3">
                                        <Badge className="bg-red-100 text-red-800 mt-1">✗</Badge>
                                        <span className="text-muted-foreground">Custom or personalized items</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Badge className="bg-red-100 text-red-800 mt-1">✗</Badge>
                                        <span className="text-muted-foreground">Items showing signs of wear or use</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Badge className="bg-red-100 text-red-800 mt-1">✗</Badge>
                                        <span className="text-muted-foreground">Items returned after 30 days (unless defective)</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Badge className="bg-red-100 text-red-800 mt-1">✗</Badge>
                                        <span className="text-muted-foreground">Items damaged by misuse or neglect</span>
                                    </li>
                                    <li className="flex items-start gap-3">
                                        <Badge className="bg-red-100 text-red-800 mt-1">✗</Badge>
                                        <span className="text-muted-foreground">Items without proof of purchase</span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Exchanges */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-3xl text-leather-dark">Exchanges</CardTitle>
                                <p className="text-muted-foreground">Need a different size or color? We've got you covered.</p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <h3 className="text-xl font-bold text-leather-dark mb-4">Size Exchanges</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            If you need a different size, we offer free exchanges within 30 days. The new item will be shipped
                                            as soon as we receive your return.
                                        </p>
                                        <Button className="bg-leather-gold hover:bg-leather-tan text-leather-dark">
                                            Request Size Exchange
                                        </Button>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-leather-dark mb-4">Color/Style Exchanges</h3>
                                        <p className="text-muted-foreground leading-relaxed mb-4">
                                            Want to try a different color or style? Exchange within 30 days for any item of equal or lesser
                                            value. Price differences will be refunded.
                                        </p>
                                        <Button className="bg-leather-gold hover:bg-leather-tan text-leather-dark">
                                            Request Style Exchange
                                        </Button>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* International Returns */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-3xl text-leather-dark">International Returns</CardTitle>
                                <p className="text-muted-foreground">Special considerations for customers outside Europe</p>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="text-xl font-bold text-leather-dark mb-3">Return Shipping</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                International customers are responsible for return shipping costs. We recommend using a tracked
                                                shipping service for your protection.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-leather-dark mb-3">Customs & Duties</h3>
                                            <p className="text-muted-foreground leading-relaxed">
                                                Original customs duties and taxes are non-refundable. Mark packages as "RETURN" to avoid
                                                additional charges.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="bg-leather-cream p-6 rounded-lg">
                                        <h4 className="text-lg font-semibold text-leather-dark mb-2">Important Note</h4>
                                        <p className="text-muted-foreground">
                                            Please contact our international customer service team before initiating a return to ensure proper
                                            documentation and smooth processing.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Contact Support */}
            <section className="py-16 px-4 bg-leather-dark">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Need Help with Your Return?</h2>
                    <p className="text-leather-cream mb-8 max-w-2xl mx-auto">
                        Our customer service team is here to help make your return process as smooth as possible. Contact us with
                        any questions or concerns.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button className="bg-leather-gold hover:bg-leather-tan text-leather-dark font-semibold">
                            Start Return Process
                        </Button>
                        <Button
                            variant="outline"
                            className="border-leather-cream text-leather-cream hover:bg-leather-cream hover:text-leather-dark bg-transparent"
                        >
                            Contact Support
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
