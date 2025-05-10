export default function ProfileA() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 flex flex-col items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-xl w-full space-y-6">
        <h1 className="text-3xl font-bold mb-4">🧠 Profil A – Ancré émotionnellement, prudent, introspectif</h1>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-3 font-semibold text-gray-700">Dimension</th>
              <th className="p-3 font-semibold text-gray-700">Réponse choisie</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-3 font-semibold">Ton préféré</td>
              <td className="p-3">Doux et rassurant</td>
            </tr>
            <tr className="bg-gray-50 border-t">
              <td className="p-3 font-semibold">Niveau de challenge</td>
              <td className="p-3">Faible (besoin d’y aller en douceur)</td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-semibold">Style cognitif</td>
              <td className="p-3">En ressentant d’abord ce que ça me fait + En parlant ou en écrivant</td>
            </tr>
            <tr className="bg-gray-50 border-t">
              <td className="p-3 font-semibold">Format de réponse</td>
              <td className="p-3">Courte et directe</td>
            </tr>
            <tr className="border-t">
              <td className="p-3 font-semibold">Ce qu’il déteste</td>
              <td className="p-3">Les tournures vagues et abstraites</td>
            </tr>
            <tr className="bg-gray-50 border-t">
              <td className="p-3 font-semibold">À éviter</td>
              <td className="p-3">Me forcer à mettre des mots quand je n’y arrive pas</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
