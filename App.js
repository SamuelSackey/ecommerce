import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./screens/Login";
import Signup from "./screens/Signup";

export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigator.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Signup"
        >
          <MainNavigator.Screen name="Login" component={Login} />
          <MainNavigator.Screen name="Signup" component={Signup} />
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}
