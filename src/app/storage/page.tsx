// src/app/storage/page.tsx
import { getProducts } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

export const dynamic = 'force-dynamic';

export default async function StoragePage() {
  const products = await getProducts();
  return (
    <main className="min-h-screen p-8  text-foreground">
      <h1 className="text-4xl font-bold mb-8 text-center text-softpink">Marketplace</h1>
      {products.length === 0 ? (
        <p className="text-center text-white/60">No products available.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  );
}
