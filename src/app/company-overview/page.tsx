
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, Users } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const introductions = [
  {
    title: 'Financial market',
    description: 'Investing is a financial market platform that provides real-time data, quotes, charts, financial instruments, breaking news and analysis from 250 exchanges worldwide in 44 languages. Investing has more than 46 million users per month and more than 400 million sessions. According to SimilarWeb and Alexa, it is one of the top three financial websites in the world.',
  },
  {
    title: 'Financial investment',
    description: 'As a subsidiary of Investing, BG has formed a full industry chain structure in the field of financial investment, with blockchain technology, digital currency trading, digital currency contract trading, sharing economy, sharing economy research, industrial investment, financial business, venture capital and financial asset investment as the main body. It rationally arranges financial and quasi-financial platforms such as futures, securities, trusts, insurance, re-guarantees, banks, micro loans, financial leasing, industrial funds, private equity funds, etc.',
  },
  {
    title: 'Win-win projects',
    description: 'Lead a professional team to create win-win projects and help millions of winners get out of poverty and become rich. We also help less experienced teams transform and upgrade, optimizing and upgrading to create a favorable market environment! BG has extensive management experience and models in blockchain technology, digital currency trading, digital currency contract trading, and the sharing economy. We can establish a good reputation for the platform and create a favorable income and investment environment for sharing teams!',
  },
];

export const metadata = {
  title: 'Company Overview - BG Wealth Custom',
  description: 'Overview of BG Wealth Sharing Investment Group and its mission.',
};

export default function CompanyOverview() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'homeHero'); // Reusing hero image or finding another if available

  return (
    <div className="flex flex-col">
      {/* Hero / Header Section */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-primary">BG Wealth Sharing Investment Group</h1>
            <p className="text-2xl text-foreground font-semibold">Helping millions of people escape poverty</p>
            <div className="flex justify-center">
                 <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                    <Link href="/bg-community">BG Community</Link>
                </Button>
            </div>
           
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-8">
                 {['Blockchain technology', 'Digital currency trading', 'Contract trading', 'Sharing economy'].map((item) => (
                    <div key={item} className="bg-background p-4 rounded-lg shadow-sm flex items-center justify-center text-center font-medium">
                        {item}
                    </div>
                 ))}
            </div>
        </div>
      </section>

      {/* Repeated Sections from Home Page */}
      
      {/* Introduction Section (The world's largest hedge fund) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
             <h2 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-2">The world's largest hedge fund</h2>
             <h3 className="text-3xl md:text-4xl font-bold font-headline text-primary">Introduction to BG Wealth Sharing</h3>
          </div>
          <div className="grid gap-8 lg:grid-cols-3">
            {introductions.map((intro, index) => (
              <Card key={index} className="flex flex-col h-full bg-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold font-headline text-primary">{intro.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{intro.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Introduction (DSJ Introduction) */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
             <div className="max-w-4xl mx-auto space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary text-center">PLATFORM INTRODUCTION: DSJ Exchange Introduction</h2>
                <div className="prose prose-lg dark:prose-invert mx-auto text-muted-foreground">
                    <p>
                        Founded in April 2022 by Karen Sandler, a former Argos engineer, DSJ Exchange has licenses and operating permits from more than 30 countries and regions around the world, including the US (SEC) license, the Australian (ASIC) license, the Monetary Authority of Singapore MAS, the Dubai Financial Services Authority DFSA, and the Central Bank of the Bahamas, bringing together outstanding blockchain technology talents from around the world. Team members come from more than a dozen countries and regions around the world, and core team members have worked for global financial technology companies such as Morgan Stanley, IBM, PayPal, Amazon, Google, and Binance.
                    </p>
                    <p>
                        DSJ Exchange serves millions of users around the world, providing basic transactions including spot and simple options, as well as derivative transactions including margin, futures, perpetual contracts, and options. DSJ Exchange is the most comprehensive options platform in the industry, with the fastest and most comprehensive spot transactions and the highest on-demand financing yield for high-quality projects.
                    </p>
                    <p>
                         On February 18, 2023, the 24-hour trading volume of DSJ Exchange reached US100 million. On February 26, 2023, DSJ Exchange ranked among the top 100 exchanges in the world. Its unique instant contract investment model is widely favored and emulated by other cryptocurrency exchanges. DSJ Exchange focuses on convenience, versatility and fund security, and is currently preparing for an IPO.
                    </p>
                </div>
             </div>
        </div>
      </section>

      {/* Professor Introduction (Stephen Beard) */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 relative aspect-square bg-muted rounded-xl overflow-hidden shadow-lg">
                    {/* Placeholder for Stephen Beard */}
                     <Users className="w-full h-full p-20 text-muted-foreground/20" />
                </div>
                <div className="order-1 md:order-2 space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary">PROFESSOR INTRODUCTION: About Stephen Beard</h2>
                    <div className="space-y-4 text-muted-foreground">
                        <p>
                            Stephen Beard, born in 1985, is a British national with a strong interest in fitness, boxing, swimming, traveling, and golf. Stephen Beard majored in Finance at Oxford Brookes University, where he completed one of the university's well-regarded finance programs. The program covers a broad spectrum of finance topics, including investment banking, financial markets, corporate finance, and international finance. Stephen holds both a Master's degree and a PhD in Finance.
                        </p>
                        <p>
                            Before joining the International Monetary Fund (IMF), Stephen Beard served as an executive at Gemini, a U.S.-based cryptocurrency exchange that provides buying, selling, and trading services for digital assets such as Bitcoin and Ethereum. He has extensive experience working with commercial banks, investment banks, financial services firms, and manufacturing companies within the commercial finance sector.
                        </p>
                        <p>
                             His investment expertise spans equities, futures, funds, and cryptocurrencies. By combining big data analysis with hands-on investment experience, he consistently delivers strong performance while maintaining effective risk management. He specializes in short-term and high-frequency trading strategies. Stephen is also recognized for his distinctive team management and investment frameworks, having successfully led large teams to create substantial long-term value.
                        </p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
