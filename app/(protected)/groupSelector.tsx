import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";
import { router } from "expo-router";
import { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const groupSelector = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <SafeAreaView style={{ marginHorizontal: 10 }}>
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
          style={{ paddingVertical: 10 }}
          value={searchValue}
          onChangeText={(text) => setSearchValue(text)}
        />
      </View>
    </SafeAreaView>
  );
};
export default groupSelector;
