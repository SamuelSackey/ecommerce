import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

export default function Cart({ navigation }) {
  const listOfProducts = useSelector((state) => state.cart.listOfProducts);

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

      <View style={{ flex: 1 }}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={listOfProducts}
          renderItem={({ item }) => <CartItem product={item} />}
          showsVerticalScrollIndicator={false}
        />
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
