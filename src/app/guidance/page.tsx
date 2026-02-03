import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SummarizerForm } from "./_components/summarizer-form";

export default function GuidancePage() {
    const headerImage = PlaceHolderImages.find(p => p.id === 'guidanceHeader');

    return (
        <div className="bg-background">
            {/* Header Section */}
            <section className="relative py-20 md:py-32 min-h-[40vh] flex items-center text-center">
                 <div className="absolute inset-0">
                    {headerImage && (
                        <Image
                            src={headerImage.imageUrl}
                            alt={headerImage.description}
                            fill
                            className="object-cover"
                            data-ai-hint={headerImage.imageHint}
                        />
                    )}
                    <div className="absolute inset-0 bg-primary/80" />
                 </div>
                 <div className="relative container mx-auto px-4 md:px-6">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary-foreground">AI-Powered Financial Guidance</h1>
                    <p className="mt-4 text-lg md:text-xl text-primary-foreground/80 max-w-3xl mx-auto">
                        Instantly summarize complex financial documents. Upload a file to get key insights in seconds.
                    </p>
                 </div>
            </section>

            {/* Summarizer Section */}
            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="max-w-4xl mx-auto">
                        <SummarizerForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
