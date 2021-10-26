import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import ProductBox from "../components/ProductBox";

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
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          paddingTop: 40,
          flexWrap: "wrap",
        }}
      >
        <ProductBox />
        <ProductBox />
        <ProductBox />
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
  bigtext: {
    fontSize: 30,
  },
});
