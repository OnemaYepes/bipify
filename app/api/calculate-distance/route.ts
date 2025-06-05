// app/api/calculate-distance/route.ts
import { NextResponse } from 'next/server'

const DJANGO_API_URL = 'http://localhost:8000/calculate-distance/'

export async function POST(request: Request) {
  try {
    const requestData = await request.json()
    
    const response = await fetch(DJANGO_API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData)
    })

    if (!response.ok) {
      throw new Error('Error calculating distance')
    }

    const data = await response.json()
    return NextResponse.json(data)
  } catch (error) {
    console.error('Error:', error)
    return NextResponse.json(
      { error: 'Failed to calculate distance' },
      { status: 500 }
    )
  }
}