import { AntDesign, Entypo, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useSelector } from "react-redux";
import round from "../utilities/round";

export default function Checkout({ navigation }) {
  const totalPrice = useSelector((state) => state.price.totalPrice);

  const [paymentMethod, setPaymentMethod] = useState({
    CreditCard: true,
    PayPal: false,
  });

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.topbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-circle-outline" size={26} color="black" />
        </TouchableOpacity>
        <Text style={styles.bartext}>Checkout</Text>
      </View>

      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View style={styles.card}>
          <View style={{ paddingTop: 5 }}>
            <Text style={styles.textbig}>Information</Text>
            <View style={styles.inputcon}>
              <TextInput style={styles.input} placeholder="Name" />
            </View>
            <View style={styles.inputcon}>
              <TextInput style={styles.input} placeholder="Phone Number" />
            </View>
            <View style={styles.inputcon}>
              <TextInput style={styles.input} placeholder="Address" />
            </View>
          </View>
        </View>

        <View style={styles.card}>
          <View style={{ paddingTop: 5 }}>
            <Text style={styles.textbig}>Payment</Text>

            <TouchableOpacity
              onPress={() =>
                setPaymentMethod({
                  CreditCard: true,
                  PayPal: false,
                })
              }
              style={styles.select}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <AntDesign
                  name="creditcard"
                  size={24}
                  color="black"
                  style={{ paddingRight: 5 }}
                />
                <Text style={{ fontSize: 16 }}>Credit Card</Text>
              </View>
              <Ionicons
                name={
                  paymentMethod.CreditCard
                    ? "radio-button-on"
                    : "radio-button-off"
                }
                color="#b8aaa7"
                size={18}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() =>
                setPaymentMethod({
                  CreditCard: false,
                  PayPal: true,
                })
              }
              style={styles.select}
            >
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Entypo
                  name="paypal"
                  size={24}
                  color="black"
                  style={{ paddingRight: 5 }}
                />
                <Text style={{ fontSize: 16 }}>PayPal</Text>
              </View>
              <Ionicons
                name={
                  paymentMethod.PayPal ? "radio-button-on" : "radio-button-off"
                }
                color="#b8aaa7"
                size={18}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      <View style={styles.pricecon}>
        <Text style={{ fontSize: 16 }}>Total Price</Text>
        <Text style={{ fontSize: 18, color: "#8c736d" }}>
          {"$"}
          {round(totalPrice, 2)}
        </Text>
      </View>

      <View style={styles.buttoncon}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => alert("Your order is being processed")}
        >
          <Text style={{ color: "white", paddingLeft: 5, fontSize: 16 }}>
            Place Order
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
  bartext: {
    fontSize: 20,
    fontWeight: "500",
    flex: 1,
    textAlign: "left",
    marginLeft: 10,
  },
  card: {
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "lightgrey",
    borderRadius: 20,
    paddingVertical: 10,
    marginVertical: 5,
  },
  textbig: {
    fontSize: 30,
    paddingHorizontal: 10,
    paddingVertical: 5,
    fontWeight: "bold",
  },
  inputcon: {
    margin: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#b8aaa7",
  },
  input: {
    fontSize: 16,
    paddingHorizontal: 10,
  },
  select: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    margin: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#b8aaa7",
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
