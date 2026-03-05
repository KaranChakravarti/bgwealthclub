// src/lib/products.ts
import fs from 'fs/promises';
import path from 'path';


export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
}

const PRODUCTS_FILE = path.join(process.cwd(), 'src/data/products.json');

export async function getProducts(): Promise<Product[]> {
    try {
        const data = await fs.readFile(PRODUCTS_FILE, 'utf-8');
        return JSON.parse(data) as Product[];
    } catch (e) {
        // If file missing or malformed, start with empty array
        return [];
    }
}

export async function addProduct(product: Omit<Product, 'id'>): Promise<Product> {
    const products = await getProducts();
    // Generate a unique 6-digit number
    let newId: string;
    do {
        newId = Math.floor(100000 + Math.random() * 900000).toString();
    } while (products.some(p => p.id === newId));

    const newProduct: Product = { id: newId, ...product };
    products.push(newProduct);
    await fs.mkdir(path.dirname(PRODUCTS_FILE), { recursive: true });
    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(products, null, 2));
    return newProduct;
}

export async function getProductById(id: string): Promise<Product | undefined> {
    const products = await getProducts();
    return products.find((p) => p.id === id);
}

export async function deleteProduct(id: string) {
    const products = await getProducts();
    const productToDelete = products.find((p) => p.id === id);
    if (!productToDelete) return;

    const updatedProducts = products.filter((p) => p.id !== id);
    await fs.mkdir(path.dirname(PRODUCTS_FILE), { recursive: true });
    await fs.writeFile(PRODUCTS_FILE, JSON.stringify(updatedProducts, null, 2));

    // Try to delete the file
    if (productToDelete.image.startsWith('/uploads/')) {
        try {
            const filePath = path.join(process.cwd(), 'public', productToDelete.image);
            await fs.unlink(filePath);
        } catch (e) {
            console.error("Failed to delete product file:", e);
        }
    }
}
