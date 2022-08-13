import { StatusBar } from "expo-status-bar";
import Navigation from "./Navigation";
import { StyleSheet } from "react-native";

const COLORS = { primary: "#282534", white: "#fff" };

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style={{ backgroundColor: COLORS.primary }} />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
