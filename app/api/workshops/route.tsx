"use server"

import { NextResponse } from "next/server";

const DJANGO_WORKSHOP_URL = 'http://localhost:8000/api/workshops/workshop/1'

export async function GET(request: Request) {
    try {
        const response = await fetch(DJANGO_WORKSHOP_URL);
        const data = await response.json();

        if (response.ok) {
            return NextResponse.json({...data});
        }
    } catch (error) {
        console.error('Connection error', error);
        }
}