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
      <TouchableOpacity
        onPress={() => navigation.navigate("Cart")}
        style={{ flexDirection: "row" }}
      >
        <FontAwesome name="opencart" size={24} color="black" />
        <View style={styles.badgeContainer}>
          <Text style={styles.badgeText}>3</Text>
        </View>
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
  badgeContainer: {
    backgroundColor: "#8c736d",
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    right: 13,
    top: 13,
  },
  badgeText: {
    color: "white",
  },
});
