import { StatusBar } from "expo-status-bar";
import { ScrollView } from 'react-native';
import styles from '../../styles.css';
import SnapCarousel from "../components/SnapCarousel";
import StarProductCard from "../components/StarProductCard";
import ViewTitleText from "../components/ViewTitleText";
import aLaUneJson from '../data/a_la_une.json';

export default function ActusView() {
    // Component rendering
    return (
        <ScrollView style={styles.actusScrollView}>
            <StatusBar style="auto" />
            {/* "A la une" Section */}
            <ViewTitleText title={"A la une"} />
            <SnapCarousel data={aLaUneJson} autoplay={true} />
            {/* "Week news" Section */}
            <ViewTitleText title={"Nouveautés de la semaine"} />
            <SnapCarousel data={aLaUneJson} autoplay={true} />
            {/* "Star product" Section */}
            <ViewTitleText title={"Article du moment"} />
            <StarProductCard />
        </ScrollView>
    );
}