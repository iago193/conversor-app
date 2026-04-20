import { Text, View } from "react-native";
import { StyleInput } from "./styles";
import { TextInput } from "react-native";

export function Input({ value, onChangeText, label }) {
  return (
    <View style={StyleInput.container}>
      <View Style={StyleInput.label}>
        <Text style={StyleInput.labelInput}>{label}</Text>
        <TextInput
          placeholder="0.00"
          onChangeText={onChangeText}
          value={value}
          style={StyleInput.input}
          keyboardType="numeric"
        ></TextInput>
      </View>
    </View>
  );
}
