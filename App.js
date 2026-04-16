import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { ButtonInitConvert } from "./src/components/button";

export default function App() {
  return (
    <View>
      <StatusBar style="auto" />
      <View>
        <Text>Conversor de Moedas</Text>
        <Text>Converta valores entre diferentes moedas</Text>
      </View>
      <View>
        <Text>De:</Text>
      </View>
      <ButtonInitConvert />
    </View>
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
