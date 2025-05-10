
// ✅ pages/q1-[profile].js
import { useRouter } from 'next/router';
import ConversationPlayer from '../components/ConversationPlayer';
import scenario from '../data/scenario';

export default function Q1DynamicScenario() {
  const router = useRouter();
  const profile = (router.query.profile || '').toLowerCase(); // Récupère le profil via la query dans l'URL

  const steps = scenario.q1?.[`profile-${profile}`]; // Récupère les étapes du scénario en fonction du profil
  if (!steps) {
    return <p className="text-red-500 text-center">Scénario introuvable.</p>; // Affiche un message si le scénario est introuvable
  }

  return <ConversationPlayer steps={steps} />; // Affiche les étapes du scénario avec le composant ConversationPlayer
}


