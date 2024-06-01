import React, { useState, useEffect } from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import Card from "./Card";
import { ThemedView } from "./ThemedView";
import contentImage from "../assets/images/bird_1.png";
import Icon from "@/assets/images/Sam_icon.png";

const InfiniteScroll = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1); // Track current page for fetching

  const fetchData = async (pageSize = 10) => {
    // Simulate fetching data from an API (replace with your API call)
    const newData = Array.from({ length: pageSize }).map((_, i) => ({
      id: i, // Generate unique IDs
      content: `Item ${i + (page - 1) * pageSize + 1}`,
      contentImage: contentImage,
      profileSrc: Icon,
      profileName: "Sam",
      group: "Your Flock",
    }));
    setData([...data, ...newData]); // Append new data to existing data
  };

  useEffect(() => {
    console.log("here");
    fetchData(); // Fetch initial data
  }, []);

  const handleEndReached = () => {
    setPage(page + 1); // Increment page for next fetch
    fetchData();
  };

  const renderItem = ({ item }) => (
    <Card item={item} /> // Apply item style
  );

  return (
    <ThemedView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()} // Unique key for each item
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.5} // Fetch new data when 50% of list is visible
      />
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    minHeight: 800,
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    marginTop: 10,
  },
  // ... other styles for Card component if needed
});

export default InfiniteScroll;
