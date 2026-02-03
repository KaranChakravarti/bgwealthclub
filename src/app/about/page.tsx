import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Target, Gem, BookOpen, Users } from "lucide-react";

const values = [
    { icon: <Gem className="w-8 h-8 text-accent" />, title: "Transparency", description: "Open and honest communication in all we do." },
    { icon: <Target className="w-8 h-8 text-accent" />, title: "Growth", description: "Commitment to continuous learning and improvement." },
    { icon: <BookOpen className="w-8 h-8 text-accent" />, title: "Education", description: "Empowering our members through knowledge." },
    { icon: <Users className="w-8 h-8 text-accent" />, title: "Community", description: "Fostering a supportive and collaborative network." },
];

const team = [
    { name: "Alex Johnson", role: "Founder & Chief Strategist", imageId: "teamFounder" },
    { name: "Maria Garcia", role: "Head of Community", imageId: "teamMember2" },
];

export default function AboutPage() {
    const storyImage = PlaceHolderImages.find(p => p.id === 'aboutStory');
    const teamImages = team.map(t => ({
        ...t,
        image: PlaceHolderImages.find(p => p.id === t.imageId)
    }));

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-primary/10">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">About BG Wealth Hub</h1>
                    <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                        We are a community dedicated to demystifying wealth creation and empowering individuals to achieve financial independence.
                    </p>
                </div>
            </section>

            {/* Our Story Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Story</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            BG Wealth Club was born from a simple idea: financial education should be accessible to everyone. Our founder, frustrated by the opaque and often intimidating world of finance, envisioned a place where people could learn, grow, and build wealth together in a supportive environment.
                        </p>
                        <p className="text-muted-foreground leading-relaxed">
                            Starting as a small group of friends sharing investment tips, we've grown into a vibrant community. Our core mission remains unchanged: to provide the tools, knowledge, and opportunities for our members to take control of their financial destinies.
                        </p>
                    </div>
                    <div className="relative h-80 md:h-96 rounded-xl overflow-hidden shadow-lg">
                        {storyImage && (
                            <Image
                                src={storyImage.imageUrl}
                                alt={storyImage.description}
                                fill
                                className="object-cover"
                                data-ai-hint={storyImage.imageHint}
                            />
                        )}
                    </div>
                </div>
            </section>
            
            {/* Mission & Vision Section */}
            <section className="py-16 md:py-24 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-headline text-primary">Our Mission</h3>
                        <p className="text-muted-foreground">To empower individuals with the knowledge and confidence to make sound financial decisions and build lasting wealth through education and community support.</p>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-headline text-primary">Our Vision</h3>
                        <p className="text-muted-foreground">To create a world where financial prosperity is within reach for everyone, fostering a global community of disciplined, informed, and successful investors.</p>
                    </div>
                </div>
            </section>

            {/* Our Values Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Our Core Values</h2>
                    </div>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map(value => (
                            <Card key={value.title} className="text-center p-6">
                                <div className="flex justify-center mb-4">{value.icon}</div>
                                <CardTitle className="text-xl font-headline text-primary">{value.title}</CardTitle>
                                <CardContent className="p-0 mt-2">
                                    <p className="text-muted-foreground">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="py-16 md:py-24 bg-primary/5">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center space-y-4 mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Meet the Team</h2>
                        <p className="text-lg text-foreground/80 max-w-2xl mx-auto">The passionate individuals dedicated to your financial growth.</p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-8">
                        {teamImages.map(member => (
                            <div key={member.name} className="flex flex-col items-center text-center">
                                {member.image && (
                                    <Avatar className="w-32 h-32 mb-4 border-4 border-accent">
                                        <AvatarImage src={member.image.imageUrl} alt={member.name} data-ai-hint={member.image.imageHint} />
                                        <AvatarFallback>{member.name.substring(0, 2)}</AvatarFallback>
                                    </Avatar>
                                )}
                                <h4 className="text-xl font-bold font-headline text-primary">{member.name}</h4>
                                <p className="text-accent font-semibold">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
