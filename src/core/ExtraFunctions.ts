import { StatusCharacter } from "./Enums";

export const getBadgeClass = (status: keyof typeof StatusCharacter) => {
  switch (status) {
    case "Alive":
      return "bg-success";
    case "Dead":
      return "bg-danger";
    case "unknown":
      return "bg-secondary";
    default:
      return "bg-secondary";
  }
};

const translations: Record<string, string> = {
  unknown: "Desconhecido",
  "Earth (Replacement Dimension)": "Terra (Dimensão de Substituição)",
  "Earth (Evil Rick's Target Dimension)": "Terra (Dimensão Alvo do Mal Rick)",
  "Bird World": "Mundo dos Pássaros",
  "Post-Apocalyptic Earth": "Terra Pós-Apocalíptica",
  "Purge Planet": "Planeta Purge",
  "Fantasy World": "Mundo de Fantasia",
  "Rick's Battery Microverse": "Bateria Microverso de Rick",
  "The Menagerie": "O zoológico",
  "Hideout Planet": "Planeta Esconderijo",
  "Giant's Town": "Cidade do Gigante",
  "Unity's Planet": "Planeta da Unidade",
  "Anatomy Park": "Parque de Anatomia",
  "Roy: A Life Well Lived": "Roy: uma vida bem vivida",
  "Resort Planet": "Planeta resort",
  "Hamster in Butt World": "Hamster no mundo da bunda",
  "Earth (Giant Telepathic Spiders Dimension)": "Terra (Dimensão das Aranhas Telepáticas Gigantes)",
  "Kyle's Teenyverse": "O Teenyverso de Kyle",
  "Mr. Goldenfold's dream": "O sonho do Sr. Goldenfold",
  "Earth (Fascist Dimension)": "Terra (Dimensão Fascista)",
  "Mega Gargantuan Kingdom": "Reino Mega Gigantesco",
  "Gear World": "Mundo das Engrenagens",
  "Interdimensional Cable": "Cabo Interdimensional",
  "Snuffles' Dream": "Sonho de Snuffles",
  "Greasy Grandma World": "Mundo gorduroso da vovó",
  "Earth (Pizza Dimension)": "Terra (Dimensão Pizza)",
  "Earth (Phone Dimension)": "Terra (dimensão do telefone)",
  "Earth (Chair Dimension)": "Terra (dimensão da cadeira)",
  "Testicle Monster Dimension": "Dimensão do Monstro Testículo",
  "Citadel of Ricks": "Cidadela de Rick",
  "Earth (Fascist Shrimp Dimension)": "Terra (Dimensão do Camarão Fascista)",
  "Earth (Tusk Dimension)": "Terra (Dimensão da Presa)",
  "Earth (Fascist Teddy Bear Dimension)": "Terra (Dimensão Fascista do Ursinho de Pelúcia)",
  "Mount Olympus": "Monte Olimpo",
  "Earth (Wasp Dimension)": "Terra (Dimensão da Vespa)",
  "Heistotron Base": "Base Heistotron",
  "Snake Planet": "Planeta Cobra",
  "Non-Diegetic Alternative Reality": "Realidade Alternativa Não-Diegética",
  "Tickets Please Guy Nightmare": "Ingressos por favor Garoto Pesadelo",
  "Story Train": "História do Trem",
  "Morty’s Story": "A história de Morty",
  "Ricks’s Story": "A história de Rick",
  "Glorzo Asteroid": "Asteroide Glorzo",
  "Near-Duplicate Reality": "Realidade quase duplicada",
  "Merged Universe": "Universo Mesclado",
  "The Ocean": "O oceano",
  "Narnia Dimension": "Dimensão de Nárnia",
  "Elemental Rings": "Anéis Elementais",
  Hell: "Inferno",
  "Space Tahoe": "Espaço Tahoe",
  France: "França",
  "Birdperson's Consciousness": "Consciência do Birdperson",
  "Avian Planet": "Planeta Aviário",
  "Normal Size Bug Dimension": "Dimensão de inseto de tamanho normal",
  "Rick and Two Crows Planet": "Rick e Dois Corvos Planeta",
  "Earth (Unknown dimension)": "Terra (dimensão desconhecida)",
  Planet: "Planeta",
  Earth: "Terra",
};

export const getOrigin = (origin: string): string => {
  for (const [key, value] of Object.entries(translations)) {
    if (origin.includes(key)) {
      return origin.replace(key, value);
    }
  }

  return origin;
};
