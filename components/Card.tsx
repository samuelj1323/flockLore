import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { FontAwesome } from "@fontawesome/fontawesome-free/react-native-fontawesome";
import React, { useState } from "react";
const Card = ({ item }: any) => {
  const LikeButton = ({ isLiked = false }: any) => {
    const [liked, setLiked] = useState(isLiked || false);

    const handleLikePress = () => {
      setLiked(!liked);
    };

    const iconName = liked ? "heart" : "heart-outline"; // Choose icon based on liked state

    return (
      <TouchableOpacity onPress={handleLikePress}>
        <MaterialCommunityIcons name={iconName} size={24} color="yellow" />
      </TouchableOpacity>
    );
  };
  const CommentsButton = () => {
    return (
      <TouchableOpacity>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={{ marginLeft: 5 }}> {"Comment"}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const IdentityRow = () => {
    return (
      <View
        style={{
          justifyContent: "flex-start",
          width: "100%", // Maintains left alignment
          flexDirection: "row",
          alignItems: "flex-end", // Vertically aligns content at the bottom
          paddingLeft: 20,
          paddingTop: 10,
          paddingBottom: 5,
        }}
      >
        <Image source={item?.profileSrc} style={{ width: 32, height: 32 }} />
        <View style={{ flexDirection: "column", marginLeft: 5 }}>
          <Text style={{ fontWeight: "700", fontSize: 14 }}>
            {item?.profileName}{" "}
            <Text style={{ fontWeight: 400, fontSize: 14 }}>
              {" "}
              from {item?.group}
            </Text>
          </Text>
          <Text style={{ fontSize: 12 }}>{item?.timestamp}</Text>
        </View>
      </View>
    );
  };

  return (
    <View key={item.key} style={styles.cardContainer}>
      <IdentityRow />
      <Image style={styles.imageSizing} source={item.contentImage} />
      <Text>Main content</Text>
      <LikeButton isLiked={true} />
      <CommentsButton />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    alignItems: "center",
    height: 340,
    marginTop: 15,
    width: 350,
    flex: 1,
    padding: 0, // Remove default padding
  },
  imageSizing: {
    borderRadius: 8,
    width: 320,
    height: 200,
  },
});

export default Card;
