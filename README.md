# Centrale de Convertion

Console scientifique tout-en-un : convertisseur d'unités, calculatrice, résolution
d'équations/vecteurs, bibliothèque de formules physiques, et assistant intégré
**Convert'AI** (propulsé par [OpenRouter](https://openrouter.ai)).

## 🚀 Installation

1. Clone le repo.
2. Copie le modèle de configuration :
   ```bash
   cp config.example.js config.js
   ```
3. Ouvre `config.js` et remplace `sk-or-v1-VOTRE_CLE_ICI` par ta vraie clé
   OpenRouter (obtenue sur https://openrouter.ai/keys).
4. Ouvre `index.html` dans ton navigateur (ou héberge le dossier sur
   Vercel / Netlify / GitHub Pages, en ajoutant `config.js` comme variable
   d'environnement injectée au build plutôt qu'un fichier statique si le
   dépôt est public).

## 🔒 Sécurité de la clé API

- `config.js` contient ta vraie clé et est **listé dans `.gitignore`** :
  il ne sera jamais poussé sur GitHub par erreur.
- `config.example.js` est le seul fichier de config versionné : il ne contient
  qu'un placeholder, sûr à publier.
- ⚠️ Comme ce site tourne 100% côté navigateur, la clé reste visible dans le
  code source une fois servie (n'importe qui inspectant la page peut la lire).
  Pour un vrai déploiement public, préfère un petit backend (ex: fonction
  serverless Vercel/Railway) qui garde la clé côté serveur et relaie les
  requêtes à OpenRouter — le front n'a alors jamais la clé en clair.

## 📁 Fichiers

- `index.html` — l'application complète (HTML + CSS + JS)
- `config.js` — ta clé API (privé, jamais commit)
- `config.example.js` — modèle public de configuration
- `.gitignore` — exclut `config.js` du dépôt
