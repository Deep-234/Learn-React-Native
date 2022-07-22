import {
  Button,
  StyleSheet,
  TextInput,
  View,
  Modal,
  ImageBackground,
} from "react-native";
import { useState } from "react";

function GoalInput(props) {
  const [enteredText, setText] = useState("");
  function goalInputHandler(getText) {
    // console.log("or be chutiye", getText);
    setText(getText);
  }

  function addGoalHandler() {
    props.addGoalHandler(enteredText);
    setText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <ImageBackground
        source={require("../img/test.png")}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            placeholder="your goal"
            onChangeText={goalInputHandler}
            value={enteredText}
          />
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Add goal" onPress={addGoalHandler} />
            </View>
            <View style={styles.button}>
              <Button title="cancel" onPress={props.endAddGoalHandler} />
            </View>
          </View>
        </View>
      </ImageBackground>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccccc",
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    width: "100%",
    marginRight: 8,
    padding: 8,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "40%",
    marginHorizontal: 8,
  },
  image: {
    flex: 1,
    //justifyContent: "center",
  },
});
