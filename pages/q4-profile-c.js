import { useState } from 'react';
import { useRouter } from 'next/router';
import ConversationPlayer from '../components/ConversationPlayer';
import ProfileButton from '../components/ProfileButton';

export default function Q4ProfileC() {
  const router = useRouter();

  const steps = [
    { speaker: 'user', text: "J’ai un peu d’épargne que je voudrais investir, mais je ne sais pas par où commencer." },
    { speaker: 'luma', text: "C’est une bonne question. Avant de parler de placements, je préfère comprendre d’abord tes objectifs. As-tu une idée de ce que tu voudras faire avec cette épargne ?" },
    { speaker: 'user', text: "J’aimerais bien acheter une maison dans quelques années. Ce n’est pas encore décidé, mais c’est l’idée." },
    { speaker: 'luma', text: "OK, une maison. Donc, on parle d’un objectif concret à moyen / long terme. C’est un bon point de départ. Une fois qu’on a défini l’objectif, on peut se poser deux questions :\n- Combien de temps avant d’y arriver ?\n- Quel niveau de risque es-tu prêt à accepter ? Ça va déterminer où placer ton argent." },
    { speaker: 'user', text: "Je pense que j’ai entre 5 et 10 ans devant moi. Je suis assez prudent, je n’ai pas envie de prendre trop de risques par appât du gain." },
    { speaker: 'luma', text: "Ça fait sens avec ton objectif, l’idée c’est de trouver des solutions pas trop risquées, mais qui génèrent quand même un rendement.\nPour cela on peut utiliser le temps que tu as à ton avantage. En plus du risque, on peut également aller chercher du rendement en acceptant de “bloquer” son argent pendant quelques années. Le placement en lui même n’est pas risqué mais tu n’es pas libre de retirer ton argent avant quelques années. C’est quelque chose que tu pourrais envisager ?" },
    { speaker: 'user', text: "Oui je vois l’idée. Non ça ne me dérange pas de toute façon je n’aurai pas besoin de cet argent d’ici là, autant en profiter pour avoir de meilleurs rendements." },
    { speaker: 'luma', text: "Parfait, on va commencer à explorer cela.\nOn parle là de produits comme l’assurance-vie ou des plans d’épargne à long terme, qui ne sont pas super liquides mais qui te garantissent une certaine stabilité. Tu peux aussi choisir des fonds à gestion pilotée, où tu définis ton niveau de risque, et un professionnel gère pour toi. Le tout est de s’assurer que ton investissement est aligné sur ton objectif : la maison." },
    { speaker: 'user', text: "Ça a du sens, mais ça me semble un peu... classique. J’ai l’impression que tout le monde fait ça." },
    { speaker: 'luma', text: "C’est vrai, c’est un choix plutôt traditionnel, mais qui fonctionne très bien si tu cherches la stabilité. Après, il y a toujours moyen de rendre les choses un peu plus dynamiques. Mais je te propose de commencer par là et de voir où tu en es dans quelques mois." },
    { speaker: 'user', text: "Oui, je vois. Je vais déjà regarder ce qui est proposé dans l'assurance-vie et les autres placements classiques. Mais, dis-moi, je vois beaucoup de gens parler de cryptomonnaies ces derniers temps. C’est pas bien ça ?" },
    { speaker: 'luma', text: "Oui, et c’est justement là que ça devient intéressant :\nCe n’est pas parce que tout le monde en parle que c’est pertinent pour ton cas.\nMais ce n’est pas non plus parce que tu es prudent que tu dois t’interdire toute curiosité.\nJe ne suis pas là pour te recommander quoi que ce soit, mais plutôt pour clarifier les options.\nJe ne t’en ai pas parlé plus tôt parce que ce n’est pas un placement sécurisé, surtout si ton plan repose sur une stabilité nette. La crypto peut offrir de gros rendements mais pour cela il faut également prêt à perdre gros, ce qui ne me semble pas être en adéquation avec ton plan." },
    { speaker: 'user', text: "Donc, ce n’est pas une solution pour quelqu’un qui veut rester tranquille avec son épargne, mais c’est peut-être une option à considérer si on est prêt à prendre des risques pour augmenter son rendement." },
    { speaker: 'luma', text: "Juste pour voir clair tout de suite… Tu me dis si je me trompe :\nT’as pas envie de risquer beaucoup, t’as dit “je suis prudent” deux fois,\nmais t’as quand même posé la question sur la crypto avant qu’on ait fini de parler d’assurance-vie.\nTu serais pas ce que j’appelle un opportuniste ?" },
    { speaker: 'user', text: "C’est-à-dire ?" },
    { speaker: 'luma', text: "Le type qui choisit l’option raisonnable. Mais dès qu’un pote balance un +80 % sur une pépite, tu veux comprendre comment entrer dans le coup.\nTu googles “acheter ETH”, pas pour flamber, juste pour voir si ça vaut le détour.\nPas un joueur. Pas un suiveur. Juste un opportuniste lucide, qui ne veut pas rater une bonne affaire.\nTu veux garder une porte ouverte. Pas te jeter dedans." },
    { speaker: 'user', text: "Hmm… pas totalement faux." },
    { speaker: 'luma', text: "Parfait. Dans ce cas, on peut avancer avec ce style-là. Pas besoin de faire semblant d’être un investisseur modèle.\nTu veux construire quelque chose, mais garder une fenêtre entrouverte pour un coup malin.\nEntre nous…\nSi je te dis : “Tu mets 90 % sur une stratégie béton. Et tu gardes 10 % pour un petit move joueur, genre au cas où ça pète.”\n…c’est débile ? Ou c’est exactement ton style mais sans le dire trop fort ?" },
    { speaker: 'user', text: "Je ne sais pas si c’est “mon style”, mais j’aime bien que la porte ne soit pas totalement fermée. Ça me plaît de me dire que j'ai un peu de poudre sèche au cas où une belle opportunité se présente mais qu'elle ne mettra pas en danger mes projets si ça ne fonctionne pas." },
    { speaker: 'luma', text: "Tu as bien raison. Et c’est pour ça que t’as besoin d’un cadre simple, pas un frein, juste un garde-fou.\nPose-toi une règle simple :\nTant que ta base “projet maison” n’a pas reçu sa part du mois,\ntu laisses les paris à la porte.\nSi c’est déjà fait, tu fais ce que tu veux — en paix.\nPas une contrainte. Juste une façon de ne jamais jouer en déséquilibre." },
    { speaker: 'user', text: "Oui je vais commencer avec les classiques, et peut-être rajouter un petit pari crypto dans quelques mois, une fois que je me serai plus familiarisé avec tout ça." },
    { speaker: 'luma', text: "Je te laisse bosser ta stratégie... mais je sens que le jour où tu feras ton premier petit coup malin, t’auras un sourire que même moi je pourrai deviner d’ici." },
    { speaker: 'luma', text: "Je te laisse avec une image.\nPense ton plan comme une séance de ciné.\nSi t’arrives à l’heure, tu t’installes bien, tu choisis ton siège, tu profites du film.\nSi t’es un peu en avance, t’as même le temps de prendre du popcorn.\nMais le but, c’est pas le popcorn.\nC’est de pas rater le film." }
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
        <ProfileButton profile="c" />
      </div>
<ConversationPlayer steps={steps} />
    </div>
  );
}
