// pages/start.js
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';
import profileDetails from '../data/profileDetails';

export default function SelectionFlow() {
  const router = useRouter();
  const [question, setQuestion] = useState(null);
  const [profile, setProfile] = useState(null);
  const [sessionId, setSessionId] = useState(null);

  useEffect(() => {
    setSessionId(uuidv4());
  }, []);

  useEffect(() => {
    if (question && profile && sessionId) {
      const route = `/${question.toLowerCase()}-${profile}`;
      router.push({ pathname: route, query: { sessionId } });
    }
  }, [question, profile, sessionId, router]);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 space-y-8 bg-gray-50 text-gray-900">
      {!question ? (
        <>
          <h1 className="text-3xl font-bold text-center mb-6">Choisis une question :</h1>

          <div className="space-y-6 w-full max-w-xl">
            <button
              className="w-full px-6 py-5 bg-fuchsia-400 text-white text-lg font-medium rounded-2xl shadow hover:bg-fuchsia-500 transition"
              onClick={() => setQuestion('q1')}
            >
              Je commence toujours plein de trucs, <br />
              et puis je lâche en cours de route.
            </button>

            <button
              className="w-full px-6 py-5 bg-sky-400 text-white text-lg font-medium rounded-2xl shadow hover:bg-sky-500 transition"
              onClick={() => setQuestion('q4')}
            >
              J’ai un peu d’épargne que je voudrais <br />
              investir, mais je ne sais pas par où commencer.
            </button>
          </div>

          <div className="mt-10 space-y-4 w-full max-w-xl">
            <button
              onClick={() => router.push('/presentation2')}
              className="w-full px-6 py-3 text-base bg-gray-800 text-white rounded-2xl hover:bg-gray-700 transition"
            >
              ↩ Retour à la présentation
            </button>
          </div>

          {/* Boutons fixes en bas à droite */}
          <div className="absolute bottom-6 right-6 space-y-3 flex flex-col items-end">
            <button
              onClick={() => router.push('/scenario-feedback')}
              className="px-4 py-2 bg-indigo-600 text-white rounded-2xl shadow-lg hover:bg-indigo-700 transition"
            >
              Donner mon feedback scénario
            </button>
            <button
              onClick={() => router.push('/feedback')}
              className="px-4 py-2 bg-red-500 text-white rounded-2xl shadow-lg hover:bg-red-600 transition"
            >
              Donner mon feedback général
            </button>
          </div>
        </>
      ) : !profile ? (
        <>
          <h1 className="text-3xl font-bold text-center mb-10 text-black">🎭 Choisis un profil :</h1>

          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl mx-auto">
            {Object.entries(profileDetails).map(([key, data]) => {
              const colorMap = {
                'profile-a': {
                  wrapper: 'bg-blue-50 border-t-4 border-blue-500',
                  title: 'text-blue-600',
                  labelBg: 'bg-blue-100',
                  rowBorder: 'border-blue-200',
                },
                'profile-b': {
                  wrapper: 'bg-green-50 border-t-4 border-green-500',
                  title: 'text-green-600',
                  labelBg: 'bg-green-100',
                  rowBorder: 'border-green-200',
                },
                'profile-c': {
                  wrapper: 'bg-purple-50 border-t-4 border-purple-500',
                  title: 'text-purple-600',
                  labelBg: 'bg-purple-100',
                  rowBorder: 'border-purple-200',
                },
              }[key];

              return (
                <div
                  key={key}
                  onClick={() => setProfile(key)}
                  className={`cursor-pointer transform transition duration-300 hover:scale-105 shadow-lg rounded-2xl p-6 space-y-4 ${colorMap.wrapper}`}
                >
                  <h2 className={`text-2xl font-extrabold mb-3 ${colorMap.title}`}>{data.title}</h2>
                  <table className="w-full table-auto text-sm bg-white bg-opacity-90 rounded-lg overflow-hidden">
                    <tbody>
                      {data.content.map(([label, value], idx) => (
                        <tr key={idx} className={`border-b last:border-b-0 ${colorMap.rowBorder}`}> 
                          <td className={`px-4 py-2 font-bold text-black ${colorMap.labelBg}`}>{label}</td>
                          <td className="px-4 py-2 text-gray-800">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setQuestion(null)}
              className="inline-block px-6 py-3 text-base font-medium bg-gray-800 text-white rounded-full shadow hover:bg-gray-700 transition"
            >
              ↩ Retour au choix des questions
            </button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-500">Chargement du scénario…</p>
      )}
    </div>
  );
}
