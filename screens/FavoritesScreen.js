import { StyleSheet, View, Text } from 'react-native';
import MealsList from '../components/MealsList/MealsList';
import { useContext } from 'react';
import { FavoritesContext } from '../store/context/favorites-context';
import { MEALS } from '../data/recipes-data';

function FavoritesScreen() {
  const favoriteMealsContext = useContext(FavoritesContext);

  const favoriteMeals = MEALS.filter((meal) => favoriteMealsContext.ids.includes(meal.id));

  if (favoriteMeals.length === 0 || !favoriteMeals) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No favorite meals found. Start adding some!</Text>
      </View>
    );
}
return <MealsList items={favoriteMeals} />;
}


export default FavoritesScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    }
});