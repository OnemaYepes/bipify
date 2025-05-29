"use server"
import { NextResponse } from 'next/server'

const DJANGO_API_MAP_URL = 'http://localhost:8000/map'

export async function POST(request: Request) {
    const requestData = await request.json();
    try {
        
        const response = await fetch(DJANGO_API_MAP_URL)
        

      const data = await response.json();

      if (response.ok) {

        const { access, refresh } = data;
        return NextResponse.json({"loggedIn": true}, {status: 200});
      } else {
        return NextResponse.json({"loggedIn": false, ...data}, {status: 400});
      }
    } catch (error) {

      console.error('Connection error', error);
    }

    
}