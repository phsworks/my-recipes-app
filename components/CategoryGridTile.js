import React from 'react';
import { View, Text, StyleSheet, Pressable, Platform } from "react-native";

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        onPress={onPress}
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
      >
        <View style={[styles.innerContainer, { backgroundColor: color }]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "black",
    backgroundColor: "white",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.8)",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.3,
  },
  innerContainer: {
    flex: 1,
    borderRadius: 8,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: 400,
    fontSize: 18,
  },
});

export default CategoryGridTile;