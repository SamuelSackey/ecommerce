import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";

export default function TopBar() {
  return (
    <View style={styles.topbar}>
      <TouchableOpacity>
        <Feather name="settings" size={25} color="black" />
      </TouchableOpacity>
      <TouchableOpacity>
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
