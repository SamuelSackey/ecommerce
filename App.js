import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";

export default function App() {
  const MainNavigator = createStackNavigator();

  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <MainNavigator.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="Signin"
        >
          <MainNavigator.Screen name="Signin" component={Signin} />
          <MainNavigator.Screen name="Signup" component={Signup} />
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}
