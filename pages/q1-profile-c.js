import { useState } from 'react';
import { useRouter } from 'next/router';
import ConversationPlayer from '../components/ConversationPlayer';
import ProfileButton from '../components/ProfileButton';

export default function Q1ProfileC() {
  const router = useRouter();

  const steps = [
    { speaker: 'user', text: "Je commence toujours plein de trucs, et puis je lâche en cours de route." },
    { speaker: 'luma', text: "Tu veux qu’on parte d’un exemple ? Un truc tout bête que t’as commencé… sans donner suite." },
    { speaker: 'user', text: "Ouais. J’ai relancé Duolingo y a quelques jours. J’ai fait deux sessions d’espagnol. Puis plus rien." },
    { speaker: 'luma', text: "Tu te souviens pourquoi t’as eu envie de t’y remettre ?" },
    { speaker: 'user', text: "Je crois que je m’ennuyais. Ou que je voulais me sentir un peu productif. Je sais plus trop." },
    { speaker: 'luma', text: "Et dans ta tête, c’était un vrai redémarrage ? Ou juste un “je clique pour voir” ?" },
    { speaker: 'user', text: "Franchement… un peu entre les deux. J’espérais que ça accroche. Que l’envie revienne toute seule. Mais ça n’a pas vraiment pris. Et j’ai fini par passer à autre chose, sans trop m’en rendre compte." },
    { speaker: 'luma', text: "Et tu t’en veux un peu, ou tu constates juste ?" },
    { speaker: 'user', text: "Non mais c’est pas une question de ça. C’est même pas une histoire de Duolingo. C’est genre… toujours pareil. Je lance des trucs, et même quand ça part pas trop mal, je décroche, sans trop pouvoir l’expliquer. Et après je me dis “faut que je m’y remette”. Et je recommence, et… re-belote." },
    { speaker: 'luma', text: "Donc t’as l’impression de tourner en rond… mais t’arrives pas à dire si c’est toi qui lâches ou si c’est ton intérêt pour la chose qui s’éteint tout seul ?" },
    { speaker: 'user', text: "Voilà. Et là, en fait, ça me saoule d’en parler. Parce qu’à force, j’ai même plus envie de comprendre. J’ai l’impression d’être un sketch." },
    { speaker: 'luma', text: "Ok. On peut lever le pied un instant si tu veux. Mais laisse-moi juste te dire ça : ça ne ressemble pas à un sketch, vu d’ici. Plutôt à quelqu’un qui a essayé assez de fois pour avoir le droit d’être fatigué. Mais pas désintéressé. La preuve : t’es encore là. Alors si creuser t’épuise, on peut simplement pivoter. Pas pour comprendre. Juste pour regarder ce qui se passe au tout début, quand tu relances un truc." },
    { speaker: 'user', text: "Et tu veux que je regarde quoi ?" },
    { speaker: 'luma', text: "Ce que t’espères ressentir, dans les trois premières minutes. Pas sur le long terme, pas le lendemain, juste sur le moment. T’espères quoi au final ?" },
    { speaker: 'user', text: "Je crois que j’espère… me surprendre. Genre me dire “tiens c’est fluide, je le fais sans effort”. J’ai pas envie de me battre avec moi-même." },
    { speaker: 'luma', text: "Donc quand tu t’y remets, t’attends pas juste de progresser. T’espères ressentir un déclic. Un truc qui te donne envie de continuer, sans avoir à te forcer." },
    { speaker: 'user', text: "Oui. Et quand ça répond pas, j’ai pas envie d’insister. Mais j’ai du mal à faire le tri. Y a des trucs que je laisse tomber, et je sais pas si j’ai bien fait. Et d’autres que je pousse, et je me dis après “pourquoi j’ai insisté ?”" },
    { speaker: 'luma', text: "Alors voilà un truc que tu peux tester. Quand tu sens l’envie de relancer un truc ; appli, carnet, mail, peu importe : → tu ne fonces pas. → tu t’arrêtes une minute, et tu te demandes : “Qu’est-ce que je veux ressentir dans les 3 premières minutes ?” Puis : “Est-ce que ce que je m’apprête à faire peut vraiment m’offrir ça ?”" },
    { speaker: 'user', text: "Et si la réponse est non ?" },
    { speaker: 'luma', text: "Tu le lances pas “au cas où”. Soit tu ajustes pour que ça te parle vraiment, soit tu laisses passer. Mais au moins, t’as choisi, tu ne l’as pas subi." },
    { speaker: 'user', text: "Pourquoi pas, ça se tente." },
    { speaker: 'luma', text: "🔁 Tu ne recommences pas pour recommencer. Tu cherches à ressentir quelque chose de juste, et tu juges tout sur ce critère — souvent sans t’en rendre compte.\n🧭 Maintenant, t’as un filtre clair : “Qu’est-ce que j’espère ressentir, là maintenant — et est-ce que ce que je m’apprête à faire peut me le donner ?” Une question simple. Pour ne pas redémarrer dans le flou." }
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
        <ProfileButton profile="c" />
      </div>
<ConversationPlayer steps={steps} />
    </div>
  );
}
