import { StatusBar } from "expo-status-bar";
import Navigation from "./Navigation";
import { StyleSheet } from "react-native";

export default function App() {
  return (
    <>
      <Navigation />
      <StatusBar style="auto" />
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
