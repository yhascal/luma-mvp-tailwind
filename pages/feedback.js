"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { supabase } from '../lib/supabaseClient';

export default function FeedbackPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    liked: "",
    disliked: "",
    wouldUse: "",
    viable: "",
    missing: "",
    other: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const sessionId = localStorage.getItem("lumaSessionId");

    const { error } = await supabase.from("feedbacks").insert([
      {
        session_id: sessionId,
        forces: formData.liked,
        faults: formData.disliked,
        threats: formData.viable,
        opportunities: formData.missing,
        comments: formData.other,
      }
    ]);

    if (error) {
      console.error("Erreur Supabase :", error);
      alert("Erreur Supabase : " + error.message);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center space-y-4">
        <h1 className="text-2xl font-bold text-green-700">🙏 Merci pour ton retour !</h1>
        <p className="text-gray-600">Tes réponses ont bien été enregistrées.</p>
        <button
          onClick={() => router.push("/start")}
          className="px-4 py-2 mt-4 bg-gray-200 text-black rounded hover:bg-gray-300 transition"
        >
          ↩ Retour
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6 relative">
      <h1 className="text-3xl font-bold text-center">🧠 Ton avis sur Luma</h1>
      <p className="text-center text-gray-600">Tu viens de terminer le test. Merci de prendre une minute pour nous dire ce que tu en as pensé.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="font-medium">💚 Qu’est-ce que t’as aimé chez Luma ?</label>
          <textarea value={formData.liked} onChange={handleChange("liked")} rows={3} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="font-medium">💔 Qu’est-ce que t’as pas aimé ?</label>
          <textarea value={formData.disliked} onChange={handleChange("disliked")} rows={3} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="font-medium">🧩 Tu l’utiliserais, oui ou non ? Pourquoi ?</label>
          <textarea value={formData.wouldUse} onChange={handleChange("wouldUse")} rows={3} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="font-medium">🔮 Tu penses que ça peut marcher ? Pourquoi ou pourquoi pas ?</label>
          <textarea value={formData.viable} onChange={handleChange("viable")} rows={3} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="font-medium">🧱 Qu’est-ce qu’il manque pour que les gens aient vraiment envie de l’utiliser ?</label>
          <textarea value={formData.missing} onChange={handleChange("missing")} rows={3} className="w-full p-2 border rounded" />
        </div>
        <div>
          <label className="font-medium">💬 Tout autre commentaire ?</label>
          <textarea value={formData.other} onChange={handleChange("other")} rows={3} className="w-full p-2 border rounded" />
        </div>

        <div className="text-center">
          <button type="submit" className="px-6 py-3 rounded-2xl shadow bg-black text-white text-lg hover:bg-gray-800 transition">
            Envoyer le feedback
          </button>
        </div>
      </form>

      <div className="absolute bottom-6 left-6">
        <button
          onClick={() => router.push('/start')}
          className="px-4 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition"
        >
          ↩ Retour
        </button>
      </div>
    </div>
  );
}


