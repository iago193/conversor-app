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
import { currencies } from "./src/constants/currencies";
import { Input } from "./src/components/input";

export default function App() {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <ScrollView style={styles.scrollView}>
        <View style={styles.content}>
          <StatusBar style="light" />
          <View style={styles.header}>
            <Text style={styles.title}>Conversor de Moedas</Text>
            <Text style={styles.subTitle}>
              Converta valores entre diferentes moedas
            </Text>
          </View>
          <View style={styles.card}>
            <Text style={styles.label}>De:</Text>
            <View style={styles.currencyGrid}>
              {currencies.map((value, index) => (
                <ButtonInitConvert
                  key={index}
                  variant="primary"
                  text={value.code}
                />
              ))}
            </View>
            <Input value={''} onChangeText={''} label={''} />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
