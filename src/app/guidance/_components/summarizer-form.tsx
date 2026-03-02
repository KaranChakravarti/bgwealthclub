"use client";

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { summarizeFinancialGuidance, SummarizeFinancialGuidanceInput } from '@/ai/flows/summarize-financial-guidance';
import { Loader2, Sparkles } from 'lucide-react';

export function SummarizerForm() {
    const [file, setFile] = useState<File | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [summary, setSummary] = useState('');
    const { toast } = useToast();

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setSummary(''); // Clear previous summary
        }
    };

    const fileToDataUri = (file: File): Promise<string> => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target?.result) {
                    resolve(event.target.result as string);
                } else {
                    reject(new Error("Failed to read file."));
                }
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsDataURL(file);
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!file) {
            toast({
                title: 'No file selected',
                description: 'Please upload a document to summarize.',
                variant: 'destructive',
            });
            return;
        }

        setIsLoading(true);
        setSummary('');

        try {
            const documentDataUri = await fileToDataUri(file);
            const input: SummarizeFinancialGuidanceInput = { documentDataUri };
            const result = await summarizeFinancialGuidance(input);
            setSummary(result.summary);
        } catch (error) {
            console.error('Error summarizing document:', error);
            toast({
                title: 'Summarization Failed',
                description: 'Something went wrong. Please try again with a different document.',
                variant: 'destructive',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card className="shadow-lg">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl font-headline text-primary">
                    <Sparkles className="w-6 h-6 text-accent" />
                    Document Summarizer
                </CardTitle>
                <CardDescription>
                    Upload a financial document (e.g., PDF, DOCX) to receive a concise summary of its key points.
                </CardDescription>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div>
                        <Label htmlFor="financial-document">Upload Document</Label>
                        <Input 
                            id="financial-document" 
                            type="file" 
                            onChange={handleFileChange}
                            accept=".pdf,.doc,.docx,.txt"
                            className="file:text-primary file:font-semibold"
                        />
                    </div>
                </CardContent>
                <CardFooter className="flex-col items-start gap-4">
                    <Button type="submit" disabled={!file || isLoading} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground">
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Generating Summary...
                            </>
                        ) : 'Summarize Document'}
                    </Button>
                    
                    {summary && (
                        <div className="w-full p-4 border rounded-md bg-primary/5 mt-4">
                            <h3 className="text-xl font-bold font-headline text-primary mb-2">Summary</h3>
                            <p className="whitespace-pre-wrap text-foreground/90">{summary}</p>
                        </div>
                    )}
                </CardFooter>
            </form>
        </Card>
    );
}
