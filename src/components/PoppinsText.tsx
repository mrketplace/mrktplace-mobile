import { useFonts } from "expo-font";
import { Text } from "react-native";
import fonts from '../../fonts';

export default function PoppinsText(props: any) {
    // Font loading
    const [fontsLoaded] = useFonts(fonts);
    const fontFamily = (props.variant != null) ? 'Poppins-' + props.variant : 'Poppins-SemiBold';
    return (
        <Text
            style={[{ fontFamily: fontFamily }, (props.style != null) ? props.style : null]}>
            {props.content}
        </Text>
    );
}