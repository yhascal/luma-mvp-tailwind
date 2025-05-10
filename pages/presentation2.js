// pages/presentation2.js
"use client";

import Link from "next/link";

export default function Presentation2() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-[1.08rem] leading-relaxed space-y-6 text-gray-900">
       <h1 className="text-3xl font-bold mb-2">🎯 Qu'est-ce que Luma ?</h1>
      <p>
        <strong>Luma</strong> est un outil conversationnel, disponible sur mobile et en ligne, qui fonctionne comme un <em>moteur adaptatif</em> : tu lui parles, elle t’aide à clarifier, comprendre, structurer ou explorer, en s’ajustant à ta manière de penser.
      </p>
      <p>
        Pas de réponses génériques, pas de méthode imposée. Son moteur s’adapte à toi en temps réel : <strong>ton rythme, ton style, ton besoin</strong>… que ce soit pour <em>avancer sur un projet</em>, <em>comprendre une notion</em> ou <em>faire le tri dans une décision</em>.
      </p>
      <h2 className="text-2xl font-semibold mt-10">🌱 Pourquoi Luma est née</h2>
      <p>
        <strong>Luma est née d’un constat simple :</strong> on ne pense pas tous pareil, alors pourquoi chercher à nous accompagner tous de la même façon ? Certains ont besoin d’exemples concrets, d’autres veulent qu’on les challenge. Certains veulent qu’on les guide pas à pas, d’autres qu’on pointe juste là où ça coince.
      </p>
      <p>
        Et pourtant, <strong>la majorité des outils actuels</strong> restent focalisés sur une seule chose : fournir une réponse, vite et bien. Pas comprendre comment tu fonctionnes, ni t’aider à apprendre selon ta propre logique.
      </p>
      <p>
        Peu importe le sujet : <em>un choix pro, une notion floue, y voir plus clair dans une relation ou progresser sur un projet…</em> il manque souvent un espace pour réfléchir, apprendre, tester, <strong>sans pression, sans jugement</strong>, et surtout avec <strong>une pédagogie qui respecte ta façon de raisonner</strong>.
      </p>
      <p>
        On a vu des milliers de gens détourner ChatGPT pour ça. Mais ChatGPT n’a pas été conçu pour accompagner une pensée humaine, ni pour s’adapter finement à un profil cognitif.
      </p>
      <p><strong>Luma, si.</strong></p>
      <p>
        Elle ne cherche pas à te donner la bonne réponse. Elle t’aide à formuler la tienne, <em>en partant de toi</em>. <strong>Apprendre, comprendre, décider</strong> : mais <em>selon ton propre rythme, ta structure mentale, et ce qui marche pour toi</em>.
      </p>
<h2 className="text-2xl font-semibold mt-10">🧠 Ce qui fait l’essence de Luma</h2>
<ul className="list-disc pl-6 space-y-4">
  <li>
    <strong>Jamais de réponse précipitée :</strong><br />
    Luma commence toujours par comprendre finement ton contexte, ton besoin, et ton style de réflexion, en posant des questions ciblées et progressives.<br />
    Elle ne donnera jamais de réponse sans certitudes.
  </li>
  <li>
    <strong>Adaptation dès l'inscription :</strong><br />
    Lors de la création de ton compte, un questionnaire de calibration rapide (6 questions) permet à Luma de s’adapter dès le premier échange à ton profil cognitif et émotionnel.
  </li>
  <li>
    <strong>Un style d’accompagnement personnalisé :</strong><br />
    Tu peux choisir entre plusieurs profils d’accompagnement :
    <ul className="list-disc pl-6 mt-2 space-y-1">
      <li><strong>Bienveillant et doux</strong> : avancer sans pression.</li>
      <li><strong>Structuré et analytique</strong> : aller droit au but, avec confrontation si besoin.</li>
      <li><strong>Complice et stimulant</strong> : relances créatives et élan sans rigidité.</li>
    </ul>
  </li>
  <li>
    <strong>Un calibrage dynamique et évolutif :</strong><br />
    À chaque échange, Luma apprend implicitement :
    <ul className="list-disc pl-6 mt-2 space-y-1">
      <li>Tes préférences dans le dialogue (longueur, style, rythme…)</li>
      <li>Les types de reformulations ou de questions qui t’aident vraiment</li>
      <li>Elle ajuste ses stratégies en fonction de ce qui fonctionne réellement pour toi</li>
    </ul>
  </li>
  <li>
    <strong>Feedback implicite et explicite intégré :</strong><br />
    Sans te surcharger, Luma utilise :
    <ul className="list-disc pl-6 mt-2 space-y-1">
      <li>Tes réactions spontanées (temps de réponse, acceptation/rejet de propositions…)</li>
      <li>Tes feedbacks légers (ex : "utile/pas utile") pour affiner son comportement</li>
    </ul>
  </li>
</ul>

<p className="mt-4">
  <em>Autant d’éléments qui permettent à Luma de s’adapter encore un peu mieux à toi à chaque échange.</em>
</p>

      {/* 5) Suite et fin de la présentation (tableau, puces, etc.) */}


      <h2 className="text-2xl font-semibold mt-10">🌍 Luma vs Chat GPT : Les avantages Luma</h2>
<p className="mt-10 text-lg text-gray-800 font-medium">
 Luma n’est pas une IA de plus. Elle ne produit pas des réponses, elle construit un raisonnement avec toi. Elle ne t’impose pas un format, elle adapte le sien. Et surtout, elle ne cherche pas à valider ce que tu dis. Si c’est flou, elle creuse. Si c’est faux, elle te le montre.
</p>

      <div className="overflow-x-auto mt-6">
        <table className="w-full border border-black text-sm text-left">
          <thead className="bg-gray-100">
            <tr>
              <th className="border border-black p-2 font-semibold">Luma</th>
              <th className="border border-black p-2 font-semibold">Chat GPT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-black p-2">Comprend d'abord ton contexte avant toute réponse</td>
              <td className="border border-black p-2">Répond immédiatement sans chercher à comprendre ton besoin profond</td>
            </tr>
            <tr>
              <td className="border border-black p-2">S'adapte activement à ton style de pensée</td>
              <td className="border border-black p-2">Même type de réponse pour tous</td>
            </tr>
            <tr>
              <td className="border border-black p-2">Valorise ton autonomie de réflexion</td>
              <td className="border border-black p-2">Fournit des réponses prémâchées sans t’aider à comprendre</td>
            </tr>
            <tr>
              <td className="border border-black p-2">Utilise feedbacks implicites + explicites pour progresser à chaque échange</td>
              <td className="border border-black p-2">Stagne dans une interaction figée et standardisée</td>
            </tr>
            <tr>
              <td className="border border-black p-2">Offre des snapshots pour t'aider à voir tes propres schémas</td>
              <td className="border border-black p-2">Aucun retour structuré sur ton propre fonctionnement</td>
            </tr>
            <tr>
              <td className="border border-black p-2">Propose un mode de confrontation intelligent</td>
              <td className="border border-black p-2">Jamais de tension constructive proposée</td>
            </tr>
            <tr>
              <td className="border border-black p-2">Garantit une confidentialité absolue, jusqu’au niveau technique</td>
              <td className="border border-black p-2">Données potentiellement réutilisables ou stockées sans contrôle utilisateur</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        Luma n’a pas vocation à remplacer ChatGPT. Cet outil est très performant pour répondre à des questions factuelles ou techniques qui ne nécessitent pas d’adaptation.
      </p>
      <p>
        Mais pour réfléchir, formuler un choix, ou clarifier une situation personnelle, beaucoup s’en servent aujourd’hui faute d’alternative spécialisée. C’est là que Luma intervient.
      </p>
      <h2 className="text-2xl font-semibold mt-10">🚀 Ce que vous testez aujourd’hui</h2>
      <ul className="list-disc pl-6 space-y-2 mt-2">
<>
  <p>La version que vous allez tester est une <strong>version ultra simplifiée</strong> de Luma.</p>
  <p>Elle vous permettra :</p>
  <ul style={{ listStyle: "none", paddingLeft: 0 }}>
    <li>→ D'expérimenter <strong>deux types de réflexions</strong> (une personnelle, une concrète).</li>
    <li>→ De ressentir <strong>comment Luma ajuste sa manière de dialoguer selon votre profil</strong>.</li>
    <li>→ De percevoir <strong>la différence</strong> entre un échange classique et un accompagnement adaptatif.</li>
  </ul>
</>
      </ul>

      <p className="italic text-sm mt-2">
        ⚠️ Le contenu et le choix des scénarios n’ont pas d’importance ; ils ont uniquement été choisis pour mettre en avant la capacité de Luma à répondre à une problématique posée et s’adapter à l’utilisateur.
      </p>

      <p className="mt-4 font-semibold">
        <span className="text-black font-bold">L’objectif est simple :</span><br />
        <span className="text-red-600">
          Vérifier si cette approche vous donne envie de voir naître Luma dans sa version complète.
        </span>
      </p>

  <h2 className="text-2xl font-semibold mt-10">✨ En une phrase :</h2>
      <p>
        <strong>Luma n’est pas là pour t’apporter une solution rapide.</strong><br />
        Elle est là pour t’aider à formuler la réponse qui te correspond vraiment.
      </p>

      <h2 className="text-2xl font-semibold mt-10">🛠️ Et ce n’est qu’un début…</h2>
      <ul className="list-disc pl-6 space-y-4 mt-4">
        <li>
          <strong>🔄 Réponses sur-mesure</strong><br />
          Selon ton profil, Luma peut répondre par :<br />
          📝 Texte<br />
          🧩 Schéma<br />
          🖼️ Image<br />
          🗂️ Structure visuelle
        </li>
        <li>
          <strong>🪞 Miroirs cognitifs</strong><br />
          Des mini-synthèses intelligentes pour voir émerger :<br />
          🔁 Tes schémas de pensée<br />
          🧱 Tes blocages récurrents<br />
          📈 Ton évolution implicite
        </li>
        <li>
          <strong>🥊 Mode Challenge activable</strong><br />
          Tu veux qu’on te pousse ? Active le mode “tension créative” :<br />
          🔎 Confrontation<br />
          💬 Friction constructive<br />
          🧭 Lucidité renforcée
        </li>
        <li>
          <strong>🫥 Mode Éphémère</strong><br />
          🗑️ Aucune trace sauvegardée<br />
          🛟 Un espace libre, 100 % temporaire
        </li>
        <li>
          <strong>🔒 Confidentialité radicale</strong><br />
          🔐 Données chiffrées de bout en bout<br />
          🚫 Même les créateurs de Luma ne peuvent y accéder
        </li>
        <li>
          <strong>🧒 Mode jeune utilisateur</strong><br />
          🛡️ Filtre éthique intégré pour certains contenus<br />
          👨‍👩‍👧 Contrôle parental activable
        </li>
      </ul>
      <div className="mt-10 text-center">
        <Link href="/start">
          <button className="px-6 py-3 bg-black text-white rounded-2xl shadow text-lg hover:bg-gray-800 transition">
            Retour vers le choix des questions
          </button>
        </Link>
      </div>
    </div>
  );
}
