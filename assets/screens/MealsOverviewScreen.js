import { MEALS, CATEGORIES } from "../data/dummyData";
import { useLayoutEffect } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import MealItem from "../components/MealItem";
import { useEffect } from "react";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const disPlayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });
  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find((category) => {
      return category.id === catId;
    }).title;

    navigation.setOptions({ title: categoryTitle });
  }, [catId, navigation]);

  function renderMealItem(itemData) {
    const item = itemData.item;
    const mealItemProps = {
      id: item.id,
      title: item.title,
      duration: item.duration,
      complexity: item.complexity,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
    };
    return <MealItem mealItemProps={mealItemProps} />;
  }
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => item.id}
        data={disPlayedMeals}
        renderItem={renderMealItem}
      />
    </View>
  );
}

export default MealsOverviewScreen;
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
});
