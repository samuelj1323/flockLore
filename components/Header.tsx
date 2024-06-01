import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

const Header = ({ title, profileImage }: any) => {
  return (
    <ThemedView style={styles.container}>
      <View style={styles.titleContainer}>
        <ThemedText style={styles.title}>{title}</ThemedText>
      </View>

      {profileImage && (
        <Image source={profileImage} style={styles.profileImage} />
      )}
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1, // Make container occupy full width
    marginTop: 40,
    minHeight: 30,
    maxHeight: 30,
    justifyContent: "flex-end", // Keep this for right alignment
    padding: 20,
  },
  titleContainer: {
    marginTop: 30,
    flex: 1, // Make this view occupy remaining space
    justifyContent: "space-between", // Distribute title within available space
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    height: 20,
  },
  profileImage: {
    width: 40,
    marginTop: 30,
    height: 40,
    borderRadius: 20,
  },
});

export default Header;
