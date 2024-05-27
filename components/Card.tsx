import { View, Text, Image, StyleSheet } from "react-native";

const Card = ({ item }) => {
  return (
    <View key={item.key} style={styles.cardContainer}>
      <Text>Card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    height: 340,
    marginTop: 10,
    width: 350,
    flex: 1,
  },
});

export default Card;
