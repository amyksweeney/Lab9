import React, { useState } from "react";
import { View, Text, Button } from "react-native";

const DurationExercise = ({ route, navigation }) => {
  const { exerciseName } = route.params;
  const [seconds, setSeconds] = useState(0); // timer count in seconds
  const [isRunning, setIsRunning] = useState(false); // timer running out

  // start timer
  const startTimer = () => {
    setIsRunning(true);
    setSeconds((prev) => prev + 1); // increment 1 sec
  };

  // stop timer
  const stopTimer = () => {
    setIsRunning(false);
  };

  // reset timer
  const resetTimer = () => {
    setIsRunning(false); // stop timer
    setSeconds(0); // reset the seconds to 0
  };

  return (
    <View>
      <Text>{exerciseName}</Text> {/* displays exercise */}
      <Text>{seconds} seconds</Text> {/* display elapsed time in seconds */}
      {/* start/stop timer button */}
      <Button
        title={isRunning ? "Stop Timer" : "Start Timer"}
        onPress={isRunning ? stopTimer : startTimer}
      />
      {/* reset timer button */}
      <Button title="Reset Timer" onPress={resetTimer} />
      {/* navigation buttons */}
      <Button
        title="Suggested Exercise"
        onPress={() => navigation.navigate("Plank")}
      />
      <Button title="Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
};

export default DurationExercise;
