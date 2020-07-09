import React from "react";
import { Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import Symptoms from "../screens/Symptoms";
import Diagnosis from "../screens/Diagnosis";

function RootNavigator() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="home">
      <Stack.Screen
        name="home"
        component={Home}
        options={{ title: "Home", headerTitleAlign: "center" }}
      />

      <Stack.Screen
        name="symptoms"
        component={Symptoms}
        options={{
          title: "Select Symptoms",
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="diagnosis"
        component={Diagnosis}
        options={{ title: "Diagnosis" }}
      />
    </Stack.Navigator>
  );
}

export default RootNavigator;
