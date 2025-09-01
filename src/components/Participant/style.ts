import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        width: "100%",
        backgroundColor: "#1F1E25",
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 12,
    },
    name: {
        flex: 1,
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
        marginLeft: 16,
    },
    button: {
        width: 56,
        height: 56,
        backgroundColor: "#E23C44",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 8,
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 24,
    },
})