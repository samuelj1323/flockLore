import {
  FlatList,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import React, { useState } from "react";

const CommentScreen = ({ route }) => {
  const [comments, setComments] = useState(route.params.comments); // Existing comments
  const [newComment, setNewComment] = useState(""); // State for user input

  const handleNewCommentChange = (text) => {
    setNewComment(text);
  };

  const submitNewComment = async () => {
    if (!newComment.trim()) {
      return; // Handle empty comment (optional)
    }

    //   const newCommentData = {
    //     username: "User Name", // Replace with actual user logic
    //     text: newComment,
    //   };

    //   // Implement API call to save the new comment
    //   const response = await fetch(/* your API endpoint */, {
    //     method: 'POST',
    //     body: JSON.stringify(newCommentData),
    //   });

    //   if (response.ok) {
    //     const updatedComments = [...comments, newCommentData]; // Add new comment to list
    //     setComments(updatedComments);
    //     setNewComment(""); // Clear input field after successful submission
    //   } else {
    //     // Handle errors (optional)
    //   }
  };

  return (
    <View>
      <FlatList
        data={comments}
        renderItem={({ item }) => (
          <View>
            <Text>{item.username}</Text>
            <Text>{item.commentText}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id} // Unique key for each comment
      />
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TextInput
          style={{ flex: 1 }}
          placeholder="Write a comment..."
          onChangeText={handleNewCommentChange}
          value={newComment}
        />
        <TouchableOpacity onPress={submitNewComment}>
          <Text>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default CommentScreen;
