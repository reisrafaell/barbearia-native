import React from "react";
import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Home from "../pages/Home/index";
import Login from "../pages/Login/index";
import Registration from "../pages/registration/index";
import SendEmail from "../pages/sendEmail";
import AuthProvider from "../contexts/auth";
import Schedule from "../pages/schedule";
import List from "../pages/list";
import MyList from "../pages/myList";
import Main from "../pages/main";
import LoginSecondary from "../pages/LoginSecondary";
import ScheduleAll from "../pages/TodasAsAgendas";

const Route = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
      
          <Stack.Screen
            name="Main"
            options={{
              headerShown: false,
            }}
            component={Main}
          />

          <Stack.Screen
            name="Registration"
            options={{
              headerShown: false,
            }}
            component={Registration}
          />
          <Stack.Screen
            name="Login"
            options={{
              headerShown: false,
            }}
            component={Login}
          />
          <Stack.Screen
            name="List"
            options={{
              headerShown: false,
            }}
            component={List}
          />
            <Stack.Screen
            name="Schedule"
            options={{
              headerShown: false,
            }}
            component={Schedule}
          />
            <Stack.Screen
            name="ScheduleAll"
            options={{
              headerShown: false,
            }}
            component={ScheduleAll}
          />

          <Stack.Screen
            name="MyList"
            options={{
              headerShown: false,
            }}
            component={MyList}
          />

         
          <Stack.Screen
            name="LoginSecondary"
            options={{
              headerShown: false,
            }}
            component={LoginSecondary}
          />

          <Stack.Screen
            name="Home"
            options={{
              headerShown: false,
            }}
            component={Home}
          />
          

          <Stack.Screen
            name="Reset"
            options={{
              headerShown: false,
            }}
            component={SendEmail}
          />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </AuthProvider>
    </NavigationContainer>
  );
};
export default Route;
