import { AdminClient } from "./admin-client";
import { getUploadedMemories } from "@/lib/memories";
import { getUploadedGhats } from "@/lib/ghats";
import { getProducts } from "@/lib/products";

export const dynamic = 'force-dynamic';

export default async function AdminPage() {
  const uploadedMemories = await getUploadedMemories();
  const uploadedGhats = await getUploadedGhats();
  const products = await getProducts();

  return <AdminClient memories={uploadedMemories} ghats={uploadedGhats} products={products} />;
}
