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
      <TouchableOpacity
        style={{
          flexDirection: "row",
          paddingLeft: 3,
          paddingRight: 3,
          paddingTop: 4,
        }}
        onPress={handleLikePress}
      >
        <MaterialCommunityIcons
          style={{ bottom: 4 }}
          name={iconName}
          size={24}
          color="black"
        />
        <Text style={{ marginLeft: 5 }}>Like</Text>
      </TouchableOpacity>
    );
  };
  const CommentsButton = () => {
    return (
      <TouchableOpacity style={{ marginLeft: 10 }}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <MaterialCommunityIcons
            name="comment-outline"
            size={24}
            color="black"
          />
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

  const InteractiveContent = () => {
    return (
      <View
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
        }}
      >
        <View
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-start",
            flexDirection: "row",
            paddingLeft: 20,
            paddingBottom: 10,
          }}
        >
          <LikeButton isLiked={true} />
          <CommentsButton />
        </View>
      </View>
    );
  };

  return (
    <View key={item.key} style={styles.cardContainer}>
      <IdentityRow />
      <Image style={styles.imageSizing} source={item.contentImage} />
      <View
        style={{
          flexDirection: "column",
          width: "100%",
          display: "flex",
          flex: 1,
          alignItems: "center",
        }}
      >
        <View>
          <Text>This is a really cool bird</Text>
        </View>
        <InteractiveContent />
      </View>
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
