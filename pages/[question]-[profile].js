// pages/[question]-[profile].js
import { useRouter } from 'next/router';
import ConversationPlayer from '../components/ConversationPlayer';
import scenario from '../data/scenario';

export default function DynamicScenario() {
  const router = useRouter();
  const { question, profile } = router.query;

  const steps = scenario?.[question]?.[profile];

  if (!steps) {
    return <p className="text-red-500 text-center">Scénario introuvable.</p>;
  }

  return <ConversationPlayer steps={steps} />;
}
