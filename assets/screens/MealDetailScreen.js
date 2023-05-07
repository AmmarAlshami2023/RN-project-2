import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { useLayoutEffect } from "react";
import MealDetail from "../components/MealDetail";
import { MEALS } from "../data/dummyData";
import IconButton from "../components/IconButton";
function MealDetailScreen({ route, navigation }) {
  const mealId = route.params.mealId;
  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {}
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={headerButtonPressHandler}
            Icon="star"
            color="white"
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView>
      <View>
        <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <View>
          <MealDetail
            duration={selectedMeal.duration}
            complexity={selectedMeal.complexity}
            affordability={selectedMeal.affordability}
            textStyle={styles.detailText}
          ></MealDetail>
        </View>
        <View style={styles.subtitleConteiner}>
          <Text style={styles.subtitle}>Ingredients</Text>
        </View>

        {selectedMeal.ingredients.map((ingredient) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText} key={ingredient}>
              {ingredient}
            </Text>
          </View>
        ))}

        <View style={styles.subtitleConteiner}>
          <Text style={styles.subtitle}>Steps</Text>
        </View>
        {selectedMeal.steps.map((step) => (
          <View style={styles.listItem}>
            <Text style={styles.itemText} key={step}>
              {step}
            </Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default MealDetailScreen;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontWeight: "bold",
    fontSize: 24,
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",

    textAlign: "center",
  },
  subtitleConteiner: {
    borderBottomColor: "white",
    borderBottomWidth: 2,
    marginHorizontal: 24,
    marginVertical: 4,
    padding: 6,
  },
  itemText: {
    color: "#351401",
    textAlign: "center",
  },
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginVertical: 4,
    marginHorizontal: 12,
    backgroundColor: "#e2b497",
  },
});
