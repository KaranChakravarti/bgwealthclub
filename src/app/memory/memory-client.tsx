"use client";

import { useState } from "react";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Memory, GhatCard } from "@/lib/types";
import { GhatCard as GhatCardComponent } from "@/components/GhatCard";

interface MemoryClientProps {
  memories: Memory[];
  ghats?: GhatCard[];
}

export function MemoryClient({ memories, ghats = [] }: MemoryClientProps) {
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [selectedGhatIndex, setSelectedGhatIndex] = useState<number | null>(
    null,
  );

  return (
    <>
      <main className="min-h-screen  p-4 pt-24">
        {/* Memory Dialog */}
        <Dialog
          open={!!selectedMemory}
          onOpenChange={(open) => !open && setSelectedMemory(null)}
        >
          <DialogContent className="bg-black/90 border border-white/20 text-white max-w-4xl w-auto h-auto p-6">
            <DialogHeader>
              <DialogTitle className="text-center text-xl font-headline text-softpink">
                {selectedMemory?.date
                  ? new Date(selectedMemory.date).toLocaleDateString()
                  : "Memory"}
              </DialogTitle>
            </DialogHeader>
            {selectedMemory && (
              <div className="flex flex-col items-center gap-4">
                <div className="relative w-full max-h-[70vh] aspect-video sm:aspect-auto">
                  <Image
                    src={selectedMemory.src}
                    alt="Memory"
                    width={1000}
                    height={1000}
                    className="rounded-lg object-contain max-w-full max-h-[70vh] mx-auto"
                  />
                </div>
                <p className="text-center text-lg md:text-xl font-light italic text-gray-200">
                  "{selectedMemory.sentence || "Remembering this moment..."}"
                </p>
              </div>
            )}
          </DialogContent>
        </Dialog>

        {/* Ghat Dialog */}
        <Dialog
          open={selectedGhatIndex !== null}
          onOpenChange={(open) => !open && setSelectedGhatIndex(null)}
        >
          <DialogContent className="bg-black/95 border border-white/20 max-w-4xl w-auto p-0 overflow-hidden">
            {/* Hidden title for accessibility */}
            <DialogTitle className="sr-only">Varanasi Details</DialogTitle>
            {selectedGhatIndex !== null && ghats[selectedGhatIndex] && (
              <div className="w-[90vw] max-w-[800px] aspect-square">
                <GhatCardComponent ghat={ghats[selectedGhatIndex]} />
              </div>
            )}
          </DialogContent>
        </Dialog>
      </main>
    </>
  );
}
