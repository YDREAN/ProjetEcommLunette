// Définition du type Lunette
export type Lunette = {
  image: string;
  nom: string;
  description: string;
  prix: number;
};

// Fonction pour générer une URL d'image
const genererUrlImage = (index: number): string => {
  return `./src/assets/lunettePhoto/Lun${index
    .toString()
    .padStart(2, "0")}.png`;
};

// Fonction pour générer un prix aléatoire entre min et max
const genererPrix = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

// Tableau de noms et descriptions pour les lunettes
const nomsEtDescriptions: { nom: string; description: string }[] = [
  {
    nom: "Vista",
    description:
      "Voir le monde à travers Vista, c'est redécouvrir la beauté cachée.",
  },
  {
    nom: "Aura",
    description: "Avec Aura, révélez votre présence où que vous alliez.",
  },
  {
    nom: "Myst",
    description: "Myst: un mystère que seul votre regard peut résoudre.",
  },
  {
    nom: "Eclipse",
    description: "Chaque détail devient clair sous l'Eclipse.",
  },
  {
    nom: "Spectra",
    description: "Spectra illumine votre vue avec des couleurs spectaculaires.",
  },
  {
    nom: "Nova",
    description: "Nova, une vision novatrice pour l'explorateur moderne.",
  },
  {
    nom: "Lunar",
    description: "Soyez lunatique avec Lunar, le choix des rêveurs.",
  },
  { nom: "Sol", description: "Rayonnez comme le soleil avec Sol." },
  { nom: "Orbit", description: "Gravitez vers le style avec Orbit." },
  { nom: "Galaxy", description: "Explorez l'infini avec Galaxy." },
  {
    nom: "Nebula",
    description:
      "Nebula: pour ceux qui ne veulent pas juste voir, mais observer.",
  },
  {
    nom: "Comet",
    description: "Comet apporte une touche d'éclat à votre quotidien.",
  },
  {
    nom: "Astra",
    description: "Astra, pour une vue aussi vaste que le cosmos.",
  },
  { nom: "Cosmo", description: "Plongez dans un univers de style avec Cosmo." },
  {
    nom: "Vision",
    description: "Élevez votre vision à de nouveaux sommets avec Vision.",
  },
  { nom: "Scope", description: "Avec Scope, chaque détail compte." },
  {
    nom: "Lens",
    description: "Clarté et style, c'est ce que Lens vous offre.",
  },
  { nom: "Frame", description: "Encadrez votre monde avec Frame." },
  {
    nom: "Glimpse",
    description:
      "Un simple coup d'œil à Glimpse suffit pour capturer l'attention.",
  },
  {
    nom: "Sight",
    description: "Pour ceux qui cherchent à voir au-delà, Sight est là.",
  },
  { nom: "Mirror", description: "Refletez votre style avec Mirror." },
  { nom: "Glass", description: "Glass, la clarté dans chaque vision." },
  {
    nom: "Focus",
    description: "Restez concentré sur ce qui compte avec Focus.",
  },
  { nom: "Peak", description: "Atteignez le sommet du style avec Peak." },
  { nom: "Look", description: "Changez votre perspective avec Look." },
  { nom: "View", description: "View, une fenêtre sur votre monde." },
];

// Création du tableau de lunettes
export const lunettes: Lunette[] = nomsEtDescriptions.map((item, index) => ({
  image: genererUrlImage(index + 1),
  nom: item.nom,
  description: item.description,
  prix: "$" + genererPrix(30, 220),
}));
