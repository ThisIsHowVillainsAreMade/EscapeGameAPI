const express = require("express");
const cors = require("cors");
const app = express();

const port = 5000;

app.use(cors("*"));

const narration = [
  // Lorsqu'on lance le jeu, avant la salle 1.
  {
    id: 1,
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
  },
  // Après la salle 1, avant la salle 2.
  {
    id: 2,
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
  },
  // Après la salle 2, avant la salle 3.
  {
    id: 3,
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
  },
  // Après la salle 3, avant la salle 4.
  {
    id: 4,
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
  },
  // Après la salle 4, avant la salle 5.
  {
    id: 5,
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
  },
  // Après la salle 5, choix.
  {
    id: 6,
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
  },
  // FIN DU JEU
  { id: 7, audio: "INSERER LE PATH DE L AUDIO", subtitles: "FIN" },
];

const scene1 = [
  // Indice 3D
  {
    id: 1,
    name: "jeton",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Mhm... Je devrais peut-être regarder ce jeton de plus près.",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "jeton de poker",
    inventory: true,
  },
  // Indices
  {
    id: 2,
    name: "montre luxueuse",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Cette montre est arrêtée sur 10H10. Etrange...",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "montre luxueuse",
    inventory: false,
  },
  {
    id: 3,
    name: "badge de sécurité",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Oh ! Un badge de sécurité. Il s'agit du numéro 809.",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "badge de sécurité",
    inventory: false,
  },
  {
    id: 4,
    name: "clef de machine à sous",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Cette clef permet d'ouvrir la machine à sous numéro 679.",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "clef de machine à sous",
    inventory: false,
  },
  {
    id: 5,
    name: "dé truqué",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Ce dé n’est pas comme les autres. Il semble truqué pour tomber perpétuellement sur le 2.",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "dé truqué",
    inventory: false,
  },
  // Objets Autres
  {
    id: 6,
    name: "caméra",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "J'ai comme l'impression d'être observé...",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "caméra",
    inventory: false,
  },
  {
    id: 7,
    name: "cendrier contenant un cigare",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "KOF ! KOF ! Berk ! Ce cendrier contient un cigare encore fumant. Oh non, elles sont toutes noires maintenant ! Pourquoi j'ai mis les mains dedans, moi...",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "cendrier contenant un cigare",
    inventory: false,
  },
  {
    id: 8,
    name: "sac de jetons",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Il y a un bon paquet de jetons là-dedans... Ce sac sera bientôt à moi et.. ET JE SERAIS RIIIICHE ! MOUHIHAHAHAHAHA !",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "sac de jetons",
    inventory: false,
  },
  {
    id: 9,
    name: "billets de banque",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Il faut que je remporte ces billets... Ca épongerai un peu mes dettes. Sinon, je pourrais aussi les rejouer pour gagner plus ? Oui. Bonne idée, je vais faire ça !",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "billets de banque",
    inventory: false,
  },
  {
    id: 10,
    name: "bouteille d'alcool fort",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Voyons voir.. que dit l'étiquette ? QUOI ? 90 DEGRES ? MAIS C'EST DU GEL HYDRO, PAS DE L'ALCOOL !",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "bouteille d'alcool fort",
    inventory: false,
  },
  {
    id: 11,
    name: "verre à cocktail",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Un sex on the beach, oh yeah baby.. ! Ahah, je devrais en commander un pour Mary. Elle adore ça.",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "verre à cocktail",
    inventory: false,
  },
  {
    id: 12,
    name: "livre de comptes du casino",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "WOAAAAAW LES ENFOIRES ! Ils brassent un max ! Le livre de compte parle de lui-même !",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "livre de comptes du casino",
    inventory: false,
  },
  {
    id: 13,
    name: "roulette",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Gagner à la roulette pourrait me sortir de la merde !",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "roulette",
    inventory: false,
  },
  {
    id: 14,
    name: "boîte de Xanax",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Un Xanax et ça repart !",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "boîte de Xanax",
    inventory: false,
  },
];

const scene2 = [
  // Indice 3D
  {
    id: 1,
    name: "sucre d'orge",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "...Mmmmmh Sucre d'Orge... Et si je me le gardais pour plus tard ?", // Dans le style de Homer Simpsons et son "Mmmmmh Donuts".
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "sucre d'orge",
    inventory: true,
  },
  // Indice
  {
    id: 2,
    name: "roulette",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Tiens ? Cette roulette semble différente de tout à l'heure...",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "roulette",
    inventory: false,
  },
  //  Objets Autres
  {
    id: 3,
    name: "lunettes de soleil fashion",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "On dirait celles de Mary. Ca signifie qu'elle est ici ?! Oh non, elle ne doit pas me voir ici !",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "lunettes de soleil fashion",
    inventory: false,
  },
  {
    id: 4,
    name: "cigare",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Ma parole, ils fument tous le cigare ici ou quoi ? Et puis, je croyais que c'était devenu interdit dans les lieux publics ! Orh !",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "cigare",
    inventory: false,
  },
  {
    id: 5,
    name: "radio",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "[MUSIQUE ENFANTINE]",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "radio",
    inventory: false,
  },
  {
    id: 6,
    name: "panneau où il est écrit EN PANNE",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Une panne.. ça arrive à tout le monde ! [RIRES] Plus sérieusement, c'est un peu vétuste ici, non ?",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "panneau où il est écrit EN PANNE",
    inventory: false,
  },
  {
    id: 7,
    name: "lumière vascillante",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "[VOIX TREMBLANTE] Eh ! M'sieur l'personnel... ? Il faut changer les ampoules... hein... ? J'ai peur du noir, moi...",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "lumière vascillante",
    inventory: false,
  },
  {
    id: 8,
    name: "plante fânée",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "pauvre plante ...",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "plante fânée",
    inventory: false,
  },
  {
    id: 9,
    name: "sculpture étrange",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Je crois que je ne comprendrais jamais l'art.",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "sculpture étrange",
    inventory: false,
  },
  {
    id: 10,
    name: "tableau de l'as de pique",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Argh ! Rien de plus stressant qu'un tableau pas droit !",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "tableau d'un as de pique pas droit",
    inventory: false,
  },
  {
    id: 11,
    name: "verre de whisky",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Mettez moi juste un doigt !",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "verre de whisky",
    inventory: false,
  },
  {
    id: 12,
    name: "caméra",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "... Ils nous observent.",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "caméra",
    inventory: false,
  },
];

const scene3 = [
  // Indice 3D
  {
    id: 1,
    name: "thermètre digital",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Je suis pas fan de ce genre de technologies... Pour autant, celui-ci semble différent.",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "thermètre digital",
    inventory: true,
  },
  {
    id: 2,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 3,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 4,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 5,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 6,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 7,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 8,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 9,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 10,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 11,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 12,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 13,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 14,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 15,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
];

const scene4 = [
  {
    id: 1,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: true,
  },
  {
    id: 2,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 3,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 4,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 5,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 6,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 7,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 8,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 9,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 10,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 11,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 12,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 13,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 14,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 15,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
];

const scene5 = [
  {
    id: 1,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: true,
  },
  {
    id: 2,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 3,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 4,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 5,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 6,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 7,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 8,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 9,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 10,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 11,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 12,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 13,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 14,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
  {
    id: 15,
    name: "INSERER LE NAME DE L OBJET",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "INSERER SUBTITLES",
    picture: "INSERER LE PATH DE L IMAGE",
    alt: "DECRIRE ALT",
    inventory: false,
  },
];

app.get("/", (req, res) => {
  res.send("l'API est en ligne.");
});

app.get("/narration", (req, res) => {
  res.json(narration);
});

app.get("/scene1", (req, res) => {
  res.json(scene1);
});

app.get("/scene2", (req, res) => {
  res.json(scene2);
});

app.get("/scene3", (req, res) => {
  res.json(scene3);
});

app.get("/scene4", (req, res) => {
  res.json(scene4);
});

app.get("/scene5", (req, res) => {
  res.json(scene5);
});

app.listen(port, console.log("http://localhost:5000"));
