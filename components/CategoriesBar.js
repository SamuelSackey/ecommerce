import React from "react";
import { StyleSheet, Text, View } from "react-native";

const CategoriesBar = ({ categories }) => {
  const { category } = categories;
  return (
    <View style={styles.container}>
      <Text style={{ color: "white", fontSize: 16, textAlign: "center" }}>
        {category}
      </Text>
    </View>
  );
};

export default CategoriesBar;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 15,
    backgroundColor: "#b8aaa7",
    marginHorizontal: 4,
    borderRadius: 70,
  },
});
