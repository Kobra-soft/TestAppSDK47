import { StatusBar } from "expo-status-bar";
/* import React from "react"; */
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "./logo.svg";
import { useFonts } from "expo-font";
import { Circle, Path, Rect, Svg } from "react-native-svg";
import SVG from "./logo2.svg";

export default function App() {
  const [fontsLoaded] = useFonts({
    "Lexend-Thin": require("./assets/fonts/Lexend-Thin.ttf"),
    "Lexend-ExtraLight": require("./assets/fonts/Lexend-ExtraLight.ttf"),
    "Lexend-Light": require("./assets/fonts/Lexend-Light.ttf"),
    "Lexend-Regular": require("./assets/fonts/Lexend-Regular.ttf"),
    "Lexend-Medium": require("./assets/fonts/Lexend-Medium.ttf"),
    "Lexend-SemiBold": require("./assets/fonts/Lexend-SemiBold.ttf"),
    "Lexend-Bold": require("./assets/fonts/Lexend-Bold.ttf"),
    "Lexend-ExtraBold": require("./assets/fonts/Lexend-ExtraBold.ttf"),
    "Lexend-Black": require("./assets/fonts/Lexend-Black.ttf"),
  });
  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  return (
    <View className="flex-1 items-center justify-center bg-[#751fff]">
      <TouchableOpacity className="">
        <View className="bg-[#000000e9] px-10 py-20 rounded-3xl items-center">
          <Text style={styles.lexend_Bold} className="text-[#1ffff8e7]">
            SDK 47 Test App
          </Text>
          <Text
            style={styles.lexend_Light}
            className="text-xl pt-3 pb-2 text-[#cacaca]"
          >
            JavaScript & TailwindCSS
          </Text>
          <TouchableOpacity className="pt-4 pb-2">
            {/* <Logo width={140} height={160} fill={"#ffffff"} /> */}
            <Svg width={26} height={26} viewBox="0 0 20 20">
              <Path
                d="M16.993 6.667H3.227l6.883 6.883 6.883-6.883z"
                fill="#fff"
              />
            </Svg>
          </TouchableOpacity>
          <Text
            style={styles.lexend_Thin}
            className="text-xl pt-2 pb-0 text-[#f3f3f3]"
          >
            Developed by
          </Text>
          <Text
            style={styles.lexend_Medium}
            className="text-3xl pt-2 pb-0 text-[#1fffcb]"
          >
            Jack Mullin
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  /*   container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  }, */
  default: {
    fontSize: 20,
  },
  // Thin=100, ExtraLight=200, Light=300, Regular=400, Medium=500,
  // SemiBold=600, Bold=700, ExtraBold=800, Black=900
  lexend_Thin: {
    fontSize: 22,
    fontFamily: "Lexend-Thin",
  },
  lexend_ExtraLight: {
    fontSize: 22,
    fontFamily: "Lexend-ExtraLight",
  },
  lexend_Light: {
    fontSize: 24,
    fontFamily: "Lexend-Light",
  },
  lexend_Regular: {
    fontSize: 24,
    fontFamily: "Lexend-Regular",
  },
  lexend_Medium: {
    fontSize: 28,
    fontFamily: "Lexend-Medium",
  },
  lexend_SemiBold: {
    fontSize: 26,
    fontFamily: "Lexend-SemiBold",
  },
  lexend_Bold: {
    fontSize: 28,
    fontFamily: "Lexend-Bold",
  },
  lexend_ExtraBold: {
    fontSize: 28,
    fontFamily: "Lexend-ExtraBold",
  },
  lexend_Black: {
    fontSize: 28,
    fontFamily: "Lexend-Black",
  },
});
