import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PrivacyPolicyPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 px-4 bg-leather-dark">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold text-white mb-6">Privacy Policy</h1>
                    <p className="text-xl text-leather-cream max-w-3xl mx-auto leading-relaxed">
                        Your privacy is important to us. Learn how we collect, use, and protect your personal information.
                    </p>
                    <p className="text-leather-tan mt-4">Last updated: March 15, 2024</p>
                </div>
            </section>

            {/* Privacy Policy Content */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Information We Collect</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Personal Information</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We collect information you provide directly to us, such as when you create an account, make a
                                        purchase, subscribe to our newsletter, or contact us. This may include:
                                    </p>
                                    <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                                        <li>Name and contact information (email, phone, address)</li>
                                        <li>Payment information (processed securely by our payment providers)</li>
                                        <li>Account credentials and preferences</li>
                                        <li>Communication history and customer service interactions</li>
                                        <li>Product reviews and feedback</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Automatically Collected Information</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        When you visit our website, we automatically collect certain information about your device and usage
                                        patterns:
                                    </p>
                                    <ul className="list-disc list-inside mt-2 text-muted-foreground space-y-1">
                                        <li>IP address and location data</li>
                                        <li>Browser type and version</li>
                                        <li>Pages visited and time spent on our site</li>
                                        <li>Referring website information</li>
                                        <li>Device information and screen resolution</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">How We Use Your Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground leading-relaxed">
                                    We use the information we collect for various purposes, including:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-leather-dark mb-2">Service Provision</h3>
                                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                            <li>Processing and fulfilling orders</li>
                                            <li>Managing your account and preferences</li>
                                            <li>Providing customer support</li>
                                            <li>Sending order confirmations and updates</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-leather-dark mb-2">Communication & Marketing</h3>
                                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                            <li>Sending promotional emails (with consent)</li>
                                            <li>Notifying you of new products or sales</li>
                                            <li>Conducting surveys and collecting feedback</li>
                                            <li>Personalizing your shopping experience</li>
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Information Sharing</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground leading-relaxed">
                                    We do not sell, trade, or rent your personal information to third parties. We may share your
                                    information only in the following circumstances:
                                </p>
                                <div className="space-y-3">
                                    <div>
                                        <h3 className="text-lg font-semibold text-leather-dark mb-1">Service Providers</h3>
                                        <p className="text-muted-foreground">
                                            With trusted third-party service providers who assist us in operating our website, conducting
                                            business, or serving you (payment processors, shipping companies, email services).
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-leather-dark mb-1">Legal Requirements</h3>
                                        <p className="text-muted-foreground">
                                            When required by law, regulation, legal process, or governmental request, or to protect our
                                            rights, property, or safety.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-leather-dark mb-1">Business Transfers</h3>
                                        <p className="text-muted-foreground">
                                            In connection with any merger, sale of company assets, financing, or acquisition of all or a
                                            portion of our business.
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Your Rights and Choices</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground leading-relaxed">
                                    Under GDPR and other applicable privacy laws, you have certain rights regarding your personal
                                    information:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-leather-dark mb-1">Access & Portability</h3>
                                            <p className="text-muted-foreground text-sm">
                                                Request a copy of your personal data and receive it in a portable format.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-leather-dark mb-1">Correction</h3>
                                            <p className="text-muted-foreground text-sm">
                                                Update or correct inaccurate personal information.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-leather-dark mb-1">Deletion</h3>
                                            <p className="text-muted-foreground text-sm">
                                                Request deletion of your personal data (subject to legal obligations).
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-leather-dark mb-1">Restriction</h3>
                                            <p className="text-muted-foreground text-sm">Limit how we process your personal information.</p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-leather-dark mb-1">Objection</h3>
                                            <p className="text-muted-foreground text-sm">
                                                Object to processing based on legitimate interests or direct marketing.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-leather-dark mb-1">Withdraw Consent</h3>
                                            <p className="text-muted-foreground text-sm">
                                                Withdraw consent for processing where consent is the legal basis.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Data Security & Retention</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Security Measures</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We implement appropriate technical and organizational security measures to protect your personal
                                        information against unauthorized access, alteration, disclosure, or destruction. This includes
                                        encryption, secure servers, and regular security assessments.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Data Retention</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        We retain your personal information only as long as necessary to fulfill the purposes outlined in
                                        this policy, comply with legal obligations, resolve disputes, and enforce agreements. Account
                                        information is typically retained for 7 years after account closure for legal and tax purposes.
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
                                    If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
                                </p>
                                <div className="bg-leather-cream p-4 rounded-lg">
                                    <p className="text-leather-dark">
                                        <strong>LeatherCraft Privacy Team</strong>
                                        <br />
                                        Email: privacy@leathercraft.com
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
