# App Utilidades — React Native + Expo

App didático da disciplina de **WebMobile** (Análise e Desenvolvimento de Sistemas).
Uma tela inicial com 4 botões leva, via **navegação Stack**, a quatro funcionalidades:

| Botão | Tela | O que faz | API usada (gratuita, sem chave) |
|---|---|---|---|
| Calcular IMC | `ImcScreen` | Calcula o IMC e mostra a classificação da OMS | — (cálculo local) |
| Previsão do Tempo | `ClimaScreen` | Tempo atual e próximos 5 dias de uma cidade | [Open-Meteo](https://open-meteo.com) |
| Cotação do Dólar | `DolarScreen` | Cotação USD→BRL e conversor | [AwesomeAPI](https://docs.awesomeapi.com.br) |
| Consultar CEP | `CepScreen` | Logradouro, bairro, cidade e UF a partir do CEP | [ViaCEP](https://viacep.com.br) |

## Como executar

Pré-requisitos: **Node.js 20+** e o app **Expo Go** no celular (Android ou iOS).

```bash
npm install
npx expo start
```

Escaneie o QR Code com o Expo Go (Android) ou com a câmera (iOS).
Para abrir no navegador: `npx expo start --web`.

> Projeto criado com **Expo SDK 57** (React Native 0.86). O Expo Go instalado
> no celular precisa ser compatível com essa versão do SDK.

## Estrutura de pastas

```
App.js                      → configura o Stack Navigator (rotas do App)
assets/images/              → imagens dos botões da tela inicial
src/
  components/               → componentes reutilizáveis
    BotaoMenu.js            → botão com imagem (tela inicial)
    Botao.js                → botão de ação (com estado "carregando")
    Campo.js                → rótulo + TextInput
    CardResultado.js        → cartão branco para exibir resultados
    LinhaInfo.js            → linha "rótulo ..... valor"
    MensagemErro.js         → texto de erro (só aparece se houver erro)
    Tela.js                 → estrutura base das telas (fundo + rolagem)
  screens/                  → uma tela por funcionalidade
    HomeScreen.js, ImcScreen.js, ClimaScreen.js, DolarScreen.js, CepScreen.js
  services/api.js           → chamadas às APIs com fetch + async/await
  utils/                    → funções puras (cálculo do IMC, formatação, clima)
  styles/cores.js           → paleta de cores centralizada
design/                     → layout das telas para o Figma + prints do App
```

## Conceitos de React Native demonstrados

- **Componentes e props** — `BotaoMenu`, `Botao`, `Campo`, `CardResultado`, `LinhaInfo`…
- **`children`** — `CardResultado` e `Tela` envolvem outros componentes.
- **Spread de props** — `Campo` repassa `{...props}` para o `TextInput`.
- **Estado com `useState`** — campos de texto, resultados, carregando e erro.
- **Efeito com `useEffect`** — `DolarScreen` busca a cotação assim que a tela abre.
- **Navegação Stack** — `createNativeStackNavigator` no `App.js` e `navigation.navigate()` na Home.
- **Renderização de listas com `map` e `key`** — botões da Home e dias da previsão.
- **Renderização condicional** — `{resultado && <CardResultado …/>}`.
- **Consumo de API** — `fetch`, `async/await`, `try/catch/finally`.
- **Estilização** — apenas `StyleSheet.create` (sem frameworks de CSS), Flexbox (`flexDirection`, `flexWrap`, `justifyContent`).
- **Componentes nativos** — `View`, `Text`, `TextInput`, `Image`, `TouchableOpacity`, `ScrollView`, `ActivityIndicator`, `Keyboard`.

## Layout no Figma

O arquivo `design/layout-app-utilidades.svg` contém as 5 telas (390×844) lado a lado.
No Figma: **arraste o arquivo para o canvas** (ou *File → Import*). Ele vira camadas
editáveis — retângulos, textos e imagens — agrupadas por tela. Depois disso, use
*File → Save local copy* para gerar o `.fig`.

A pasta `design/prints/` tem capturas reais do App rodando.

## Sugestões de exercícios

1. Passar parâmetros entre telas: criar uma tela `ResultadoImc` e enviar o valor com `navigation.navigate('ResultadoImc', { imc })`, lendo com `route.params`.
2. Formatar o CEP enquanto o usuário digita (`00000-000`).
3. Adicionar a cotação do Euro (`EUR-BRL`) na tela do Dólar.
4. Mostrar a previsão da cidade atual usando `expo-location`.
