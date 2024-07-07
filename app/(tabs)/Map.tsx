import React from "react";
import { Image, StyleSheet, Platform, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { ThemedView } from "@/components/ThemedView";
const Map = () => {
  return (
    <ThemedView style={styles.container}>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker
          key={0}
          coordinate={{ latitude: 37.78825, longitude: -122.4 }}
          title={"HELLO WORLD;LKSJD;FLKJ"}
          description={"Marker Desc"}
        />
      </MapView>
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
export default Map;
