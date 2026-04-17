import { Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

export function ButtonInitConvert({ variant = "primary", onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text
        style={[
          styles.button,
          variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary
        ]}
      >
        Calcular
      </Text>
    </TouchableOpacity>
  );
}
