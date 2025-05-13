// pages/start.js
"use client";

import Link from 'next/link';
import { useRouter } from 'next/router';

export default function StartPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-gray-50 text-gray-900">
      <h1 className="text-3xl font-bold text-center mb-10">Et maintenant ?</h1>

      <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 w-full max-w-md">
        <button
          onClick={() => router.push('/presentation2')}
          className="w-full px-6 py-3 text-base bg-gray-800 text-white rounded-2xl hover:bg-gray-700 transition shadow-md"
        >
          ↩ Retour à la présentation
        </button>
        <button
          onClick={() => router.push('/feedback')}
          className="w-full px-6 py-3 text-base bg-red-500 text-white rounded-2xl hover:bg-red-600 transition shadow-md"
        >
          Donner mon feedback général
        </button>
      </div>
    </div>
  );
}
