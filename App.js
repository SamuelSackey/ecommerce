import React from "react";
import { View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "./screens/Signin";
import Signup from "./screens/Signup";
import Home from "./screens/Home";
import Description from "./screens/Description";
import Cart from "./screens/Cart";

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
          <MainNavigator.Screen name="Home" component={Home} />
          <MainNavigator.Screen name="Description" component={Description} />
          <MainNavigator.Screen name="Cart" component={Cart} />
        </MainNavigator.Navigator>
      </NavigationContainer>
    </View>
  );
}
