import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";

export default function CartItem({ product }) {
  const { title, image, price } = product;

  const dispatch = useDispatch();

  const { removeItemFromCart } = bindActionCreators(actionCreators, dispatch);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />

      {/* part containing name, time and last message */}
      <View style={styles.rightContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 2 }}>
            <Text style={styles.name}>{title}</Text>
            <Text style={styles.price}>
              {"$"}
              {price}
            </Text>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <View style={{ alignItems: "center", paddingHorizontal: 5 }}>
              <TouchableOpacity>
                <Ionicons name="ios-chevron-up" size={24} color="black" />
              </TouchableOpacity>
              <Text>3</Text>
              <TouchableOpacity>
                <Ionicons name="ios-chevron-down" size={24} color="black" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{ paddingLeft: 5 }}
              onPress={() => removeItemFromCart(product)}
            >
              <AntDesign name="delete" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    backgroundColor: "white",
  },
  image: {
    height: 75,
    width: 75,
    borderRadius: 50,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#8c736d",
  },

  rightContainer: {
    flex: 1,
    justifyContent: "center",
  },

  name: {
    fontSize: 14,
    marginBottom: 2,
  },
  price: {
    fontSize: 16,
    marginVertical: 2,
    textAlign: "right",
    color: "#8c736d",
  },
  text: {
    color: "grey",
  },
});
