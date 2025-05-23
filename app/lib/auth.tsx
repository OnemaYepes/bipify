import { cookies } from 'next/headers'

const TOKEN_AGE = 3600;

export async function getToken() {
    const myAuthToken = (await cookies()).get('auth-token');
    return myAuthToken?.value;
}

export async function getRefreshToken() {
    const myAuthToken = (await cookies()).get('auth-refresh-token');
    return myAuthToken?.value;
}

export async function setToken(authToken) {
    return (await cookies()).set({
        name: 'auth-token',
        value: authToken,
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV !== 'development',
        maxAge: TOKEN_AGE
    });
    
}

export async function setRefreshToken(authRefreshToken) {
    return (await cookies()).set({
        name: 'auth-refresh-token',
        value: authRefreshToken,
        httpOnly: true,
        sameSite: 'strict',
        secure: process.env.NODE_ENV !== 'development',
        maxAge: TOKEN_AGE
    });
    
}

export async function deleteToken() {
    (await cookies()).delete('auth-refresh-token');
    return (await cookies()).delete('auth-token');
}