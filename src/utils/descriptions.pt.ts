// ─────────────────────────────────────────────────────────────────────────────
// descriptions.pt.ts — Conteúdo textual localizado para português (pt-BR).
//
// A Dragon Ball API entrega as descrições narrativas em espanhol. Para evitar
// depender de uma segunda API de tradução, o DragonDex mantém uma base local em
// português. A busca é feita pelo nome normalizado, e não apenas pelo ID, para
// continuar funcionando caso a API altere a ordem dos registros.
//
// Quando surgir um personagem ou planeta novo que ainda não esteja nesta base,
// o aplicativo NÃO exibe espanhol: ele monta uma descrição curta em português
// usando os outros campos retornados pela API.
// ─────────────────────────────────────────────────────────────────────────────

import {
  translateAffiliation,
  translateCharacterName,
  translatePlanetName,
  translateRace,
} from "./translations";

function normalizeKey(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

const characterDescriptions: Record<string, string> = {
  goku: "Goku é um Saiyajin criado na Terra e um dos principais defensores do planeta. Apaixonado por artes marciais, ele está sempre buscando adversários mais fortes e novas formas de superar seus próprios limites.",
  vegeta:
    "Vegeta é o príncipe dos Saiyajins. Orgulhoso e extremamente competitivo, começou como adversário de Goku, mas passou a lutar ao lado dos Guerreiros Z para proteger a Terra e sua família.",
  piccolo:
    "Piccolo é um guerreiro Namekuseijin conhecido por sua inteligência, disciplina e grande habilidade em combate. De antigo inimigo de Goku, tornou-se um dos aliados mais confiáveis dos Guerreiros Z e mentor de Gohan.",
  bulma:
    "Bulma é uma brilhante cientista e inventora da Corporação Cápsula. Sua inteligência e suas criações tecnológicas são fundamentais em diversas aventuras, desde a busca pelas Esferas do Dragão até viagens pelo espaço e pelo tempo.",
  freeza:
    "Freeza é um poderoso imperador espacial e um dos inimigos mais perigosos enfrentados pelos Guerreiros Z. Ele é conhecido por dominar planetas, comandar um grande exército e possuir diversas formas de transformação.",
  frieza:
    "Freeza é um poderoso imperador espacial e um dos inimigos mais perigosos enfrentados pelos Guerreiros Z. Ele é conhecido por dominar planetas, comandar um grande exército e possuir diversas formas de transformação.",
  freezer:
    "Freeza é um poderoso imperador espacial e um dos inimigos mais perigosos enfrentados pelos Guerreiros Z. Ele é conhecido por dominar planetas, comandar um grande exército e possuir diversas formas de transformação.",
  zarbon:
    "Zarbon é um dos principais soldados de Freeza. Elegante e confiante, esconde uma transformação física que aumenta bastante sua força durante as batalhas.",
  dodoria:
    "Dodoria é um dos oficiais de confiança de Freeza. Conhecido por sua força bruta e comportamento agressivo, participa da perseguição aos Namekuseijins durante a saga de Namek.",
  ginyu:
    "Ginyu é o capitão das Forças Especiais Ginyu e um dos soldados de elite de Freeza. Além de sua força, possui a técnica de trocar de corpo com outra pessoa.",
  "capitao ginyu":
    "Ginyu é o capitão das Forças Especiais Ginyu e um dos soldados de elite de Freeza. Além de sua força, possui a técnica de trocar de corpo com outra pessoa.",
  cell: "Cell é um bioandroide criado a partir das células de alguns dos guerreiros mais poderosos. Seu objetivo é alcançar a forma perfeita absorvendo os Androides 17 e 18 e provar sua superioridade em combate.",
  celula:
    "Cell é um bioandroide criado a partir das células de alguns dos guerreiros mais poderosos. Seu objetivo é alcançar a forma perfeita absorvendo os Androides 17 e 18 e provar sua superioridade em combate.",
  gohan:
    "Gohan é o filho mais velho de Goku e Chi-Chi. Apesar de ter uma personalidade pacífica e gostar dos estudos, possui um enorme potencial de luta que aparece principalmente quando precisa proteger seus amigos e sua família.",
  krilin:
    "Kuririn é um artista marcial terrestre e um dos amigos mais antigos de Goku. Mesmo enfrentando adversários muito mais poderosos, destaca-se por sua coragem, inteligência e domínio de técnicas como o Kienzan.",
  kuririn:
    "Kuririn é um artista marcial terrestre e um dos amigos mais antigos de Goku. Mesmo enfrentando adversários muito mais poderosos, destaca-se por sua coragem, inteligência e domínio de técnicas como o Kienzan.",
  krillin:
    "Kuririn é um artista marcial terrestre e um dos amigos mais antigos de Goku. Mesmo enfrentando adversários muito mais poderosos, destaca-se por sua coragem, inteligência e domínio de técnicas como o Kienzan.",
  trunks:
    "Trunks é o filho de Vegeta e Bulma. Talentoso desde criança, herdou a força dos Saiyajins e o conhecimento tecnológico de sua família, tornando-se um lutador muito habilidoso.",
  "future trunks":
    "Trunks do Futuro veio de uma linha temporal devastada para alertar os Guerreiros Z sobre ameaças futuras. É um guerreiro determinado que utiliza espada e poderes Saiyajins para proteger seu mundo.",
  "trunks del futuro":
    "Trunks do Futuro veio de uma linha temporal devastada para alertar os Guerreiros Z sobre ameaças futuras. É um guerreiro determinado que utiliza espada e poderes Saiyajins para proteger seu mundo.",
  goten:
    "Goten é o filho mais novo de Goku e Chi-Chi. Alegre e talentoso, demonstrou desde pequeno uma grande facilidade para lutar e alcançar transformações Saiyajins.",
  gotenks:
    "Gotenks é o guerreiro criado pela fusão de Goten e Trunks por meio da dança Metamoru. Poderoso e criativo, costuma usar técnicas exageradas e imprevisíveis durante as batalhas.",
  vegetto:
    "Vegetto é a fusão de Goku e Vegeta realizada com os brincos Potara. Combina a força e as técnicas dos dois Saiyajins, resultando em um guerreiro extremamente poderoso e confiante.",
  vegito:
    "Vegetto é a fusão de Goku e Vegeta realizada com os brincos Potara. Combina a força e as técnicas dos dois Saiyajins, resultando em um guerreiro extremamente poderoso e confiante.",
  gogeta:
    "Gogeta é a fusão de Goku e Vegeta realizada pela dança Metamoru. Une a experiência de combate e o poder dos dois guerreiros em uma forma de enorme força e velocidade.",
  nail: "Nail é um dos guerreiros mais fortes de Namek e protetor do Grande Patriarca. Sua força e lealdade são importantes durante o confronto contra Freeza.",
  raditz:
    "Raditz é um Saiyajin e irmão mais velho de Goku. Sua chegada à Terra revela as origens Saiyajins de Goku e dá início aos grandes conflitos da saga dos Saiyajins.",
  nappa:
    "Nappa é um guerreiro Saiyajin que chega à Terra ao lado de Vegeta. Seu enorme poder físico faz dele uma ameaça perigosa para os Guerreiros Z no início da saga dos Saiyajins.",
  bardock:
    "Bardock é o pai de Goku e um guerreiro Saiyajin do Planeta Vegeta. Ao perceber a ameaça representada por Freeza, tenta impedir a destruição de seu povo.",
  beerus:
    "Bills é o Deus da Destruição do Universo 7. Possui um poder extraordinário e tem a função de destruir mundos para manter o equilíbrio do universo, sendo acompanhado por seu mestre e assistente Whis.",
  bills:
    "Bills é o Deus da Destruição do Universo 7. Possui um poder extraordinário e tem a função de destruir mundos para manter o equilíbrio do universo, sendo acompanhado por seu mestre e assistente Whis.",
  whis: "Whis é o anjo responsável por acompanhar e treinar Bills. Extremamente poderoso e habilidoso, também atua como mestre de Goku e Vegeta em técnicas divinas.",
  jiren:
    "Jiren é um guerreiro do Universo 11 e integrante das Tropas do Orgulho. Sua disciplina e seu poder excepcional fazem dele um dos adversários mais difíceis do Torneio do Poder.",
  toppo:
    "Toppo é líder das Tropas do Orgulho do Universo 11 e um defensor da justiça. Além de sua grande força, foi escolhido como candidato a futuro Deus da Destruição.",
  dyspo:
    "Dyspo é integrante das Tropas do Orgulho do Universo 11. Sua principal característica é a velocidade extrema, que utiliza para surpreender adversários durante o combate.",
  hit: "Hit é um assassino profissional do Universo 6. É conhecido por sua técnica de salto temporal, que lhe permite manipular pequenos intervalos de tempo durante uma batalha.",
  broly:
    "Broly é um Saiyajin com um potencial de luta excepcional. Seu poder cresce rapidamente durante o combate, tornando-o capaz de enfrentar alguns dos guerreiros mais fortes do universo.",
  "majin buu":
    "Majin Boo é uma criatura mágica de enorme poder criada há muito tempo. Suas diferentes formas apresentam personalidades e níveis de força distintos, variando de um comportamento inocente a uma ameaça extremamente destrutiva.",
  "majin boo":
    "Majin Boo é uma criatura mágica de enorme poder criada há muito tempo. Suas diferentes formas apresentam personalidades e níveis de força distintos, variando de um comportamento inocente a uma ameaça extremamente destrutiva.",
  "kid buu":
    "Kid Boo é a forma mais pura e destrutiva de Majin Boo. Age principalmente por instinto e é capaz de destruir planetas sem hesitação.",
  "kid boo":
    "Kid Boo é a forma mais pura e destrutiva de Majin Boo. Age principalmente por instinto e é capaz de destruir planetas sem hesitação.",
  dabura:
    "Dabura é o rei do Reino dos Demônios e um poderoso servo de Babidi. Além de grande força física e energia, sua saliva pode transformar adversários em pedra.",
  babidi:
    "Babidi é um feiticeiro que utiliza magia para controlar guerreiros e pretende libertar Majin Boo. Sua principal arma é manipular pessoas que possuem maldade em seus corações.",
  "android 16":
    "Androide 16 foi criado pelo Dr. Gero. Apesar de ter sido projetado para eliminar Goku, possui uma personalidade tranquila, aprecia a natureza e demonstra grande respeito pela vida.",
  "androide 16":
    "Androide 16 foi criado pelo Dr. Gero. Apesar de ter sido projetado para eliminar Goku, possui uma personalidade tranquila, aprecia a natureza e demonstra grande respeito pela vida.",
  "android 17":
    "Androide 17 foi modificado pelo Dr. Gero e possui energia praticamente inesgotável. Após os acontecimentos envolvendo Cell, torna-se protetor da natureza e mais tarde participa do Torneio do Poder.",
  "androide 17":
    "Androide 17 foi modificado pelo Dr. Gero e possui energia praticamente inesgotável. Após os acontecimentos envolvendo Cell, torna-se protetor da natureza e mais tarde participa do Torneio do Poder.",
  "android 18":
    "Androide 18 foi modificada pelo Dr. Gero e possui grande poder e energia praticamente inesgotável. Depois de enfrentar os Guerreiros Z, passa a viver na Terra e forma uma família com Kuririn.",
  "androide 18":
    "Androide 18 foi modificada pelo Dr. Gero e possui grande poder e energia praticamente inesgotável. Depois de enfrentar os Guerreiros Z, passa a viver na Terra e forma uma família com Kuririn.",
  "android 19":
    "Androide 19 é uma criação do Dr. Gero construída para combater Goku. Possui a capacidade de absorver energia por dispositivos instalados nas mãos.",
  "androide 19":
    "Androide 19 é uma criação do Dr. Gero construída para combater Goku. Possui a capacidade de absorver energia por dispositivos instalados nas mãos.",
  "dr gero":
    "Dr. Gero é um cientista da antiga Red Ribbon responsável pela criação de vários androides. Motivado por vingança contra Goku, também transforma a si mesmo em um androide.",
  "doctor gero":
    "Dr. Gero é um cientista da antiga Red Ribbon responsável pela criação de vários androides. Motivado por vingança contra Goku, também transforma a si mesmo em um androide.",
  yamcha:
    "Yamcha é um artista marcial terrestre e amigo de longa data de Goku. Começou como um bandido do deserto, mas depois se tornou aliado dos Guerreiros Z e participou de importantes batalhas.",
  "tien shin han":
    "Tenshinhan é um artista marcial extremamente disciplinado. Antigo rival de Goku, tornou-se um aliado confiável e continua treinando para aperfeiçoar suas técnicas.",
  tenshinhan:
    "Tenshinhan é um artista marcial extremamente disciplinado. Antigo rival de Goku, tornou-se um aliado confiável e continua treinando para aperfeiçoar suas técnicas.",
  "ten shin han":
    "Tenshinhan é um artista marcial extremamente disciplinado. Antigo rival de Goku, tornou-se um aliado confiável e continua treinando para aperfeiçoar suas técnicas.",
  chiaotzu:
    "Chaos é o melhor amigo de Tenshinhan e um lutador que utiliza técnicas psíquicas. Mesmo não sendo um dos guerreiros mais poderosos, demonstra grande lealdade aos seus companheiros.",
  chaos:
    "Chaos é o melhor amigo de Tenshinhan e um lutador que utiliza técnicas psíquicas. Mesmo não sendo um dos guerreiros mais poderosos, demonstra grande lealdade aos seus companheiros.",
  "master roshi":
    "Mestre Kame é um lendário mestre de artes marciais e responsável por treinar Goku e Kuririn quando eram jovens. É o criador da famosa técnica Kamehameha.",
  "kame sennin":
    "Mestre Kame é um lendário mestre de artes marciais e responsável por treinar Goku e Kuririn quando eram jovens. É o criador da famosa técnica Kamehameha.",
  "muten roshi":
    "Mestre Kame é um lendário mestre de artes marciais e responsável por treinar Goku e Kuririn quando eram jovens. É o criador da famosa técnica Kamehameha.",
  "chi chi":
    "Chi-Chi é esposa de Goku e mãe de Gohan e Goten. Também é uma habilidosa lutadora e valoriza muito a educação e o bem-estar de sua família.",
  milk: "Chi-Chi é esposa de Goku e mãe de Gohan e Goten. Também é uma habilidosa lutadora e valoriza muito a educação e o bem-estar de sua família.",
  videl:
    "Videl é filha de Mr. Satan e uma talentosa lutadora. Ao conhecer Gohan, aprende a controlar o Ki, passa a voar e participa de diversos acontecimentos ao lado dos Guerreiros Z.",
  pan: "Pan é filha de Gohan e Videl e neta de Goku. Mesmo muito jovem, demonstra grande potencial de luta e herda a força da linhagem Saiyajin.",
  "mr satan":
    "Mr. Satan é um famoso campeão de artes marciais da Terra. Embora não possua o poder dos Guerreiros Z, sua coragem e seu relacionamento com Majin Boo têm papel importante em momentos decisivos.",
  hercule:
    "Mr. Satan é um famoso campeão de artes marciais da Terra. Embora não possua o poder dos Guerreiros Z, sua coragem e seu relacionamento com Majin Boo têm papel importante em momentos decisivos.",
  uub: "Uub é a reencarnação humana da parte maligna de Majin Boo. Possui grande potencial de luta e passa a treinar com Goku para desenvolver suas habilidades.",
  cabba:
    "Cabba é um jovem Saiyajin do Universo 6. Educado e determinado, aprende com Vegeta a despertar o poder de Super Saiyajin durante o torneio entre os universos 6 e 7.",
  caulifla:
    "Caulifla é uma talentosa Saiyajin do Universo 6. Confiante e impulsiva, aprende rapidamente novas transformações e demonstra enorme potencial de combate.",
  kale: "Kale é uma Saiyajin do Universo 6 e grande amiga de Caulifla. Normalmente tímida, possui uma transformação que libera uma quantidade extraordinária de poder.",
  kefla:
    "Kefla é a fusão Potara de Caulifla e Kale. Combina o talento das duas Saiyajins e alcança um nível de poder muito elevado durante o Torneio do Poder.",
  zamasu:
    "Zamasu é um aprendiz de Kaioshin do Universo 10 que desenvolve uma visão radical contra os mortais. Seus planos dão origem a uma das maiores ameaças enfrentadas por Goku e seus aliados.",
  "goku black":
    "Goku Black é um inimigo que utiliza o corpo de Goku como parte do plano de Zamasu. Ele combina técnicas Saiyajins com poder divino e se torna uma grande ameaça para a linha temporal de Trunks do Futuro.",
  "black goku":
    "Goku Black é um inimigo que utiliza o corpo de Goku como parte do plano de Zamasu. Ele combina técnicas Saiyajins com poder divino e se torna uma grande ameaça para a linha temporal de Trunks do Futuro.",
  "fused zamasu":
    "Zamasu Fundido é resultado da fusão de Zamasu com Goku Black pelos brincos Potara. Essa forma reúne poder divino, imortalidade e as capacidades de combate adquiridas no corpo de Goku.",
  "zamasu fusionado":
    "Zamasu Fundido é resultado da fusão de Zamasu com Goku Black pelos brincos Potara. Essa forma reúne poder divino, imortalidade e as capacidades de combate adquiridas no corpo de Goku.",
  champa:
    "Champa é o Deus da Destruição do Universo 6 e irmão gêmeo de Bills. Assim como seu irmão, possui enorme poder e é acompanhado por uma anja responsável por orientá-lo.",
  vados:
    "Vados é a anja assistente de Champa no Universo 6. Possui grande conhecimento, velocidade e poder, além de atuar como mentora do Deus da Destruição.",
  "grand priest":
    "Grande Sacerdote é uma das entidades mais poderosas do multiverso e pai dos anjos. Ele serve diretamente a Zen-Oh e coordena eventos envolvendo os diversos universos.",
  "gran sacerdote":
    "Grande Sacerdote é uma das entidades mais poderosas do multiverso e pai dos anjos. Ele serve diretamente a Zen-Oh e coordena eventos envolvendo os diversos universos.",
  "grande sacerdote":
    "Grande Sacerdote é uma das entidades mais poderosas do multiverso e pai dos anjos. Ele serve diretamente a Zen-Oh e coordena eventos envolvendo os diversos universos.",
  zeno: "Zen-Oh é o governante supremo dos universos. Apesar de sua aparência e comportamento infantis, possui autoridade e poder suficientes para apagar universos inteiros.",
  "zen oh":
    "Zen-Oh é o governante supremo dos universos. Apesar de sua aparência e comportamento infantis, possui autoridade e poder suficientes para apagar universos inteiros.",
  shin: "Shin é o Kaioshin do Universo 7. Sua função é acompanhar a criação e o desenvolvimento da vida, atuando em equilíbrio com o Deus da Destruição.",
  kaioshin:
    "Shin é o Kaioshin do Universo 7. Sua função é acompanhar a criação e o desenvolvimento da vida, atuando em equilíbrio com o Deus da Destruição.",
  kibito:
    "Kibito é assistente do Kaioshin do Universo 7. Possui habilidades de cura e teletransporte e acompanha Shin em missões relacionadas ao equilíbrio do universo.",
  janemba:
    "Janemba é uma entidade formada pelo acúmulo de energia maligna. Sua forma mais poderosa possui grande velocidade, técnicas incomuns e capacidade de distorcer o espaço ao redor.",
  cooler:
    "Cooler é irmão de Freeza e membro da mesma poderosa família. Assim como Freeza, comanda forças militares e possui transformações que aumentam significativamente seu poder.",
  "king cold":
    "Rei Cold é pai de Freeza e Cooler e um dos líderes da família responsável por um grande império espacial. Sua presença demonstra a influência e o poder de sua linhagem.",
  "rey cold":
    "Rei Cold é pai de Freeza e Cooler e um dos líderes da família responsável por um grande império espacial. Sua presença demonstra a influência e o poder de sua linhagem.",
  "king vegeta":
    "Rei Vegeta é o pai de Vegeta e antigo governante dos Saiyajins. Liderava seu povo no Planeta Vegeta durante o período em que os Saiyajins serviam ao império de Freeza.",
  "rey vegeta":
    "Rei Vegeta é o pai de Vegeta e antigo governante dos Saiyajins. Liderava seu povo no Planeta Vegeta durante o período em que os Saiyajins serviam ao império de Freeza.",
  pui: "Pui Pui é um guerreiro a serviço de Babidi. Confia bastante na vantagem de lutar sob a gravidade elevada de seu planeta natal.",
  "pui pui":
    "Pui Pui é um guerreiro a serviço de Babidi. Confia bastante na vantagem de lutar sob a gravidade elevada de seu planeta natal.",
  yakon:
    "Yakon é um dos guerreiros controlados por Babidi. Vive em um ambiente escuro e possui a capacidade de absorver energia luminosa.",
  vermoud:
    "Vermoud é o Deus da Destruição do Universo 11. Trabalha em conjunto com o Kaioshin de seu universo e com as Tropas do Orgulho para manter o equilíbrio.",
  belmod:
    "Vermoud é o Deus da Destruição do Universo 11. Trabalha em conjunto com o Kaioshin de seu universo e com as Tropas do Orgulho para manter o equilíbrio.",
  marcarita:
    "Marcarita é a anja que acompanha o Deus da Destruição do Universo 11. Assim como os demais anjos, possui grande poder e atua como guia e mentora.",
  frost:
    "Frost é um integrante da raça de Freeza originário do Universo 6. Inicialmente apresentado como herói, revela métodos desonestos para conquistar vantagem sobre seus adversários.",
  botamo:
    "Botamo é um guerreiro do Universo 6 com um corpo capaz de dispersar impactos recebidos. Essa característica torna ataques físicos comuns pouco eficazes contra ele.",
  magetta:
    "Magetta é um guerreiro da raça Metalman do Universo 6. Seu corpo metálico é extremamente resistente e pode produzir calor intenso durante o combate.",
  granolah:
    "Granolah é um Cerealiano que sobreviveu à destruição de seu povo. Movido pelo desejo de vingança, torna-se um dos atiradores mais habilidosos e poderosos de sua época.",
  gas: "Gas é integrante da família Heeter. Seu poder é ampliado pelas Esferas do Dragão do Planeta Cereal, tornando-o uma ameaça extremamente perigosa.",
  elec: "Elec é o líder dos Heeters e utiliza estratégia e manipulação para ampliar a influência de sua família no universo.",
  moro: "Moro é um antigo feiticeiro que absorve energia vital de planetas e seres vivos. Depois de escapar da prisão, volta a ameaçar o Universo 7 com seus poderes mágicos.",
};

const planetDescriptions: Record<string, string> = {
  namek:
    "Namek é o planeta natal dos Namekuseijins e local de origem de um conjunto de Esferas do Dragão. O planeta teve papel central nos acontecimentos envolvendo Freeza e foi destruído durante essa batalha.",
  namekusei:
    "Namek é o planeta natal dos Namekuseijins e local de origem de um conjunto de Esferas do Dragão. O planeta teve papel central nos acontecimentos envolvendo Freeza e foi destruído durante essa batalha.",
  "new namek":
    "Novo Namek é o planeta onde os Namekuseijins passaram a viver após a destruição do Namek original. Ele possui condições ambientais semelhantes às do antigo planeta.",
  "nuevo namek":
    "Novo Namek é o planeta onde os Namekuseijins passaram a viver após a destruição do Namek original. Ele possui condições ambientais semelhantes às do antigo planeta.",
  tierra:
    "A Terra é o planeta onde vive a maior parte dos protagonistas da série. É o lar dos Guerreiros Z e cenário de inúmeras batalhas, torneios e buscas pelas Esferas do Dragão.",
  earth:
    "A Terra é o planeta onde vive a maior parte dos protagonistas da série. É o lar dos Guerreiros Z e cenário de inúmeras batalhas, torneios e buscas pelas Esferas do Dragão.",
  terra:
    "A Terra é o planeta onde vive a maior parte dos protagonistas da série. É o lar dos Guerreiros Z e cenário de inúmeras batalhas, torneios e buscas pelas Esferas do Dragão.",
  vegeta:
    "O Planeta Vegeta foi o principal lar dos Saiyajins e sede de sua sociedade guerreira. O planeta acabou destruído por Freeza, evento que eliminou grande parte da população Saiyajin.",
  "planeta vegeta":
    "O Planeta Vegeta foi o principal lar dos Saiyajins e sede de sua sociedade guerreira. O planeta acabou destruído por Freeza, evento que eliminou grande parte da população Saiyajin.",
  yardrat:
    "Yardrat é o planeta habitado pelos Yardratianos, um povo conhecido por técnicas especiais baseadas no controle do espírito. Goku aprendeu nesse mundo a técnica do teletransporte.",
  "planeta yardrat":
    "Yardrat é o planeta habitado pelos Yardratianos, um povo conhecido por técnicas especiais baseadas no controle do espírito. Goku aprendeu nesse mundo a técnica do teletransporte.",
  kanassa:
    "Kanassa é um planeta conhecido por seus habitantes com habilidades psíquicas. O mundo foi alvo de uma missão dos Saiyajins antes dos acontecimentos principais da história.",
  "planeta kanassa":
    "Kanassa é um planeta conhecido por seus habitantes com habilidades psíquicas. O mundo foi alvo de uma missão dos Saiyajins antes dos acontecimentos principais da história.",
  meat: "Meat é um planeta visitado por guerreiros Saiyajins durante missões de conquista realizadas antes da destruição do Planeta Vegeta.",
  "planeta meat":
    "Meat é um planeta visitado por guerreiros Saiyajins durante missões de conquista realizadas antes da destruição do Planeta Vegeta.",
  metamor:
    "Metamor é o mundo associado ao povo que desenvolveu a dança da fusão, técnica aprendida por Goku e utilizada para criar guerreiros como Gotenks e Gogeta.",
  "planeta metamor":
    "Metamor é o mundo associado ao povo que desenvolveu a dança da fusão, técnica aprendida por Goku e utilizada para criar guerreiros como Gotenks e Gogeta.",
  vampa:
    "Vampa é um planeta isolado e de condições hostis onde Broly viveu por muitos anos ao lado de seu pai, Paragus.",
  "planeta vampa":
    "Vampa é um planeta isolado e de condições hostis onde Broly viveu por muitos anos ao lado de seu pai, Paragus.",
  sadala:
    "Sadala é o planeta natal dos Saiyajins do Universo 6. Diferentemente dos Saiyajins do Universo 7, seus habitantes atuam principalmente como protetores e mercenários a serviço de outros povos.",
  "planeta sadala":
    "Sadala é o planeta natal dos Saiyajins do Universo 6. Diferentemente dos Saiyajins do Universo 7, seus habitantes atuam principalmente como protetores e mercenários a serviço de outros povos.",
  cereal:
    "Cereal é o planeta natal dos Cerealianos. Sua história está ligada a conflitos com os Saiyajins e com o exército de Freeza, acontecimentos que marcaram profundamente seus sobreviventes.",
  "planeta cereal":
    "Cereal é o planeta natal dos Cerealianos. Sua história está ligada a conflitos com os Saiyajins e com o exército de Freeza, acontecimentos que marcaram profundamente seus sobreviventes.",
  beerus:
    "O planeta de Bills é o mundo onde vivem o Deus da Destruição do Universo 7 e seu assistente Whis. O local também é utilizado para treinamentos de Goku e Vegeta.",
  bills:
    "O planeta de Bills é o mundo onde vivem o Deus da Destruição do Universo 7 e seu assistente Whis. O local também é utilizado para treinamentos de Goku e Vegeta.",
  "planeta beerus":
    "O planeta de Bills é o mundo onde vivem o Deus da Destruição do Universo 7 e seu assistente Whis. O local também é utilizado para treinamentos de Goku e Vegeta.",
  "planeta bills":
    "O planeta de Bills é o mundo onde vivem o Deus da Destruição do Universo 7 e seu assistente Whis. O local também é utilizado para treinamentos de Goku e Vegeta.",
  "beerus planet":
    "O planeta de Bills é o mundo onde vivem o Deus da Destruição do Universo 7 e seu assistente Whis. O local também é utilizado para treinamentos de Goku e Vegeta.",
  "supreme kai":
    "O Mundo Sagrado dos Kaioshins é o local onde vivem os Kaioshins do Universo 7. É um planeta sagrado, distante dos mundos comuns, ligado às divindades responsáveis pela criação.",
  "sacred world of the kai":
    "O Mundo Sagrado dos Kaioshins é o local onde vivem os Kaioshins do Universo 7. É um planeta sagrado, distante dos mundos comuns, ligado às divindades responsáveis pela criação.",
  "mundo sagrado de los kaioshin":
    "O Mundo Sagrado dos Kaioshins é o local onde vivem os Kaioshins do Universo 7. É um planeta sagrado, distante dos mundos comuns, ligado às divindades responsáveis pela criação.",
  "planeta supremo":
    "O Mundo Sagrado dos Kaioshins é o local onde vivem os Kaioshins do Universo 7. É um planeta sagrado, distante dos mundos comuns, ligado às divindades responsáveis pela criação.",
  "planeta de zeno":
    "O Planeta do Zeno é o local onde vive Zeno, o governante supremo dos universos. É um mundo ligado às divindades mais importantes do multiverso.",
  "zeno planet":
    "O Planeta do Zeno é o local onde vive Zeno, o governante supremo dos universos. É um mundo ligado às divindades mais importantes do multiverso.",
  "mundo de zeno":
    "O Planeta do Zeno é o local onde vive Zeno, o governante supremo dos universos. É um mundo ligado às divindades mais importantes do multiverso.",
  "freezer no 79":
    "O Planeta Freeza nº 79 é uma base controlada pelo império de Freeza. O local funciona como ponto de operação para soldados, equipamentos e missões de conquista espacial.",
  "frieza no 79":
    "O Planeta Freeza nº 79 é uma base controlada pelo império de Freeza. O local funciona como ponto de operação para soldados, equipamentos e missões de conquista espacial.",
  "planeta freezer no 79":
    "O Planeta Freeza nº 79 é uma base controlada pelo império de Freeza. O local funciona como ponto de operação para soldados, equipamentos e missões de conquista espacial.",
  babari:
    "Babari é um dos mundos apresentados no universo de Dragon Ball e está associado a civilizações observadas pelas divindades responsáveis pelo desenvolvimento dos planetas.",
  "planeta babari":
    "Babari é um dos mundos apresentados no universo de Dragon Ball e está associado a civilizações observadas pelas divindades responsáveis pelo desenvolvimento dos planetas.",
  zoon: "Zoon é o planeta natal de Pui Pui. Possui uma gravidade muito superior à da Terra, condição que seu povo utiliza como vantagem física.",
  "planeta zoon":
    "Zoon é o planeta natal de Pui Pui. Possui uma gravidade muito superior à da Terra, condição que seu povo utiliza como vantagem física.",
  "dark star":
    "O Planeta da Estrela Negra é um mundo associado a regiões remotas do universo e aparece em histórias que ampliam a exploração espacial da série.",
  plant:
    "Plant é o antigo nome do mundo que posteriormente ficou conhecido como Planeta Vegeta. O planeta foi originalmente habitado pelos Tsufurujins antes do domínio Saiyajin.",
  "planeta plant":
    "Plant é o antigo nome do mundo que posteriormente ficou conhecido como Planeta Vegeta. O planeta foi originalmente habitado pelos Tsufurujins antes do domínio Saiyajin.",
  potaufeu:
    "Potaufeu é um planeta remoto que possui uma importante fonte de energia. O local aparece em acontecimentos envolvendo uma substância capaz de copiar guerreiros e seus poderes.",
  "planeta potaufeu":
    "Potaufeu é um planeta remoto que possui uma importante fonte de energia. O local aparece em acontecimentos envolvendo uma substância capaz de copiar guerreiros e seus poderes.",
  monmaasu:
    "Monmaasu é um planeta do universo de Dragon Ball associado a espécies alienígenas e às inúmeras civilizações existentes além da Terra.",
  "planeta monmaasu":
    "Monmaasu é um planeta do universo de Dragon Ball associado a espécies alienígenas e às inúmeras civilizações existentes além da Terra.",
};

export type CharacterLocalizationInput = {
  name: string;
  race?: string;
  affiliation?: string;
};

export type PlanetLocalizationInput = {
  name: string;
  isDestroyed?: boolean;
};

export function getCharacterDescriptionPt(
  character: CharacterLocalizationInput,
  _original?: string,
) {
  const translated = characterDescriptions[normalizeKey(character.name)];
  if (translated) return translated;

  const race = character.race
    ? translateRace(character.race)
    : "origem desconhecida";
  const affiliation = character.affiliation
    ? translateAffiliation(character.affiliation)
    : "afiliação não informada";

  const name = translateCharacterName(character.name);
  return `${name} é um personagem do universo Dragon Ball. A API informa sua raça como ${race} e sua afiliação como ${affiliation}.`;
}

export function getPlanetDescriptionPt(
  planet: PlanetLocalizationInput,
  _original?: string,
) {
  const translated = planetDescriptions[normalizeKey(planet.name)];
  if (translated) return translated;

  const status =
    planet.isDestroyed === undefined
      ? "com status de destruição não informado"
      : planet.isDestroyed
        ? "marcado pela API como destruído"
        : "marcado pela API como não destruído";

  const name = translatePlanetName(planet.name);
  return `${name} é um planeta do universo Dragon Ball, ${status}.`;
}
