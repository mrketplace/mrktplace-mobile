import { StatusBar } from "expo-status-bar";
import { Text, View } from 'react-native';
import styles from '../../styles.css';
import PoppinsText from "../components/PoppinsText";
import SnapCarousel from "../components/SnapCarousel";

export default function ActusView() {
    // Component rendering
    return (
        <View style={styles.viewContainer}>
            <StatusBar style="auto" />
            <PoppinsText
                variant={"Bold"}
                style={styles.viewTitleText}
                content={"A la une"} />
            <SnapCarousel />
            <PoppinsText
                variant={"Bold"}
                style={styles.viewTitleText}
                content={"Nouveautés de la semaine"} />
            <PoppinsText
                variant={"Bold"}
                style={styles.viewTitleText}
                content={"L'article du moment"} />

        </View>
    );
}