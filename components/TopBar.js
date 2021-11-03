import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

export default function TopBar() {
  const navigation = useNavigation();

  return (
    <View style={styles.topbar}>
      <TouchableOpacity>
        <Feather name="settings" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
        <FontAwesome name="opencart" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  topbar: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
});
