import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function ButtonInitConvert({ variant = "primary", onPress, text }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          styles.button,
          variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}
