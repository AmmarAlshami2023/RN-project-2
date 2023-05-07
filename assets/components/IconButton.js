import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
function IconButton({ Icon, onPress, color }) {
  return (
    <Pressable>
      <Ionicons
        name={Icon}
        size={24}
        color={color}
        onPress={onPress}
        style={({ pressed }) => (pressed ? styles.pressed : null)}
      />
    </Pressable>
  );
}

export default IconButton;
const styles = StyleSheet.create({
  pressed: {
    opacity: 0.7,
  },
});
