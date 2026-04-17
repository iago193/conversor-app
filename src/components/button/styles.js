import { colors } from "../../styles/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.inputBackground,
        paddingHorizontal: 16,
        paddingVertical: 8,
        margin: 4,
        borderRadius: 8,
        color: '#fff'
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