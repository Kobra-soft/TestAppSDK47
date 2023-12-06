import { StatusBar } from "expo-status-bar";
import React from "react";
/* import { StyleSheet, Text, View } from "react-native"; */
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center">
      <View className="bg-gray-100 p-2 rounded-md items-center">
        <Text className="text-2xl">SDK 47 Test App</Text>
        <Text className="text-xl">Working with TailwindCSS 3.3.2</Text>
      </View>
    </View>
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
}); */
