// tout en haut
"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { supabase } from '../lib/supabaseClient';
import { v4 as uuidv4 } from 'uuid';

export default function Register() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    question1: '',
    question2: '',
    question3: [],
    question4: '',
    question5: '',
    question6: []
  });
  const [submitted, setSubmitted] = useState(false);

  const singleChoice = key =>
    ['question1', 'question2', 'question4', 'question5'].includes(key);

  const handleChange = key => e => {
    const value = e.target.value;
    if (singleChoice(key)) {
      setFormData({
        ...formData,
        [key]: formData[key] === value ? '' : value
      });
    } else {
      const arr = formData[key];
      setFormData({
        ...formData,
        [key]: arr.includes(value)
          ? arr.filter(v => v !== value)
          : [...arr, value]
      });
    }
  };

 const handleSubmit = async e => {
  e.preventDefault();

  const sessionId = uuidv4();

  const { error } = await supabase.from("inscriptions").insert([
    {
      id: sessionId,
      first_name: formData.firstName,
      last_name: formData.lastName
    }
  ]);

  if (error) {
    console.error("Erreur Supabase inscription :", error);
    return;
  }

  try {
    localStorage.setItem("lumaSessionId", sessionId);
    localStorage.setItem("lumaRegistered", "true");
    console.log("🎯 UUID enregistré :", sessionId);
  } catch (e) {
    console.error("❌ Erreur localStorage :", e);
  }

  setSubmitted(true);
};

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-green-50 p-6">
        <h1 className="text-3xl font-bold text-green-800 mb-4">
          🙏 Merci pour ta participation !
        </h1>
        <p className="text-center text-green-700 mb-6">
          Ton inscription est simulée. Tu peux maintenant lancer le test.
        </p>
        <Link href="/start">
          <button className="px-6 py-3 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition">
            Lancer le test
          </button>
        </Link>
      </div>
    );
  }
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-xl mt-10">
      <h1 className="text-4xl font-extrabold text-center mb-4 text-indigo-600">
        Simulation d’inscription
      </h1>
      <p className="text-center text-gray-600 mb-6">
        Ce formulaire est une <strong>simulation</strong>. Seuls ton prénom et nom 
        seront pris en compte pour trier les feedbacks.
      </p>
      <div className="mb-6 p-4 bg-indigo-50 rounded-lg">
        <strong className="text-indigo-700">
          ⚠️ Pour rappel, tu liras ensuite des scénarios avec 
          <span className="text-indigo-900"> 3 profils prédéterminés </span>
          basés sur une combinaison de ces 6 réponses, que tu découvriras plus loin.
        </strong>
      </div>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Prénom & Nom */}
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Prénom"
            value={formData.firstName}
            onChange={e =>
              setFormData({ ...formData, firstName: e.target.value })
            }
            required
            className="p-3 border rounded shadow-sm"
          />
          <input
            type="text"
            placeholder="Nom"
            value={formData.lastName}
            onChange={e =>
              setFormData({ ...formData, lastName: e.target.value })
            }
            required
            className="p-3 border rounded shadow-sm"
          />
        </div>
        {/* Question 1 */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">
            🗨️ 1. Quel ton tu préfères qu’on utilise ensemble ?
          </h3>
          {[
            "Franc et direct",
            "Doux et rassurant",
            "Coach énergique",
            "Complice détendu",
            "Curieux et inspirant",
            "Je veux tester plusieurs styles"
          ].map(option => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={option}
                checked={formData.question1 === option}
                onChange={handleChange("question1")}
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>

        {/* Question 2 */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">
            ✊ 2. À quel point tu veux que je te challenge ?
          </h3>
          {[
            "Pas trop, j’ai besoin d’y aller en douceur",
            "Tu peux me pousser si c’est fait avec tact",
            "Secoue-moi, je veux de la lucidité"
          ].map(option => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={option}
                checked={formData.question2 === option}
                onChange={handleChange("question2")}
                className="form-checkbox h-5 w-5 text-red-600"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>

        {/* Question 3 */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">
            🧠 3. Comment tu captes mieux une idée floue ?
            <span className="text-sm text-gray-500">(max 2 choix)</span>
          </h3>
          {[
            "En parlant ou en écrivant",
            "En posant des questions",
            "En analysant logiquement",
            "En partant d’un exemple concret",
            "En visualisant une scène ou une image",
            "En ressentant d’abord ce que ça me fait"
          ].map(option => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={option}
                checked={formData.question3.includes(option)}
                onChange={handleChange("question3")}
                className="form-checkbox h-5 w-5 text-green-600"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {/* Question 4 */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">
            📋 4. Quel format de réponse te convient le mieux ?
          </h3>
          {[
            "Court et direct",
            "Détail + synthèse",
            "Dense et structuré",
            "Ça dépend → adapte-toi"
          ].map(option => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={option}
                checked={formData.question4 === option}
                onChange={handleChange("question4")}
                className="form-checkbox h-5 w-5 text-yellow-600"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>

        {/* Question 5 */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">
            🚫 5. Le type de ton ou d’aide que tu ne supportes pas ?
          </h3>
          {[
            "Le ton moralisateur ou donneur de leçons",
            "Les réponses molles qui ne prennent pas position",
            "Les tournures vagues et abstraites",
            "Les phrases toutes faites / clichés de développement perso",
            "Les gens qui te secouent sans comprendre où t’en es"
          ].map(option => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={option}
                checked={formData.question5 === option}
                onChange={handleChange("question5")}
                className="form-checkbox h-5 w-5 text-purple-600"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>

        {/* Question 6 */}
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-gray-800">
            ⚠️ 6. Ce qu’il faut absolument éviter de faire avec toi ?
          </h3>
          {[
            "M’interrompre trop vite",
            "Me poser 15 questions à la suite",
            "Me balancer des solutions sans comprendre le problème",
            "Trop simplifier ou me parler comme à un enfant",
            "Me forcer à mettre des mots quand je n’y arrive pas"
          ].map(option => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="checkbox"
                value={option}
                checked={formData.question6.includes(option)}
                onChange={handleChange("question6")}
                className="form-checkbox h-5 w-5 text-pink-600"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
        {/* Bouton de soumission */}
        <div className="text-center mt-6">
          <button
            type="submit"
            className="px-8 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition"
          >
            Commencer le test
          </button>
        </div>
      </form>
    </div>
  );
}
