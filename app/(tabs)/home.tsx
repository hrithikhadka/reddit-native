import { formatDistanceToNowStrict } from "date-fns";
import { Image, Text, View } from "react-native";
import posts from "../../assets/data/posts.json";

export default function Home() {
  const post = posts[0];
  return (
    <View style={{ paddingHorizontal: 15, paddingVertical: 10 }}>
      <View style={{ flexDirection: "row", gap: 10 }}>
        <Image
          source={{ uri: post.group.image }}
          style={{ width: 20, height: 20, borderRadius: 10 }}
        />
        <Text style={{ fontWeight: "bold" }}>{post.group.name}</Text>
        <Text style={{ color: "grey" }}>
          {formatDistanceToNowStrict(new Date(post.created_at))}
        </Text>

        <View style={{ marginLeft: "auto" }}>
          <Text
            style={{
              backgroundColor: "#0d469b",
              color: "white",
              paddingVertical: 2,
              paddingHorizontal: 7,
              borderRadius: 10,
              fontWeight: "bold",
            }}
          >
            Join
          </Text>
        </View>
      </View>
    </View>
  );
}
