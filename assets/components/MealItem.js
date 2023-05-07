import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function MealItem({ mealItemProps }) {
  const navigation = useNavigation();
  function selectMealItemHandler() {
    navigation.navigate("MealsDetail", {
      mealId: mealItemProps.id,
    });
  }
  return (
    <View style={styles.mealItem}>
      <Pressable
        android_ripple={{ color: "#ccc" }}
        style={({ pressed }) => (pressed ? styles.buttonPressed : null)}
        onPress={selectMealItemHandler}
      >
        <View style={styles.innarContainer}>
          <View>
            <Image
              source={{ uri: mealItemProps.imageUrl }}
              style={styles.image}
            />
          </View>
          <View style={styles.details}>
            <Text style={styles.detailItem}>{mealItemProps.duration}min</Text>
            <Text style={styles.detailItem}>
              {mealItemProps.complexity.toUpperCase()}
            </Text>
            <Text style={styles.detailItem}>
              {mealItemProps.affordability.toUpperCase()}
            </Text>
          </View>
        </View>
      </Pressable>
    </View>
  );
}

export default MealItem;
const styles = StyleSheet.create({
  mealItem: {
    margin: 16,
    borderRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
    backgroundColor: "white",
    shadowOpacity: 0.5,
    shadowRadius: 16,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  innarContainer: {
    borderRadius: 8,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
    margin: 8,
  },
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
  buttonPressed: {
    opacity: 0.5,
  },
});
