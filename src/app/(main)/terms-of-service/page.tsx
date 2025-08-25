import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function TermsOfServicePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 px-4 bg-leather-dark">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold text-white mb-6">Terms of Service</h1>
                    <p className="text-xl text-leather-cream max-w-3xl mx-auto leading-relaxed">
                        Please read these terms carefully before using our services or making a purchase.
                    </p>
                    <p className="text-leather-tan mt-4">Last updated: March 15, 2024</p>
                </div>
            </section>

            {/* Terms Content */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Agreement to Terms</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    By accessing and using the LeatherCraft website (www.leathercraft.com) and purchasing our products,
                                    you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not
                                    agree with any of these terms, you are prohibited from using or accessing this site and our services.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Products and Services</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Product Information</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant
                                        that product descriptions or other content is accurate, complete, reliable, or error-free. Colors
                                        may vary due to monitor settings and the natural characteristics of leather.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Availability</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        All products are subject to availability. We reserve the right to discontinue any product at any
                                        time. In the event that a product is listed at an incorrect price due to typographical error, we
                                        reserve the right to refuse or cancel orders placed for that product.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Custom Orders</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Custom leather goods are made to order based on your specifications. Custom orders require a 50%
                                        deposit and cannot be cancelled once production begins. Delivery times for custom items range from
                                        4-8 weeks.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Orders and Payment</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Order Acceptance</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Your receipt of an order confirmation does not signify our acceptance of your order. We reserve the
                                        right to accept or decline your order for any reason. If we cancel your order, we will refund any
                                        payment received.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Payment Terms</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Payment is due at the time of order placement. We accept major credit cards, PayPal, and bank
                                        transfers. All prices are in Euros (EUR) and include applicable VAT for EU customers. International
                                        customers may be subject to additional customs duties and taxes.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Pricing</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Prices are subject to change without notice. The price charged will be the price in effect at the
                                        time of order placement. We reserve the right to modify prices, discontinue products, or change
                                        specifications at any time.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Shipping and Delivery</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Shipping Policy</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We ship worldwide from our workshop in Florence, Italy. Shipping costs and delivery times vary by
                                        destination and shipping method selected. Risk of loss and title for products pass to you upon
                                        delivery to the carrier.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Delivery Times</h3>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                        <li>Italy: 2-3 business days</li>
                                        <li>Europe: 5-7 business days</li>
                                        <li>North America: 10-14 business days</li>
                                        <li>Rest of World: 14-21 business days</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Returns and Refunds</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Return Policy</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        You may return unused items in original condition within 30 days of delivery for a full refund.
                                        Custom or personalized items cannot be returned unless defective. Return shipping costs are the
                                        customer's responsibility except for defective or incorrect items.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Refund Processing</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Refunds will be processed to the original payment method within 5-7 business days after we receive
                                        and inspect the returned item. Original shipping charges are non-refundable unless the return is due
                                        to our error.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Intellectual Property</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Trademarks and Copyrights</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        The LeatherCraft name, logo, and all related names, logos, product and service names, designs, and
                                        slogans are trademarks of LeatherCraft or its affiliates. You must not use such marks without our
                                        prior written permission.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Website Content</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        All content on this website, including text, graphics, logos, images, and software, is the property
                                        of LeatherCraft and is protected by copyright and other intellectual property laws. You may not
                                        reproduce, distribute, or create derivative works without permission.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Limitation of Liability</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground leading-relaxed">
                                    To the fullest extent permitted by law, LeatherCraft shall not be liable for any indirect, incidental,
                                    special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred
                                    directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from
                                    your use of our products or services.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Our total liability to you for all claims arising from or relating to these terms or your use of our
                                    products shall not exceed the amount you paid for the specific product giving rise to the claim.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Governing Law and Disputes</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Applicable Law</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        These Terms of Service are governed by and construed in accordance with the laws of Italy, without
                                        regard to conflict of law principles. Any disputes shall be subject to the exclusive jurisdiction of
                                        the courts of Florence, Italy.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Dispute Resolution</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We encourage you to contact us first to resolve any disputes. For EU customers, you may also use the
                                        European Commission's Online Dispute Resolution platform at ec.europa.eu/consumers/odr.
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
                                    If you have questions about these Terms of Service, please contact us:
                                </p>
                                <div className="bg-leather-cream p-4 rounded-lg">
                                    <p className="text-leather-dark">
                                        <strong>LeatherCraft Legal Department</strong>
                                        <br />
                                        Email: legal@leathercraft.com
                                        <br />
                                        Address: Via dei Calzaiuoli, 123, 50122 Florence, Italy
                                        <br />
                                        Phone: +39 055 123 4567
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
