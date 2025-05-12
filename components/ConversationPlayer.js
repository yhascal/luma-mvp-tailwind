import { useRouter } from 'next/router';
import { useState } from 'react';

export default function ConversationPlayer({ steps }) {
  const [step, setStep] = useState(0);
  const router = useRouter();
  const { profile, question } = router.query;

  const next = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const skipToEnd = () => {
    setStep(steps.length - 1);
  };

  const finish = () => {
    if (question) {
      router.push(`/start?question=${question}`);
    } else {
      router.push('/start');
    }
  };

  const back = () => {
    if (step > 0) {
      setStep(step - 1);
    } else {
      router.push('/start');
    }
  };

  return (
    <div className="space-y-4">
      {steps.slice(0, step + 1).map((s, i) => (
        <div
          key={i}
          className={`p-4 rounded-xl whitespace-pre-wrap ${
            s.speaker === 'user' ? 'bg-green-100' : 'bg-blue-100'
          } text-gray-900`}
        >
          <strong>
            {s.speaker === 'user' ? '🙋 Utilisateur' : '🧠 Luma'}
          </strong>
          <br />
          {s.text}
        </div>
      ))}

      {profile && (
        <div className="text-center mt-6">
          <button className="px-4 py-2 text-white bg-indigo-600 rounded">
            Profil {profile}
          </button>
        </div>
      )}

      <div className="flex justify-between mt-6">
        <button
          onClick={back}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
        >
          Retour
        </button>
        <button
          onClick={step === steps.length - 1 ? finish : next}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          {step === steps.length - 1 ? 'Terminé' : 'Suivant'}
        </button>
      </div>

      {step < steps.length - 1 && (
        <div className="flex justify-end mt-2">
          <button
            onClick={skipToEnd}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Fin du scénario
          </button>
        </div>
      )}
    </div>
  );
}
