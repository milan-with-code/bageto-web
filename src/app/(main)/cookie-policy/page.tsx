import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function CookiePolicyPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 px-4 bg-leather-dark">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold text-white mb-6">Cookie Policy</h1>
                    <p className="text-xl text-leather-cream max-w-3xl mx-auto leading-relaxed">
                        Learn about how we use cookies and similar technologies to improve your browsing experience.
                    </p>
                    <p className="text-leather-tan mt-4">Last updated: March 15, 2024</p>
                </div>
            </section>

            {/* Cookie Policy Content */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto space-y-8">
                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">What Are Cookies?</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    Cookies are small text files that are stored on your device when you visit our website. They help us
                                    provide you with a better browsing experience by remembering your preferences, analyzing site usage,
                                    and personalizing content.
                                </p>
                                <p className="text-muted-foreground leading-relaxed">
                                    Similar technologies include web beacons, pixels, and local storage, which serve similar purposes to
                                    cookies. When we refer to "cookies" in this policy, we include these related technologies.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Types of Cookies We Use</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-3 flex items-center gap-2">
                                        <span className="w-3 h-3 bg-leather-gold rounded-full"></span>
                                        Essential Cookies
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-2">
                                        These cookies are necessary for the website to function properly and cannot be disabled. They enable
                                        core functionality such as:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                        <li>Shopping cart functionality</li>
                                        <li>User authentication and security</li>
                                        <li>Form submission and validation</li>
                                        <li>Load balancing and site performance</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-3 flex items-center gap-2">
                                        <span className="w-3 h-3 bg-leather-brown rounded-full"></span>
                                        Performance Cookies
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-2">
                                        These cookies help us understand how visitors interact with our website by collecting anonymous
                                        information about:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                        <li>Pages visited and time spent on each page</li>
                                        <li>Click patterns and navigation paths</li>
                                        <li>Error messages and technical issues</li>
                                        <li>Website performance and loading times</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-3 flex items-center gap-2">
                                        <span className="w-3 h-3 bg-leather-tan rounded-full"></span>
                                        Functional Cookies
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-2">
                                        These cookies enable enhanced functionality and personalization, such as:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                        <li>Remembering your preferences and settings</li>
                                        <li>Language and region selection</li>
                                        <li>Recently viewed products</li>
                                        <li>Customized content and recommendations</li>
                                    </ul>
                                </div>

                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-3 flex items-center gap-2">
                                        <span className="w-3 h-3 bg-leather-dark rounded-full"></span>
                                        Marketing Cookies
                                    </h3>
                                    <p className="text-muted-foreground leading-relaxed mb-2">
                                        These cookies are used to deliver relevant advertisements and track marketing campaign
                                        effectiveness:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                        <li>Targeted advertising based on interests</li>
                                        <li>Social media integration and sharing</li>
                                        <li>Email marketing campaign tracking</li>
                                        <li>Retargeting and remarketing campaigns</li>
                                    </ul>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Third-Party Cookies</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground leading-relaxed">
                                    We work with trusted third-party service providers who may place cookies on your device to help us
                                    provide our services:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-leather-dark mb-2">Analytics Services</h3>
                                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                            <li>Google Analytics - Website traffic analysis</li>
                                            <li>Hotjar - User behavior tracking</li>
                                            <li>Adobe Analytics - Performance metrics</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-leather-dark mb-2">Marketing Platforms</h3>
                                        <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                            <li>Facebook Pixel - Social media advertising</li>
                                            <li>Google Ads - Search and display advertising</li>
                                            <li>Mailchimp - Email marketing campaigns</li>
                                        </ul>
                                    </div>
                                </div>
                                <p className="text-muted-foreground leading-relaxed">
                                    These third parties have their own privacy policies and cookie practices. We recommend reviewing their
                                    policies to understand how they use your information.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Cookie Duration</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-leather-dark mb-2">Session Cookies</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            These temporary cookies are deleted when you close your browser. They help maintain your session
                                            while browsing our website, such as keeping items in your shopping cart.
                                        </p>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-leather-dark mb-2">Persistent Cookies</h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            These cookies remain on your device for a specified period or until you delete them. They remember
                                            your preferences and settings for future visits.
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-leather-cream p-4 rounded-lg">
                                    <h4 className="text-lg font-semibold text-leather-dark mb-2">Typical Cookie Lifespans</h4>
                                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                                        <div className="space-y-1">
                                            <div className="flex justify-between">
                                                <span>Essential cookies:</span>
                                                <span>Session or 1 year</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Performance cookies:</span>
                                                <span>2 years</span>
                                            </div>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex justify-between">
                                                <span>Functional cookies:</span>
                                                <span>1-2 years</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span>Marketing cookies:</span>
                                                <span>30 days - 2 years</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Managing Your Cookie Preferences</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Cookie Consent Banner</h3>
                                    <p className="text-muted-foreground leading-relaxed">
                                        When you first visit our website, you'll see a cookie consent banner allowing you to accept or
                                        customize your cookie preferences. You can change these settings at any time using the cookie
                                        preferences link in our footer.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-leather-dark mb-2">Browser Settings</h3>
                                    <p className="text-muted-foreground leading-relaxed mb-2">
                                        You can also manage cookies through your browser settings:
                                    </p>
                                    <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                        <li>Block all cookies or only third-party cookies</li>
                                        <li>Delete existing cookies from your device</li>
                                        <li>Set up notifications when cookies are being used</li>
                                        <li>Browse in private/incognito mode</li>
                                    </ul>
                                </div>
                                <div className="bg-amber-50 border border-amber-200 p-4 rounded-lg">
                                    <h4 className="text-lg font-semibold text-amber-800 mb-2">Important Note</h4>
                                    <p className="text-amber-700 text-sm">
                                        Disabling certain cookies may affect website functionality. Essential cookies cannot be disabled as
                                        they are necessary for the website to work properly.
                                    </p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Your Rights</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <p className="text-muted-foreground leading-relaxed">
                                    Under GDPR and other privacy laws, you have certain rights regarding cookies and personal data:
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-leather-dark mb-1">Consent</h3>
                                            <p className="text-muted-foreground text-sm">
                                                Give or withdraw consent for non-essential cookies at any time.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-leather-dark mb-1">Access</h3>
                                            <p className="text-muted-foreground text-sm">
                                                Request information about what cookies are stored on your device.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div>
                                            <h3 className="text-lg font-semibold text-leather-dark mb-1">Deletion</h3>
                                            <p className="text-muted-foreground text-sm">
                                                Request deletion of cookies and associated personal data.
                                            </p>
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-leather-dark mb-1">Objection</h3>
                                            <p className="text-muted-foreground text-sm">
                                                Object to the use of cookies for marketing purposes.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Updates to This Policy</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed">
                                    We may update this Cookie Policy from time to time to reflect changes in our practices or applicable
                                    laws. We will notify you of any material changes by posting the updated policy on our website and
                                    updating the "Last updated" date at the top of this page.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardHeader>
                                <CardTitle className="text-2xl text-leather-dark">Contact Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-muted-foreground leading-relaxed mb-4">
                                    If you have questions about our use of cookies or this policy, please contact us:
                                </p>
                                <div className="bg-leather-cream p-4 rounded-lg mb-4">
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
                                <div className="flex gap-4">
                                    <Button className="bg-leather-gold hover:bg-leather-tan text-leather-dark">
                                        Manage Cookie Preferences
                                    </Button>
                                    <Button
                                        variant="outline"
                                        className="border-leather-tan text-leather-dark hover:bg-leather-tan bg-transparent"
                                    >
                                        Contact Privacy Team
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    )
}
