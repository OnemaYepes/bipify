"use server"
import { getRefreshToken, getToken, setRefreshToken, setToken } from '@/app/lib/auth';
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'

const DJANGO_API_LOGIN_URL = 'http://localhost:8000/api/token/pair'

export async function POST(request: Request) {
    const myAuthToken = getToken()
    const myRefreshToken = getRefreshToken();
    console.log(myAuthToken, myRefreshToken);
    const requestData = await request.json();
    try {
        
        const response = await fetch(DJANGO_API_LOGIN_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      const data = await response.json();

      if (response.ok) {

        const { access, refresh } = data;
        setToken(access);
        setRefreshToken(refresh);
        return NextResponse.json({"loggedIn": true}, {status: 200});
      } else {
        return NextResponse.json({"loggedIn": false, ...data}, {status: 400});
      }
    } catch (error) {

      console.error('Connection error', error);
    }

    
    return NextResponse.json({'cookie': myAuthToken}, {status: 200})
}