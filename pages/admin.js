"use client";
import { useEffect, useState } from "react";
import { supabase } from '../lib/supabaseClient';

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);
  const [inscriptions, setInscriptions] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [scenarioFeedbacks, setScenarioFeedbacks] = useState([]);
  const [searchName, setSearchName] = useState("");
  const [scenarioFilter, setScenarioFilter] = useState("");

  const fetchData = async () => {
    const { data: insc } = await supabase.from("inscriptions").select("*");
    const { data: fb } = await supabase.from("feedbacks").select("*");
    const { data: sf } = await supabase.from("scenario_feedbacks").select("*");
    setInscriptions(insc || []);
    setFeedbacks(fb || []);
    setScenarioFeedbacks(sf || []);
  };

  useEffect(() => {
    if (accessGranted) fetchData();
  }, [accessGranted]);

  const uniqueScenarioIds = [...new Set(scenarioFeedbacks.map(f => f.scenario_id))];

  const filteredUsers = inscriptions.filter(user => {
    const fullName = `${user.first_name} ${user.last_name}`.toLowerCase();
    const nameMatches = fullName.includes(searchName.toLowerCase());
    if (!nameMatches) return false;
    if (scenarioFilter) {
      const hasScenario = scenarioFeedbacks.some(f => f.session_id === user.id && f.scenario_id === scenarioFilter);
      return hasScenario;
    }
    return true;
  });

  if (!accessGranted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <input
          type="password"
          placeholder="Mot de passe admin"
          className="border p-2 rounded mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-black text-white px-4 py-2 rounded"
          onClick={() => setAccessGranted(password === "nezuko2025")}
        >
          Se connecter
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">📊 Admin Feedbacks</h1>

      <div className="flex space-x-4 mb-6">
        <input
          type="text"
          placeholder="Rechercher un nom..."
          className="border px-3 py-2 rounded"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <select
          className="border px-3 py-2 rounded"
          value={scenarioFilter}
          onChange={(e) => setScenarioFilter(e.target.value)}
        >
          <option value="">– Tous les scénarios –</option>
          {uniqueScenarioIds.map(id => (
            <option key={id} value={id}>{id}</option>
          ))}
        </select>
      </div>

      {filteredUsers.map(user => {
        const fullName = `${user.first_name} ${user.last_name}`;
        const globalFeedback = feedbacks.find(f => f.session_id === user.id);
        const userScenarios = scenarioFeedbacks.filter(f => f.session_id === user.id);
        const displayedScenarios = scenarioFilter
          ? userScenarios.filter(f => f.scenario_id === scenarioFilter)
          : userScenarios;

        return (
          <div key={user.id} className="mb-10 p-4 border rounded bg-gray-50 shadow">
            <h2 className="text-xl font-semibold text-indigo-700 mb-2">👤 {fullName}</h2>

            <div className="ml-4">
              <h3 className="font-bold mb-1">💬 Feedback global :</h3>
              {globalFeedback ? (
                <ul className="list-disc ml-6 space-y-1">
                  <li><strong>👍 Aimé :</strong> {globalFeedback.forces}</li>
                  <li><strong>👎 Pas aimé :</strong> {globalFeedback.faults}</li>
                  <li><strong>🧩 Utilisation :</strong> {globalFeedback.would_use_score || '—'}</li>
                  <li><strong>🔮 Viabilité :</strong> {globalFeedback.threats}</li>
                  <li><strong>🧱 Manques :</strong> {globalFeedback.opportunities}</li>
                  <li><strong>💬 Autres :</strong> {globalFeedback.comments}</li>
                </ul>
              ) : <p className="italic text-gray-500">Pas de feedback global.</p>}

              <h3 className="font-bold mt-4 mb-1">🧪 Feedbacks scénarios :</h3>
              {displayedScenarios.length > 0 ? (
                <ul className="space-y-3">
                  {displayedScenarios.map((s, idx) => (
                    <li key={idx} className="border p-2 rounded bg-white">
                      <p><strong>🟢 Forces :</strong> {s.strengths}</p>
                      <p><strong>🔴 Faiblesses :</strong> {s.weaknesses}</p>
                      <p><strong>🟡 Opportunités :</strong> {s.opportunities}</p>
                      <p><strong>⚠️ Menaces :</strong> {s.threats}</p>
                      <p><strong>💬 Commentaires :</strong> {s.comments}</p>
                    </li>
                  ))}
                </ul>
              ) : <p className="italic text-gray-500">Aucun feedback scénario.</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
