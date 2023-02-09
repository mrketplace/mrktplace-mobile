import { StatusBar } from "expo-status-bar";
import { Image, View } from 'react-native';
import PoppinsText from "../components/PoppinsText";
import styles from '../../styles.css';

export default function ErrorView() {
    // Component rendering
    return (
        <View style={styles.errorView}>
            <StatusBar style="auto" />
            <Image
                resizeMode={"contain"}
                style={styles.errorImg}
                source={require('../../assets/img/404.gif')}
            />
            <PoppinsText
                style={styles.errorViewText}
                variant={"Bold"}
                content={"Ne vous inquiétez pas, notre boutique sera bientot disponible !"} />
            <PoppinsText
                style={{}}
                variant={"Light"}
                content={"Profitez pour visiter nos autres boutiques 😉"} />
        </View>
    );
}
