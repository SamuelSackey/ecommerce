import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import CartItem from "../components/CartItem";

export default function Cart({ navigation }) {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.topbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.bartext}>Cart</Text>
        <TouchableOpacity>
          <MaterialIcons name="clear-all" size={26} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <CartItem />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    paddingHorizontal: 10,
    backgroundColor: "#fcfcfc",
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
    marginRight: 2,
    flex: 1,
    textAlign: "center",
  },
});
