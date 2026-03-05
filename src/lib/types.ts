export interface Memory {
    id: string;
    src: string;
    sentence: string;
    date: string;
    isUpload: boolean;
}

export interface GhatCard {
    id: string;
    title: string;
    images: string[];
    descriptionEn: string;
    descriptionHi: string;
    date: string;
    isUpload: boolean;
}
