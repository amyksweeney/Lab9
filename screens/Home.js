import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

const exercises = [
  { id: "1", name: "Push-ups", type: "Repetition" },
  { id: "2", name: "Planks", type: "Duration" },
  { id: "3", name: "Squats", type: "Repetition" },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Button
            title={item.name}
            onPress={() =>
              navigation.navigate(
                item.type === "Repetition"
                  ? "RepetitionExercise"
                  : "DurationExercise",
                { exercise: item }
              )
            }
            buttonStyle={styles.button}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    padding: 20,
  },
  button: {
    marginVertical: 10,
    width: 250,
    backgroundColor: "#007bff",
    borderRadius: 5,
    paddingVertical: 12,
  },
  buttonTitle: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
