import React, { useEffect } from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../redux";
import { bindActionCreators } from "redux";

export default function Cart({ navigation }) {
  const dispatch = useDispatch();

  const { clearItemsFromCart, resetCartPrice } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const listOfProducts = useSelector((state) => state.cart.listOfProducts);
  const totalPrice = useSelector((state) => state.price.totalPrice);

  useEffect(() => {
    const unsubscribe = navigation.addListener("beforeRemove", () =>
      resetCartPrice()
    );
    return unsubscribe;
  }, []);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.topbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.bartext}>Cart</Text>
        <TouchableOpacity onPress={() => clearItemsFromCart()}>
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

      <View style={styles.pricecon}>
        <Text style={{ fontSize: 16 }}>Total Price</Text>
        <Text style={{ fontSize: 18, color: "#8c736d" }}>
          {"$"}
          {round(totalPrice, 2)}
        </Text>
      </View>

      <View style={styles.buttoncon}>
        {listOfProducts.length === 0 ? (
          <View style={styles.buttoninactive}>
            <Text style={{ color: "white", paddingLeft: 5, fontSize: 16 }}>
              Nothing to Checkout
            </Text>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Checkout")}
          >
            <Text style={{ color: "white", paddingLeft: 5, fontSize: 16 }}>
              Proceed to Checkout
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </SafeAreaView>
  );
}

function round(value, decimals) {
  return Number(Math.round(value + "e" + decimals) + "e-" + decimals).toFixed(
    decimals
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
    marginLeft: 10,
    flex: 1,
    textAlign: "left",
  },
  button: {
    backgroundColor: "#8c736d",
    borderRadius: 50,
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  buttoninactive: {
    backgroundColor: "grey",
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
  pricecon: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
