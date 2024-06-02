import React from "react";
import { TouchableOpacity, StyleSheet, Button, Text, View } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { CameraView, useCameraPermissions } from "expo-camera";

const Identify = () => {
  const [facing, setFacing] = React.useState("back");
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = React.useRef(null);
  const [capturedImage, setCaputuredImage] = React.useState(null);

  if (!permission) {
    return (
      <ThemedView style={styles.container}>
        <Text>Identify, no camera</Text>
      </ThemedView>
    );
  }
  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }
  const takePicture = async () => {
    try {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log(data.uri, "<<<<<<<<<<<<<");
    } catch (error) {
      console.log(error, "ERROR: <<<<<<<<<<<<");
    }
  };
  return (
    <View style={styles.container}>
      <CameraView
        autofocus
        ref={cameraRef}
        enableTorch={false}
        style={styles.camera}
        facing={facing}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.text}>Flip Camera</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={takePicture}>
            <Text style={styles.text}>Take Picture</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
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
