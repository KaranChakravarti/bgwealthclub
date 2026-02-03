export default function TermsPage() {
    return (
        <div className="bg-background">
            <section className="py-20 md:py-32 bg-primary/10">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Terms & Conditions</h1>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="prose dark:prose-invert max-w-4xl mx-auto text-muted-foreground">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>
                        
                        <h2>Agreement to Terms</h2>
                        <p>By using our website, bgwealthhub.com (the "Site"), you agree to be bound by these Terms and Conditions. If you do not agree, do not use the Site.</p>
                        
                        <h2>Intellectual Property Rights</h2>
                        <p>The Site and its original content, features, and functionality are owned by BG Wealth Hub and are protected by international copyright, trademark, and other intellectual property laws.</p>
                        
                        <h2>User Representations</h2>
                        <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information; (3) you have the legal capacity and you agree to comply with these Terms and Conditions.</p>

                        <h2>Prohibited Activities</h2>
                        <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.</p>
                        
                        <h2>Governing Law</h2>
                        <p>These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which the company is established, without regard to its conflict of law provisions.</p>
                        
                        <h2>Contact Us</h2>
                        <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at legal@bgwealthhub.com.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
