import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function ProductBox() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        }}
      />
      <Text style={styles.prodname}>Bag</Text>
      <Text style={styles.price}>$199</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    marginVertical: 10,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#b8aaa7",
    width: "45%",
    paddingVertical: 10,
  },
  img: {
    width: 100,
    height: 100,
    marginVertical: 10,
  },
  prodname: {
    fontSize: 18,
  },
  price: {
    fontSize: 19,
    color: "#8c736d",
  },
});
