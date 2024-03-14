import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
    headerWrap: {
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: "center"
    },
    clearBtn: {
        backgroundColor: "#C2DAFF",
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderRadius: 7,
    },
    clearTxt: {
        color: "#2F76E5",
        fontWeight: "bold",
        fontSize: 16,
    },
    logoWrap: {
        flexDirection: "row"
    },
    logo: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    sublogo: {
        marginTop: 4,
        fontSize: 10,
    },
    subtitle: {
        fontSize: 16,
        color: "#ABABAB",
    },
});
