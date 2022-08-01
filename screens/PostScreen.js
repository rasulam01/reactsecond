import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import axios from "axios";
import { Post } from "../components/Post";

export const PostScreen = ({ navigation }) => {
  const [data, setData] = useState([]);



  const loadData = async (url) => {
    const response = await axios.get(url);
    setData(response.data);
    console.log(data);
  };

  useEffect(() => {
    loadData("https://61851c6723a2fe0017fff39d.mockapi.io/todos");
  }, []);

  const navigate = () => {
    navigation.navigate("About");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Poster</Text>
      <Button title="Threat" onPress={navigate} />
      <View>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Post post={item} navigation={navigation} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
