// app/api/locations/route.ts
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    // Aquí puedes conectar con tu backend Django o usar datos estáticos
    const locations = [
      {
        lat: 6.24925386443006,
        lng: -75.60280622330265,
        name: "AJ Service",
        address: "Calle 42c #81-90, Medellín, Colombia",
        hours: "9:00 - 18:00",
        type: "workshop"
      },
      // ... más ubicaciones
    ];
    
    return NextResponse.json(locations);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to load locations' },
      { status: 500 }
    );
  }
}