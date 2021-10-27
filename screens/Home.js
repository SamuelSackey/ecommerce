import React from "react";
import { SafeAreaView, StyleSheet, Text, View, FlatList } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProductBox from "../components/ProductBox";
import Categories from "../assets/data/Categories";
import Category from "../assets/data/Category";
import Products from "../assets/data/Products";

export default function Home() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.topbar}>
        <TouchableOpacity>
          <Feather name="menu" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome name="opencart" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.bigtext}>Discover our exclusive products</Text>
      </View>

      <FlatList
        data={Products}
        renderItem={({ item }) => <ProductBox product={item} />}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ alignItems: "center" }}
      />
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
  bigtext: {
    fontSize: 30,
    paddingBottom: 20,
  },
});
