import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function CartItem() {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        }}
        style={styles.image}
      />

      {/* part containing name, time and last message */}
      <View style={styles.rightContainer}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ flex: 2 }}>
            <Text style={styles.name}>
              Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
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
            <TouchableOpacity style={{ paddingLeft: 5 }}>
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
  text: {
    color: "grey",
  },
});
