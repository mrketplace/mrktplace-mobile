import { Text } from "react-native";

export default function PoppinsText(props: any) {
    // Font loading
    const fontFamily = (props.variant != null) ? 'Poppins-' + props.variant : 'Poppins-SemiBold';
    return (
        <Text
            numberOfLines={props.numberOfLines}
            style={[{ fontFamily: fontFamily }, (props.style != null) ? props.style : null]}>
            {props.content}
        </Text>
    );
}