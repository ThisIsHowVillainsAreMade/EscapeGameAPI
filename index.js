const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();

const port = process.env.PORT || 5000;
// const port = 5000;

app.use(cors("*"));
app.use("/Scene1", express.static(path.join(__dirname, "./Scene1")));
app.use("/Scene2", express.static(path.join(__dirname, "./Scene2")));
app.use("/Scene3", express.static(path.join(__dirname, "./Scene3")));
app.use("/Scene4", express.static(path.join(__dirname, "./Scene4")));
app.use("/Scene5", express.static(path.join(__dirname, "./Scene5")));
app.use("/static", express.static("assets"));
app.use("/static1", express.static("audiosMP3"));
// app.use("/assets", express.static(path.join(__dirname, "/audio")));

const narration = [
  // Lorsqu'on lance le jeu, avant la salle 1.
  {
    id: 1,
    sound1: "static1/Narrations/NarScene1/naraS101.mp3",
    sound2: "static1/Narrations/NarScene1/naraS102.mp3",
    sound3: "static1/Narrations/NarScene1/naraS103.mp3",
    sound4: "static1/Narrations/NarScene1/naraS104.mp3",
    sound5: "static1/Narrations/NarScene1/naraS105.mp3",
    sound6: "static1/Narrations/NarScene1/naraS106.mp3",
    subtitles1: "Aie.. Ma tête… Mais.. ?! Où je suis là ?",
    subtitles2: "Je ne me rappelle de rien.",
    subtitles3: "Pourquoi je suis dans un casino ?",
    subtitles4: "La salle me semble étrange, je n'y vois qu'une seule porte.",
    subtitles5:
      "Hmm, elle semble verrouillée... Je vais devoir trouver un moyen de sortir de cette salle.",
    subtitles6: "Dans quelle galère je me suis fourré...",
  },
  // Après la salle 1, avant la salle 2.
  {
    id: 2,
    sound1: "static1/Narrations/NarScene2/naraScene02id1.mp3",
    sound2: "static1/Narrations/NarScene2/naraScene02id2.mp3",
    sound3: "static1/Narrations/NarScene2/naraScene02id3.mp3",
    sound4: "static1/Narrations/NarScene2/naraScene02id4.mp3",
    sound5: "static1/Narrations/NarScene2/naraScene02id5.mp3",
    subtitles1: "Encore une salle … :soupire:",
    subtitles2: "Toutes ces roulettes me font tourner la tête !",
    subtitles3: "Ah, j'aperçois une autre porte, verrouillée celle-ci aussi…",
    subtitles4: "Je vais devoir encore me débrouiller pour la dévérouiller.",
    subtitles5: "Raaaah",
  },
  // Après la salle 2, avant la salle 3.
  {
    id: 3,
    sound1: "static1/Narrations/NarScene3/naraScene03id1.mp3",
    sound2: "static1/Narrations/NarScene3/naraScene03id2.mp3",
    sound3: "static1/Narrations/NarScene3/naraScene03id3.mp3",
    sound4: "static1/Narrations/NarScene3/naraScene03id4.mp3",
    sound5: "static1/Narrations/NarScene3/naraScene03id5.mp3",
    subtitles1: "Mais ce n'est pas possible !!",
    subtitles2: "Il y en a combien de ces foutues salles-là ?!",
    subtitles3: "Et j’imagine qu’elle est verrouillée",
    subtitles4: ":souffle: En plus, elle est lugubre celle-ci",
    subtitles5: "Aller, courage Gégé !",
  },
  // Après la salle 3, avant la salle 4.
  {
    id: 4,
    sound1: "static1/Narrations/NarScene4/naraScene04id1.mp3",
    sound2: "static1/Narrations/NarScene4/naraScene04id2.mp3",
    sound3: "static1/Narrations/NarScene4/naraScene04id3.mp3",
    sound4: "static1/Narrations/NarScene4/naraScene04id4.mp3",
    subtitles1: ":rire: Ahahahahahahahaha !",
    subtitles2: "Je vais devenir fou !",
    subtitles3: ":pleure:",
    subtitles4: ":chuchotement: j’ai peur…",
  },
  // Après la salle 4, avant la salle 5.
  {
    id: 5,
    sound1: "static1/Narrations/NarScene5/naraScene05id1.mp3",
    sound2: "static1/Narrations/NarScene5/naraScene05id2.mp3",
    sound3: "static1/Narrations/NarScene5/naraScene05id3.mp3",
    sound4: "static1/Narrations/NarScene5/naraScene05id4.mp3",
    sound5: "static1/Narrations/NarScene5/naraScene05id5.mp3",
    sound6: "static1/Narrations/NarScene5/naraScene05id6.mp3",
    sound7: "static1/Narrations/NarScene5/naraScene05id7.mp3",
    subtitles1: "Oooh la jolie salle !",
    subtitles2: "Non elle me fait peur :effrayé:",
    subtitles3: "J'entends des voix",
    subtitles4: ":pleure:",
    subtitles5: ":rire:",
    subtitles6: "A l'aiiiiiiiiiide :cri:!",
    subtitles7: "Libérez moi :supplice:",
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
    sound: "static1/scene1/sc1id1.mp3",
    subtitles: "Mhm... Je devrais peut-être regarder ce jeton de plus près.",
    picture: "/Scene1/Jeton.png",
    alt: "jeton de poker",
    inventory: true,
    splineUrl: "https://prod.spline.design/be8BmFnRYQfM04Ba/scene.splinecode",
    x: 29.2,
    y: 83,
    largeur: 32,
  },
  // Indices
  {
    id: 2,
    name: "montre luxueuse",
    sound: "static1/scene1/sc1id2.mp3", // TEST
    subtitles: "Cette montre est arrêtée sur 10H10. Etrange...",
    picture: "/Scene1/montre10.png",
    alt: "montre luxueuse",
    inventory: false,
    x: 27,
    y: 65,
    largeur: 28,
    indice: true,
  },
  {
    id: 3,
    name: "badge de sécurité",
    sound: "static1/scene1/sc1id3.mp3",
    subtitles: "Oh ! Un badge de sécurité. Il s'agit du numéro 809.",
    picture: "/Scene1/badge809.png",
    alt: "badge de sécurité",
    inventory: false,
    x: 72,
    y: 63,
    largeur: 30,
    indice: true,
  },
  {
    id: 4,
    name: "clef de machine à sous",
    sound: "static1/scene1/sc1id4.mp3",
    subtitles: "Cette clef permet d'ouvrir la machine à sous numéro 679.",
    picture: "/Scene1/clé679.png",
    alt: "clef de machine à sous",
    inventory: false,
    x: 25,
    y: 65,
    largeur: 23,
    indice: true,
  },
  {
    id: 5,
    name: "dé truqué",
    sound: "static1/scene1/sc1id5.mp3",
    subtitles:
      "Ce dé n’est pas comme les autres. Il semble truqué pour tomber perpétuellement sur le 2.",
    picture: "/Scene1/dé.png",
    alt: "dé truqué",
    inventory: false,
    x: 82,
    y: 71,
    largeur: 25,
    indice: true,
  },
  // Objets Autres
  {
    id: 6,
    name: "caméra",
    sound: "static1/scene1/sc1id6.mp3",
    subtitles: "J'ai comme l'impression d'être observé...",
    picture: "/Scene1/caméra.png",
    alt: "caméra",
    inventory: false,
    x: 65,
    y: 35,
    largeur: 23,
    indice: false,
  },
  {
    id: 7,
    name: "cendrier contenant un cigare",
    sound: "static1/scene1/sc1id7.mp3",
    subtitles:
      "KOF ! KOF ! Berk ! Ce cendrier contient un cigare encore fumant. Oh non, elles sont toutes noires maintenant ! Pourquoi j'ai mis les mains dedans, moi...",
    picture: "/Scene1/CendierCigare.png",
    alt: "cendrier contenant un cigare",
    inventory: false,
    x: 40,
    y: 55.5,
    largeur: 22,
    indice: false,
  },
  {
    id: 8,
    name: "sac de jetons",
    sound: "static1/scene1/sc1id8.mp3",
    subtitles:
      "Il y a un bon paquet de jetons là-dedans... Ce sac sera bientôt à moi et.. ET JE SERAIS RIIIICHE ! MOUHIHAHAHAHAHA !",
    picture: "/Scene1/SacJetons.png",
    alt: "sac de jetons",
    inventory: false,
    x: 72,
    y: 56,
    largeur: 32,
    indice: false,
  },
  {
    id: 9,
    name: "billets de banque",
    sound: "static1/scene1/sc1id9.mp3",
    subtitles:
      "Il faut que je remporte ces billets... Ca épongerai un peu mes dettes. Sinon, je pourrais aussi les rejouer pour gagner plus ? Oui. Bonne idée, je vais faire ça !",
    picture: "/Scene1/BilletBanque.png",
    alt: "billets de banque",
    inventory: false,
    x: 60,
    y: 49.7,
    largeur: 20,
  },
  {
    id: 10,
    name: "bouteille d'alcool fort",
    sound: "static1/scene1/sc1id10.mp3",
    subtitles:
      "Voyons voir.. que dit l'étiquette ? QUOI ? 90 DEGRES ? MAIS C'EST DU GEL HYDRO, PAS DE L'ALCOOL !",
    picture: "/Scene1/BouteilleAlcool.png",
    alt: "bouteille d'alcool fort",
    inventory: false,
    x: 92,
    y: 34.5,
    largeur: 35,
    indice: false,
  },
  {
    id: 11,
    name: "verre à cocktail",
    sound: "static1/scene1/sc1id11.mp3",
    subtitles:
      "Un sex on the beach, oh yeah baby.. ! Ahah, je devrais en commander un pour Mary. Elle adore ça.",
    picture: "/Scene1/VerreCocktail.png",
    alt: "verre à cocktail",
    inventory: false,
    x: 38,
    y: 45,
    largeur: 30,
    indice: false,
  },
  {
    id: 12,
    name: "livre de comptes du casino",
    sound: "static1/scene1/sc1id12.mp3",
    subtitles:
      "WOAAAAAW LES ENFOIRES ! Ils brassent un max ! Le livre de compte parle de lui-même !",
    picture: "/Scene1/livreCompte.png",
    alt: "livre de comptes du casino",
    inventory: false,
    x: 60,
    y: 65,
    largeur: 30,
    indice: false,
  },
  {
    id: 13,
    name: "roulette",
    sound: "static1/scene1/sc1id13.mp3",
    subtitles: "Gagner à la roulette pourrait me sortir de la merde !",
    picture: "/Scene1/roulette.png",
    alt: "roulette",
    inventory: false,
    x: 74.7,
    y: 63,
    largeur: 110,
    indice: false,
  },
  {
    id: 14,
    name: "boîte de Xanax",
    sound: "static1/scene1/sc1id14.mp3",
    subtitles: "Un Xanax et ça repart !",
    picture: "/Scene1/Xanax.png",
    alt: "boîte de Xanax",
    inventory: false,
    x: 11.5,
    y: 59.5,
    largeur: 38,
  },
  {
    id: 15,
    name: "cadenas",
    subtitles: "Je devrais encore continuer d'explorer la salle...",
    sound: "static1/scene1/sc1id15.mp3",
    picture: "/Scene1/padlock-303266_1280.png",
    alt: "cadenas",
    code: 679108092,
    inventory: false,
    x: 52.3,
    y: 51.5,
    largeur: 25,
    indice: false,
    dechiffrage: "_ _ _ - _ _ - _ _ _ - _",
  },
];

const scene2 = [
  // Indice 3D
  {
    id: 100,
    name: "canne",
    sound: "static1/scene2/sc2id1.mp3",
    subtitles: "...Mmmmmh.. Une vieille canne ?", // Dans le style de Homer Simpsons et son "Mmmmmh Donuts".
    picture: "/Scene2/canne.png",
    alt: "canne",
    inventory: true,
    x: 15,
    y: 49,
    largeur: 170,
    splineUrl: "https://prod.spline.design/nZVPf8N8YanFoqhn/scene.splinecode",
  },
  // Indice
  {
    id: 2,
    name: "roulette",
    sound: "static1/scene2/sc2id2.mp3",
    subtitles: "Tiens ? Cette roulette semble différente de tout à l'heure...",
    picture: "/Scene1/roulette.png",
    splineUrl: "/Scene2/roulette.png",
    alt: "roulette",
    inventory: false,
    x: 72,
    y: 55,
    largeur: 80,
    indice: true,
    decryptage: true,
    imgSrc: "/Scene2/Alberti.png",
  },
  //  Objets Autres
  {
    id: 3,
    name: "lunettes de soleil fashion",
    sound: "static1/scene2/sc2id3.mp3",
    subtitles:
      "On dirait celles de Mary. Ca signifie qu'elle est ici ?! Oh non, elle ne doit pas me voir ici !",
    picture: "/Scene2/lunette.png",
    alt: "lunettes de soleil fashion",
    inventory: false,
    x: 10,
    y: 69.5,
    largeur: 40,
  },
  {
    id: 4,
    name: "cigare",
    sound: "static1/scene2/sc2id4.mp3",
    subtitles:
      "Ma parole, ils fument tous le cigare ici ou quoi ? Et puis, je croyais que c'était devenu interdit dans les lieux publics ! Orh !",
    picture: "/Scene2/cigare.png",
    alt: "cigare",
    inventory: false,
    x: 25,
    y: 70,
    largeur: 30,
  },
  {
    id: 5,
    name: "radio",
    sound: "static1/scene2/sc2id5.mp3",
    subtitles: "[MUSIQUE ENFANTINE]",
    picture: "/Scene2/radio.png",
    alt: "radio",
    inventory: false,
    x: 64,
    y: 64,
    largeur: 53,
  },
  {
    id: 6,
    name: "panneau où il est écrit EN PANNE",
    sound: "static1/scene2/sc2id6.mp3",
    subtitles:
      "Une panne.. ça arrive à tout le monde ! [RIRES] Plus sérieusement, c'est un peu vétuste ici, non ?",
    picture: "/Scene2/EnPanne.png",
    alt: "panneau où il est écrit EN PANNE",
    inventory: false,
    x: 53,
    y: 53,
    largeur: 80,
  },
  // {
  //   id: 7,
  //   name: "lumière vascillante",
  //   sound: "static1/scene2/sc2id7.mp3",
  //   subtitles:
  //     "[VOIX TREMBLANTE] Eh ! M'sieur l'personnel... ? Il faut changer les ampoules... hein... ? J'ai peur du noir, moi...",
  //   picture: "INSERER LE PATH DE L IMAGE",
  //   alt: "lumière vascillante",
  //   inventory: false,
  //   x: 35,
  //   y: 55,
  //   largeur: 20,
  // },
  {
    id: 8,
    name: "plante fânée",
    sound: "static1/scene2/sc2id8.mp3",
    subtitles: "pauvre plante ...",
    picture: "/Scene2/PlanteFanée.png",
    alt: "plante fânée",
    inventory: false,
    x: 43,
    y: 52,
    largeur: 65,
  },
  {
    id: 9,
    name: "sculpture étrange",
    sound: "static1/scene2/sc2id9.mp3",
    subtitles: "Je crois que je ne comprendrais jamais l'art.",
    picture: "/Scene2/Sculpture.png",
    alt: "sculpture étrange",
    inventory: false,
    x: 36,
    y: 38.5,
    largeur: 100,
  },
  {
    id: 10,
    name: "tableau de l'as de pique",
    sound: "static1/scene2/sc2id10.mp3",
    subtitles: "Argh ! Rien de plus stressant qu'un tableau pas droit !",
    picture: "/Scene2/TableauPenché.png",
    alt: "tableau d'un as de pique pas droit",
    inventory: false,
    x: 84,
    y: 30,
    largeur: 165,
  },
  {
    id: 11,
    name: "verre de whisky",
    sound: "static1/scene2/sc2id11.mp3",
    subtitles: "Mettez moi juste un doigt !",
    picture: "/Scene2/VerreWhisky.png",
    alt: "verre de whisky",
    inventory: false,
    x: 8,
    y: 75,
    largeur: 55,
  },
  {
    id: 12,
    name: "caméra",
    sound: "static1/scene2/sc2id12.mp3",
    subtitles: "... Ils nous observent.",
    picture: "/Scene1/caméra.png",
    alt: "caméra",
    inventory: false,
    x: 66,
    y: 30,
    largeur: 25,
    indice: true,
  },
  {
    id: 15,
    name: "cadenas",
    subtitles: "Je devrais encore continuer d'explorer la salle...",
    picture: "/Scene1/padlock-303266_1280.png",
    sound: "static1/scene2/sc2id15.mp3",
    alt: "cadenas",
    code: "Quinte flush royale",
    inventory: false,
    x: 46.95,
    y: 47.7,
    largeur: 20,
    dechiffrage: "qjx ojzc xtsy kfnyx",
  },
];

const scene3 = [
  // Indice 3D
  {
    id: 200,
    name: "trousse a pharmacie",
    sound: "static1/scene3/sc3id1.mp3",
    subtitles:
      "Je suis pas fan de ce genre de boîtes... Pour autant, celle-ci semble différente.",
    picture: "/Scene3/trousse-secours.png",
    splineUrl: "https://prod.spline.design/ikl9LuKio4ff063r/scene.splinecode",
    alt: "trousse a pharmacie",
    inventory: true,
    x: 31.8,
    y: 65,
    largeur: 80,
  },
  // Indices à ouvrir dans une modale
  {
    id: 2,
    name: "rapports de sécurité",
    sound: "static1/scene3/sc3id2.mp3",
    subtitles:
      "Les rapports de sécurité du casino... C'est pas très rassurants.",
    picture: "/Scene3/RapportSecurité.png",
    alt: "rapports de sécurité",
    inventory: false,
    x: 10,
    y: 93,
    largeur: 60,
    indice: true,
    decryptage: true,
    imgSrc: "/Scene3/Pigpen.png",
  },
  {
    id: 3,
    name: "fiche de réservation d'hôtel",
    sound: "static1/scene3/sc3id3.mp3",
    subtitles:
      "Un Casino hôtel ? Ils sont complets, et même en sureffectifs...",
    picture: "/Scene3/ReservationHotel.png",
    alt: "fiche de réservation d'hôtel",
    inventory: false,
    x: 77,
    y: 82.5,
    largeur: 50,
    indice: true,
    decryptage: true,
    imgSrc: "/Scene3/Pigpen.png",
  },
  {
    id: 4,
    name: "uniforme infirmier",
    sound: "static1/scene3/sc3id4.mp3",
    subtitles: "Eh mais, c'est l'uniforme des employés du casino, non ?",
    picture: "/Scene3/UniformeInfirmier.png",
    alt: "uniforme infirmier",
    inventory: false,
    x: 44.9,
    y: 49.4,
    largeur: 30,
    indice: true,
    decryptage: true,
    imgSrc: "/Scene3/Pigpen.png",
  },
  {
    id: 5,
    name: "tableau hospitalier",
    sound: "static1/scene3/sc3id5.mp3",
    subtitles:
      "Les médecins écrivent toujours en langage codés ahah.. Tiens, pourquoi je parle de médecins, moi ?",
    picture: "/Scene3/TableauHospitalier.png",
    alt: "tableau hospitalier",
    inventory: false,
    x: 87,
    y: 35,
    largeur: 220,
    indice: true,
    decryptage: true,
    imgSrc: "/Scene3/Pigpen.png",
  },
  // Objets Autres
  {
    id: 6,
    name: "livre sur les probabilités",
    sound: "static1/scene3/sc3id6.mp3",
    subtitles:
      "Un livre sur les probabilités... Elles sont infimes. Ce sont EUX, les tricheurs.",
    picture: "/Scene3/LivreProba.png",
    alt: "livre sur les probabilités",
    inventory: false,
    x: 75,
    y: 61,
    largeur: 40,
  },
  {
    id: 7,
    name: "verre de cocktail",
    sound: "static1/scene3/sc3id7.mp3",
    subtitles: "KLING KLING KLING Tchin tchin la compagnie !",
    picture: "/Scene3/VerreCocktail.png",
    alt: "verre de cocktail",
    inventory: false,
    x: 60,
    y: 56,
    largeur: 28,
  },
  {
    id: 8,
    name: "verre de whisky",
    sound: "static1/scene3/sc3id8.mp3",
    subtitles: "Garçon ! Encore un doigt !",
    picture: "/Scene2/VerreWhisky.png",
    alt: "verre de whisky",
    inventory: false,
    x: 50,
    y: 59.5,
    largeur: 25,
  },
  {
    id: 9,
    name: "bouteille d'alcool",
    sound: "static1/scene3/sc3id9.mp3",
    subtitles: "Et un p'tit coup pour bibi à la santé de Mary !",
    picture: "/Scene3/BouteilleAlcool.png",
    alt: "bouteille d'alcool",
    inventory: false,
    x: 52,
    y: 57,
    largeur: 25,
  },
  {
    id: 10,
    name: "stéthoscope",
    sound: "static1/scene3/sc3id10.mp3",
    subtitles: "[BRUITS DE BATTEMENTS DE COEUR]",
    picture: "/Scene3/Stétoscope.png",
    alt: "stéthoscope",
    inventory: false,
    x: 22,
    y: 80,
    largeur: 50,
  },
  {
    id: 11,
    name: "paquet de cartes",
    sound: "static1/scene3/sc3id11.mp3",
    subtitles: "J'ai une Quinte Flush Royale. Je bluff ou pas ?",
    picture: "/Scene3/PaquetCarte.png",
    alt: "paquet de cartes",
    inventory: false,
    x: 28,
    y: 77,
    largeur: 30,
  },
  {
    id: 12,
    name: "lunettes de soleil",
    sound: "static1/scene3/sc3id12.mp3",
    subtitles: "Encore ici ?",
    picture: "/Scene2/lunette.png",
    alt: "lunettes de soleil",
    inventory: false,
    x: 53.5,
    y: 60,
    largeur: 25,
  },
  {
    id: 13,
    name: "dettes de jeu",
    sound: "static1/scene3/sc3id13.mp3",
    subtitles:
      "Des dettes de jeu au nom de... Gerard Hadd... Hey, mais c'est moi, ça !",
    picture: "/Scene3/DettesJeu.png",
    alt: "dettes de jeu",
    inventory: false,
    x: 20,
    y: 70.5,
    largeur: 40,
  },
  {
    id: 14,
    name: "pillulier",
    sound: "static1/scene3/sc3id14.mp3",
    subtitles: "NON ! PAS LES PILLULES !",
    picture: "/Scene3/Pilulier.png",
    alt: "pillulier",
    inventory: false,
    x: 68,
    y: 72,
    largeur: 27,
  },
  {
    id: 15,
    name: "camera",
    sound: "static1/scene3/sc3id15.mp3",
    subtitles:
      "Ils ne veulent pas me laisser tranquille... Ils nous surveillent tout le temps... TOUT LE TEMPS !!!",
    picture: "/Scene3/caméra.png",
    alt: "camera",
    inventory: false,
    x: 68,
    y: 37,
    largeur: 30,
  },
  {
    id: 16,
    name: "cadenas",
    sound: "static1/scene3/sc3id16.mp3",
    subtitles: "Je devrais encore continuer d'explorer la salle...",
    picture: "/Scene1/padlock-303266_1280.png",
    alt: "cadenas",
    code: "Psychiatrie",
    inventory: false,
    x: 28.5,
    y: 59.8,
    largeur: 30,
    dechiffrage: "/Scene3/Pigpen.png",
  },
];

const scene4 = [
  // Indice 3D
  {
    id: 300,
    name: "alliance",
    sound: "static1/scene4/sc4id1.mp3",
    subtitles: "[VOIX TRISTE] Mais... Mais c'est l'alliance de Mary... ? SNIF",
    picture: "/Scene4/alliance.png",
    splineUrl: "https://prod.spline.design/AqJQTyW7yiQYWQ2d/scene.splinecode",
    alt: "alliance",
    inventory: true,
    x: 25.7,
    y: 77.2,
    largeur: 30,
  },
  // Indices
  {
    id: 2,
    name: "sac à main de Mary",
    sound: "static1/scene4/sc4id2.mp3",
    subtitles:
      "Le sac à main de Mary... Qu'est ce qu'il fait là.. Et ? Oh, il y a une note dedans... !",
    picture: "/Scene4/sac-a-main.png",
    alt: "sac à main de Mary",
    inventory: false,
    x: 63,
    y: 68,
    largeur: 90,
    indice: true,
    decryptage: true,
    imgSrc: "/Scene3/tripoli.png",
  },
  {
    id: 3,
    name: "affiche murale",
    sound: "static1/scene4/sc4id3.mp3",
    subtitles: "C'est quoi ce charabia sur le mur ? Je devrais m'y pencher...",
    picture: "/Scene4/ecritureMur.png",
    alt: "affiche murale",
    inventory: false,
    x: 30,
    y: 40,
    largeur: 30,
    indice: true,
  },
  // {
  //   id: 3,
  //   name: "affiche murale",
  //   sound: "INSERER LE PATH DE L AUDIO",
  //   subtitles: "C'est quoi ce charabia sur le mur ? Je devrais m'y pencher...",
  //   picture: "/Scene4/ecritureMur.png",
  //   alt: "affiche murale",
  //   inventory: false,
  //   x: 30,
  //   y: 40,
  //   largeur: 30,
  //   indice: true,
  //   decryptage: true,
  //   imgSrc: "/Scene3/tripoli.png",
  // },

  // Objets Autres
  {
    id: 4,
    name: "cadre photo de Mary",
    sound: "",
    subtitles: "[VOIX TRISTE] Une photo de Mary... Elle est si belle...",
    picture: "/Scene4/portrait.png",
    alt: "cadre photo de Mary",
    inventory: false,
    x: 36,
    y: 40,
    largeur: 125,
  },
  {
    id: 5,
    name: "paquet de cartes",
    sound: "static1/scene4/sc4id5.mp3",
    subtitles:
      "Une petite partie de Poker ? Allez mise tapis... Je te suis. Mais je vais gagner... Hihihihihihihihihihihi !",
    picture: "/Scene4/PaquetCarte.png",
    alt: "paquet de cartes",
    inventory: false,
    x: 42,
    y: 80,
    largeur: 40,
  },
  {
    id: 6,
    name: "un poulet en peluche",
    sound: "static1/scene4/sc4id6.mp3",
    subtitles:
      "EH MAIS ! Je le reconnait, lui.. c'est Abdou ! Ma peluche poulet d'enfance !",
    picture: "/Scene4/Poulet.png",
    alt: "un poulet en peluche",
    inventory: false,
    x: 73,
    y: 70,
    largeur: 30,
  },
  {
    id: 7,
    name: "un chat en peluche",
    sound: "static1/scene4/sc4id7.mp3",
    subtitles: "Ce chat... C'est Alex, ma peluche kitten d'un chat.",
    picture: "/Scene4/Chat.png",
    alt: "un chat en peluche",
    inventory: false,
    x: 32,
    y: 58.5,
    largeur: 30,
  },
  {
    id: 8,
    name: "radio",
    sound: "static1/scene4/sc4id8.mp3",
    subtitles: "[HURLEMENTS ET RIRES INQUIETANTS PROVENANT DE LA RADIO]",
    picture: "/Scene4/radio.png",
    alt: "radio",
    inventory: false,
    x: 41.5,
    y: 55.5,
    largeur: 30,
  },
  {
    id: 9,
    name: "sac de jetons",
    sound: "static1/scene4/sc4id9.mp3",
    subtitles: "Les jetons.. Plein de jetons.. A moi...",
    picture: "/Scene4/SacJetons.png",
    alt: "sac de jetons",
    inventory: false,
    x: 71,
    y: 49,
    largeur: 30,
  },
  {
    id: 10,
    name: "caméra",
    sound: "static1/scene4/sc4id10.mp3",
    subtitles: "[HURLEMENT D'AGACEMENT] ARRÊTEZ DE ME REGARDER !!!",
    picture: "/Scene4/caméra.png",
    alt: "caméra",
    inventory: false,
    x: 61,
    y: 35,
    largeur: 25,
  },
  {
    id: 15,
    name: "cadenas",
    sound: "static1/scene4/sc4id15.mp3",
    subtitles: "Je devrais encore continuer d'explorer la salle...",
    picture: "/Scene1/padlock-303266_1280.png",
    alt: "cadenas",
    code: "DESCENTE AUX ENFERS",
    inventory: false,
    x: 51.2,
    y: 53.5,
    largeur: 25,
    dechiffrage: "45135525 136 556591",
  },
];

const scene5 = [
  // Indices 3D
  {
    id: 400,
    name: "bouquet de fleurs",
    sound: "",
    subtitles:
      "Je.. Je reconnais ces fleurs.. C'est.. SNIF C'est celles que j'ai offert à Mary avant.. Avant que.. [SANGLOTS]",
    picture: "/Scene5/bouquet.png",
    splineUrl: "https://prod.spline.design/0BHRL1GB1ewQkGAw/scene.splinecode",
    alt: "bouquet de fleurs",
    inventory: true,
    x: 43.5,
    y: 42.6,
    largeur: 60,
  },
  // Indices
  {
    id: 2,
    name: "radio",
    sound: "",
    subtitles:
      "[AUDIO ETRANGE CODE: . _ _ _ _ ; . . . . _ ; . . _ _ _ ; _ _ _ _ _ ]",
    picture: "/Scene5/radio.png",
    alt: "radio",
    inventory: false,
    x: 93.5,
    y: 62.5,
    largeur: 70,
    indice: true,
  },
  {
    id: 3,
    name: "tombe de Mary",
    sound: "static1/scene5/sc5id3.mp3",
    subtitles:
      "La tombe de Mary... un lieu de repos éternel qui me semble si lointain. Un beau jour, je te retrouverai, douce Mary. Hein ?! Quelque chose est gravé derrière la stèle !",
    picture: "/Scene5/tombe.png",
    alt: "tombe de Mary",
    inventory: false,
    x: 55,
    y: 57,
    largeur: 150,
    indice: true,
  },
  // Objets Autres
  {
    id: 4,
    name: "certificat de décès de Mary Hadd",
    sound: "static1/scene5/sc5id4.mp3",
    subtitles:
      "C'est le certificat de décès de Mary... [SANGLOTS] ... Elle me manque tellement, ma petite femme...",
    picture: "/Scene5/certificatDece.png",
    alt: "certificat de décès de Mary Hadd",
    inventory: false,
    x: 60,
    y: 68,
    largeur: 50,
    decryptage: true,
    imgSrc: "/Scene5/morse.png",
  },
  {
    id: 5,
    name: "lettre d'interdiction des Casinos",
    sound: "static1/scene5/sc5id5.mp3",
    subtitles:
      "Une lettre : Cher Monsieur Hadd, nous vous informons que vous êtes désormais interdit de Casino en raison de trop nombreuses dettes de jeu... [SOUPIR] Tss quels rabats joie. J'aurais pu rembourser tout ça et faire même du profit avec un dernier poker...",
    picture: "/Scene5/RadiéCasino.png",
    alt: "lettre d'interdiction des Casinos",
    inventory: false,
    x: 30,
    y: 65.5,
    largeur: 40,
  },
  {
    id: 6,
    name: "pistolet",
    sound: "static1/scene5/sc5id6.mp3",
    subtitles:
      "N... Non... Je le reconnaît. C'est avec cette arme que j'ai essayé... ... Je suis trop faible... J'ai tout raté.. Même ma mort, je l'ai ratée.. !",
    picture: "/Scene5/flinge.png",
    alt: "pistolet",
    inventory: false,
    x: 25,
    y: 65,
    largeur: 60,
  },
  {
    id: 7,
    name: "sac de jetons",
    sound: "static1/scene5/sc5id47.mp3",
    subtitles:
      "Un sac de jetons... vestige d'une époque où tout était plus beau.",
    picture: "/Scene5/SacJetons.png",
    alt: "sac de jetons",
    inventory: false,
    x: 80,
    y: 80,
    largeur: 50,
  },
  {
    id: 8,
    name: "caméra de surveillance",
    sound: "static1/scene5/sc5id8.mp3",
    subtitles:
      "Cette caméra... me regarde-t-elle depuis le début? Enregistre-t-elle ma descente aux enfers? Ou.. Peut-être que c'est moi qui la regade, non... ?",
    picture: "/Scene5/caméra.png",
    alt: "caméra de surveillance",
    inventory: false,
    x: 65.5,
    y: 35.5,
    largeur: 25,
  },
  {
    id: 9,
    name: "résultats d'analyses de psychiatrie",
    sound: "static1/scene5/sc5id9.mp3",
    subtitles:
      "Il est écrit que Monsieur Gérars Hadd est atteint de troubles psychologiques atypique et d'une addiction aux jeux... [RIRE MALSAIN] Quel nase ce Gérard ! [CRI INQUIETANT] TAIS TOI ! TAIS TOI , NE M'INSULTE PAS !",
    picture: "/Scene5/analyse.png",
    alt: "résultats d'analyses de psychiatrie",
    inventory: false,
    x: 50,
    y: 42,
    largeur: 40,
  },
  {
    id: 10,
    name: "ballon de clown",
    sound: "static1/scene5/sc5id10.mp3",
    subtitles: "[HURLEMENT]",
    picture: "/Scene5/ballonClown.png",
    alt: "ballon de clown",
    inventory: false,
    x: 18,
    y: 56,
    largeur: 70,
  },
  {
    id: 11,
    name: "paquet de cartes",
    sound: "static1/scene5/sc5id11.mp3",
    subtitles:
      "J'aimerais tant pouvoir rejouer une dernière fois... J'aimerais jouer avec Mary dans un véritable Casino...",
    picture: "/Scene5/PaquetCarte.png",
    alt: "paquet de cartes",
    inventory: false,
    x: 20,
    y: 79,
    largeur: 30,
  },
  {
    id: 12,
    name: "photo de mariage de Mary et Gérard",
    sound: "static1/scene5/sc5id12.mp3",
    subtitles:
      "La photo de mon mariage avec Mary... Mary et Gerard Hadd.. Nous avons été si heureux. Désormais, cette photo ,ne reflète que l'écho de ma propre douleur.. SNIF",
    picture: "/Scene5/photoMariage.png",
    alt: "photo de mariage de Mary et Gérard",
    inventory: false,
    x: 57.5,
    y: 37,
    largeur: 80,
  },
  {
    id: 13,
    name: "stéthoscope",
    sound: "static1/scene5/sc5id13.mp3",
    subtitles:
      "Ce stéthoscope... Ils m'examinent tous les jours... Je n'ai pas besoin de ça... Je vais bien, pourtant non.. ?",
    picture: "/Scene3/Stétoscope.png",
    alt: "stéthoscope",
    inventory: false,
    x: 77.5,
    y: 67.5,
    largeur: 60,
  },
  {
    id: 14,
    name: "boîte de Xanax",
    sound: "static1/scene5/sc5id14.mp3",
    subtitles:
      "Je me souviens, maintenant... C'est la boîte de Xanax que j'ai avalée en espérant calmer mes démons intérieurs, en vain...",
    picture: "/Scene5/Xanax.png",
    alt: "boîte de Xanax",
    inventory: false,
    x: 69,
    y: 59,
    largeur: 35,
  },
  {
    id: 15,
    name: "bouteille d'alcool",
    sound: "static1/scene5/sc5id15.mp3",
    subtitles:
      "C'est la bouteille d'alcool que j'ai vidée cette fameuse nuit dernière pour tenter d'oublier... mais rien n'a changé. Non... Rien.",
    picture: "/Scene5/BouteilleAlcool.png",
    alt: "bouteille d'alcool",
    inventory: false,
    x: 56,
    y: 66,
    largeur: 30,
  },
  {
    id: 16,
    name: "cadenas",
    sound: "static1/scene5/sc5id16.mp3",
    subtitles: "Je devrais encore continuer d'explorer la salle...",
    picture: "/Scene1/padlock-303266_1280.png",
    alt: "cadenas",
    code: "ASILE",
    inventory: false,
    x: 53.1,
    y: 48,
    largeur: 20,
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
