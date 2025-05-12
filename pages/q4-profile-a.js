import { useState } from 'react';
import { useRouter } from 'next/router';
import ConversationPlayer from '../components/ConversationPlayer';
import ProfileButton from '../components/ProfileButton';

export default function Q4ProfileA() {
  const router = useRouter();

  const steps = [
    { speaker: 'user', text: "J’ai un peu d’épargne que je voudrais investir, mais je ne sais pas par où commencer." },
    { speaker: 'luma', text: "OK. On va éviter les conseils tout faits. Dis-moi plutôt : tu parles de quel montant, là ?" },
    { speaker: 'user', text: "À peu près 3 000 €. C’est de l’épargne que j’ai réussi à mettre de côté ces derniers mois." },
    { speaker: 'luma', text: "Et tu veux investir dans quel but ?\nUn objectif précis ou c’est juste pour que ça rapporte plus qu’un livret A ?" },
    { speaker: 'user', text: "Pas d’objectif ultra défini. Disons que j’aimerais bien que ça me serve à moyen terme, si j’ai un projet. Mais je veux pas y toucher avant au moins 2–3 ans." },
    { speaker: 'luma', text: "OK donc horizon 2–3 ans, pas besoin de liquidité immédiate, et une envie de rendement un peu meilleur.\nTu sais si tu veux plutôt comprendre ce que tu fais, ou tu préfères déléguer ?" },
    { speaker: 'user', text: "Idéalement j’aimerais bien comprendre un peu. Mais j’ai pas envie de me transformer en trader amateur non plus." },
    { speaker: 'luma', text: "Parfait. On va chercher un équilibre. Est-ce que t’as déjà un compte-titres ou un PEA ?" },
    { speaker: 'user', text: "Non, rien du tout. Juste un livret A et un compte courant." },
    { speaker: 'luma', text: "Dans ce cas, première étape possible : ouvrir un PEA ou un compte-titres, même sans investir tout de suite.\nC’est comme poser une première pierre. Et t’as pas besoin de 10 000 € pour ça." },
    { speaker: 'user', text: "OK. Et après, je mets 3 000 € dedans d’un coup ?" },
    { speaker: 'luma', text: "Pas forcément. Tu peux fractionner.\nExemple : investir 500 € chaque mois pendant 6 mois, pour lisser les points d’entrée.\nEt entre-temps, tu t’informes, tu choisis des supports simples : ETF par exemple." },
    { speaker: 'user', text: "Oui j’ai déjà entendu parler des ETF, mais je vois pas trop ce que c’est." },
    { speaker: 'luma', text: "C’est des paniers d’actions déjà diversifiés.\nTu mises pas sur une seule boîte, mais sur un indice entier : genre le CAC 40, ou le MSCI World.\nC’est moins risqué que d’acheter une action au hasard, et ça demande moins de suivi." },
    { speaker: 'user', text: "OK. Et si je veux pas ouvrir de compte maintenant ?" },
    { speaker: 'luma', text: "Tu peux commencer par te créer un espace fictif :\n– choisir une plateforme (juste pour voir)\n– noter les ETF qui t’intéressent\n– faire semblant d’investir, pour voir comment ça évolue\nTu transformes ta curiosité en jeu, sans miser un centime.\nEt quand t’es prêt, t’as déjà une méthode." },
    { speaker: 'user', text: "OK ça me parle. Ça me permet de tester sans pression." },
    { speaker: 'luma', text: "🎯 Tu n’avais pas besoin d’un conseil magique, mais d’un premier mouvement crédible.\n🧩 Te créer un espace d’exploration, même fictif, c’est déjà investir : dans ta clarté, et dans ta confiance." }
  ];
  return (
    <div className="relative p-6">
      {/* Bouton noir permanent en haut à gauche */}
      <div className="absolute top-4 left-4">
        <button
          onClick={() => router.push('/start?question=q4')}
          className="px-4 py-2 rounded-2xl shadow bg-black text-white text-sm hover:bg-gray-800 transition"
        >
          ↩ Retour au choix des profils
        </button>
      </div>

      {/* Bouton profil centré */}
      <div className="text-center mb-4">
        <ProfileButton profile="a" />
      </div>
<ConversationPlayer steps={steps} />
    </div>
  );
}
