import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

function CategoryGridTile( {title, color}) {
  return (
    <View style={styles.container}>
      <Pressable>
        <View>
          <Text>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  
});

export default CategoryGridTile;