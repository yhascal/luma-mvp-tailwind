import { useState } from 'react';
import { useRouter } from 'next/router';
import ConversationPlayer from '../components/ConversationPlayer';
import ProfileButton from '../components/ProfileButton';


export default function Q1ProfileB() {
  const router = useRouter();

  const steps = [
    { speaker: 'user', text: "Je commence toujours plein de trucs, et puis je lâche en cours de route." },
    { speaker: 'luma', text: "OK. Essayons de poser ça clairement.\nTu démarres facilement, mais à un moment, tu décroches.\nTu peux me donner un exemple concret où ça s’est produit récemment ?" },
    { speaker: 'user', text: "J’avais décidé de me remettre à courir. J’y suis allé cinq fois, puis j’ai arrêté." },
    { speaker: 'luma', text: "Et tu te disais quoi au début ? Pourquoi t'as commencé à ce moment-là et pas un autre ?" },
    { speaker: 'user', text: "Classique, ça faisait partie de mes bonnes résolutions de début d'année, j'avais envie de démarrer l'année sur de bonnes bases." },
    { speaker: 'luma', text: "Tu te souviens du moment où t’as commencé à lever le pied ?" },
    { speaker: 'user', text: "Ouais. Une semaine où j’étais un peu surchargé. J’ai raté un footing, puis deux, et j’ai laissé filer." },
    { speaker: 'luma', text: "OK. Donc au départ, c’était clair dans ta tête.\nMais t’avais rien de prévu si ça coinçait, si ?" },
    { speaker: 'user', text: "Non mais bon, je n’allais pas faire un planning Excel juste pour courir un peu." },
    { speaker: 'luma', text: "Je te rassure, je te parle pas de faire des tableaux Excel.\nMais y a peut-être un juste milieu entre l’envie brute… et l’organisation militaire.\nTu veux voir si on peut trouver un levier simple, qui t’aide à rester dedans sans que ce soit un poids ?" },
    { speaker: 'user', text: "Vas-y. Tant que c’est pas un système à rallonge." },
    { speaker: 'luma', text: "Parfait. Partons directement avec un cas réel.\nT’as un truc que tu voudrais lancer ou relancer en ce moment ?" },
    { speaker: 'user', text: "J’y pensais ce week-end : j’aimerais bien publier des mini analyses sur LinkedIn.\nDes trucs courts, percutants, sur des tendances que je repère dans mon taf.\nMais je sens que ça va faire comme d’hab : je vais en faire 2–3 puis je vais arrêter." },
    { speaker: 'luma', text: "Parfait. On garde ça.\nMais plutôt que de sortir une checklist, je te propose un truc plus vivant :\net si tu créais un point de retour automatique ?" },
    { speaker: 'user', text: "Un quoi ?" },
    { speaker: 'luma', text: "Un geste simple que tu fais si, au bout de 2 semaines, t’as rien publié.\nPas pour “te remotiver”, juste pour revenir dans le truc sans perdre de temps à cogiter." },
    { speaker: 'user', text: "Comme quoi ?" },
    { speaker: 'luma', text: "Exemples :\n– tu relis ton dernier post\n– tu relis ton dossier d’idées\n– ou tu jettes une phrase brute sur ce que t’as observé dans ton taf durant la semaine\nL’important, c’est que ce soit facile et que ça te remette dedans." },
    { speaker: 'user', text: "Le plus simple, c’est relire mon dernier post.\nMême si je publie rien, ça me remettra dans le bain." },
    { speaker: 'luma', text: "OK. Voilà ce que tu peux faire :\nTu bloques un rappel récurrent tous les 14 jours.\nPas pour t’obliger à te mettre sur ton bureau, juste : “Si rien posté depuis 2 semaines → relire mon dernier post.”\nTu peux rater un rappel, c’est pas un drame.\nMais si t’en rates deux d’affilée : là, t’as décroché.\nEt tu peux décider si tu relances… ou si tu assumes d’arrêter.\nEt si après 8 semaines, t’as tenu sans même penser au rappel, tu le vires.\nIl aura fait son taf." },
    { speaker: 'user', text: "Simple, ça se tente. Je vais le régler tout de suite, on verra ce que ça donne." },
    { speaker: 'luma', text: "🧠 T’avais pas besoin d’un cadre rigide mais sans point de retour, t’étais en roue libre.\n✅ Là, t’as posé une accroche claire, activable, désactivable.\n🎯 Juste assez pour pas laisser filer sans t’en rendre compte." }
  ];

  return (
    <div className="relative p-6">
      {/* Bouton noir permanent en haut à gauche */}
      <div className="absolute top-4 left-4">
        <button
          onClick={() => router.push('/start?question=q1')}
          className="px-4 py-2 rounded-2xl shadow bg-black text-white text-sm hover:bg-gray-800 transition"
        >
          ↩ Retour au choix des profils
        </button>
      </div>

      {/* Bouton profil centré */}
      <div className="text-center mb-4">
        <ProfileButton profile="b" />
      </div>

<ConversationPlayer steps={steps} />
    </div>
  );
}
