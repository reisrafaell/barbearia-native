import React from "react";
import Route from "./src/routes/route";
import AppLoading from "expo-app-loading"

import {
  useFonts,
  Poppins_400Regular,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold,
  });
  if (!fontsLoaded) {
    <AppLoading />;
  }
  return <Route />;
}
