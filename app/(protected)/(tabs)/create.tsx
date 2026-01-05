import { AntDesign } from "@expo/vector-icons";
import { Image, Link, router } from "expo-router";
import { useState } from "react";
import {
  KeyboardAvoidingView,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { selectedGroupAtom } from "@/app/atoms";
import { useAtom } from "jotai";

export default function create() {
  const [title, setTitle] = useState<string>("");
  const [bodyText, setBodyText] = useState<string>("");

  const [group, setGroup] = useAtom(selectedGroupAtom);

  const goBack = () => {
    setTitle("");
    setBodyText("");
    router.back();
  };

  return (
    <SafeAreaView
      style={{ backgroundColor: "white", flex: 1, paddingHorizontal: 10 }}
    >
      {/* Header */}
      <View style={{ flexDirection: "row" }}>
        <AntDesign
          name="close"
          size={30}
          color="black"
          onPress={() => goBack()}
        />
        <Pressable
          onPress={() => console.error("Pressed")}
          style={{ marginLeft: "auto" }}
        >
          <Text style={styles.postText}>Post</Text>
        </Pressable>
      </View>

      <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: 15 }}
        >
          {/* community selector */}
          <Link href={"groupSelector"} asChild>
            <Pressable style={styles.communityContainer}>
              {group ? (
                <>
                  <Image
                    src={{ uri: group.image }}
                    style={{ width: 20, height: 20 }}
                  />
                  <Text>{group.name}</Text>
                </>
              ) : (
                <>
                  <Text style={styles.rStyles}></Text>
                  <Text style={{ fontWeight: "600" }}>Select a community</Text>
                </>
              )}

              <Text style={styles.rStyles}>r/</Text>
              <Text style={{ fontWeight: "600" }}>Select a community</Text>
            </Pressable>
          </Link>

          {/* inputs */}
          <TextInput
            placeholder="Title"
            style={{ fontSize: 20, fontWeight: "bold", paddingVertical: 20 }}
            value={title}
            onChangeText={(text) => setTitle(text)}
            multiline
            scrollEnabled={false}
          />
          <TextInput
            placeholder="body text (optional)"
            value={bodyText}
            multiline
            onChangeText={(text) => setBodyText(text)}
            scrollEnabled={false}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  postText: {
    color: "white",
    backgroundColor: "#115BCA",
    fontWeight: "bold",
    paddingVertical: 2,
    paddingHorizontal: 7,
    borderRadius: 10,
  },

  rStyles: {
    backgroundColor: "black",
    color: "white",
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
    fontWeight: "bold",
  },
  communityContainer: {
    backgroundColor: "#EDEDED",
    flexDirection: "row",
    padding: 10,
    borderRadius: 20,
    gap: 5,
    alignSelf: "flex-start",
    marginVertical: 10,
  },
});
