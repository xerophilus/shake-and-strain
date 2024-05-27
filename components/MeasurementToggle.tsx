import { ThemedView } from "./ThemedView";
import { TouchableOpacity, LayoutAnimation } from "react-native";
import { ThemedText } from "./ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

const MeasurementToggle = ({onToggle, value}) => {
    const onColor = "#ffffff"
    const offColor = "#000000"
    const color = useThemeColor({ light: offColor, dark: onColor }, 'text');

    return (
        <ThemedView style={{margin: 5}}>
            <TouchableOpacity
                style={{
                    height: 40,
                    width: 80,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderColor: color,
                    overflow: "hidden"
                }}
                onPress={() => {
                    LayoutAnimation.easeInEaseOut();
                    onToggle(!value)
                }}
            >
                <ThemedView
                    style={{
                        height: '100%',
                        width: '50%',
                        backgroundColor: value ? onColor: offColor,
                        alignItems: "center",
                        alignSelf: value ? "flex-end" : "flex-start",
                        justifyContent: "center"
                    }}
                >
                    <ThemedText style={{color: value ? offColor : onColor}}>{value ? "ML" : 'OZ'}</ThemedText>
                </ThemedView>
            </TouchableOpacity>
            <TouchableOpacity>

            </TouchableOpacity>
        </ThemedView>
    )
}

export default MeasurementToggle;