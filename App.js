import { StatusBar } from "expo-status-bar";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { ButtonInitConvert } from "./src/components/button";
import { styles } from "./app.styles";
import { currencies } from "./src/constants/currencies";
import { Input } from "./src/components/input";
import { MaterialCommunityIcons } from "@expo/vector-icons";

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
            <Input value={""} onChangeText={""} label={"Valor:"} />
            <TouchableOpacity style={styles.swapHorizontalButton}>
              <Text style={styles.swapHorizontalText}>
                {" "}
                <MaterialCommunityIcons
                  name="swap-horizontal"
                  size={24}
                  color="white"
                />
              </Text>
            </TouchableOpacity>
            <Text style={styles.label}>Para:</Text>
            <View style={styles.currencyGrid}>
              <View style={styles.currencyGrid}>
                {currencies.map((value, index) => (
                  <ButtonInitConvert
                    key={index}
                    variant="secondary"
                    text={value.code}
                  />
                ))}
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.swapHorizontalButton}>
            <Text style={styles.swapHorizontalText}>Converter</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
