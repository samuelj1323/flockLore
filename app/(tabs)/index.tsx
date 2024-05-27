import { Image, StyleSheet, Platform, Text, View, Grid } from "react-native";
import Header from "@/components/Header";
import Icon from "@/assets/images/Sam_icon.png";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import PillRow from "@/components/PillRow";

export default function HomeScreen() {
  const pillRow = [
    { title: "My Flock" },
    { title: "In Your Area" },
    { title: "Just You" },
  ];
  return (
    <ThemedView>
      <Header title="FlockLore" profileImage={Icon} />
      <PillRow pills={pillRow} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
