import { useState } from 'react';
import { useRouter } from 'next/router';
import ConversationPlayer from '../components/ConversationPlayer';
import ProfileButton from '../components/ProfileButton';

export default function Q4ProfileB() {
  const router = useRouter();

  const steps = [
    { speaker: 'user', text: "J’ai un peu d’épargne que je voudrais investir, mais je ne sais pas par où commencer." },
    { speaker: 'luma', text: "Tu sais déjà un peu ce qui existe ? Ou c’est le flou total ?" },
    { speaker: 'user', text: "Je connais les grands noms : assurance-vie, PEA, actions… Mais je ne sais pas trop qui est quoi. Ni comment on s’y met." },
    { speaker: 'luma', text: "OK. On remet de l’ordre.\nTrois critères à arbitrer :\n→ Rendement : ce que ça peut rapporter\n→ Risque : ce que tu peux perdre\n→ Liquidité : à quelle vitesse tu peux récupérer l’argent\nTu peux en optimiser deux, jamais les trois." },
    { speaker: 'user', text: "Et du coup, chaque produit a une combinaison différente ?" },
    { speaker: 'luma', text: "Exact.\nPar exemple :\n– Livret A → liquide et sûr, mais rendement faible\n– Actions → rendement élevé potentiel, mais très volatil\n– Assurance-vie → Tu choisis ce que tu mets dedans (sûr ou risqué)." },
    { speaker: 'user', text: "OK. Et justement, j’aimerais bien faire un peu des deux. Genre 50 % safe, 50 % bien risqué. Je suis joueur." },
    { speaker: 'luma', text: "Intéressant. Il y a de l’idée de la diversification qui est essentielle.\nMaintenant, tu dis ‘joueur’. Mais perdre 3 000 € en 48h, ce n’est pas jouer, c’est encaisser. T’es prêt à te réveiller un matin et voir que tes actions ont perdu 50% pendant la nuit ?\n→ “Risqué” ne veut pas dire “jackpot”.\n→ Ça veut dire instable. Il faut pouvoir encaisser sans paniquer." },
    { speaker: 'user', text: "Disons que je pense pouvoir. Mais c’est vrai que je l’ai jamais vécu donc je peux pas en être sûr." },
    { speaker: 'luma', text: "L’instinct ne suffit pas — surtout sans recul et sur un sujet aussi important.\nUne alternative possible : 25 % offensif, 25 % modéré → ça te protège pas de tout, mais ça découpe le risque." },
    { speaker: 'user', text: "Pourquoi pas. Faut que j’y réfléchisse. Mais déjà je répartirais tout ça comment concrètement ?" },
    { speaker: 'luma', text: "On découpe en trois zones :\n\n🔹 Zone 1 — Tranquille (risque très faible)\nObjectif : argent dispo, capital garanti\n– Livret A / LDDS → garanti par l’État, dispo à tout moment\n– Fonds euro (via assurance-vie) → stable, ≈ 2,5 %, sans perte possible\n\n🔸 Zone 2 — Raisonnable (risque modéré)\nObjectif : rendement supérieur sans grosse exposition\n– Fonds équilibrés : mix actions/obligations\n– Gestion pilotée (assurance-vie) : tu choisis le risque, un pro gère\n\n🔺 Zone 3 — Musclée (risque élevé)\nObjectif : rendement long terme, forte volatilité\n– ETF (MSCI World, S&P 500) → paniers diversifiés\n– ETF thématiques → tech, énergie, émergents\n– Actions directes → si tu veux choisir toi-même" },
    { speaker: 'user', text: "Ouais super mais j’ai l’impression qu’il faut ouvrir quinze comptes pour tout faire." },
    { speaker: 'luma', text: "Non. Deux suffisent :\n→ Une assurance-vie bien conçue → elle regroupe fonds euro, gestion pilotée, ETF\n→ Un livret bancaire pour la part ultra-liquide\nTout tient là-dedans." },
    { speaker: 'user', text: "Ok et au final tu me conseilles de faire quoi ?" },
    { speaker: 'luma', text: "Avant de parler chiffres, on va faire un mini crash test.\n→ Ton ETF tech fait +30 % en un mois. Tu fais quoi ?\n→ Même chose si tu vois -30 %.\n→ Tolérer, c’est une chose. Tenir sans tout saboter quand ça bouge, c’en est une autre. C’est ça qu’on teste." },
    { speaker: 'user', text: "Je me vois pas rester passif mais c’est vrai que là tout de suite, je sais pas." },
    { speaker: 'luma', text: "Parfait. Construis un plan que tu peux suivre quel que soit le scénario, pour ne pas avoir à décider quand t’as plus la tête froide.\n\nRépartition type (à adapter) :\n– 20 % sur ton livret A → dispo, pas de risque, parfait pour les imprévus\n– 30 % en fonds euro ou gestion pilotée prudente → fiable\n– 25 % en ETF “monde” ou “Europe” → tu suis le marché\n– 25 % en ETF offensifs → thématiques tech, énergie, émergents\n→ Plus de contrôle ? Gestion libre. Envie de dormir tranquille ? Fonds euro." },
    { speaker: 'user', text: "Okok. Je vais commencer par regarder ce que propose mon assurance-vie." },
    { speaker: 'luma', text: "Lis ton contrat. Si tu piges pas, tu reviens.\nMais surtout : si tu fais un plan, note à l’avance ce que tu feras s’il se casse la gueule.\n→ Parce que c’est là qu’on voit si c’est un plan… ou juste un espoir bien emballé." },
    { speaker: 'user', text: "Ok. Je fais le point et je reviens." }
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
        <ProfileButton profile="b" />
      </div>
<ConversationPlayer steps={steps} />
    </div>
  );
}
