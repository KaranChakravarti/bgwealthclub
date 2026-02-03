import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ContactForm } from "./_components/contact-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
    const contactImage = PlaceHolderImages.find(p => p.id === 'contactUs');

    return (
        <div className="bg-background">
            {/* Header */}
            <section className="relative py-20 md:py-32 min-h-[40vh] flex items-center justify-center text-center">
                 <div className="absolute inset-0">
                    {contactImage && (
                        <Image
                            src={contactImage.imageUrl}
                            alt={contactImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={contactImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-primary/80" />
                 </div>
                 <div className="relative container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary-foreground">Get in Touch</h1>
                    <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                        We're here to help. Whether you have a question about membership or need a free consultation, please reach out.
                    </p>
                 </div>
            </section>

            {/* Contact Details and Form */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Contact Info */}
                        <div className="lg:col-span-1 space-y-8">
                            <h2 className="text-3xl font-bold font-headline text-primary">Contact Information</h2>
                             <div className="space-y-4 text-lg">
                                <div className="flex items-center gap-4">
                                    <Mail className="w-6 h-6 text-accent" />
                                    <a href="mailto:support@bgwealthclub.com" className="hover:text-primary">support@bgwealthclub.com</a>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Phone className="w-6 h-6 text-accent" />
                                    <a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</a>
                                </div>
                            </div>
                            <Button asChild className="w-full bg-green-500 hover:bg-green-600">
                                <a href="#" target="_blank" rel="noopener noreferrer">
                                    <MessageSquare className="mr-2 h-5 w-5" /> Chat on WhatsApp
                                </a>
                            </Button>
                            <div className="space-y-2">
                                <h3 className="text-xl font-semibold font-headline text-primary">Our Office</h3>
                                <p className="text-muted-foreground">
                                    123 Wealth Avenue, Suite 100<br/>
                                    Prosperity City, 54321
                                </p>
                                <div className="aspect-video bg-muted rounded-lg mt-4 flex items-center justify-center text-muted-foreground">
                                    Google Map Placeholder
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                             <Card className="p-4 sm:p-6 lg:p-8 shadow-lg">
                                <CardHeader>
                                    <CardTitle className="text-3xl font-headline text-primary">Send us a Message</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ContactForm />
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
