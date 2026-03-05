import { NextResponse } from 'next/server';
import { addProduct, deleteProduct } from '@/lib/products';
import path from 'path';
import { writeFile, mkdir } from 'fs/promises';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const file = formData.get('image') as File | null;
        const title = formData.get('title') as string | null;
        const description = formData.get('description') as string | null;
        const priceStr = formData.get('price') as string | null;

        if (!file || !title || !description || !priceStr) {
            return NextResponse.json(
                { error: 'Image, title, description, and price are required' },
                { status: 400 }
            );
        }

        const price = parseFloat(priceStr);
        if (isNaN(price)) {
            return NextResponse.json(
                { error: 'Price must be a valid number' },
                { status: 400 }
            );
        }

        const uploadDir = path.join(process.cwd(), 'public/uploads');

        // Ensure directory exists
        try {
            await mkdir(uploadDir, { recursive: true });
        } catch (e) {
            // Directory likely exists
        }

        const buffer = Buffer.from(await file.arrayBuffer());
        const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}-${file.name.replace(/\s/g, '-')}`;
        await writeFile(path.join(uploadDir, filename), buffer);
        const imageUrl = `/uploads/${filename}`;

        const newProduct = await addProduct({
            title,
            description,
            price,
            image: imageUrl,
        });

        return NextResponse.json({ success: true, product: newProduct });
    } catch (error) {
        console.error('Upload Error:', error);
        return NextResponse.json(
            { error: 'Failed to upload product' },
            { status: 500 }
        );
    }
}

export async function DELETE(request: Request) {
    try {
        const { id } = await request.json();
        if (!id) {
            return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        }
        await deleteProduct(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Delete Error:', error);
        return NextResponse.json(
            { error: 'Failed to delete product' },
            { status: 500 }
        );
    }
}
