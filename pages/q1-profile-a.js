import { useState } from 'react';
import { useRouter } from 'next/router';
import ConversationPlayer from '../components/ConversationPlayer';
import ProfileButton from '../components/ProfileButton';

export default function Q1ProfileA() {
  const router = useRouter();

  const steps = [
    { speaker: 'user', text: "Je commence toujours plein de trucs, et puis je lâche en cours de route." },
    { speaker: 'luma', text: "C’est quelque chose que beaucoup vivent mais rarement avec autant de franchise. Tu veux qu’on prenne un moment pour mieux comprendre ce qui se passe en toi quand ça arrive ?" },
    { speaker: 'user', text: "Oui. J’en ai un peu marre de commencer des choses et de ne jamais aller au bout." },
    { speaker: 'luma', text: "Ok. Plutôt que d’en parler “en général”, est-ce que tu peux repenser à la dernière fois que ça t’est arrivé ? Un projet, une envie, même un petit truc perso." },
    { speaker: 'user', text: "Je m’étais dit que j’allais reprendre le dessin. J’ai acheté un carnet, j’ai dessiné deux fois… et puis plus rien." },
    { speaker: 'luma', text: "Tu te souviens de ce que tu ressentais juste avant d’arrêter ? Pas besoin d’un long récit, juste ce qui te traversait dans ces moments-là." },
    { speaker: 'user', text: "Je crois que je me disait que ça ne servait à rien. Que j’allais jamais être bon, donc autant arrêter là." },
    { speaker: 'luma', text: "Donc ce n’était pas juste un oubli. C’était un moment où quelque chose en toi a changé, comme si l’élan avait perdu sa raison d’être. Est-ce que ça te parle ?" },
    { speaker: 'user', text: "Oui… je crois que petit à petit je voyais de moins en moins d'intérêt à continuer." },
    { speaker: 'luma', text: "Ce genre de décrochage, tu le rencontres ailleurs dans ta vie ? Pas forcément sur des projets… mais dans d’autres moments de ta vie où tu avances sans trop savoir pourquoi ?" },
    { speaker: 'user', text: "Oui, ça m’arrive aussi dans mon boulot, ou parfois dans des relations. Quand je sens que je fais les choses par habitude… alors qu’en moi, je sens bien de ce n'est plus fluide. Mais je n’ose pas toujours écouter ce blocage qui s'installe." },
    { speaker: 'luma', text: "Tu as une vraie finesse pour sentir quand un élan n’est plus juste. Mais comme ça reste souvent en arrière-plan, tu le vis comme un abandon alors que c’est peut-être un message intérieur." },
    { speaker: 'luma', text: "Si tu veux, on peut essayer un petit exercice : → Repense à deux ou trois moments où tu t’es arrêté en cours de route. Et pose-toi cette question : Qu’est-ce qui manquait pour que tu aies envie de continuer ? Un mot. Une sensation. Un besoin non nourri." },
    { speaker: 'user', text: "Je dirais : l’envie… une forme de fluidité… et le sentiment que ça avait du sens." },
    { speaker: 'luma', text: "Merci. Tu viens peut-être de formuler ta boussole intérieure. Pas une règle. Juste trois choses à vérifier avant de t’engager plus loin :\n• Est-ce que j’en ai vraiment envie, pas juste “il faudrait” ?\n• Est-ce que je me sens porté par ce que je fais ou est-ce que je dois me pousser à chaque fois ?\n• Est-ce que ça a du sens pour moi, ici et maintenant ?\nSi deux de ces trois manquent… Alors ce n’est pas une démission. C’est un réflexe de préservation." },
    { speaker: 'user', text: "Oui… il y a peut-être de ça. Je me rends compte que je me parle souvent durement… alors qu’au fond, je ressens juste que quelque chose ne colle plus." },
    { speaker: 'luma', text: "Et si on l’appliquait au dessin, justement ? Juste pour voir ce que ta boussole dit, maintenant que tu la tiens." },
    { speaker: 'user', text: "OK. Alors… envie : oui, au début. Mais je crois que je courais après une sensation un peu floue. Fluidité : non, j’étais tendu à chaque fois. Sens : difficile à dire. J’avais l’impression qu’il fallait que ça “serve” à quelque chose." },
    { speaker: 'luma', text: "Tu viens de poser un vrai point d’appui. Ce projet-là ne t’a pas échappé par faiblesse. Tu as simplement senti, sans forcément le formuler, qu’il n’était pas nourrissant. Et c’est déjà beaucoup de pouvoir reconnaître ça, même à demi-mot." },
    { speaker: 'user', text: "Oui… Je crois que ça pourrait m’aider à voir les choses un peu différemment." },
    { speaker: 'luma', text: "🎯 Tu ne manques pas d’endurance ; tu captes quand une direction ne résonne plus.\n🧭 Ta boussole intérieure commence à se préciser : envie, fluidité, sens.\n🌱 Et tu viens d’ouvrir un espace pour entendre ce que tu ressens, sans t’y opposer tout de suite." },
  ];

  return (
    <div className="relative p-6">
      <div className="absolute top-4 left-4">
        <button
          onClick={() => router.push('/start?question=q1')}
          className="px-4 py-2 rounded-2xl shadow bg-black text-white text-sm hover:bg-gray-800 transition"
        >
          ↩ Retour au choix des profils
        </button>
      </div>

      <div className="text-center mb-4">
        <ProfileButton profile="a" />
      </div>

      <ConversationPlayer steps={steps} />
    </div>
  );
}
