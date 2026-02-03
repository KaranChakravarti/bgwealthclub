import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { PiggyBank } from 'lucide-react';

export function Logo({ className }: { className?: string }) {
  return (
    // <Link href="/" className={cn("flex items-center gap-2", className)}>
    //   <PiggyBank className="h-7 w-7 text-accent" />
    //   <span className="text-xl font-bold font-headline text-primary">
    //     BG Wealth Hub
    //   </span>
    // </Link>
    <nav>
    <Image
      src="/logo.gif"
      alt="BG Wealth Club Logo"
      width={50}
      height={50}
      priority
      style={{ borderRadius: '15px' }} // Adjust the pixels to change the roundness
    />
  </nav>
  );
}



// export default function Navbar() {
//   return (
//     <nav>
//       <Image
//         src="/logo.gif"
//         alt="BG Wealth Club Logo"
//         width={150}
//         height={150}
//         priority
//         style={{ borderRadius: '15px' }} // Adjust the pixels to change the roundness
//       />
//     </nav>
//   );
// }