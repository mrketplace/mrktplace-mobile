import { Image, TouchableOpacity } from "react-native";
import styles from '../../styles.css';

export default function CarouselItem(props: any) {
    // Component rendering
    return (
        <TouchableOpacity style={styles.carouselItem}>
            <Image
                resizeMode={"cover"}
                style={styles.aLaUneImg}
                source={{ uri: props.img }}
            />
        </TouchableOpacity>
    );
}