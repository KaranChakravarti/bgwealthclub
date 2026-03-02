'use server';

/**
 * @fileOverview Summarizes financial guidance from uploaded documents.
 *
 * - summarizeFinancialGuidance - A function that summarizes financial guidance from a document.
 * - SummarizeFinancialGuidanceInput - The input type for the summarizeFinancialGuidance function.
 * - SummarizeFinancialGuidanceOutput - The return type for the summarizeFinancialGuidance function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SummarizeFinancialGuidanceInputSchema = z.object({
  documentDataUri: z
    .string()
    .describe(
      "A financial document, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type SummarizeFinancialGuidanceInput = z.infer<typeof SummarizeFinancialGuidanceInputSchema>;

const SummarizeFinancialGuidanceOutputSchema = z.object({
  summary: z.string().describe('A summary of the financial guidance in the document.'),
});
export type SummarizeFinancialGuidanceOutput = z.infer<typeof SummarizeFinancialGuidanceOutputSchema>;

export async function summarizeFinancialGuidance(input: SummarizeFinancialGuidanceInput): Promise<SummarizeFinancialGuidanceOutput> {
  return summarizeFinancialGuidanceFlow(input);
}

const prompt = ai.definePrompt({
  name: 'summarizeFinancialGuidancePrompt',
  input: {schema: SummarizeFinancialGuidanceInputSchema},
  output: {schema: SummarizeFinancialGuidanceOutputSchema},
  prompt: `You are an AI assistant specializing in summarizing financial documents.
  Your task is to provide a concise and informative summary of the key financial guidance within the provided document.
  Focus on extracting actionable insights, recommendations, and important updates.

  Document: {{media url=documentDataUri}}`,
});

const summarizeFinancialGuidanceFlow = ai.defineFlow(
  {
    name: 'summarizeFinancialGuidanceFlow',
    inputSchema: SummarizeFinancialGuidanceInputSchema,
    outputSchema: SummarizeFinancialGuidanceOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
