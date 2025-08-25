import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function CareInstructionsPage() {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative py-20 px-4 gradient-leather">
                <div className="container mx-auto text-center">
                    <h1 className="text-5xl font-bold text-white mb-6">Leather Care Instructions</h1>
                    <p className="text-xl text-leather-cream max-w-3xl mx-auto leading-relaxed">
                        Proper care ensures your leather goods will age beautifully and last for generations
                    </p>
                </div>
            </section>

            {/* Care Guide Tabs */}
            <section className="py-16 px-4">
                <div className="container mx-auto">
                    <Tabs defaultValue="general" className="max-w-6xl mx-auto">
                        <TabsList className="grid w-full grid-cols-4 mb-8">
                            <TabsTrigger value="general">General Care</TabsTrigger>
                            <TabsTrigger value="cleaning">Cleaning</TabsTrigger>
                            <TabsTrigger value="conditioning">Conditioning</TabsTrigger>
                            <TabsTrigger value="storage">Storage</TabsTrigger>
                        </TabsList>

                        {/* General Care */}
                        <TabsContent value="general">
                            <div className="space-y-8">
                                <Card className="border-leather-tan">
                                    <CardHeader>
                                        <CardTitle className="text-3xl text-leather-dark">Daily Care Tips</CardTitle>
                                        <p className="text-muted-foreground">Simple habits to keep your leather looking its best</p>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="space-y-6">
                                                <div className="flex gap-4">
                                                    <div className="w-12 h-12 bg-leather-gold rounded-full flex items-center justify-center flex-shrink-0">
                                                        <span className="text-xl">☀️</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-leather-dark mb-2">Avoid Direct Sunlight</h3>
                                                        <p className="text-muted-foreground leading-relaxed">
                                                            Prolonged exposure to direct sunlight can cause leather to fade and crack. Store in shaded
                                                            areas when not in use.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex gap-4">
                                                    <div className="w-12 h-12 bg-leather-brown rounded-full flex items-center justify-center flex-shrink-0">
                                                        <span className="text-xl">💧</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-leather-dark mb-2">Keep Dry</h3>
                                                        <p className="text-muted-foreground leading-relaxed">
                                                            If your leather gets wet, gently pat dry with a soft cloth and allow to air dry naturally.
                                                            Never use heat sources.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex gap-4">
                                                    <div className="w-12 h-12 bg-leather-dark rounded-full flex items-center justify-center flex-shrink-0">
                                                        <span className="text-xl">🧤</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-leather-dark mb-2">Handle with Clean Hands</h3>
                                                        <p className="text-muted-foreground leading-relaxed">
                                                            Natural oils from your hands help condition leather, but dirt and lotions can cause
                                                            stains. Handle with clean, dry hands.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="space-y-6">
                                                <div className="flex gap-4">
                                                    <div className="w-12 h-12 bg-leather-tan rounded-full flex items-center justify-center flex-shrink-0">
                                                        <span className="text-xl">🌡️</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-leather-dark mb-2">Moderate Temperature</h3>
                                                        <p className="text-muted-foreground leading-relaxed">
                                                            Store leather goods in moderate temperatures. Extreme heat or cold can damage the leather
                                                            fibers.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex gap-4">
                                                    <div className="w-12 h-12 bg-leather-gold rounded-full flex items-center justify-center flex-shrink-0">
                                                        <span className="text-xl">🔄</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-leather-dark mb-2">Rotate Usage</h3>
                                                        <p className="text-muted-foreground leading-relaxed">
                                                            If you have multiple leather items, rotate their use to allow each piece time to rest and
                                                            recover.
                                                        </p>
                                                    </div>
                                                </div>

                                                <div className="flex gap-4">
                                                    <div className="w-12 h-12 bg-leather-brown rounded-full flex items-center justify-center flex-shrink-0">
                                                        <span className="text-xl">✨</span>
                                                    </div>
                                                    <div>
                                                        <h3 className="text-xl font-bold text-leather-dark mb-2">Regular Dusting</h3>
                                                        <p className="text-muted-foreground leading-relaxed">
                                                            Gently dust your leather goods with a soft, dry cloth to prevent dirt buildup and maintain
                                                            their appearance.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        {/* Cleaning */}
                        <TabsContent value="cleaning">
                            <div className="space-y-8">
                                <Card className="border-leather-tan">
                                    <CardHeader>
                                        <CardTitle className="text-3xl text-leather-dark">Cleaning Your Leather</CardTitle>
                                        <p className="text-muted-foreground">Step-by-step cleaning process for different situations</p>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-8">
                                            <div>
                                                <h3 className="text-2xl font-bold text-leather-dark mb-4">Regular Cleaning</h3>
                                                <div className="grid md:grid-cols-2 gap-6">
                                                    <div>
                                                        <h4 className="text-lg font-semibold text-leather-dark mb-3">What You'll Need:</h4>
                                                        <ul className="space-y-2 text-muted-foreground">
                                                            <li>• Soft, lint-free cloth</li>
                                                            <li>• Leather cleaner (pH neutral)</li>
                                                            <li>• Soft-bristled brush (optional)</li>
                                                            <li>• Clean water</li>
                                                        </ul>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-lg font-semibold text-leather-dark mb-3">Steps:</h4>
                                                        <ol className="space-y-2 text-muted-foreground">
                                                            <li>1. Remove surface dirt with dry cloth</li>
                                                            <li>2. Apply leather cleaner to cloth, not directly to leather</li>
                                                            <li>3. Gently wipe in circular motions</li>
                                                            <li>4. Remove cleaner residue with damp cloth</li>
                                                            <li>5. Allow to air dry completely</li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="border-t border-leather-cream pt-8">
                                                <h3 className="text-2xl font-bold text-leather-dark mb-4">Stain Removal</h3>
                                                <div className="grid md:grid-cols-3 gap-6">
                                                    <Card className="border-leather-cream">
                                                        <CardContent className="p-6">
                                                            <h4 className="text-lg font-semibold text-leather-dark mb-3">Water Stains</h4>
                                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                                Dampen entire area evenly with distilled water. Allow to dry naturally. The stain should
                                                                blend with the surrounding leather.
                                                            </p>
                                                        </CardContent>
                                                    </Card>

                                                    <Card className="border-leather-cream">
                                                        <CardContent className="p-6">
                                                            <h4 className="text-lg font-semibold text-leather-dark mb-3">Oil Stains</h4>
                                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                                Blot immediately with clean cloth. Sprinkle cornstarch or talcum powder. Let sit
                                                                overnight, then brush off gently.
                                                            </p>
                                                        </CardContent>
                                                    </Card>

                                                    <Card className="border-leather-cream">
                                                        <CardContent className="p-6">
                                                            <h4 className="text-lg font-semibold text-leather-dark mb-3">Ink Stains</h4>
                                                            <p className="text-muted-foreground text-sm leading-relaxed">
                                                                Dab with cotton swab dipped in rubbing alcohol. Work from outside of stain inward. Clean
                                                                and condition afterward.
                                                            </p>
                                                        </CardContent>
                                                    </Card>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </TabsContent>

                        {/* Conditioning */}
                        <TabsContent value="conditioning">
                            <Card className="border-leather-tan">
                                <CardHeader>
                                    <CardTitle className="text-3xl text-leather-dark">Conditioning Your Leather</CardTitle>
                                    <p className="text-muted-foreground">Keep your leather supple and prevent cracking</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <h3 className="text-2xl font-bold text-leather-dark mb-4">When to Condition</h3>
                                                <div className="space-y-4">
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-6 h-6 bg-leather-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                            <span className="text-xs font-bold text-leather-dark">1</span>
                                                        </div>
                                                        <p className="text-muted-foreground">
                                                            <strong>New leather:</strong> Condition after first month of use
                                                        </p>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-6 h-6 bg-leather-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                            <span className="text-xs font-bold text-leather-dark">2</span>
                                                        </div>
                                                        <p className="text-muted-foreground">
                                                            <strong>Regular use:</strong> Every 3-6 months depending on usage
                                                        </p>
                                                    </div>
                                                    <div className="flex items-start gap-3">
                                                        <div className="w-6 h-6 bg-leather-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                            <span className="text-xs font-bold text-leather-dark">3</span>
                                                        </div>
                                                        <p className="text-muted-foreground">
                                                            <strong>Signs needed:</strong> Leather feels dry, stiff, or shows fine cracks
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-2xl font-bold text-leather-dark mb-4">Conditioning Process</h3>
                                                <ol className="space-y-3 text-muted-foreground">
                                                    <li className="flex gap-3">
                                                        <span className="flex-shrink-0 w-6 h-6 bg-leather-brown text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                            1
                                                        </span>
                                                        <span>Clean the leather thoroughly and let dry</span>
                                                    </li>
                                                    <li className="flex gap-3">
                                                        <span className="flex-shrink-0 w-6 h-6 bg-leather-brown text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                            2
                                                        </span>
                                                        <span>Apply conditioner with soft cloth in thin, even layer</span>
                                                    </li>
                                                    <li className="flex gap-3">
                                                        <span className="flex-shrink-0 w-6 h-6 bg-leather-brown text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                            3
                                                        </span>
                                                        <span>Allow to absorb for 15-20 minutes</span>
                                                    </li>
                                                    <li className="flex gap-3">
                                                        <span className="flex-shrink-0 w-6 h-6 bg-leather-brown text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                            4
                                                        </span>
                                                        <span>Buff with clean cloth to remove excess</span>
                                                    </li>
                                                    <li className="flex gap-3">
                                                        <span className="flex-shrink-0 w-6 h-6 bg-leather-brown text-white rounded-full flex items-center justify-center text-sm font-bold">
                                                            5
                                                        </span>
                                                        <span>Let cure for 24 hours before use</span>
                                                    </li>
                                                </ol>
                                            </div>
                                        </div>

                                        <div className="border-t border-leather-cream pt-8">
                                            <h3 className="text-2xl font-bold text-leather-dark mb-6">Recommended Products</h3>
                                            <div className="grid md:grid-cols-3 gap-6">
                                                <Card className="border-leather-cream">
                                                    <CardContent className="p-6 text-center">
                                                        <div className="w-16 h-16 bg-leather-gold rounded-full mx-auto mb-4 flex items-center justify-center">
                                                            <span className="text-2xl">🧴</span>
                                                        </div>
                                                        <h4 className="text-lg font-semibold text-leather-dark mb-2">Leather Conditioner</h4>
                                                        <p className="text-muted-foreground text-sm">
                                                            High-quality leather conditioner specifically formulated for full-grain leather
                                                        </p>
                                                    </CardContent>
                                                </Card>

                                                <Card className="border-leather-cream">
                                                    <CardContent className="p-6 text-center">
                                                        <div className="w-16 h-16 bg-leather-brown rounded-full mx-auto mb-4 flex items-center justify-center">
                                                            <span className="text-2xl">🥥</span>
                                                        </div>
                                                        <h4 className="text-lg font-semibold text-leather-dark mb-2">Natural Oils</h4>
                                                        <p className="text-muted-foreground text-sm">
                                                            Mink oil or neatsfoot oil for deep conditioning of heavily used items
                                                        </p>
                                                    </CardContent>
                                                </Card>

                                                <Card className="border-leather-cream">
                                                    <CardContent className="p-6 text-center">
                                                        <div className="w-16 h-16 bg-leather-dark rounded-full mx-auto mb-4 flex items-center justify-center">
                                                            <span className="text-2xl">🧽</span>
                                                        </div>
                                                        <h4 className="text-lg font-semibold text-leather-dark mb-2">Application Tools</h4>
                                                        <p className="text-muted-foreground text-sm">
                                                            Soft microfiber cloths and natural sponges for even application
                                                        </p>
                                                    </CardContent>
                                                </Card>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>

                        {/* Storage */}
                        <TabsContent value="storage">
                            <Card className="border-leather-tan">
                                <CardHeader>
                                    <CardTitle className="text-3xl text-leather-dark">Proper Storage</CardTitle>
                                    <p className="text-muted-foreground">Protect your investment when not in use</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-8">
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <h3 className="text-2xl font-bold text-leather-dark mb-4">Short-term Storage</h3>
                                                <div className="space-y-4">
                                                    <div className="flex gap-4">
                                                        <div className="w-8 h-8 bg-leather-gold rounded-full flex items-center justify-center flex-shrink-0">
                                                            <span className="text-sm">📦</span>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-leather-dark mb-1">Shape Retention</h4>
                                                            <p className="text-muted-foreground text-sm">
                                                                Stuff bags and wallets with tissue paper to maintain shape
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <div className="w-8 h-8 bg-leather-brown rounded-full flex items-center justify-center flex-shrink-0">
                                                            <span className="text-sm">🌬️</span>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-leather-dark mb-1">Air Circulation</h4>
                                                            <p className="text-muted-foreground text-sm">
                                                                Store in breathable dust bags, never plastic
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <div className="w-8 h-8 bg-leather-dark rounded-full flex items-center justify-center flex-shrink-0">
                                                            <span className="text-sm">📍</span>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-leather-dark mb-1">Positioning</h4>
                                                            <p className="text-muted-foreground text-sm">
                                                                Store upright or flat, avoid folding or crushing
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div>
                                                <h3 className="text-2xl font-bold text-leather-dark mb-4">Long-term Storage</h3>
                                                <div className="space-y-4">
                                                    <div className="flex gap-4">
                                                        <div className="w-8 h-8 bg-leather-tan rounded-full flex items-center justify-center flex-shrink-0">
                                                            <span className="text-sm">🧼</span>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-leather-dark mb-1">Pre-storage Cleaning</h4>
                                                            <p className="text-muted-foreground text-sm">
                                                                Clean and condition before storing for extended periods
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <div className="w-8 h-8 bg-leather-gold rounded-full flex items-center justify-center flex-shrink-0">
                                                            <span className="text-sm">🏠</span>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-leather-dark mb-1">Climate Control</h4>
                                                            <p className="text-muted-foreground text-sm">
                                                                Store in cool, dry place with stable temperature
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-4">
                                                        <div className="w-8 h-8 bg-leather-brown rounded-full flex items-center justify-center flex-shrink-0">
                                                            <span className="text-sm">🔍</span>
                                                        </div>
                                                        <div>
                                                            <h4 className="font-semibold text-leather-dark mb-1">Regular Checks</h4>
                                                            <p className="text-muted-foreground text-sm">Inspect monthly and air out occasionally</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="border-t border-leather-cream pt-8">
                                            <h3 className="text-2xl font-bold text-leather-dark mb-6">Storage Don'ts</h3>
                                            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                                                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                                                    <div className="text-2xl mb-2">🚫</div>
                                                    <h4 className="font-semibold text-red-800 mb-1">Plastic Bags</h4>
                                                    <p className="text-red-600 text-xs">Traps moisture and causes mold</p>
                                                </div>
                                                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                                                    <div className="text-2xl mb-2">🔥</div>
                                                    <h4 className="font-semibold text-red-800 mb-1">Heat Sources</h4>
                                                    <p className="text-red-600 text-xs">Causes cracking and drying</p>
                                                </div>
                                                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                                                    <div className="text-2xl mb-2">💧</div>
                                                    <h4 className="font-semibold text-red-800 mb-1">Damp Areas</h4>
                                                    <p className="text-red-600 text-xs">Promotes mold and mildew</p>
                                                </div>
                                                <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                                                    <div className="text-2xl mb-2">📦</div>
                                                    <h4 className="font-semibold text-red-800 mb-1">Heavy Stacking</h4>
                                                    <p className="text-red-600 text-xs">Causes permanent creasing</p>
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

            {/* Professional Care */}
            <section className="py-16 px-4 bg-leather-dark">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold text-white mb-6">Professional Care Services</h2>
                    <p className="text-leather-cream mb-8 max-w-2xl mx-auto">
                        For deep cleaning, restoration, or repairs, our master craftsmen offer professional leather care services to
                        keep your items in pristine condition.
                    </p>
                    <Button className="bg-leather-gold hover:bg-leather-tan text-leather-dark font-semibold">
                        Schedule Professional Care
                    </Button>
                </div>
            </section>
        </div>
    )
}
