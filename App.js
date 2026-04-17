import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { ButtonInitConvert } from "./src/components/button";
import { styles } from "./app.styles";

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        <View>
          <StatusBar style="auto" />
          <View>
            <Text>Conversor de Moedas</Text>
            <Text>Converta valores entre diferentes moedas</Text>
          </View>
          <View>
            <Text>De:</Text>
            <ButtonInitConvert variant="secondary" />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
