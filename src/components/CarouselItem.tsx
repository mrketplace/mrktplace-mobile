import { View, Text, TouchableOpacity } from "react-native";
import styles from '../../styles.css';
import PoppinsText from "./PoppinsText";

export default function CarouselItem(props: any) {
    return (
        <TouchableOpacity style={styles.carouselItem}>
            <PoppinsText
                variant={"Bold"}
                style={{ fontSize: 50, color: 'black' }}
                content={props.content}
            />


        </TouchableOpacity>
    );
}