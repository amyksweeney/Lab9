import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const RepetitionExercise = ({ route, navigation }) => {
  const { exerciseName } = route.params;
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>{exerciseName}</Text>
      <Text>Reps: {count}</Text>
      <Button title="Increase" onPress={() => setCount(count + 1)} />
      <Button title="Reset" onPress={() => setCount(0)} />
      <Button
        title="Suggested Exercise"
        onPress={() => navigation.navigate("Plank")}
      />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default RepetitionExercise;
