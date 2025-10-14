import PostListItem from "@/app/components/PostListItem";
import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import posts from "../../../assets/data/posts.json";

const DetailedPost = () => {
  const { id } = useLocalSearchParams();

  const detailedPost = posts.find((post) => post.id === id);

  if (!detailedPost) {
    return <Text>Post not found</Text>;
  }
  return (
    <View>
      <PostListItem post={detailedPost} isDetailedPost />
    </View>
  );
};
export default DetailedPost;
