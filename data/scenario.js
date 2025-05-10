const scenario = {
  q1: {
    'profile-a': [
      { speaker: 'user', text: "Je commence toujours plein de trucs, et puis je lâche en cours de route." },
      { speaker: 'luma', text: "OK. Essayons de poser ça clairement.\nTu démarres facilement, mais à un moment, tu décroches.\nTu peux me donner un exemple concret où ça s’est produit récemment ?" },
      // … suite du script profil A pour Q1
    ],
    'profile-b': [
      { speaker: 'user', text: "Je commence toujours plein de trucs, et puis je lâche en cours de route." },
      { speaker: 'luma', text: "OK. Raconte-moi précisément un exemple : qu’est-ce que tu avais commencé, pourquoi, et à quel moment t’as stoppé ?" },
      // … suite adaptée au profil B
    ],
    'profile-c': [
      { speaker: 'user', text: "Je commence toujours plein de trucs, et puis je lâche en cours de route." },
      { speaker: 'luma', text: "Hé voilà, le classique 'j’ai mille idées'. Donne-moi une scène que t’as vécue, on va rejouer la pièce ensemble." },
      // … suite style narratif joueur
    ]
  },
  q4: {
    'profile-a': [
      { speaker: 'user', text: "J’ai un peu d’épargne que je voudrais investir, mais je ne sais pas par où commencer." },
      { speaker: 'luma', text: "Pas de souci. On va y aller en douceur. Tu veux qu’on regarde d’abord ce que tu aimerais éviter ou ce que tu espères obtenir ?" },
      // … suite Q4 profil A
    ],
    'profile-b': [
      { speaker: 'user', text: "J’ai un peu d’épargne que je voudrais investir, mais je ne sais pas par où commencer." },
      { speaker: 'luma', text: "OK. Je te propose qu’on clarifie d’abord 3 paramètres : horizon, tolérance au risque, et implication personnelle. Prêt ?" },
      // … suite Q4 profil B
    ],
    'profile-c': [
      { speaker: 'user', text: "J’ai un peu d’épargne que je voudrais investir, mais je ne sais pas par où commencer." },
      { speaker: 'luma', text: "Cool. Dis-moi : si tu pouvais faire un test sans conséquence, tu t’amuserais à investir dans quoi, juste pour voir ?" },
      // … suite Q4 profil C
    ]
  }
};

export default scenario;
