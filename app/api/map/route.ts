// app/api/map/route.ts
import { NextResponse } from 'next/server'

const DJANGO_API_MAP_URL = 'http://localhost:8000/map'

export async function GET() {
    try {
        const response = await fetch(DJANGO_API_MAP_URL);
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const htmlContent = await response.text();
        
        return new NextResponse(htmlContent, {
            headers: {
                'Content-Type': 'text/html',
            },
        });
    } catch (error) {
        console.error('Error fetching map:', error);
        return NextResponse.json(
            { error: 'Error fetching map content' },
            { status: 500 }
        );
    }
}