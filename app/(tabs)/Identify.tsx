import React from "react";
import { Image, StyleSheet, Platform, Text, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";

const Identify = () => {
  return (
    <ThemedView style={styles.container}>
      <Text>Identify</Text>
    </ThemedView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Identify;
