import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import wateringImg from "../assets/watering.png";

import colors from "../styles/colors";
import fonts from "../styles/fonts";

import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function Welcome() {
  const navigation = useNavigation();

  function handleStart() {
    navigation.navigate("UserIdentification");
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>
          Gerencie{`\n`}
          suas plantas de{`\n`}
          forma fácil
        </Text>

        <Image source={wateringImg} style={styles.image} resizeMode="contain" />

        <Text style={styles.subtitle}>
          Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
          sempre que precisar.
        </Text>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.7}
          onPress={handleStart}
        >
          <Text>
            <Feather name="chevron-right" style={styles.buttonIcon} />
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },

  title: {
    top: 38,
    fontSize: 28,
    // Text component cuts part of the text if fontWeight bold is used
    fontWeight: "bold",

    //Resolve bug with font bold
    fontFamily: fonts.heading,

    textAlign: "center",
    color: colors.heading,
    lineHeight: 34,
  },

  subtitle: {
    fontSize: 18,
    textAlign: "center",
    paddingHorizontal: 29,
    color: colors.heading,
    fontFamily: fonts.text,
  },

  image: {
    height: Dimensions.get("window").width * 0.7,
  },

  button: {
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginBottom: 10,
    height: 56,
    width: 56,
  },

  buttonIcon: {
    fontSize: 32,
    color: colors.white,
  },
});
