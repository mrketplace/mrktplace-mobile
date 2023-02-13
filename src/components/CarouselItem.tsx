import { Image, TouchableHighlight, TouchableOpacity } from "react-native";
import styles from '../../styles.css';

export default function CarouselItem(props: any) {
    // Component rendering
    return (
        <TouchableHighlight
            style={styles.carouselItem}
            onPress={() => console.log('CarouselItem pressed')}>
            <Image
                resizeMode={"cover"}
                style={styles.aLaUneImg}
                source={{ uri: props.img }}
            />
        </TouchableHighlight>
    );
}