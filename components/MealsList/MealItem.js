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
import MealDetails from '../MealDetails'

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
  const navigation = useNavigation();

  function selectMealItemHandler() {
    navigation.navigate('MealDetails', {
      mealId: id,
    })

  }

  return (
    <View style={styles.mealItem}>
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
  mealItem: {
    margin: 16,
    overflow: "hidden",
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    elevation: 4,
    boxShadow: "0px 2px 2px rgba(0, 0, 0, 0.8)",
    borderRadius: 8,
  },
  buttonPressed: {
    opacity: 0.3,
  },
  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius:8,
    borderTopRightRadius: 8,
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
