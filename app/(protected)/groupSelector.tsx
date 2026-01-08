import groups from "@/assets/data/posts.json";
import { Group } from "@/types";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { router } from "expo-router";
import { useSetAtom } from "jotai";
import { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { selectedGroupAtom } from "../atoms";

const groupSelector = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const setGroup = useSetAtom(selectedGroupAtom);

  const filteredGroups = groups.filter((item) =>
    item.group.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const onGroupSelected = (group: Group) => {
    setGroup(group);
    router.back();
  };

  return (
    <SafeAreaView style={{ marginHorizontal: 10, flex: 1 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <AntDesign
          name="close"
          size={30}
          color="black"
          onPress={() => router.back()}
        />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            textAlign: "center",
            flex: 1,
            paddingRight: 30,
          }}
        >
          Post to
        </Text>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "lightgray",
          borderRadius: 5,
          gap: 5,
          marginVertical: 10,
          paddingHorizontal: 5,
        }}
      >
        <EvilIcons name="search" size={16} color="black" />
        <TextInput
          placeholder="Search for a community"
          placeholderTextColor={"gray"}
          style={{ paddingVertical: 10, flex: 1 }}
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
        />
        {searchValue && (
          <AntDesign
            name="close-circle"
            size={16}
            color="#E4E4E4"
            onPress={() => setSearchValue("")}
          />
        )}
      </View>

      <FlatList
        data={filteredGroups}
        renderItem={({ item }) => (
          <Pressable
            onPress={() => onGroupSelected(item)}
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              marginBottom: 20,
            }}
          >
            <Image
              source={{ uri: item.group.image }}
              style={{ width: 40, aspectRatio: 1, borderRadius: 20 }}
            />
            <Text style={{ fontWeight: "600" }}>{item.group.name}</Text>
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
};
export default groupSelector;
