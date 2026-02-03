import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Star } from "lucide-react";

const testimonials = [
  { name: 'Priya S.', role: 'Early Investor', quote: 'The educational resources are top-notch. I finally feel in control of my financial future. The community is incredibly supportive, and I\'ve learned so much in just a few months.', imageId: 'testimonial1', rating: 5 },
  { name: 'Rohan M.', role: 'Growth Member', quote: 'BG Wealth Club opened doors to investment opportunities I never thought I could access. The transparency and due diligence on each opportunity is something you don\'t find anywhere else. Truly a game-changer.', imageId: 'testimonial2', rating: 5 },
  { name: 'Anjali K.', role: 'New Member', quote: 'As a complete beginner, I was intimidated by investing. The step-by-step guidance and beginner-friendly programs made it so easy to get started. I feel much more confident now.', imageId: 'testimonial3', rating: 5 },
  { name: 'Vikram P.', role: 'Experienced Trader', quote: 'Even with years of experience, I find immense value in the community discussions and the unique perspectives shared. The market analysis is sharp and often ahead of the curve.', imageId: 'teamFounder', rating: 4 },
  { name: 'Sameer T.', role: 'Long-term Member', quote: 'What I love most is the focus on long-term, disciplined wealth building. It\'s not about getting rich quick, it\'s about building a secure financial foundation for life.', imageId: 'teamMember2', rating: 5 },
  { name: 'Neha D.', role: 'Community Contributor', quote: 'Being part of this community has been incredible. Everyone is willing to share and help each other grow. It\'s a very positive and motivating environment.', imageId: 'homeHero', rating: 5 },
];

export default function TestimonialsPage() {
    const testimonialImages = testimonials.map(t => ({
        ...t,
        image: PlaceHolderImages.find(p => p.id === t.imageId)
    }));

    return (
        <div className="bg-background">
            {/* Hero Section */}
            <section className="py-20 md:py-32 bg-primary/10">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Member Stories</h1>
                    <p className="mt-4 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
                        Hear from the people who have transformed their financial lives with BG Wealth Club.
                    </p>
                </div>
            </section>
            
            {/* Testimonials Grid */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {testimonialImages.map((testimonial, index) => (
                            <Card key={index} className="flex flex-col justify-between p-6 hover:shadow-xl transition-shadow duration-300">
                                <CardContent className="p-0">
                                    <div className="flex items-center gap-4 mb-4">
                                        {testimonial.image && (
                                            <Avatar className="w-16 h-16">
                                                <AvatarImage src={testimonial.image.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.image.imageHint} />
                                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                        )}
                                        <div>
                                            <p className="font-bold text-lg font-headline text-primary">{testimonial.name}</p>
                                            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <blockquote className="text-foreground italic border-l-4 border-accent pl-4">
                                        "{testimonial.quote}"
                                    </blockquote>
                                </CardContent>
                                <div className="flex items-center gap-1 mt-4">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-accent fill-accent' : 'text-gray-300'}`} />
                                    ))}
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
