import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    card: {
        paddingVertical: 10,
        backgroundColor: "white",
        height: "auto",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 1,
        elevation: 5,
        borderRadius: 13,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 25,
    },
    img: {
        height: 25,
        width: 25,
    },
});
