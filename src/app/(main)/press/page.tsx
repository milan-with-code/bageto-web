import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function PressPage() {
    const pressReleases = [
        {
            date: "March 15, 2024",
            title: "LeatherCraft Launches Sustainable Collection",
            excerpt:
                "New eco-friendly line features vegetable-tanned leather and recycled materials, reinforcing our commitment to environmental responsibility.",
            category: "Product Launch",
        },
        {
            date: "January 8, 2024",
            title: "Award Recognition: Best Luxury Leather Goods 2024",
            excerpt:
                "LeatherCraft receives prestigious Luxury Craftsmanship Award for excellence in traditional leather working techniques.",
            category: "Awards",
        },
        {
            date: "November 22, 2023",
            title: "Expansion into North American Market",
            excerpt:
                "Opening new distribution center in New York to better serve our growing customer base across North America.",
            category: "Business",
        },
        {
            date: "September 5, 2023",
            title: "Partnership with Italian Leather Consortium",
            excerpt:
                "Exclusive partnership ensures access to the finest Italian leather while supporting traditional tanning methods.",
            category: "Partnership",
        },
    ]

    const mediaKit = [
        {
            title: "Company Logo Package",
            description: "High-resolution logos in various formats",
            fileSize: "2.5 MB",
        },
        {
            title: "Product Photography",
            description: "Professional product images for editorial use",
            fileSize: "15.8 MB",
        },
        {
            title: "Brand Guidelines",
            description: "Complete brand identity and usage guidelines",
            fileSize: "4.2 MB",
        },
        {
            title: "Executive Headshots",
            description: "Professional photos of leadership team",
            fileSize: "8.1 MB",
        },
    ]

    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 px-4 bg-leather-dark">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold text-white mb-6">Press Center</h1>
                    <p className="text-xl text-leather-cream max-w-3xl mx-auto leading-relaxed">
                        Latest news, press releases, and media resources from LeatherCraft
                    </p>
                </div>
            </section>

            {/* Press Contact */}
            <section className="py-16 px-4 bg-leather-cream">
                <div className="container mx-auto">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl font-bold text-center text-leather-dark mb-12">Media Inquiries</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            <Card className="border-leather-tan">
                                <CardHeader>
                                    <CardTitle className="text-leather-dark">Press Contact</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div>
                                            <h4 className="font-semibold text-leather-dark">Sarah Chen</h4>
                                            <p className="text-muted-foreground">Director of Communications</p>
                                        </div>
                                        <div>
                                            <p className="text-muted-foreground">Email: press@leathercraft.com</p>
                                            <p className="text-muted-foreground">Phone: +39 055 123 4567</p>
                                        </div>
                                        <div>
                                            <p className="text-sm text-muted-foreground">Available Monday-Friday, 9:00 AM - 6:00 PM CET</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-leather-tan">
                                <CardHeader>
                                    <CardTitle className="text-leather-dark">Quick Facts</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Founded:</span>
                                            <span className="font-semibold">1990</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Headquarters:</span>
                                            <span className="font-semibold">Florence, Italy</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Employees:</span>
                                            <span className="font-semibold">25+ Artisans</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Specialty:</span>
                                            <span className="font-semibold">Luxury Leather Goods</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-muted-foreground">Markets:</span>
                                            <span className="font-semibold">Global</span>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Press Releases */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-leather-dark mb-12">Recent Press Releases</h2>
                    <div className="max-w-4xl mx-auto space-y-6">
                        {pressReleases.map((release, index) => (
                            <Card key={index} className="border-leather-tan hover:shadow-lg transition-shadow">
                                <CardHeader>
                                    <div className="flex justify-between items-start">
                                        <div className="flex-1">
                                            <div className="flex items-center gap-4 mb-2">
                                                <span className="text-sm text-muted-foreground">{release.date}</span>
                                                <span className="px-3 py-1 bg-leather-gold text-leather-dark text-xs font-semibold rounded-full">
                                                    {release.category}
                                                </span>
                                            </div>
                                            <CardTitle className="text-2xl text-leather-dark mb-3">{release.title}</CardTitle>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed mb-4">{release.excerpt}</p>
                                    <Button
                                        variant="outline"
                                        className="border-leather-tan text-leather-dark hover:bg-leather-tan bg-transparent"
                                    >
                                        Read Full Release
                                    </Button>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Media Kit */}
            <section className="py-16 px-4 bg-white">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-leather-dark mb-12">Media Kit</h2>
                    <div className="max-w-4xl mx-auto">
                        <p className="text-center text-muted-foreground mb-8 leading-relaxed">
                            Download high-quality assets for editorial use. All materials are available for press and media purposes
                            only.
                        </p>
                        <div className="grid md:grid-cols-2 gap-6">
                            {mediaKit.map((item, index) => (
                                <Card key={index} className="border-leather-tan">
                                    <CardContent className="p-6">
                                        <div className="flex justify-between items-start">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-leather-dark mb-2">{item.title}</h3>
                                                <p className="text-muted-foreground text-sm mb-3">{item.description}</p>
                                                <span className="text-xs text-muted-foreground">{item.fileSize}</span>
                                            </div>
                                            <Button className="bg-leather-gold hover:bg-leather-tan text-leather-dark ml-4">Download</Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Awards & Recognition */}
            <section className="py-16 px-4 bg-leather-cream">
                <div className="container mx-auto">
                    <h2 className="text-4xl font-bold text-center text-leather-dark mb-12">Awards & Recognition</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-20 h-20 bg-leather-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-3xl">🏆</span>
                            </div>
                            <h3 className="text-xl font-bold text-leather-dark mb-2">Luxury Craftsmanship Award</h3>
                            <p className="text-muted-foreground text-sm">2024 - Excellence in Traditional Techniques</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-leather-brown rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-3xl">🌟</span>
                            </div>
                            <h3 className="text-xl font-bold text-leather-dark mb-2">Sustainable Business Leader</h3>
                            <p className="text-muted-foreground text-sm">2023 - Environmental Responsibility</p>
                        </div>
                        <div className="text-center">
                            <div className="w-20 h-20 bg-leather-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                                <span className="text-3xl">⭐</span>
                            </div>
                            <h3 className="text-xl font-bold text-leather-dark mb-2">Customer Choice Award</h3>
                            <p className="text-muted-foreground text-sm">2023 - Highest Customer Satisfaction</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
