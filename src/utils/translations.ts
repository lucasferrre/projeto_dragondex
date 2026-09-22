const genderTranslations: Record<string, string> = {
  Male: "Masculino",
  Female: "Feminino",
  Other: "Outro",
  Unknown: "Desconhecido",
};

const raceTranslations: Record<string, string> = {
  Human: "Humano",
  Saiyan: "Saiyajin",
  Namekian: "Namekuseijin",
  Majin: "Majin",
  "Frieza Race": "Raça do Freeza",
  Android: "Androide",
  "Jiren Race": "Raça do Jiren",
  God: "Deus",
  Angel: "Anjo",
  Evil: "Entidade maligna",
  Unknown: "Desconhecida",
  Nucleico: "Nucleico",
  "Nucleico benigno": "Nucleico benigno",
};

const affiliationTranslations: Record<string, string> = {
  "Z Fighter": "Guerreiro Z",
  "Red Ribbon Army": "Exército Red Ribbon",
  "Namekian Warrior": "Guerreiro Namekuseijin",
  Freelancer: "Independente",
  "Army of Frieza": "Exército de Freeza",
  "Pride Troopers": "Tropa do Orgulho",
  "Assistant of Vermoud": "Assistente de Vermoud",
  "Assistant of Beerus": "Assistente de Bills",
  "God Assistant of Beerus": "Assistente divino de Bills",
  Villain: "Vilão",
  Other: "Outro",
};

const characterNameTranslations: Record<string, string> = {
  freezer: "Freeza",
  frieza: "Freeza",
  beerus: "Bills",
  "grand priest": "Grande Sacerdote",
  "gran sacerdote": "Grande Sacerdote",
  daishinkan: "Grande Sacerdote",
  krillin: "Kuririn",
  "master roshi": "Mestre Kame",
  "king cold": "Rei Cold",
  "rey cold": "Rei Cold",
  "king vegeta": "Rei Vegeta",
  "rey vegeta": "Rei Vegeta",
  "android 16": "Androide 16",
  "android 17": "Androide 17",
  "android 18": "Androide 18",
  "future trunks": "Trunks do Futuro",
  "trunks del futuro": "Trunks do Futuro",
};

const planetNameTranslations: Record<string, string> = {
  tierra: "Terra",
  earth: "Terra",
  "new namek": "Novo Namek",
  "nuevo namek": "Novo Namek",
  "planeta de zeno": "Planeta do Zeno",
  "zeno planet": "Planeta do Zeno",
  "zeno's planet": "Planeta do Zeno",
  "mundo de zeno": "Planeta do Zeno",
  "planeta de beerus": "Planeta do Bills",
  "beerus planet": "Planeta do Bills",
  "planeta beerus": "Planeta do Bills",
  "planeta de bills": "Planeta do Bills",
  "freezer no 79": "Planeta Freeza nº 79",
  "frieza no 79": "Planeta Freeza nº 79",
  "planeta freezer no 79": "Planeta Freeza nº 79",
};

function normalize(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

export function translateGender(value: string) {
  return genderTranslations[value] ?? value;
}

export function translateRace(value: string) {
  return raceTranslations[value] ?? value;
}

export function translateAffiliation(value: string) {
  return affiliationTranslations[value] ?? value;
}

export function translateCharacterName(value: string) {
  return characterNameTranslations[normalize(value)] ?? value;
}

export function translatePlanetName(value: string) {
  return planetNameTranslations[normalize(value)] ?? value;
}

export function destroyedLabel(isDestroyed: boolean) {
  return isDestroyed ? "Destruído" : "Não destruído";
}
