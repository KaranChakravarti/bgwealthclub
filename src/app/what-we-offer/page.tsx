import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookMarked, Users, TrendingUp, NotebookText, Star, BarChart } from "lucide-react";

const offerings = [
    {
        icon: <BookMarked className="w-10 h-10 text-primary mb-4" />,
        title: "Wealth Education Programs",
        description: "From beginner basics to advanced strategies, our structured courses cover everything you need to know about investing, personal finance, and market analysis. Learn at your own pace with expert-led content."
    },
    {
        icon: <Users className="w-10 h-10 text-primary mb-4" />,
        title: "Community Wealth Sharing",
        description: "Gain access to vetted, group investment opportunities in sectors like real estate and private equity. Leverage the power of the community to participate in deals previously reserved for high-net-worth individuals."
    },
    {
        icon: <BarChart className="w-10 h-10 text-primary mb-4" />,
        title: "Investment Awareness",
        description: "Stay ahead of the curve with our in-depth market research, trend analysis, and regular updates. We distill complex information into actionable insights to help you navigate the financial landscape."
    },
    {
        icon: <NotebookText className="w-10 h-10 text-primary mb-4" />,
        title: "Financial Planning Guidance",
        description: "Utilize our suite of tools, calculators, and frameworks to build a robust financial plan. From retirement planning to goal setting, we provide the guidance you need to map out your future."
    },
    {
        icon: <Star className="w-10 h-10 text-primary mb-4" />,
        title: "Exclusive Member Benefits",
        description: "Enjoy members-only perks including networking events, Q&A sessions with financial experts, early access to new opportunities, and our powerful AI-driven guidance summarization tool."
    },
    {
        icon: <TrendingUp className="w-10 h-10 text-primary mb-4" />,
        title: "Portfolio Tracking & Review",
        description: "Connect and monitor your investments with our dashboard tools. Get periodic, unbiased feedback on your portfolio's performance and allocation to stay aligned with your long-term goals."
    }
];

export default function WhatWeOfferPage() {
    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-primary/10">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Our Offerings</h1>
                    <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                        A holistic suite of services designed to educate, empower, and elevate your financial journey.
                    </p>
                </div>
            </section>
            
            {/* Offerings Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {offerings.map((offering, index) => (
                            <Card key={index} className="flex flex-col p-6 hover:shadow-xl transition-shadow duration-300">
                                {offering.icon}
                                <CardHeader className="p-0">
                                    <CardTitle className="text-2xl font-headline text-primary">{offering.title}</CardTitle>
                                </CardHeader>
                                <CardDescription className="mt-4 text-base flex-grow">
                                    {offering.description}
                                </CardDescription>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
