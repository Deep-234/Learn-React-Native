//import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ScrollView, FlatList, Button } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [isVis, setVis] = useState(false);
  const [goalList, setGoalList] = useState([]);

  function startAddGoalHandler() {
    setVis(true);
  }

  function endAddGoalHandler() {
    setVis(false);
  }

  function addGoalHandler(enteredText) {
    //console.log(enteredText);
    setGoalList(currentCourseGoals => [
      ...currentCourseGoals,
      { text: enteredText, id: Math.random().toString() }, //could use key directly also, because flatlist will lokk for key
    ]);
    setVis(false);
  }

  function deleteGoalHandler(id) {
    // console.log("bhakk");
    setGoalList(curr => {
      return curr.filter(goal => goal.id !== id);
    });
  }
  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        {/* <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="your goal"
          onChangeText={goalInputHandler}
        />
        <Button title="Add goal" onPress={addGoalHandler} />
      </View> */}
        <Button title="Add Task" color="red" onPress={startAddGoalHandler} />
        <GoalInput
          visible={isVis}
          addGoalHandler={addGoalHandler}
          endAddGoalHandler={endAddGoalHandler}
        />
        <View style={styles.goalsContainer}>
          {/* <ScrollView >
        
          {goalList.map(goal => (
            <View style={styles.goalItem} key={goal}>
              <Text style={styles.goalText}>{goal}</Text>
            </View>
          ))}
        
        </ScrollView> */}
          <FlatList
            data={goalList}
            renderItem={itemData => {
              return (
                <GoalItem
                  text={itemData.item.text}
                  id={itemData.item.id}
                  onDelete={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 3,
  },
});
