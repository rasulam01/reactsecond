import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { THEME } from "../screens/theme";


export const Post = ({ post, navigation }) => {

  const seeContent = () => {
    navigation.navigate('Content', {id: post.id, image: post.avatar, date: post.createdAt});
  };

  return (
    <TouchableOpacity onPress={seeContent}>
      <View style={styles.post}>
        <ImageBackground source={{ uri: post.avatar }} style={styles.image}>
          <View style={styles.date}>
            <Text style={styles.time}>
              {new Date(post.createdAt).toLocaleString()}
            </Text>
          </View>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};



const styles = StyleSheet.create({
  post: {
    marginBottom: 8,
    overflow: "hidden",
    resizeMode: "cover",
  },
  image: {
    width: "100%",
    height: 150,
  },
  date: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  time: {
    backgroundColor: THEME.MAIN_COLOUR,
    color: THEME.AUXILIARY_COLOUR,
  },
});
