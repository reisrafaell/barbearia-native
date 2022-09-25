import React from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();

import Home from "../pages/Home/index";
import Login from "../pages/Login/index";
import Registration from "../pages/registration/index";

const Route = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Login"
            options={{
              headerShown: false,
            }}
            component={Login}
          />
      <Stack.Screen
          name="Registration"
          options={{
            headerShown: false,
          }}
          component={Registration}
        />
        <Stack.Screen
          name="Home"
          options={{
            headerShown: false,
            headerStyle: {
              backgroundColor:
                'rgba(255,101,91,1) 0%", "rgba(255,101,91,1) 0%", "rgba(253,41,123,1) 100%"',
            },
            headerTintColor: "#fff",
          }}
          component={Home}
        />
      
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};
export default Route;
