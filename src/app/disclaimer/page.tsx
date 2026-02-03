export default function DisclaimerPage() {
    return (
        <div className="bg-background">
            <section className="py-20 md:py-32 bg-primary/10">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Disclaimer</h1>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="prose dark:prose-invert max-w-4xl mx-auto text-muted-foreground">
                        <h2>No Financial Advice</h2>
                        <p>The information provided by BG Wealth Hub ("we," "us," or "our") on bgwealthhub.com (the "Site") is for general informational and educational purposes only. All information on the Site is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>
                        
                        <h2>Investment Risk</h2>
                        <p>BG Wealth Club does not provide guaranteed financial returns. All financial decisions and investments involve risk. A loss of principal is possible. We are not a registered broker-dealer or investment advisor. You should not construe any such information or other material as legal, tax, investment, financial, or other advice.</p>
                        
                        <h2>External Links</h2>
                        <p>The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability, or completeness by us.</p>
                        
                        <h2>Testimonials</h2>
                        <p>The testimonials on the Site are of actual users and/or members and reflect their real-life experiences and opinions. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume, that all users will have the same experiences.</p>
                        
                        <h2>Use at Your Own Risk</h2>
                        <p>Under no circumstance shall we have any liability to you for any loss or damage of any kind incurred as a result of the use of the site or reliance on any information provided on the site. Your use of the site and your reliance on any information on the site is solely at your own risk.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
