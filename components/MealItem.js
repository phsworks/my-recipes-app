import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from './MealDetails'

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate('MealDetails', {
      mealId: id,
    })

  }

  return (
    <View style={styles.mealITem}>
      <Pressable onPress={selectMealItemHandler} android_ripple={{color: 'grey'}} style={({pressed}) => (pressed ? styles.buttonPressed : null)} >
        <View>
          <View style={styles.container}>
            <Image style={styles.image} source={{ uri: imageUrl }} />
            <Text style={styles.title}>{title}</Text>
          </View>
          <MealDetails duration={duration} affordability={affordability} complexity={complexity} />

        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  mealITem: {
    margin: 16,
    borderRadius: 8,
    overflow: "hidden",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.2,
    shadowRadius: 5.46,
  },
  buttonPressed: {
    opacity: 0.3,
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "600",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  innerContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
});

export default MealItem;
