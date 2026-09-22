import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";

import { RootStackParamList } from "./src/types/navigation";
import BoasVindasScreen from "./src/screens/BoasVindas";
import PersonagensScreen from "./src/screens/Personagens";
import PersonagemDetalhesScreen from "./src/screens/PersonagemDetalhes";
import PlanetasScreen from "./src/screens/Planetas";
import PlanetaDetalhesScreen from "./src/screens/PlanetaDetalhes";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator>
        <Stack.Screen
          name="BoasVindasScreen"
          component={BoasVindasScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonagensScreen"
          component={PersonagensScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonagemDetalhesScreen"
          component={PersonagemDetalhesScreen}
          options={{ title: "Personagem" }}
        />
        <Stack.Screen
          name="PlanetasScreen"
          component={PlanetasScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PlanetaDetalhesScreen"
          component={PlanetaDetalhesScreen}
          options={{ title: "Planeta" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
