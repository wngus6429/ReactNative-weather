import React from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <StatusBar barstyle="dar-content" />
      <Text style={styles.text}>Getting the fucking Weather</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end", //이걸 넣으면 글씨가 맨 밑으로
    paddingHorizontal: 30, //리액트 네이티브에만 있는거임. 왼쪽공간
    paddingVertical: 100, ////리액트 네이티브에만 있는거임. 아래쪽공간
    backgroundColor: "#fdf6aa",
  },
  text: {
    color: "black",
    fontSize: 30, //px를 붙이면, 따옴표("20px")안에 string으로 써야함.
  },
});
