# DragonDex

Aplicativo mobile desenvolvido com **React Native + Expo + TypeScript** para consultar dados da Dragon Ball API.

O projeto foi mantido simples, seguindo o padrão usado nas atividades mobile do curso: `App.tsx` controla a navegação e cada tela fica dentro de `src/screens`.

## Funcionalidades

- Tela inicial explicando o objetivo do aplicativo.
- Botão **Começar** para entrar no app.
- Lista de personagens.
- Pesquisa por nome.
- Sugestões de Goku, Vegeta, Gohan e Freeza.
- Detalhes do personagem com raça, gênero, Ki, Ki máximo, afiliação, descrição e planeta de origem.
- Lista de planetas.
- Pesquisa de planetas.
- Detalhes do planeta e personagens relacionados.
- Traduções locais para português.

## Estrutura

```text
DragonDex/
├── App.tsx
├── index.ts
├── app.json
├── package.json
└── src/
    ├── components/
    │   ├── AppHeader.tsx
    │   ├── ErrorState.tsx
    │   ├── LoadingState.tsx
    │   ├── SearchBox.tsx
    │   └── SectionSwitcher.tsx
    ├── screens/
    │   ├── BoasVindas/
    │   ├── Personagens/
    │   ├── PersonagemDetalhes/
    │   ├── Planetas/
    │   └── PlanetaDetalhes/
    ├── services/
    │   └── dragonBallApi.ts
    ├── types/
    │   ├── api.ts
    │   └── navigation.ts
    └── utils/
        ├── descriptions.pt.ts
        ├── theme.ts
        └── translations.ts
```

## Traduções

A API possui alguns nomes e descrições em espanhol ou inglês. O projeto usa arquivos locais para exibir esses dados em português.

Exemplos corrigidos:

- `Freezer` / `Frieza` → **Freeza**
- `Tierra` → **Terra**
- `Grand Priest` → **Grande Sacerdote**
- `Planeta de Zeno` → **Planeta do Zeno**

## Como executar

```bash
npm install
```

Depois:

```bash
npx expo start -c
```

O projeto usa **Expo SDK 57**.
