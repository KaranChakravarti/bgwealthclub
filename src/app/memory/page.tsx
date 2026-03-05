import { MemoryClient } from "./memory-client";
import { getUploadedMemories } from "@/lib/memories";
import { getUploadedGhats } from "@/lib/ghats";
import { shuffle } from "@/lib/utils";

export const dynamic = 'force-dynamic';

export default async function MemoryPage() {
  const uploadedMemories = await getUploadedMemories();
  const uploadedGhats = await getUploadedGhats();
  
  // We shuffle the images to make the gallery feel different each time.
  const shuffledImages = shuffle(uploadedMemories);
  
  return <MemoryClient memories={shuffledImages} ghats={uploadedGhats} />;
}
