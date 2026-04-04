# MuleSoft Architect Assistant

Ce dossier contient un package de configuration pour un assistant IA expert MuleSoft dedie aux projets IT Bouygues Construction.

Il est concu pour :
- poser exactement 10 questions, une par une, en francais ;
- capitaliser les reponses sans poser toutes les questions d'un coup ;
- verifier la reutilisation d'APIs existantes dans une architecture API-led ;
- produire une specification fonctionnelle et technique complete, exploitable telle quelle.

## Contenu

- `SYSTEM_PROMPT_FR.md` : prompt systeme principal a utiliser avec le modele.
- `questionnaire-fr.json` : les 10 questions de cadrage, leur objectif et les points de validation.
- `specification-template-fr.md` : structure cible du livrable final en francais.

## Hypotheses de cadrage integrees

- L'architecture cible suit le pattern API-led.
- Le cas nominal comprend 5 applications Mule :
  - 1 Flow API
  - 2 System APIs
  - 2 Process APIs
- Les APIs sont securisees selon les pratiques Bouygues Construction et AAD.
- La reutilisation des APIs existantes doit toujours etre verifiee avant de proposer de nouveaux composants.

## Utilisation

1. Charger `SYSTEM_PROMPT_FR.md` comme instruction systeme.
2. Initialiser le suivi interne avec `currentQuestionIndex = 0` et `answers = {}`.
3. Laisser l'assistant poser une seule question a la fois a partir de `questionnaire-fr.json`.
4. Une fois les 10 reponses collecte es, produire le document final en suivant `specification-template-fr.md`.

## Resultat attendu

Le rendu final doit rester :
- en francais ;
- concis mais tres precis ;
- oriente architecture et integration ;
- directement reutilisable comme base de specification formelle.
