import Image from 'next/image';
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BookOpen, LifeBuoy, TrendingUp, Users } from 'lucide-react';

const benefits = [
  {
    icon: <BookOpen className="w-8 h-8 text-primary" />,
    title: 'Wealth Education',
    description: 'Access structured learning paths on wealth creation and financial discipline.',
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-primary" />,
    title: 'Investment Opportunities',
    description: 'Explore curated wealth-sharing opportunities with clear risk disclosures.',
  },
  {
    icon: <Users className="w-8 h-8 text-primary" />,
    title: 'Exclusive Community',
    description: 'Join a vibrant community of like-minded individuals for support and networking.',
  },
  {
    icon: <LifeBuoy className="w-8 h-8 text-primary" />,
    title: 'Guidance & Support',
    description: 'Receive AI-powered financial guidance, updates, and dedicated support.',
  },
];

const offerings = [
    { title: "Wealth Education Programs", description: "Comprehensive courses to build your financial literacy from the ground up." },
    { title: "Community Wealth Sharing", description: "Participate in group investment opportunities previously available only to the elite." },
    { title: "Investment Awareness", description: "Stay informed with our analysis and updates on various investment vehicles." },
    { title: "Financial Planning Guidance", description: "Tools and guides to help you plan your financial future with confidence." },
];

const testimonials = [
  { name: 'Priya S.', quote: 'The educational resources are top-notch. I finally feel in control of my financial future.', imageId: 'testimonial1' },
  { name: 'Rohan M.', quote: 'BG Wealth Club opened doors to investment opportunities I never thought I could access. Truly a game-changer.', imageId: 'testimonial2' },
];

const faqs = [
  {
    question: "Who can join BG Wealth Club?",
    answer: "Our community is open to anyone who is serious about learning financial discipline and building long-term wealth. Whether you're a beginner or an experienced investor, you'll find value here."
  },
  {
    question: "What kind of investment opportunities are available?",
    answer: "We focus on a range of opportunities, from real estate to private equity, all vetted by our team. We emphasize education and risk awareness for every opportunity presented."
  },
  {
    question: "Are there any guaranteed returns?",
    answer: "No. BG Wealth Club does not provide guaranteed financial returns. All financial decisions involve risk, and we are committed to providing education to help you make informed choices."
  },
  {
    question: "How is BG Wealth Club different from other financial groups?",
    answer: "We are a community-first platform focused on education and transparency. Our goal is to empower our members through knowledge and collective growth, not to sell financial products."
  }
];

export default function Home() {
  const heroImage = PlaceHolderImages.find(p => p.id === 'homeHero');
  const testimonialImages = testimonials.map(t => ({
    ...t,
    image: PlaceHolderImages.find(p => p.id === t.imageId)
  }));


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full py-20 md:py-32 lg:py-40 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold tracking-tight text-primary">
              Build Wealth Together
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto md:mx-0">
              Join BG Wealth Club — a community focused on financial education, disciplined investing, and long-term wealth growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/join">Join the Club</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Free Consultation</Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-auto md:aspect-square rounded-xl overflow-hidden shadow-2xl">
            {heroImage && (
              <Image
                src={heroImage.imageUrl}
                alt={heroImage.description}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                data-ai-hint={heroImage.imageHint}
                priority
              />
            )}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-card rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                {benefit.icon}
                <h3 className="mt-4 text-xl font-semibold font-headline">{benefit.title}</h3>
                <p className="mt-2 text-muted-foreground">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* What We Offer Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">What We Offer</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Our services are designed to empower you at every stage of your wealth-building journey.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offerings.map((offer, index) => (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-primary font-headline">{offer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{offer.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button asChild variant="link" className="text-primary text-lg">
                <Link href="/what-we-offer">Explore All Offerings &rarr;</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Trusted by Our Members</h2>
                <p className="text-lg text-foreground/80">Real stories from people just like you.</p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                {testimonialImages.map((testimonial) => (
                    <Card key={testimonial.name} className="flex flex-col sm:flex-row items-center gap-6 p-6">
                        {testimonial.image && (
                          <Avatar className="w-20 h-20">
                            <AvatarImage src={testimonial.image.imageUrl} alt={testimonial.name} data-ai-hint={testimonial.image.imageHint} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                          </Avatar>
                        )}
                        <div className="text-center sm:text-left">
                            <blockquote className="text-lg italic text-foreground">"{testimonial.quote}"</blockquote>
                            <p className="mt-4 font-semibold text-primary font-headline">- {testimonial.name}</p>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">Frequently Asked Questions</h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-lg text-left font-semibold">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
