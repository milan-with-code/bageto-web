import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function CareersPage() {
    const openPositions = [
        {
            title: "Leather Artisan",
            department: "Production",
            location: "Florence, Italy",
            type: "Full-time",
            description:
                "Join our team of skilled craftspeople creating premium leather goods. Experience with traditional leather working techniques preferred.",
        },
        {
            title: "Quality Control Specialist",
            department: "Production",
            location: "Florence, Italy",
            type: "Full-time",
            description:
                "Ensure every piece meets our exacting standards. Detail-oriented individual with experience in luxury goods manufacturing.",
        },
        {
            title: "Digital Marketing Manager",
            department: "Marketing",
            location: "Remote",
            type: "Full-time",
            description:
                "Lead our digital marketing efforts to share our story with leather enthusiasts worldwide. Experience in luxury brand marketing required.",
        },
        {
            title: "Customer Experience Specialist",
            department: "Customer Service",
            location: "Remote",
            type: "Part-time",
            description:
                "Provide exceptional service to our customers. Passion for leather goods and excellent communication skills essential.",
        },
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 px-4 gradient-leather">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold text-white mb-6">Join Our Team</h1>
                    <p className="text-xl text-leather-cream max-w-3xl mx-auto leading-relaxed">
                        Be part of a legacy that values craftsmanship, quality, and the timeless art of leather working
                    </p>
                </div>
            </section>

            {/* Why Work With Us */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-leather-dark mb-12">Why LeatherCraft?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <Card className="border-leather-tan">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-leather-gold rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-2xl">🎨</span>
                                </div>
                                <h3 className="text-2xl font-bold text-leather-dark mb-4">Craftsmanship Culture</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Work alongside master artisans and learn traditional techniques passed down through generations.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-leather-brown rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-2xl">🌱</span>
                                </div>
                                <h3 className="text-2xl font-bold text-leather-dark mb-4">Growth Opportunities</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Develop your skills through mentorship programs and continuous learning opportunities.
                                </p>
                            </CardContent>
                        </Card>

                        <Card className="border-leather-tan">
                            <CardContent className="p-8 text-center">
                                <div className="w-16 h-16 bg-leather-dark rounded-full mx-auto mb-6 flex items-center justify-center">
                                    <span className="text-2xl">⚖️</span>
                                </div>
                                <h3 className="text-2xl font-bold text-leather-dark mb-4">Work-Life Balance</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    Enjoy flexible schedules and a supportive environment that values both quality work and personal
                                    well-being.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section className="py-16 px-4 bg-leather-cream">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-leather-dark mb-12">Open Positions</h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {openPositions.map((position, index) => (
                            <Card key={index} className="border-leather-tan hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <CardTitle className="text-2xl text-leather-dark">{position.title}</CardTitle>
                                            <div className="flex gap-4 text-sm text-muted-foreground mt-2">
                                                <span>{position.department}</span>
                                                <span>•</span>
                                                <span>{position.location}</span>
                                                <span>•</span>
                                                <span>{position.type}</span>
                                            </div>
                                        </div>
                                        <Button className="bg-leather-gold hover:bg-leather-tan text-leather-dark">Apply Now</Button>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">{position.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-leather-dark mb-12">Benefits & Perks</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-12 h-12 bg-leather-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-xl">💰</span>
                            </div>
                            <h3 className="font-bold text-leather-dark mb-2">Competitive Salary</h3>
                            <p className="text-sm text-muted-foreground">Fair compensation with performance bonuses</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-leather-brown rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-xl">🏥</span>
                            </div>
                            <h3 className="font-bold text-leather-dark mb-2">Health Insurance</h3>
                            <p className="text-sm text-muted-foreground">Comprehensive medical and dental coverage</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-leather-tan rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-xl">🎒</span>
                            </div>
                            <h3 className="font-bold text-leather-dark mb-2">Product Discounts</h3>
                            <p className="text-sm text-muted-foreground">50% off all LeatherCraft products</p>
                        </div>
                        <div className="text-center">
                            <div className="w-12 h-12 bg-leather-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-xl">✈️</span>
                            </div>
                            <h3 className="font-bold text-leather-dark mb-2">Paid Time Off</h3>
                            <p className="text-sm text-muted-foreground">Generous vacation and personal days</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 px-4 bg-leather-dark">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Don't See the Right Fit?</h2>
                    <p className="text-leather-cream mb-8 max-w-2xl mx-auto">
                        We're always looking for talented individuals who share our passion for quality craftsmanship. Send us your
                        resume and tell us how you'd like to contribute to our story.
                    </p>
                    <Button className="bg-leather-gold hover:bg-leather-tan text-leather-dark font-semibold">
                        Send General Application
                    </Button>
                </div>
            </section>
        </div>
    )
}
