// ✅ pages/q4-[profile].js
import { useRouter } from 'next/router';
import ConversationPlayer from '../components/ConversationPlayer';
import scenario from '../data/scenario';

export default function Q4DynamicScenario() {
  const router = useRouter();
  const { profile } = router.query; // Récupère le profil depuis l'URL

  const steps = scenario.q4?.[profile]; // Récupère les étapes du scénario basé sur le profil (ex: profile-a, profile-b)

  if (!steps) {
    return <p className="text-red-500 text-center">Scénario introuvable.</p>; // Affiche un message d'erreur si le scénario n'est pas trouvé
  }

  return <ConversationPlayer steps={steps} />; // Si les étapes existent, les afficher dans le composant ConversationPlayer
}


