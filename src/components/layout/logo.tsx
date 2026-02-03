import Link from 'next/link';
import { cn } from '@/lib/utils';
import { PiggyBank } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={cn("flex items-center gap-2", className)}>
      <PiggyBank className="h-7 w-7 text-accent" />
      <span className="text-xl font-bold font-headline text-primary">
        BG Wealth Hub
      </span>
    </Link>
  );
}
