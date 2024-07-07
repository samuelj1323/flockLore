import React from "react";
import { TouchableOpacity, StyleSheet, Button, Text, View } from "react-native";
import Camera from "@/components/Camera";
import Recording from "@/components/Recording";

const Identify = () => {
  const [identifyChoice, setIdentifyChoice] = React.useState("");
  const handleCameraSelect = () => {
    setIdentifyChoice("Camera");
  };
  const handleRecordSelect = () => {
    setIdentifyChoice("Record");
  };
  return (
    <View style={styles.container}>
      {identifyChoice?.length === 0 && (
        <View>
          <Button title="Camera" onPress={handleCameraSelect} />
          <Button title="Record" onPress={handleRecordSelect} />
        </View>
      )}
      {identifyChoice === "Camera" && <Camera />}
      {identifyChoice === "Record" && <Recording />}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "transparent",
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});

export default Identify;
