const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;
// const port = 5000;

app.use(cors("*"));
app.use("/Scene1", express.static(path.join(__dirname, "./Scene1")));
app.use("/Scene2", express.static(path.join(__dirname, "./Scene2")));
<<<<<<< HEAD
app.use("/Scene3", express.static(path.join(__dirname, "./Scene3")));
app.use("/Scene4", express.static(path.join(__dirname, "./Scene4")));
app.use("/Scene5", express.static(path.join(__dirname, "./Scene5")));
=======
>>>>>>> 102a500b770874d54c248bcfb095964f93362dfc

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
    picture: "/Scene1/Jeton.png",
    alt: "jeton de poker",
    inventory: true,
    splineUrl: "https://prod.spline.design/be8BmFnRYQfM04Ba/scene.splinecode",
    x: 20,
    y: 80,
    largeur: 32,
  },
  // Indices
  {
    id: 2,
    name: "montre luxueuse",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Cette montre est arrêtée sur 10H10. Etrange...",
    picture: "/Scene1/montre10.png",
    alt: "montre luxueuse",
    inventory: false,
    x: 30,
    y: 65,
    largeur: 25,
  },
  {
    id: 3,
    name: "badge de sécurité",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Oh ! Un badge de sécurité. Il s'agit du numéro 809.",
    picture: "/Scene1/badge809.png",
    alt: "badge de sécurité",
    inventory: false,
    x: 79.5,
    y: 55,
    largeur: 30,
  },
  {
    id: 4,
    name: "clef de machine à sous",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Cette clef permet d'ouvrir la machine à sous numéro 679.",
    picture: "/Scene1/clé679.png",
    alt: "clef de machine à sous",
    inventory: false,
    x: 25,
    y: 65,
    largeur: 30,
  },
  {
    id: 5,
    name: "dé truqué",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Ce dé n’est pas comme les autres. Il semble truqué pour tomber perpétuellement sur le 2.",
    picture: "/Scene1/dé.png",
    alt: "dé truqué",
    inventory: false,
    x: 58,
    y: 57,
    largeur: 30,
  },
  // Objets Autres
  {
    id: 6,
    name: "caméra",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "J'ai comme l'impression d'être observé...",
    picture: "/Scene1/caméra.png",
    alt: "caméra",
    inventory: false,
    x: 65,
    y: 35,
    largeur: 30,
  },
  {
    id: 7,
    name: "cendrier contenant un cigare",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "KOF ! KOF ! Berk ! Ce cendrier contient un cigare encore fumant. Oh non, elles sont toutes noires maintenant ! Pourquoi j'ai mis les mains dedans, moi...",
    picture: "/Scene1/CendierCigare.png",
    alt: "cendrier contenant un cigare",
    inventory: false,
    x: 35,
    y: 55,
    largeur: 20,
  },
  {
    id: 8,
    name: "sac de jetons",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Il y a un bon paquet de jetons là-dedans... Ce sac sera bientôt à moi et.. ET JE SERAIS RIIIICHE ! MOUHIHAHAHAHAHA !",
    picture: "/Scene1/SacJetons.png",
    alt: "sac de jetons",
    inventory: false,
    x: 67,
    y: 59,
    largeur: 30,
  },
  {
    id: 9,
    name: "billets de banque",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Il faut que je remporte ces billets... Ca épongerai un peu mes dettes. Sinon, je pourrais aussi les rejouer pour gagner plus ? Oui. Bonne idée, je vais faire ça !",
    picture: "/Scene1/BilletBanque.png",
    alt: "billets de banque",
    inventory: false,
    x: 40,
    y: 85,
    largeur: 30,
  },
  {
    id: 10,
    name: "bouteille d'alcool fort",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Voyons voir.. que dit l'étiquette ? QUOI ? 90 DEGRES ? MAIS C'EST DU GEL HYDRO, PAS DE L'ALCOOL !",
    picture: "/Scene1/BouteilleAlcool.png",
    alt: "bouteille d'alcool fort",
    inventory: false,
    x: 90,
    y: 35,
    largeur: 40,
  },
  {
    id: 11,
    name: "verre à cocktail",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Un sex on the beach, oh yeah baby.. ! Ahah, je devrais en commander un pour Mary. Elle adore ça.",
    picture: "/Scene1/VerreCocktail.png",
    alt: "verre à cocktail",
    inventory: false,
    x: 40,
    y: 45,
    largeur: 20,
  },
  {
    id: 12,
    name: "livre de comptes du casino",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "WOAAAAAW LES ENFOIRES ! Ils brassent un max ! Le livre de compte parle de lui-même !",
    picture: "/Scene1/livreCompte.png",
    alt: "livre de comptes du casino",
    inventory: false,
    x: 75,
    y: 65,
    largeur: 30,
  },
  {
    id: 13,
    name: "roulette",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Gagner à la roulette pourrait me sortir de la merde !",
    picture: "/Scene1/roulette.png",
    alt: "roulette",
    inventory: false,
    x: 64,
    y: 49,
    largeur: 20,
  },
  {
    id: 14,
    name: "boîte de Xanax",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Un Xanax et ça repart !",
    picture: "/Scene1/Xanax.png",
    alt: "boîte de Xanax",
    inventory: false,
    x: 10,
    y: 42,
    largeur: 30,
  },
  {
    id: 15,
    name: "cadenas",
    picture: "/Scene1/padlock-303266_1280.png",
    alt: "cadenas",
    code: 679108092,
    inventory: false,
    x: 51,
    y: 47,
    largeur: 25,
  },
];

const scene2 = [
  // Indice 3D
  {
    id: 100,
    name: "sucre d'orge",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "...Mmmmmh Sucre d'Orge... Et si je me le gardais pour plus tard ?", // Dans le style de Homer Simpsons et son "Mmmmmh Donuts".
<<<<<<< HEAD
    picture: "/Scene2/sucre.png",
    splineUrl: "https://prod.spline.design/be8BmFnRYQfM04Ba/scene.splinecode",
    alt: "sucre d'orge",
    inventory: true,
    x: 15,
    y: 15,
    largeur: 40,
=======
    picture: "",
    alt: "sucre d'orge",
    inventory: true,
    x: 23,
    y: 90,
    largeur: 32,
>>>>>>> 102a500b770874d54c248bcfb095964f93362dfc
  },
  // Indice
  {
    id: 2,
    name: "roulette",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Tiens ? Cette roulette semble différente de tout à l'heure...",
<<<<<<< HEAD
    picture: "/Scene2/roulette.png",
    alt: "roulette",
    inventory: false,
    x: 50,
    y: 50,
    largeur: 30,
=======
    picture: "/Scene1/roulette.png",
    alt: "roulette",
    inventory: false,
    x: 61,
    y: 50,
    largeur: 150,
>>>>>>> 102a500b770874d54c248bcfb095964f93362dfc
  },
  //  Objets Autres
  {
    id: 3,
    name: "lunettes de soleil fashion",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "On dirait celles de Mary. Ca signifie qu'elle est ici ?! Oh non, elle ne doit pas me voir ici !",
    picture: "/Scene2/lunette.png",
    alt: "lunettes de soleil fashion",
    inventory: false,
<<<<<<< HEAD
    x: 20,
    y: 20,
=======
    x: 63.5,
    y: 74.35,
>>>>>>> 102a500b770874d54c248bcfb095964f93362dfc
    largeur: 30,
  },
  {
    id: 4,
    name: "cigare",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Ma parole, ils fument tous le cigare ici ou quoi ? Et puis, je croyais que c'était devenu interdit dans les lieux publics ! Orh !",
    picture: "/Scene2/cigare.png",
    alt: "cigare",
    inventory: false,
    x: 30,
<<<<<<< HEAD
    y: 30,
=======
    y: 70,
>>>>>>> 102a500b770874d54c248bcfb095964f93362dfc
    largeur: 30,
  },
  {
    id: 5,
    name: "radio",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "[MUSIQUE ENFANTINE]",
    picture: "/Scene2/radio.png",
    alt: "radio",
    inventory: false,
<<<<<<< HEAD
    x: 40,
    y: 40,
=======
    x: 56,
    y: 49,
>>>>>>> 102a500b770874d54c248bcfb095964f93362dfc
    largeur: 30,
  },
  {
    id: 6,
    name: "panneau où il est écrit EN PANNE",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Une panne.. ça arrive à tout le monde ! [RIRES] Plus sérieusement, c'est un peu vétuste ici, non ?",
<<<<<<< HEAD
    picture: "/Scene2/EnPanne.png",
    alt: "panneau où il est écrit EN PANNE",
    inventory: false,
    x: 50,
    y: 50,
    largeur: 30,
  },
  {
    id: 7,
    name: "lumière vascillante",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "[VOIX TREMBLANTE] Eh ! M'sieur l'personnel... ? Il faut changer les ampoules... hein... ? J'ai peur du noir, moi...",
    picture: "/",
    alt: "lumière vascillante",
    inventory: false,
    x: 60,
    y: 60,
    largeur: 30,
  },
=======
    picture: "/Scene2/en panne.png",
    alt: "panneau où il est écrit EN PANNE",
    inventory: false,
    x: 75,
    y: 85,
    largeur: 50,
  },
  // {
  //   id: 7,
  //   name: "lumière vascillante",
  //   sound: "INSERER LE PATH DE L AUDIO",
  //   subtitles:
  //     "[VOIX TREMBLANTE] Eh ! M'sieur l'personnel... ? Il faut changer les ampoules... hein... ? J'ai peur du noir, moi...",
  //   picture: "INSERER LE PATH DE L IMAGE",
  //   alt: "lumière vascillante",
  //   inventory: false,
  //   x: 35,
  //   y: 55,
  //   largeur: 20,
  // },
>>>>>>> 102a500b770874d54c248bcfb095964f93362dfc
  {
    id: 8,
    name: "plante fânée",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "pauvre plante ...",
    picture: "/Scene2/PlanteFanée.png",
    alt: "plante fânée",
    inventory: false,
<<<<<<< HEAD
    x: 70,
    y: 70,
=======
    x: 49,
    y: 82,
>>>>>>> 102a500b770874d54c248bcfb095964f93362dfc
    largeur: 30,
  },
  {
    id: 9,
    name: "sculpture étrange",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Je crois que je ne comprendrais jamais l'art.",
    picture: "/Scene2/Scuplture.png",
    alt: "sculpture étrange",
    inventory: false,
<<<<<<< HEAD
    x: 80,
    y: 80,
=======
    x: 45,
    y: 60,
>>>>>>> 102a500b770874d54c248bcfb095964f93362dfc
    largeur: 30,
  },
  {
    id: 10,
    name: "tableau de l'as de pique",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Argh ! Rien de plus stressant qu'un tableau pas droit !",
    picture: "/Scene2/TableauPenché.png",
    alt: "tableau d'un as de pique pas droit",
    inventory: false,
<<<<<<< HEAD
    x: 60,
    y: 80,
    largeur: 30,
=======
    x: 79,
    y: 35,
    largeur: 40,
>>>>>>> 102a500b770874d54c248bcfb095964f93362dfc
  },
  {
    id: 11,
    name: "verre de whisky",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Mettez moi juste un doigt !",
    picture: "/Scene2/VerreWhisky.png",
    alt: "verre de whisky",
    inventory: false,
<<<<<<< HEAD
    x: 45,
    y: 70,
    largeur: 30,
=======
    x: 40,
    y: 52,
    largeur: 20,
>>>>>>> 102a500b770874d54c248bcfb095964f93362dfc
  },
  {
    id: 12,
    name: "caméra",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "... Ils nous observent.",
<<<<<<< HEAD
    picture: "/Scene2/caméra.png",
=======
    picture: "/Scene1/caméra.png",
>>>>>>> 102a500b770874d54c248bcfb095964f93362dfc
    alt: "caméra",
    inventory: false,
    x: 65,
    y: 35,
    largeur: 30,
<<<<<<< HEAD
=======
  },
  {
    id: 13,
    name: "cadenas",
    picture: "/Scene1/padlock-303266_1280.png",
    alt: "caméra",
    code: 679108092,
    inventory: false,
    x: 47,
    y: 50,
    largeur: 25,
>>>>>>> 102a500b770874d54c248bcfb095964f93362dfc
  },
];

const scene3 = [
  // Indice 3D
  {
    id: 200,
    name: "thermomètre digital",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Je suis pas fan de ce genre de technologies... Pour autant, celui-ci semble différent.",
    picture: "/Scene3/thermometre.png",
    splineUrl: "https://prod.spline.design/be8BmFnRYQfM04Ba/scene.splinecode",
    alt: "thermomètre digital",
    inventory: true,
    x: 65,
    y: 35,
    largeur: 30,
  },
  // Indices à ouvrir dans une modale
  {
    id: 2,
    name: "rapports de sécurité",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Les rapports de sécurité du casino... C'est pas très rassurants.",
    picture: "/Scene3/RapportSecurité.png",
    alt: "rapports de sécurité",
    inventory: false,
    x: 20,
    y: 35,
    largeur: 30,
  },
  {
    id: 3,
    name: "fiche de réservation d'hôtel",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Un Casino hôtel ? Ils sont complets, et même en sureffectifs...",
    picture: "/Scene3/ReservationHotel.png",
    alt: "fiche de réservation d'hôtel",
    inventory: false,
    x: 30,
    y: 35,
    largeur: 30,
  },
  {
    id: 4,
    name: "uniforme infirmier",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Eh mais, c'est l'uniforme des employés du casino, non ?",
    picture: "/Scene3/UniformeInfirmier.png",
    alt: "uniforme infirmier",
    inventory: false,
    x: 50,
    y: 75,
    largeur: 30,
  },
  {
    id: 5,
    name: "tableau hospitalier",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Les médecins écrivent toujours en langage codés ahah.. Tiens, pourquoi je parle de médecins, moi ?",
    picture: "/Scene3/TableauHospitalier.png",
    alt: "tableau hospitalier",
    inventory: false,
    x: 75,
    y: 70,
    largeur: 30,
  },
  // Objets Autres
  {
    id: 6,
    name: "livre sur les probabilités",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Un livre sur les probabilités... Elles sont infimes. Ce sont EUX, les tricheurs.",
    picture: "/Scene3/LivreProba.png",
    alt: "livre sur les probabilités",
    inventory: false,
    x: 50,
    y: 60,
    largeur: 30,
  },
  {
    id: 7,
    name: "verre de cocktail",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "KLING KLING KLING Tchin tchin la compagnie !",
    picture: "/Scene3/VerreCocktail.png",
    alt: "verre de cocktail",
    inventory: false,
    x: 60,
    y: 60,
    largeur: 30,
  },
  {
    id: 8,
    name: "verre de whisky",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Garçon ! Encore un doigt !",
    picture: "/Scene3/VerreWhisky.png",
    alt: "verre de whisky",
    inventory: false,
    x: 60,
    y: 75,
    largeur: 30,
  },
  {
    id: 9,
    name: "bouteille d'alcool",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Et un p'tit coup pour bibi à la santé de Mary !",
    picture: "/Scene3/BouteilleAlcool.png",
    alt: "bouteille d'alcool",
    inventory: false,
    x: 80,
    y: 75,
    largeur: 30,
  },
  {
    id: 10,
    name: "stéthoscope",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "[BRUITS DE BATTEMENTS DE COEUR]",
    picture: "/Scene3/Stétoscope.png",
    alt: "stéthoscope",
    inventory: false,
    x: 20,
    y: 50,
    largeur: 30,
  },
  {
    id: 11,
    name: "paquet de cartes",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "J'ai une Quinte Flush Royale. Je bluff ou pas ?",
    picture: "/Scene3/PaquetCarte.png",
    alt: "paquet de cartes",
    inventory: false,
    x: 25,
    y: 75,
    largeur: 30,
  },
  {
    id: 12,
    name: "lunettes de soleil",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Encore ici ?",
    picture: "/Scene3/lunette.png",
    alt: "lunettes de soleil",
    inventory: false,
    x: 60,
    y: 50,
    largeur: 30,
  },
  {
    id: 13,
    name: "dettes de jeu",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Des dettes de jeu au nom de... Gerard Hadd... Hey, mais c'est moi, ça !",
    picture: "/Scene3/DettesJeu.png",
    alt: "dettes de jeu",
    inventory: false,
    x: 20,
    y: 75,
    largeur: 30,
  },
  {
    id: 14,
    name: "pillulier",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "NON ! PAS LES PILLULES !",
    picture: "/Scene3/Pilulier.png",
    alt: "pillulier",
    inventory: false,
    x: 45,
    y: 75,
    largeur: 30,
  },
  {
    id: 15,
    name: "camera",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Ils ne veulent pas me laisser tranquille... Ils nous surveillent tout le temps... TOUT LE TEMPS !!!",
    picture: "/Scene3/caméra.png",
    alt: "camera",
    inventory: false,
    x: 70,
    y: 40,
    largeur: 30,
  },
];

const scene4 = [
  // Indice 3D
  {
    id: 300,
    name: "alliance",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "[VOIX TRISTE] Mais... Mais c'est l'alliance de Mary... ? SNIF",
    picture: "/Scene4/alliance.png",
    splineUrl: "https://prod.spline.design/be8BmFnRYQfM04Ba/scene.splinecode",
    alt: "alliance",
    inventory: true,
    x: 70,
    y: 40,
    largeur: 30,
  },
  // Indices
  {
    id: 2,
    name: "sac à main de Mary",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Le sac à main de Mary... Qu'est ce qu'il fait là.. Et ? Oh, il y a une note dedans... !",
    picture: "/Scene4/Alphabet.jpg",
    alt: "sac à main de Mary",
    inventory: false,
    x: 60,
    y: 40,
    largeur: 30,
  },
  {
    id: 3,
    name: "affiche murale",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "C'est quoi ce charabia sur le mur ? Je devrais m'y pencher...",
    picture: "/Scene4/ecritureMur.png",
    alt: "affiche murale",
    inventory: false,
    x: 30,
    y: 40,
    largeur: 30,
  },
  // Objets Autres
  {
    id: 4,
    name: "cadre photo de Mary",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "[VOIX TRISTE] Une photo de Mary... Elle est si belle...",
    picture: "/",
    alt: "cadre photo de Mary",
    inventory: false,
    x: 20,
    y: 40,
    largeur: 30,
  },
  {
    id: 5,
    name: "paquet de cartes",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Une petite partie de Poker ? Allez mise tapis... Je te suis. Mais je vais gagner... Hihihihihihihihihihihi !",
    picture: "/Scene4/PaquetCarte.png",
    alt: "paquet de cartes",
    inventory: false,
    x: 70,
    y: 30,
    largeur: 30,
  },
  {
    id: 6,
    name: "un poulet en peluche",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "EH MAIS ! Je le reconnait, lui.. c'est Abdou ! Ma peluche poulet d'enfance !",
    picture: "/Scene4/Poulet.png",
    alt: "un poulet en peluche",
    inventory: false,
    x: 50,
    y: 20,
    largeur: 30,
  },
  {
    id: 7,
    name: "un chat en peluche",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Ce chat... C'est Alex, ma peluche kitten d'un chat.",
    picture: "/Scene4/Chat.png",
    alt: "un chat en peluche",
    inventory: false,
    x: 70,
    y: 10,
    largeur: 30,
  },
  {
    id: 8,
    name: "radio",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "[HURLEMENTS ET RIRES INQUIETANTS PROVENANT DE LA RADIO]",
    picture: "/Scene4/radio.png",
    alt: "radio",
    inventory: false,
    x: 15,
    y: 10,
    largeur: 30,
  },
  {
    id: 9,
    name: "sac de jetons",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "Les jetons.. Plein de jetons.. A moi...",
    picture: "/Scene4/SacJetons.png",
    alt: "sac de jetons",
    inventory: false,
    x: 50,
    y: 70,
    largeur: 30,
  },
  {
    id: 10,
    name: "caméra",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "[HURLEMENT D'AGACEMENT] ARRÊTEZ DE ME REGARDER !!!",
    picture: "/Scene4/caméra.png",
    alt: "caméra",
    inventory: false,
    x: 60,
    y: 10,
    largeur: 30,
  },
];

const scene5 = [
  // Indices 3D
  {
    id: 400,
    name: "bouquet de fleurs",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Je.. Je reconnais ces fleurs.. C'est.. SNIF C'est celles que j'ai offert à Mary avant.. Avant que.. [SANGLOTS]",
    picture: "/Scene5/bouquet.png",
    splineUrl: "https://prod.spline.design/be8BmFnRYQfM04Ba/scene.splinecode",
    alt: "bouquet de fleurs",
    inventory: true,
    x: 80,
    y: 50,
    largeur: 30,
  },
  // Indices
  {
    id: 2,
    name: "radio",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "[AUDIO ETRANGE CODE: . _ _ _ _ ; . . . . _ ; . . _ _ _ ; _ _ _ _ _ ]",
    picture: "/Scene5/radio.png",
    alt: "radio",
    inventory: false,
    x: 70,
    y: 40,
    largeur: 30,
  },
  {
    id: 3,
    name: "tombe de Mary",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "La tombe de Mary... un lieu de repos éternel qui me semble si lointain. Un beau jour, je te retrouverai, douce Mary. Hein ?! Quelque chose est gravé derrière la stèle !",
    picture: "/Scene5/tombe.png",
    alt: "tombe de Mary",
    inventory: false,
    x: 70,
    y: 10,
    largeur: 30,
  },
  // Objets Autres
  {
    id: 4,
    name: "certificat de décès de Mary Hadd",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "C'est le certificat de décès de Mary... [SANGLOTS] ... Elle me manque tellement, ma petite femme...",
    picture: "/Scene5/certificatDece.png",
    alt: "certificat de décès de Mary Hadd",
    inventory: false,
    x: 60,
    y: 60,
    largeur: 30,
  },
  {
    id: 5,
    name: "lettre d'interdiction des Casinos",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Une lettre : Cher Monsieur Hadd, nous vous informons que vous êtes désormais interdit de Casino en raison de trop nombreuses dettes de jeu... [SOUPIR] Tss quels rabats joie. J'aurais pu rembourser tout ça et faire même du profit avec un dernier poker...",
    picture: "/Scene5/RadiéCasino.png",
    alt: "lettre d'interdiction des Casinos",
    inventory: false,
    x: 50,
    y: 50,
    largeur: 30,
  },
  {
    id: 6,
    name: "pistolet",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "N... Non... Je le reconnaît. C'est avec cette arme que j'ai essayé... ... Je suis trop faible... J'ai tout raté.. Même ma mort, je l'ai ratée.. !",
    picture: "/Scene5/flinge.jpg",
    alt: "pistolet",
    inventory: false,
    x: 20,
    y: 20,
    largeur: 30,
  },
  {
    id: 7,
    name: "sac de jetons",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Un sac de jetons... vestige d'une époque où tout était plus beau.",
    picture: "/Scene5/SacJetons.png",
    alt: "sac de jetons",
    inventory: false,
    x: 80,
    y: 80,
    largeur: 30,
  },
  {
    id: 8,
    name: "caméra de surveillance",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Cette caméra... me regarde-t-elle depuis le début? Enregistre-t-elle ma descente aux enfers? Ou.. Peut-être que c'est moi qui la regade, non... ?",
    picture: "/Scene5/caméra.png",
    alt: "caméra de surveillance",
    inventory: false,
    x: 25,
    y: 25,
    largeur: 30,
  },
  {
    id: 9,
    name: "résultats d'analyses de psychiatrie",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Il est écrit que Monsieur Gérars Hadd est atteint de troubles psychologiques atypique et d'une addiction aux jeux... [RIRE MALSAIN] Quel nase ce Gérard ! [CRI INQUIETANT] TAIS TOI ! TAIS TOI , NE M'INSULTE PAS !",
    picture: "/Scene5/analyse.png",
    alt: "résultats d'analyses de psychiatrie",
    inventory: false,
    x: 35,
    y: 35,
    largeur: 30,
  },
  {
    id: 10,
    name: "ballon de clown",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles: "[HURLEMENT]",
    picture: "/Scene5/ballonClown.png",
    alt: "ballon de clown",
    inventory: false,
    x: 35,
    y: 35,
    largeur: 30,
  },
  {
    id: 11,
    name: "paquet de cartes",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "J'aimerais tant pouvoir rejouer une dernière fois... J'aimerais jouer avec Mary dans un véritable Casino...",
    picture: "/Scene5/PaquetCarte.png",
    alt: "paquet de cartes",
    inventory: false,
    x: 35,
    y: 55,
    largeur: 30,
  },
  {
    id: 12,
    name: "photo de mariage de Mary et Gérard",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "La photo de mon mariage avec Mary... Mary et Gerard Hadd.. Nous avons été si heureux. Désormais, cette photo ,ne reflète que l'écho de ma propre douleur.. SNIF",
    picture: "/",
    alt: "photo de mariage de Mary et Gérard",
    inventory: false,
    x: 75,
    y: 45,
    largeur: 30,
  },
  {
    id: 13,
    name: "stéthoscope",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Ce stéthoscope... Ils m'examinent tous les jours... Je n'ai pas besoin de ça... Je vais bien, pourtant non.. ?",
    picture: "/",
    alt: "stéthoscope",
    inventory: false,
    x: 55,
    y: 33,
    largeur: 30,
  },
  {
    id: 14,
    name: "boîte de Xanax",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "Je me souviens, maintenant... C'est la boîte de Xanax que j'ai avalée en espérant calmer mes démons intérieurs, en vain...",
    picture: "/Scene5/Xanax.png",
    alt: "boîte de Xanax",
    inventory: false,
    x: 22,
    y: 66,
    largeur: 30,
  },
  {
    id: 15,
    name: "bouteille d'alcool",
    sound: "INSERER LE PATH DE L AUDIO",
    subtitles:
      "C'est la bouteille d'alcool que j'ai vidée cette fameuse nuit dernière pour tenter d'oublier... mais rien n'a changé. Non... Rien.",
    picture: "/Scene5/BouteilleAlcool.png",
    alt: "bouteille d'alcool",
    inventory: false,
    x: 59,
    y: 66,
    largeur: 30,
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
