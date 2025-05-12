"use client";
import { useState } from "react";
import { supabase } from "../lib/supabaseClient";
import { useRouter } from "next/router";

export default function ScenarioFeedback() {
  const [formData, setFormData] = useState({
    strengths: '',
    weaknesses: '',
    opportunities: '',
    threats: '',
    comments: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleChange = (field) => (e) => {
    setFormData({ ...formData, [field]: e.target.value });
  };

  const handleSubmit = async () => {
    const sessionId = localStorage.getItem("lumaSessionId");

    const { error } = await supabase.from("scenario_feedbacks").insert([
      {
        session_id: sessionId,
        strengths: formData.strengths,
        weaknesses: formData.weaknesses,
        opportunities: formData.opportunities,
        threats: formData.threats,
        comments: formData.comments
      }
    ]);

    if (error) {
      console.error("Erreur Supabase :", error);
      alert("❌ Erreur : " + error.message);
    } else {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <h1 className="text-2xl font-bold text-green-700 mb-4">✅ Merci pour ton feedback scénario !</h1>
        <p className="text-gray-600 mb-6">Il a bien été enregistré.</p>
        <button
          onClick={() => router.push("/start")}
          className="px-4 py-2 bg-gray-200 text-black rounded"
        >
          ↩ Retour
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-3xl font-bold text-center">🧠 Feedback scénario (global)</h1>
      <p className="text-center text-gray-600 mb-4">
        Merci de partager ton ressenti après avoir lu les différents scénarios.
      </p>
      <div className="grid grid-cols-2 gap-4">
        {["strengths", "weaknesses", "opportunities", "threats"].map((key) => (
          <div key={key}>
            <label className="block font-medium capitalize">{{
              strengths: "🟢 Forces",
              weaknesses: "🔴 Faiblesses",
              opportunities: "🟡 Opportunités",
              threats: "⚠️ Menaces"
            }[key]}</label>
            <textarea
              className="w-full p-2 border rounded"
              rows={3}
              value={formData[key]}
              onChange={handleChange(key)}
            />
          </div>
        ))}
      </div>
      <div>
        <label className="block font-medium">💬 Commentaires libres</label>
        <textarea
          className="w-full p-2 border rounded"
          rows={3}
          value={formData.comments}
          onChange={handleChange("comments")}
        />
      </div>
      <div className="text-center mt-4">
        <button
          onClick={handleSubmit}
          className="px-6 py-3 rounded-2xl bg-black text-white hover:bg-gray-800 transition"
        >
          Envoyer le feedback scénario
        </button>
      </div>
    </div>
  );
}
