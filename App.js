import React from "react";
import { Button, View, Text, StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Home Screen</Text>
    <Button
      title="Go to Duration Exercise"
      onPress={() => navigation.navigate("DurationExercise")}
    />
    {/* buttons */}
    <Button
      title="Go to Repetition Exercise"
      onPress={() => navigation.navigate("RepetitionExercise")}
    />
  </View>
);

// Duration Exercise Screen component
const DurationExerciseScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Duration Exercise Screen</Text>
    {/* content for Duration Exercise */}
  </View>
);

// (placeholder for now)
const RepetitionExerciseScreen = () => (
  <View style={styles.container}>
    <Text style={styles.title}>Repetition Exercise Screen</Text>
    {/* content for Repetition Exercise */}
  </View>
);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="DurationExercise"
          component={DurationExerciseScreen}
        />
        <Stack.Screen
          name="RepetitionExercise"
          component={RepetitionExerciseScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// component styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});
