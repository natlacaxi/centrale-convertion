// api/chat.js — fonction serverless Vercel
// Cette fonction tourne CÔTÉ SERVEUR : la clé API n'est jamais envoyée au navigateur.
// Elle est lue depuis une variable d'environnement Vercel (jamais dans le code).

export default async function handler(req, res) {
  // Autorise uniquement les requêtes POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: { message: 'Méthode non autorisée' } });
  }

  const apiKey = process.env.OPENROUTER_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: { message: "Clé API non configurée côté serveur (variable d'environnement OPENROUTER_API_KEY manquante sur Vercel)." } });
  }

  try {
    const { messages, model } = req.body;

    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + apiKey,
        'HTTP-Referer': req.headers.origin || 'https://vercel.app',
        'X-Title': 'Centrale de Convertion'
      },
      body: JSON.stringify({
        model: model || 'openai/gpt-4o-mini',
        messages: messages
      })
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (err) {
    res.status(500).json({ error: { message: 'Erreur serveur : ' + err.message } });
  }
}
