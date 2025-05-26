"use client";

import { useState } from "react";
import { useRouter } from 'next/navigation'; // Import useRouter for redirection

const LOGOUT_URL = '/api/logout/'

export default function LogoutPage() {
  const [error, setError] = useState('');
  const router = useRouter(); // Initialize useRouter

  const handleClick = async (event: React.FormEvent) => {
    event.preventDefault(); // Avoids page restart

    try {   
      const response = await fetch(LOGOUT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: ""
      });

      const data = await response.json();

      if (response.ok) {
        router.replace('/sign-in');
      } else {
        setError(data.message || 'Error logging in');
        console.error('Error logging in', data);
      }
    } catch (error) {
      setError('Server connection error');
        }
    };
    return (<div className="h-[95vh]">
            <div className="max-w-md mx-auto py-5">
                <h1>Are you sure you want to log out?</h1>
                <button className="bg-red-500 text-white hover:bg-red-300 px-3 py-2" onClick={handleClick}>Yes</button>
            </div>
        </div>)
}