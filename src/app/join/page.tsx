import { CheckCircle, MessageSquare, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { JoinForm } from "./_components/join-form";

const benefits = [
    "Access to exclusive investment opportunities.",
    "Comprehensive wealth education programs.",
    "Entry to a private community of investors.",
    "Personalized financial planning guidance.",
    "AI-powered market updates and summaries.",
    "Invitations to members-only webinars and events."
];

export default function JoinPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-primary/10">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Join the Club</h1>
                    <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                        Start your journey towards financial mastery today. Become part of a community that grows together.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-12">
                    {/* Benefits Section */}
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold font-headline text-primary">Membership Benefits</h2>
                        <p className="text-muted-foreground">
                            As a member of BG Wealth Club, you unlock a world of resources and opportunities designed to accelerate your wealth creation journey.
                        </p>
                        <ul className="space-y-4">
                            {benefits.map((benefit, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                                    <span className="text-foreground">{benefit}</span>
                                </li>
                            ))}
                        </ul>
                        <Card className="bg-primary/5">
                            <CardHeader>
                                <CardTitle className="font-headline">Join our Community Channels</CardTitle>
                                <CardDescription>Connect with us and fellow members instantly.</CardDescription>
                            </CardHeader>
                            <CardContent className="flex flex-col sm:flex-row gap-4">
                                <Button asChild className="w-full bg-green-500 hover:bg-green-600">
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <MessageSquare className="mr-2 h-5 w-5" /> Join on WhatsApp
                                    </a>
                                </Button>
                                <Button asChild className="w-full bg-blue-500 hover:bg-blue-600">
                                    <a href="#" target="_blank" rel="noopener noreferrer">
                                        <Send className="mr-2 h-5 w-5" /> Join on Telegram
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Form Section */}
                    <div>
                        <Card className="p-4 sm:p-6 lg:p-8 shadow-lg">
                            <CardHeader>
                                <CardTitle className="text-3xl font-headline text-primary">Become a Member</CardTitle>
                                <CardDescription>Fill out the form below to get started. We'll be in touch shortly.</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <JoinForm />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </div>
    );
}
