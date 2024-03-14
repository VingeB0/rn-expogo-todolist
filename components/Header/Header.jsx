import {View, Text, TouchableOpacity} from "react-native";
import { s } from "./Header.style";
export function Header({clear}) {
    return (
        <>
            <View style={s.headerWrap}>
                <View style={s.logoWrap}>
                    <Text style={s.logo}>TODO</Text>
                    <Text style={s.sublogo}>list</Text>
                </View>
                <View>
                    <TouchableOpacity style={s.clearBtn} onPress={clear}>
                        <Text style={s.clearTxt}>Clear list</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={s.subtitle}>You probably have something to do</Text>
        </>
    );
}
