export default function PrivacyPage() {
    return (
        <div className="bg-background">
            <section className="py-20 md:py-32 bg-primary/10">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold font-headline text-primary">Privacy Policy</h1>
                </div>
            </section>

            <section className="py-16 md:py-24">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="prose dark:prose-invert max-w-4xl mx-auto text-muted-foreground">
                        <p>Last updated: {new Date().toLocaleDateString()}</p>
                        
                        <h2>Introduction</h2>
                        <p>BG Wealth Hub ("we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website bgwealthhub.com.</p>
                        
                        <h2>Information We Collect</h2>
                        <p>We may collect personal information such as your name, email address, and phone number when you voluntarily provide it to us by filling out a form on our site.</p>
                        
                        <h2>How We Use Your Information</h2>
                        <p>We may use the information we collect from you to:</p>
                        <ul>
                            <li>Respond to your inquiries and fulfill your requests.</li>
                            <li>Send you marketing and promotional communications.</li>
                            <li>Improve our website and services.</li>
                        </ul>
                        
                        <h2>Disclosure of Your Information</h2>
                        <p>We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. This does not include website hosting partners and other parties who assist us in operating our website, so long as those parties agree to keep this information confidential.</p>
                        
                        <h2>Security of Your Information</h2>
                        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable.</p>
                        
                        <h2>Changes to This Privacy Policy</h2>
                        <p>We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.</p>

                        <h2>Contact Us</h2>
                        <p>If you have any questions about this Privacy Policy, please contact us at privacy@bgwealthhub.com.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
