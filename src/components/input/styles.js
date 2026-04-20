import { StyleSheet } from "react-native";
import { colors } from "../../styles/colors";

export const StyleInput = StyleSheet.create({
  container: {
    marginBottom: 16,
    flexDirection: 'column'
  },

  label: {
    color: colors.textSecondary,
    marginBottom: 8,
    fontSize: 14,
  },

  labelInput: {
    marginVertical: 4,
    color: colors.textSecondary,
  },

  input: {
    backgroundColor: colors.inputBackground,
    color: colors.text,
    fontSize: 24,
    fontWeight: 'bold',
    borderRadius: 8,
    padding: 8
  }
});
