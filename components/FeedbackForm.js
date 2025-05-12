import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient'

export default function FeedbackForm({ scenarioId }) {
  const [formData, setFormData] = useState({
    strengths: '',
    weaknesses: '',
    opportunities: '',
    threats: '',
    comments: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async () => {
    const sessionId = localStorage.getItem("lumaSessionId");

    const { error } = await supabase
      .from("scenario_feedbacks")
      .insert([
        {
          session_id: sessionId,
          scenario_id: scenarioId,
          strengths: formData.strengths,
          weaknesses: formData.weaknesses,
          opportunities: formData.opportunities,
          threats: formData.threats,
          comments: formData.comments
        }
      ], { returning: 'minimal' }); // ✅ empêche Supabase d’essayer de retourner les lignes

    if (error) {
      console.error("Erreur lors de l'envoi du feedback scénario :", error);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="mt-12 text-green-700 font-semibold">
        ✅ Feedback bien enregistré, merci !
      </div>
    );
  }

  return (
    <div className="mt-12 space-y-4">
      <h2 className="text-xl font-semibold">📝 Feedback rapide</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">🟢 Forces</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={3}
            value={formData.strengths}
            onChange={handleChange('strengths')}
          />
        </div>
        <div>
          <label className="block font-medium">🔴 Faiblesses</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={3}
            value={formData.weaknesses}
            onChange={handleChange('weaknesses')}
          />
        </div>
        <div>
          <label className="block font-medium">🟡 Opportunités</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={3}
            value={formData.opportunities}
            onChange={handleChange('opportunities')}
          />
        </div>
        <div>
          <label className="block font-medium">⚠️ Menaces</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={3}
            value={formData.threats}
            onChange={handleChange('threats')}
          />
        </div>
      </div>
      <div>
        <label className="block font-medium">💬 Autres commentaires</label>
        <textarea
          className="w-full p-2 border rounded"
          rows={3}
          value={formData.comments}
          onChange={handleChange('comments')}
        />
      </div>
      <div className="text-right">
        <button
          onClick={handleSubmit}
          className="px-6 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition"
        >
          Envoyer le feedback
        </button>
      </div>
    </div>
  );
}
