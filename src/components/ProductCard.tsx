// src/components/ProductCard.tsx
"use client";

import Image from "next/image";
import { Product } from "@/lib/products";
import { useToast } from "@/hooks/use-toast";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { toast } = useToast();

  const handleBuy = async () => {
    try {
      await navigator.clipboard.writeText(product.id);
      toast({
        title: "Product ID Copied",
        description: `Product ID: ${product.id} copied to clipboard! Redirecting to WhatsApp...`,
      });
    } catch (e) {
      console.error("Failed to copy:", e);
    }

    // You can update this number to your actual admin WhatsApp number (include country code, omit `+`)
    const adminWhatsAppNumber = "+91 8953099535"; 
    const message = `Hello, I want to purchase this product:
Title: ${product.title}
Product ID: ${product.id}
Price: ₹${product.price.toFixed(2)}`;

    // Slight delay so the user sees the toast before redirection
    setTimeout(() => {
      window.open(`https://wa.me/${adminWhatsAppNumber}?text=${encodeURIComponent(message)}`, "_blank");
    }, 1000);
  };

  return (
    <article className="flex flex-col rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-500">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          priority
        />
      </div>
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-white mb-1">{product.title}</h2>
        <p className="text-xs text-white/50 mb-2 font-mono bg-black/20 px-2 py-0.5 rounded w-fit">
          ID: {product.id}
        </p>
        <p className="text-white/70 mb-2 flex-grow">{product.description}</p>
        <div className="flex items-center justify-between mt-2">
          <span className="text-orange-400 font-semibold text-lg">
            ₹{product.price.toFixed(2)}
          </span>
          <button 
            onClick={handleBuy}
            className="px-4 py-2 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/30"
          >
            Buy on WhatsApp
          </button>
        </div>
      </div>
    </article>
  );
}
