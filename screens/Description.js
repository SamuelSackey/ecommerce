import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Products from "../assets/data/Products";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/core";

export default function Description() {
  const route = useRoute();

  //Get route of id of selected product box
  const routeID = route.params?.id;

  const { image, title, description, price } = Products.find(
    (x) => x.id === routeID
  );

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
      <View style={styles.imgbox}>
        <Image
          source={{ uri: image }}
          style={styles.img}
          resizeMode="contain"
        />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingVertical: 20, flex: 2 }}
      >
        <Text style={styles.prodname}>{title}</Text>
        <Text style={styles.proddescr}>{description}</Text>
      </ScrollView>
      <View style={styles.buttoncon}>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="opencart" size={24} color="white" />
          <Text style={{ color: "white", paddingLeft: 5, fontSize: 16 }}>
            {"$"}
            {price}
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
    backgroundColor: "#fcfcfc",
  },
  topbar: {
    paddingTop: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  imgbox: {
    paddingHorizontal: 50,
    flex: 2,
    paddingVertical: 10,
  },
  img: {
    width: "100%",
    height: "100%",
    marginVertical: 10,
  },
  prodname: {
    fontSize: 18,
    padding: 2,
    textAlign: "center",
  },
  proddescr: {
    fontSize: 16,
    paddingHorizontal: 2,
    paddingVertical: 10,
    color: "grey",
    textAlign: "center",
  },
  buttontext: {
    fontSize: 25,
    padding: 5,
    paddingVertical: 30,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#8c736d",
    borderRadius: 50,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  buttoncon: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
