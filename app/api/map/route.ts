// app/api/map/route.ts
import { NextResponse } from 'next/server';

const DJANGO_API_MAP_URL = 'http://localhost:8000/map';

export async function GET() {
    try {
        const response = await fetch(DJANGO_API_MAP_URL);
        if (!response.ok) throw new Error('Failed to fetch map');
        const htmlContent = await response.text();
        
        return new NextResponse(htmlContent, {
            headers: { 'Content-Type': 'text/html' },
        });
    } catch (error) {
        console.error('Error fetching map:', error);
        return NextResponse.json(
            { error: 'Failed to load map' },
            { status: 500 }
        );
    }
}