import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#131016",
    padding: 16,
  },
  eventNome: {
    color: "#FFFFFF",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 24,
  },
  eventData : {
    fontSize: 16,
    color: "#FFFFFF",
  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: "#1F1E25",
    borderRadius: 5,
    color: "#FFFFFF",
    padding: 16,
    fontSize: 16,
    marginRight: 8,
  },
    button: {
        width: 56,
        height: 56,
        backgroundColor: "#31CF67",
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 8,
    },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 24,
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 32,
    marginBottom: 36,
  },
  emptyText: {
    color: "#FFFFFF",
    fontSize: 16,
    textAlign: "center",
  },
});