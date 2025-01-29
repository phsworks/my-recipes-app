import { View, Text, StyleSheet, FlatList } from 'react-native';
import { CATEGORIES } from '../data/recipes-data'
import CategoryGridTile from '../components/CategoryGridTile';

function renderCategoryItem(itemData) {
  return <CategoryGridTile title={itemData.item.title} color={itemData.item.color}/>
}

function CategoriesScreen() {
  return (
    <FlatList data={ CATEGORIES } keyExtractor={(item) => item.id} renderItem={renderCategoryItem} />
  );
}

const styles = StyleSheet.create({
  categoriesContainer: {

  }
});

export default CategoriesScreen;