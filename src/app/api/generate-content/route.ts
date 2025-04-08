import { NextResponse } from 'next/server';

const HUGGING_FACE_API_KEY = process.env.OPENAI_API_KEY; // Замініть на ваш ключ API
const HUGGING_FACE_API_URL = 'https://api-inference.huggingface.co/models/gpt2'; // Використовуємо GPT-2 або іншу модель

async function generateContentFromHuggingFace(title: string) {
    const prompt = `Write a detailed blog post about: "${title}". Include headings, paragraphs, examples, and key takeaways. Please create text with HTML markup. Make the content as comprehensive and informative as possible.`;

    const response = await fetch(HUGGING_FACE_API_URL, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${HUGGING_FACE_API_KEY}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            inputs: prompt,
        }),
    });

    if (!response.ok) {
        throw new Error('Failed to generate content');
    }

    const data = await response.json();

    const generatedText = data[0]?.generated_text;

    if (generatedText) {
        return generatedText.replace(prompt, '');
    }

    return 'No content generated.';
}

export async function GET(req: Request) {
    const { searchParams } = new URL(req.url);
    const title = searchParams.get('title');

    if (!title) {
        return NextResponse.json({ error: 'Title is required' }, { status: 400 });
    }

    try {
        const generatedText = await generateContentFromHuggingFace(title);

        return NextResponse.json({ content: generatedText });
    } catch (error) {
        console.error('Error generating content:', error);
        return NextResponse.json({ error: 'Failed to generate content', details: error.message }, { status: 500 });
    }
}