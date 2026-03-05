import fs from "fs/promises";
import path from "path";
import { GhatCard } from "./types";

const GHATS_FILE = path.join(process.cwd(), "src/data/ghats.json");

export async function getUploadedGhats(): Promise<GhatCard[]> {
  try {
    const data = await fs.readFile(GHATS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}

export async function saveGhat(ghat: GhatCard) {
  const ghats = await getUploadedGhats();
  ghats.push(ghat);
  await fs.mkdir(path.dirname(GHATS_FILE), { recursive: true });
  await fs.writeFile(GHATS_FILE, JSON.stringify(ghats, null, 2));
}

export async function deleteGhat(id: string) {
  const ghats = await getUploadedGhats();
  const ghatToDelete = ghats.find((g) => g.id === id);
  if (!ghatToDelete) return;

  const updatedGhats = ghats.filter((g) => g.id !== id);
  await fs.mkdir(path.dirname(GHATS_FILE), { recursive: true });
  await fs.writeFile(GHATS_FILE, JSON.stringify(updatedGhats, null, 2));

  // Try to delete the files
  for (const imageSrc of ghatToDelete.images) {
    if (imageSrc.startsWith("/uploads/")) {
      try {
        const filePath = path.join(process.cwd(), "public", imageSrc);
        await fs.unlink(filePath);
      } catch (e) {
        console.error("Failed to delete file:", e);
      }
    }
  }
}
