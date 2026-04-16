import { colors } from "../../styles/colors";
import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    button: {
        backgroundColor: colors.inputBackground,
        paddingHorizontal: 16,
        paddingVertical: 8,
        margin: 4,
        borderRadius: 8,
    },

    ButtonText: {
        color: colors.text,
        fontWeight: '500',
    },

    buttonPrimary: {
        backgroundColor: colors.primary
    },

    buttonSecondary: {
        backgroundColor: colors.secondary
    }
})