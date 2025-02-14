import { useEffect } from "react";
import { MEALS, CATEGORIES } from "../data/recipes-data";
import MealsList from "../components/MealsList/MealsList";


function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useEffect(() => {
    const category = CATEGORIES.find((category) => category.id === catId);

    if (category) {
      navigation.setOptions({
        title: category.title,
      });
    }
  }, [catId, navigation]);

  return <MealsList items={displayedMeals}  />;


}


export default MealsOverviewScreen;
