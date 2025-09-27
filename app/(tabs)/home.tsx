import { FlatList, View } from "react-native";
import posts from "../../assets/data/posts.json";
import PostListItem from "../components/PostListItem";

export default function Home() {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
      />
    </View>
  );
}
