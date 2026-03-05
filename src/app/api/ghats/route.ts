import { NextResponse } from 'next/server';
import { saveGhat, deleteGhat } from '@/lib/ghats';
import path from 'path';
import { writeFile, mkdir } from 'fs/promises';

export async function POST(request: Request) {
    try {
        const formData = await request.formData();
        const files = formData.getAll('images') as File[];
        const title = formData.get('title') as string | null;
        const descriptionEn = formData.get('descriptionEn') as string | null;
        const descriptionHi = formData.get('descriptionHi') as string | null;

        if (!files.length || !title || !descriptionEn || !descriptionHi) {
            return NextResponse.json(
                { error: 'Title, descriptions, and at least one image are required' },
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

        const imageUrls: string[] = [];

        // Save all images
        for (const file of files) {
            const buffer = Buffer.from(await file.arrayBuffer());
            const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}-${file.name.replace(/\s/g, '-')}`;
            await writeFile(path.join(uploadDir, filename), buffer);
            imageUrls.push(`/uploads/${filename}`);
        }

        const ghat = {
            id: typeof crypto !== 'undefined' && crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
            title: title,
            images: imageUrls,
            descriptionEn: descriptionEn,
            descriptionHi: descriptionHi,
            date: new Date().toISOString(),
            isUpload: true,
        };

        // Save metadata
        // @ts-ignore
        await saveGhat(ghat);

        return NextResponse.json({ success: true, ghat });
    } catch (error) {
        console.error('Upload Error:', error);
        return NextResponse.json(
            { error: 'Failed to upload ghat' },
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
        await deleteGhat(id);
        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Delete Error:', error);
        return NextResponse.json(
            { error: 'Failed to delete ghat' },
            { status: 500 }
        );
    }
}
