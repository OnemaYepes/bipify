"use server"

import { NextResponse } from "next/server";

const DJANGO_API_PRODUCTS_URL = "http://localhost:8000/api/products/all"

export async function GET(request: Request) {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        }
    };
    const response = await fetch(DJANGO_API_PRODUCTS_URL, options);
    console.log(response);
    const result = await response.json();
    if (!response.ok) {
        return NextResponse.json({...result}, {status: 401});
    }

    return NextResponse.json({...result}, {status: 200});
}