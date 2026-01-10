import CommentListItem from "@/app/components/CommentListItem";
import PostListItem from "@/app/components/PostListItem";
import { useLocalSearchParams } from "expo-router";
import { FlatList, Text, View } from "react-native";
import comments from "../../../assets/data/comments.json";
import posts from "../../../assets/data/posts.json";

const DetailedPost = () => {
  const { id } = useLocalSearchParams();

  const detailedPost = posts.find((post) => post.id === id);

  const postComments = comments.filter(
    (comment) => comment.post_id === "post-1"
  );

  console.log(postComments);

  if (!detailedPost) {
    return <Text>Post not found</Text>;
  }
  return (
    <View>
      <FlatList
        data={postComments}
        renderItem={({ item }) => <CommentListItem comment={item} />}
        ListHeaderComponent={
          <PostListItem post={detailedPost} isDetailedPost />
        }
      />
    </View>
  );
};
export default DetailedPost;
