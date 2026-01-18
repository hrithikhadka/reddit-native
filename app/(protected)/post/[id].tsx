import CommentListItem from "@/app/components/CommentListItem";
import PostListItem from "@/app/components/PostListItem";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import comments from "../../../assets/data/comments.json";
import posts from "../../../assets/data/posts.json";

const DetailedPost = () => {
  const { id } = useLocalSearchParams();
  const [comment, setComment] = useState<string>("");
  const [isInputFocused, setIsInputFocused] = useState<boolean>(false);

  const insets = useSafeAreaInsets();

  const detailedPost = posts.find((post) => post.id === id);

  const postComments = comments.filter(
    (comment) => comment.post_id === "post-1"
  );

  console.log(postComments);

  if (!detailedPost) {
    return <Text>Post not found</Text>;
  }
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={{ flex: 1 }}
      keyboardVerticalOffset={insets.top + 10}
    >
      <FlatList
        ListHeaderComponent={
          <PostListItem post={detailedPost} isDetailedPost />
        }
        data={postComments}
        renderItem={({ item }) => <CommentListItem comment={item} />}
      />

      <View
        style={{
          paddingBottom: insets.bottom,
          borderBottomWidth: 1,
          borderBottomColor: "lightgray",
          padding: 10,
          backgroundColor: "white",
          borderRadius: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -3,
          },
          shadowOpacity: 0.1,
          shadowRadius: 3,

          elevation: 4,
        }}
      >
        <TextInput
          placeholder="Join the conversation"
          style={{ backgroundColor: "#E4E4E4", padding: 5, borderRadius: 5 }}
          value={comment}
          onChangeText={(text) => setComment(text)}
          multiline
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
        />
        {isInputFocused && (
          <Pressable
            style={{
              backgroundColor: "#0d469b",
              borderRadius: 15,
              marginLeft: "auto",
              marginTop: 15,
            }}
          >
            <Text
              style={{
                color: "white",
                paddingVertical: 5,
                paddingHorizontal: 10,
                fontWeight: "bold",
                fontSize: 13,
              }}
            >
              Reply
            </Text>
          </Pressable>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};
export default DetailedPost;
