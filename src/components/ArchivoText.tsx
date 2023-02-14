import { Text } from "react-native";

export default function ArchivoText(props: any) {
    // Font loading
    const fontFamily = (props.variant != null) ? 'Archivo-' + props.variant : 'Archivo-SemiBold';
    return (
        <Text
            numberOfLines={props.numberOfLines}
            style={[{ fontFamily: fontFamily }, (props.style != null) ? props.style : null]}>
            {props.content}
        </Text>
    );
}