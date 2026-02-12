
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2 } from 'lucide-react';

export const metadata = {
  title: 'Project Introduction - BG Wealth Custom',
  description: 'Learn about BG Investment Group connecting projects and the sharing economy.',
};

export default function ProjectIntroduction() {
  return (
    <div className="flex flex-col">
      {/* Connecting Projects / Hero */}
      <section className="py-16 md:py-24 bg-primary/10">
        <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-sm font-bold uppercase tracking-wide text-muted-foreground mb-4">CONNECTING PROJECTS</h1>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-headline text-primary mb-6">BG Investment Group</h2>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto mb-8">
                Sharing is a kind of freedom, a part-time job, a career, and even a future! The project achieves mutual benefit and win-win results through cooperation among investors, BG Investment Group, DSJEX Exchange, and governments of various countries.
            </p>
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Link href="/bg-community">BG Community</Link>
            </Button>
        </div>
      </section>

      {/* Best Results & Project Essence */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6 grid gap-12 lg:grid-cols-2">
            <div className="space-y-6">
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold font-headline text-primary">Best results</h3>
                    <p className="text-muted-foreground">
                        The core of BG Investment Group Connections, capital, knowledge, experience, technology, and time can all be shared among different people, teams, and countries. The benefits of sharing can be returned to every individual, team, company, and organization that participates in sharing. Sharing is a kind of freedom, a part-time job, a career, and even a future!
                    </p>
                </div>
                 <div className="space-y-4">
                    <h3 className="text-2xl font-bold font-headline text-primary">Sharing Economy Mutual Benefit and Win-Win</h3>
                    <p className="text-muted-foreground">
                        Personal idle funds such as $2,000 cannot bring considerable interest income to individuals, nor can they provide greater purchasing power for large expenses such as cars, houses, decoration, travel, and long-term education. They can only be used to buy basic necessities such as clothes, mobile phones, computers, and dining expenses. BG Investment Group, with “sharing economy” as its core, has established an investment team that brings together global investors to help individuals invest idle funds and obtain higher returns, so that the initial $2,000 can grow 10 times or even 100 times in a stable investment environment, thereby obtaining higher purchasing power for assets such as real estate and cars. In order to help individual investors achieve wealth growth, BG Investment Group needs to rely on professional exchanges and reach a strategic cooperation with DSJEX Exchange. While helping individual investors achieve wealth growth, it leads investors to increase the popularity and traffic of DSJEX Exchange through market sharing.
                    </p>
                </div>
            </div>
            <div className="bg-muted/30 p-8 rounded-xl space-y-6">
                <h3 className="text-2xl font-bold font-headline text-primary">Project Essence</h3>
                <p className="text-muted-foreground">
                    The sharing economy generally refers to a new economic model that is mainly aimed at obtaining compensation, third-party participation, and temporary transfer of the right to use items. Its essence is to integrate and share offline resources such as goods, labor, education, and medical care, which can be idle or newly created. (“Sharing” refers to the act of using, possessing, or enjoying something with others.) Unlike the rental economy, the sharing economy is a social operation model that involves the joint use of land, labor, capital, and corporate functions. It involves different individuals and organizations jointly creating, producing, distributing, trading, and consuming goods and services. Common forms include shared cars, carpooling, public bicycles, shared power banks, and exchange accommodation. At the same time, the sharing economy also emphasizes the importance of ownership and emphasizes the importance of usage rights.
                </p>
            </div>
        </div>
      </section>

      {/* Strategic Roles */}
      <section className="py-16 md:py-24 bg-primary/5">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary text-center mb-12">Strategic Roles</h2>
            <div className="grid gap-8 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-bold font-headline text-primary">DSJEX EXCHANGE: Achieve win-win results for all parties</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                            <li>Cooperate with governments around the world to obtain legal business licenses and pay taxes.</li>
                            <li>Maintain the exchange's recharge and withdrawal channels to ensure smooth capital flow.</li>
                            <li>Securely encrypt trading accounts to protect account funds and privacy.</li>
                            <li>Adhere to the technical level of the exchange to ensure that all cryptocurrencies are transparent, fair, and just.</li>
                            <li>Ensure the global security of the exchange and prevent hacker intrusions.</li>
                            <li>Distribute project dividends.</li>
                            <li>Provide employment opportunities.</li>
                        </ol>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-bold font-headline text-primary">BG INVESTMENT GROUP: Connecting projects, maintaining and managing project operations</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                            <li>BG Investment Group invests heavily to obtain project operation rights.</li>
                            <li>Invest in project operation talents and funds, and formulate operation plans.</li>
                            <li>Connect with the global market and seek development.</li>
                            <li>Ensure the security of market funds, market personnel welfare and income security.</li>
                            <li>Improve exchange indicators.</li>
                            <li>Manage market order.</li>
                        </ol>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-bold font-headline text-primary">MARKET MEMBERS: earn market profits and increase personal income</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                            <li>Understand the project.</li>
                            <li>Promote the market.</li>
                            <li>Market cooperation.</li>
                            <li>Replicate and pass on the team.</li>
                            <li>Manage the team.</li>
                            <li>Enhance the credibility of the account.</li>
                            <li>Jointly maintain the reputation of the exchange.</li>
                        </ol>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader>
                        <CardTitle className="text-xl font-bold font-headline text-primary">GOVERNMENT: The government issues licenses, supervises operations and collects taxes</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ol className="list-decimal list-inside space-y-2 text-muted-foreground">
                            <li>Regulate market order, rectify chaotic situations, crack down on illegal transactions, and protect legal operations.</li>
                            <li>Collect legal basis and formulate corresponding laws and regulations.</li>
                            <li>Review the operating rights and tax payment of the exchange in accordance with the law.</li>
                            <li>Provide policy guidance and incentives.</li>
                            <li>Solve the income problem of some people and reduce social pressure.</li>
                        </ol>
                    </CardContent>
                </Card>
            </div>
        </div>
      </section>

      {/* Features of DSJEX */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl md:text-4xl font-bold font-headline text-primary mb-12 text-center">FEATURES OF DSJEX</h2>
            <div className="grid gap-12 lg:grid-cols-2">
                <div className="space-y-6">
                    <h3 className="text-2xl font-bold font-headline text-primary">Exchange Profitable Projects</h3>
                    <div className="space-y-4 text-muted-foreground">
                        <p className="font-semibold text-foreground">The main sources of profit for DSJEX Exchange:</p>
                        <ul className="space-y-2">
                             <li className="flex gap-2">
                                <span className="font-bold text-primary">1.</span>
                                <span>Profit from deposits. User funds flow into the exchange, which are used as operating funds as well as for acquisitions, new construction, expansion, angel round financing, real estate hotels, tourism development and other investments.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="font-bold text-primary">2.</span>
                                <span>The main source of profit for DSJEX Exchange is transaction fees. Like other formal exchanges (such as Binance, OKX, Coinbase, Crypto.com), the main source of income for all formal exchanges is transaction fees, which means that the more daily active users the exchange has, the greater the profit. As the number of users increases, the cost of issuing new coins, the cost of exchange services, advertising costs, etc. will also become sources of income for the exchange.</span>
                            </li>
                            <li className="flex gap-2">
                                <span className="font-bold text-primary">3.</span>
                                <span>Construction of physical hotels in major cities, investment in the development of tourist attractions, and rental fees for LED advertising screens.</span>
                            </li>
                             <li className="flex gap-2">
                                <span className="font-bold text-primary">4.</span>
                                <span>Stock and private equity fund investment.</span>
                            </li>
                        </ul>
                    </div>
                </div>
                 <div className="space-y-6 bg-muted/30 p-8 rounded-xl self-start">
                    <h3 className="text-2xl font-bold font-headline text-primary">Introduction to BG Investment Group's profit points</h3>
                    <p className="text-muted-foreground">
                        The main source of BG Investment Group's profit: BG Investment Group cooperates with DSJEX Exchange to guide users to invest. For example, if users trade 100 USDT, DSJEX Exchange will return 0.5%–4% of the transaction volume according to the agent scale.
                    </p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}
