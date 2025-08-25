import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SizeGuidePage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 px-4 gradient-leather">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold text-white mb-6">Size Guide</h1>
                    <p className="text-xl text-leather-cream max-w-3xl mx-auto leading-relaxed">
                        Find the perfect fit for all our leather products with our comprehensive sizing guide
                    </p>
                </div>
            </section>

            {/* Size Guide Tabs */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <Tabs defaultValue="bags" className="max-w-6xl mx-auto">
                        <TabsList className="grid w-full grid-cols-4 mb-8">
                            <TabsTrigger value="bags">Bags</TabsTrigger>
                            <TabsTrigger value="wallets">Wallets</TabsTrigger>
                            <TabsTrigger value="belts">Belts</TabsTrigger>
                            <TabsTrigger value="accessories">Accessories</TabsTrigger>
                        </TabsList>

                        {/* Bags Size Guide */}
                        <TabsContent value="bags">
                            <div className="space-y-8">
                                <Card className="border-leather-tan">
                                    <CardHeader>
                                        <CardTitle className="text-3xl text-leather-dark">Bag Sizing Guide</CardTitle>
                                        <p className="text-muted-foreground">All measurements are in inches (Length × Width × Height)</p>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="overflow-x-auto">
                                            <table className="w-full border-collapse">
                                                <thead>
                                                    <tr className="border-b border-leather-tan">
                                                        <th className="text-left py-3 px-4 font-semibold text-leather-dark">Bag Type</th>
                                                        <th className="text-left py-3 px-4 font-semibold text-leather-dark">Small</th>
                                                        <th className="text-left py-3 px-4 font-semibold text-leather-dark">Medium</th>
                                                        <th className="text-left py-3 px-4 font-semibold text-leather-dark">Large</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr className="border-b border-leather-cream">
                                                        <td className="py-3 px-4 font-medium">Briefcase</td>
                                                        <td className="py-3 px-4 text-muted-foreground">15 × 11 × 4</td>
                                                        <td className="py-3 px-4 text-muted-foreground">17 × 12 × 5</td>
                                                        <td className="py-3 px-4 text-muted-foreground">19 × 14 × 6</td>
                                                    </tr>
                                                    <tr className="border-b border-leather-cream">
                                                        <td className="py-3 px-4 font-medium">Messenger Bag</td>
                                                        <td className="py-3 px-4 text-muted-foreground">13 × 10 × 3</td>
                                                        <td className="py-3 px-4 text-muted-foreground">15 × 11 × 4</td>
                                                        <td className="py-3 px-4 text-muted-foreground">17 × 13 × 5</td>
                                                    </tr>
                                                    <tr className="border-b border-leather-cream">
                                                        <td className="py-3 px-4 font-medium">Tote Bag</td>
                                                        <td className="py-3 px-4 text-muted-foreground">12 × 10 × 6</td>
                                                        <td className="py-3 px-4 text-muted-foreground">15 × 12 × 7</td>
                                                        <td className="py-3 px-4 text-muted-foreground">18 × 14 × 8</td>
                                                    </tr>
                                                    <tr className="border-b border-leather-cream">
                                                        <td className="py-3 px-4 font-medium">Duffle Bag</td>
                                                        <td className="py-3 px-4 text-muted-foreground">18 × 9 × 9</td>
                                                        <td className="py-3 px-4 text-muted-foreground">22 × 11 × 11</td>
                                                        <td className="py-3 px-4 text-muted-foreground">26 × 13 × 13</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="py-3 px-4 font-medium">Crossbody</td>
                                                        <td className="py-3 px-4 text-muted-foreground">8 × 6 × 2</td>
                                                        <td className="py-3 px-4 text-muted-foreground">10 × 7 × 3</td>
                                                        <td className="py-3 px-4 text-muted-foreground">12 × 9 × 4</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-leather-tan">
                                    <CardHeader>
                                        <CardTitle className="text-2xl text-leather-dark">Laptop Compatibility</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-leather-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                                                    <span className="text-2xl">💻</span>
                                                </div>
                                                <h3 className="font-bold text-leather-dark mb-2">13" Laptops</h3>
                                                <p className="text-sm text-muted-foreground">Small to Medium briefcases and messenger bags</p>
                                            </div>
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-leather-brown rounded-full mx-auto mb-4 flex items-center justify-center">
                                                    <span className="text-2xl">💻</span>
                                                </div>
                                                <h3 className="font-bold text-leather-dark mb-2">15" Laptops</h3>
                                                <p className="text-sm text-muted-foreground">Medium to Large briefcases and messenger bags</p>
                                            </div>
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-leather-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                                                    <span className="text-2xl">💻</span>
                                                </div>
                                                <h3 className="font-bold text-leather-dark mb-2">17" Laptops</h3>
                                                <p className="text-sm text-muted-foreground">Large briefcases and specialized laptop bags</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        {/* Wallets Size Guide */}
                        <TabsContent value="wallets">
                            <Card className="border-leather-tan">
                                <CardHeader>
                                    <CardTitle className="text-3xl text-leather-dark">Wallet Dimensions</CardTitle>
                                    <p className="text-muted-foreground">All measurements are in inches (Length × Width × Thickness)</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="overflow-x-auto">
                                        <table className="w-full border-collapse">
                                            <thead>
                                                <tr className="border-b border-leather-tan">
                                                    <th className="text-left py-3 px-4 font-semibold text-leather-dark">Wallet Type</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-leather-dark">Closed</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-leather-dark">Open</th>
                                                    <th className="text-left py-3 px-4 font-semibold text-leather-dark">Card Capacity</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr className="border-b border-leather-cream">
                                                    <td className="py-3 px-4 font-medium">Bifold</td>
                                                    <td className="py-3 px-4 text-muted-foreground">4.5 × 3.5 × 0.8</td>
                                                    <td className="py-3 px-4 text-muted-foreground">4.5 × 7.0 × 0.4</td>
                                                    <td className="py-3 px-4 text-muted-foreground">6-8 cards</td>
                                                </tr>
                                                <tr className="border-b border-leather-cream">
                                                    <td className="py-3 px-4 font-medium">Trifold</td>
                                                    <td className="py-3 px-4 text-muted-foreground">4.0 × 3.0 × 1.0</td>
                                                    <td className="py-3 px-4 text-muted-foreground">4.0 × 9.0 × 0.3</td>
                                                    <td className="py-3 px-4 text-muted-foreground">4-6 cards</td>
                                                </tr>
                                                <tr className="border-b border-leather-cream">
                                                    <td className="py-3 px-4 font-medium">Card Holder</td>
                                                    <td className="py-3 px-4 text-muted-foreground">4.0 × 2.5 × 0.3</td>
                                                    <td className="py-3 px-4 text-muted-foreground">N/A</td>
                                                    <td className="py-3 px-4 text-muted-foreground">4-6 cards</td>
                                                </tr>
                                                <tr className="border-b border-leather-cream">
                                                    <td className="py-3 px-4 font-medium">Long Wallet</td>
                                                    <td className="py-3 px-4 text-muted-foreground">7.5 × 4.0 × 0.8</td>
                                                    <td className="py-3 px-4 text-muted-foreground">7.5 × 8.0 × 0.4</td>
                                                    <td className="py-3 px-4 text-muted-foreground">12-16 cards</td>
                                                </tr>
                                                <tr>
                                                    <td className="py-3 px-4 font-medium">Travel Wallet</td>
                                                    <td className="py-3 px-4 text-muted-foreground">9.0 × 5.0 × 1.0</td>
                                                    <td className="py-3 px-4 text-muted-foreground">9.0 × 10.0 × 0.5</td>
                                                    <td className="py-3 px-4 text-muted-foreground">8-12 cards</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Belts Size Guide */}
                        <TabsContent value="belts">
                            <div className="space-y-8">
                                <Card className="border-leather-tan">
                                    <CardHeader>
                                        <CardTitle className="text-3xl text-leather-dark">Belt Sizing Guide</CardTitle>
                                        <p className="text-muted-foreground">How to find your perfect belt size</p>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <h3 className="text-2xl font-bold text-leather-dark mb-4">Measuring Instructions</h3>
                                                <ol className="space-y-3 text-muted-foreground">
                                                    <li className="flex gap-3">
                                                        <span className="flex-shrink-0 w-6 h-6 bg-leather-gold text-leather-dark rounded-full flex items-center justify-center text-sm font-bold">
                                                            1
                                                        </span>
                                                        <span>Measure your waist where you typically wear your belt</span>
                                                    </li>
                                                    <li className="flex gap-3">
                                                        <span className="flex-shrink-0 w-6 h-6 bg-leather-gold text-leather-dark rounded-full flex items-center justify-center text-sm font-bold">
                                                            2
                                                        </span>
                                                        <span>Add 2 inches to your waist measurement</span>
                                                    </li>
                                                    <li className="flex gap-3">
                                                        <span className="flex-shrink-0 w-6 h-6 bg-leather-gold text-leather-dark rounded-full flex items-center justify-center text-sm font-bold">
                                                            3
                                                        </span>
                                                        <span>This is your belt size (round to nearest even number)</span>
                                                    </li>
                                                </ol>
                                            </div>
                                            <div>
                                                <h3 className="text-2xl font-bold text-leather-dark mb-4">Size Conversion</h3>
                                                <div className="space-y-2">
                                                    <div className="flex justify-between py-2 border-b border-leather-cream">
                                                        <span className="font-semibold">Waist Size</span>
                                                        <span className="font-semibold">Belt Size</span>
                                                    </div>
                                                    <div className="flex justify-between py-1">
                                                        <span>28"</span>
                                                        <span>30"</span>
                                                    </div>
                                                    <div className="flex justify-between py-1">
                                                        <span>30"</span>
                                                        <span>32"</span>
                                                    </div>
                                                    <div className="flex justify-between py-1">
                                                        <span>32"</span>
                                                        <span>34"</span>
                                                    </div>
                                                    <div className="flex justify-between py-1">
                                                        <span>34"</span>
                                                        <span>36"</span>
                                                    </div>
                                                    <div className="flex justify-between py-1">
                                                        <span>36"</span>
                                                        <span>38"</span>
                                                    </div>
                                                    <div className="flex justify-between py-1">
                                                        <span>38"</span>
                                                        <span>40"</span>
                                                    </div>
                                                    <div className="flex justify-between py-1">
                                                        <span>40"</span>
                                                        <span>42"</span>
                                                    </div>
                                                    <div className="flex justify-between py-1">
                                                        <span>42"</span>
                                                        <span>44"</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="border-leather-tan">
                                    <CardHeader>
                                        <CardTitle className="text-2xl text-leather-dark">Belt Width Guide</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid md:grid-cols-3 gap-6">
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-leather-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                                                    <span className="text-sm font-bold">1.25"</span>
                                                </div>
                                                <h3 className="font-bold text-leather-dark mb-2">Dress Belts</h3>
                                                <p className="text-sm text-muted-foreground">Formal wear, business attire</p>
                                            </div>
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-leather-brown rounded-full mx-auto mb-4 flex items-center justify-center">
                                                    <span className="text-sm font-bold">1.5"</span>
                                                </div>
                                                <h3 className="font-bold text-leather-dark mb-2">Casual Belts</h3>
                                                <p className="text-sm text-muted-foreground">Everyday wear, jeans, chinos</p>
                                            </div>
                                            <div className="text-center">
                                                <div className="w-16 h-16 bg-leather-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                                                    <span className="text-sm font-bold">1.75"</span>
                                                </div>
                                                <h3 className="font-bold text-leather-dark mb-2">Western Belts</h3>
                                                <p className="text-sm text-muted-foreground">Rugged wear, statement pieces</p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        {/* Accessories Size Guide */}
                        <TabsContent value="accessories">
                            <Card className="border-leather-tan">
                                <CardHeader>
                                    <CardTitle className="text-3xl text-leather-dark">Accessories Sizing</CardTitle>
                                    <p className="text-muted-foreground">Dimensions for our leather accessories</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-8">
                                        <div>
                                            <h3 className="text-xl font-bold text-leather-dark mb-4">Small Accessories</h3>
                                            <div className="space-y-3">
                                                <div className="flex justify-between py-2 border-b border-leather-cream">
                                                    <span className="font-medium">Key Fob</span>
                                                    <span className="text-muted-foreground">4" × 1.5"</span>
                                                </div>
                                                <div className="flex justify-between py-2 border-b border-leather-cream">
                                                    <span className="font-medium">Bookmark</span>
                                                    <span className="text-muted-foreground">6" × 2"</span>
                                                </div>
                                                <div className="flex justify-between py-2 border-b border-leather-cream">
                                                    <span className="font-medium">Coaster</span>
                                                    <span className="text-muted-foreground">4" × 4"</span>
                                                </div>
                                                <div className="flex justify-between py-2 border-b border-leather-cream">
                                                    <span className="font-medium">Watch Strap</span>
                                                    <span className="text-muted-foreground">18mm, 20mm, 22mm</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-leather-dark mb-4">Larger Accessories</h3>
                                            <div className="space-y-3">
                                                <div className="flex justify-between py-2 border-b border-leather-cream">
                                                    <span className="font-medium">Phone Case</span>
                                                    <span className="text-muted-foreground">Device specific</span>
                                                </div>
                                                <div className="flex justify-between py-2 border-b border-leather-cream">
                                                    <span className="font-medium">Passport Holder</span>
                                                    <span className="text-muted-foreground">5.5" × 4"</span>
                                                </div>
                                                <div className="flex justify-between py-2 border-b border-leather-cream">
                                                    <span className="font-medium">Desk Organizer</span>
                                                    <span className="text-muted-foreground">12" × 8" × 4"</span>
                                                </div>
                                                <div className="flex justify-between py-2 border-b border-leather-cream">
                                                    <span className="font-medium">Jewelry Box</span>
                                                    <span className="text-muted-foreground">10" × 7" × 3"</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Help Section */}
            <section className="py-16 px-4 bg-leather-dark">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Still Need Help?</h2>
                    <p className="text-leather-cream mb-8 max-w-2xl mx-auto">
                        Our sizing experts are here to help you find the perfect fit. Contact us with any questions about sizing or
                        measurements.
                    </p>
                    <Button className="bg-leather-gold hover:bg-leather-tan text-leather-dark font-semibold">
                        Contact Sizing Expert
                    </Button>
                </div>
            </section>
        </div>
    )
}
