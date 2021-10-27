import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

export default function ProductBox({ product }) {
  const name = product.title;
  const price = product.price;
  const image = product.image;

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: image,
        }}
      />
      <Text style={styles.prodname}>{name}</Text>
      <Text style={styles.price}>{`$${price}`} </Text>
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
    fontSize: 12,
    padding: 2,
    textAlign: "center",
  },
  price: {
    fontSize: 19,
    color: "#8c736d",
  },
});
