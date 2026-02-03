import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from './logo';
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Bot } from 'lucide-react';

const legalLinks = [
  { href: '/disclaimer', label: 'Disclaimer' },
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms & Conditions' },
];

const socialLinks = [
    { icon: <Twitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    { icon: <Facebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
    { icon: <Linkedin className="h-5 w-5" />, href: '#', name: 'LinkedIn' },
    { icon: <Instagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
];

export function Footer() {
  return (
    <footer className="bg-primary/5 border-t">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground max-w-xs">
              A community focused on financial education, disciplined investing, and long-term wealth growth.
            </p>
             <div className="flex gap-2">
                {socialLinks.map((social) => (
                    <Button key={social.name} variant="ghost" size="icon" asChild>
                        <a href={social.href} aria-label={social.name}>
                            {social.icon}
                        </a>
                    </Button>
                ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold font-headline text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link href="/what-we-offer" className="text-sm text-muted-foreground hover:text-primary">What We Offer</Link></li>
              <li><Link href="/join" className="text-sm text-muted-foreground hover:text-primary">Join Club</Link></li>
              <li><Link href="/contact" className="text-sm text-muted-foreground hover:text-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold font-headline text-primary mb-4">Legal</h4>
            <ul className="space-y-2">
              {legalLinks.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold font-headline text-primary mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Email: <a href="mailto:support@bgwealthclub.com" className="hover:text-primary">support@bgwealthclub.com</a></li>
              <li>Phone: <a href="tel:+1234567890" className="hover:text-primary">+1 (234) 567-890</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-xs text-muted-foreground text-center">
            <strong>Disclaimer:</strong> BG Wealth Club does not provide guaranteed financial returns. All financial decisions involve risk. We provide educational content to help you make informed decisions.
          </p>
          <p className="text-xs text-muted-foreground text-center mt-2">
            &copy; {new Date().getFullYear()} BG Wealth Hub. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
