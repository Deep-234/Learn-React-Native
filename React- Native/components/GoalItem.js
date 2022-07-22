//import React from "react"; no need of that
import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
  return (
    <Pressable
      android_ripple={{ color: "grey" }}
      onPress={props.onDelete.bind(this, props.id)}
      style={pressed => pressed && styles.pressedItem}>
      {/* pressed is boolean */}
      <View style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 15,
    backgroundColor: "blue",
  },
  pressedItem: {
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});
