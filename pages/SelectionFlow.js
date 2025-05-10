import { useState, useEffect } from 'react';
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
    const initialQuestion = router.query.question;
    if (initialQuestion === 'q1' || initialQuestion === 'q4') {
      setQuestion(initialQuestion);
    }
  }, []);

  useEffect(() => {
    if (question && profile) {
      router.push({
pathname: `/${question.toLowerCase()}-${profile}`,
        query: { sessionId }
      });
    }
  }, [question, profile]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {!question ? (
        <>
          <h1 className="text-3xl font-bold text-center mb-6">Choisis une question :</h1>
          <div className="flex flex-col items-center space-y-4">
            <button
              className="w-full max-w-md px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              onClick={() => setQuestion('q1')}
            >
              Je commence toujours plein de trucs…
            </button>
            <button
              className="w-full max-w-md px-5 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
              onClick={() => setQuestion('q4')}
            >
              J’ai un peu d’épargne à investir…
            </button>
          </div>
        </>
      ) : !profile ? (
        <>
          <h1 className="text-3xl font-bold text-center mb-6">Choisis un profil :</h1>
          <p className="text-center text-gray-600 mb-6">
            Pour rappel, tu vas lire des scénarios incarnés par trois profils prédéterminés,
            chacun défini par une combinaison de ces 6 réponses.
          </p>
          <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Object.entries(profileDetails).map(([key, data]) => (
              <div
                key={key}
                className={`border-2 border-${data.color} rounded-xl bg-white p-5 shadow hover:shadow-lg cursor-pointer transition`}
                onClick={() => setProfile(key.split('-')[1])}
              >
                <h2 className={`text-xl font-semibold text-${data.color} mb-4`}>
                  {data.title}
                </h2>
                <ul className="space-y-2 text-sm">
                  {data.content.map(([label, value], idx) => (
                    <li key={idx} className="flex">
                      <span className="w-36 font-medium text-gray-700">{label}:</span>
                      <span className="text-gray-900">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <button
              className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
              onClick={() => setQuestion(null)}
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



