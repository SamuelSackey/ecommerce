import { Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import colors from "../utilities/colors";

export default function Menu({ navigation }) {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.topbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-circle-outline"
            size={26}
            color={colors.icons}
          />
        </TouchableOpacity>
        <Text style={styles.bartext}>Menu</Text>
      </View>

      <View style={{ flex: 1 }}></View>

      <View style={styles.buttoncon}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Signin")}
        >
          <Text style={{ color: "white", paddingLeft: 5, fontSize: 16 }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: colors.background,
  },
  topbar: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  bartext: {
    fontSize: 20,
    fontWeight: "500",
    flex: 1,
    textAlign: "left",
    marginLeft: 10,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 10,
    padding: 15,
    alignItems: "center",
  },
  buttoncon: {
    paddingVertical: 10,
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
