import { StatusBar } from "expo-status-bar";
import { Text, View } from 'react-native';
import styles from '../../styles.css';

export default function HomeView() {
    // Component rendering
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'Poppins-SemiBold' }}>HomeView</Text>
            <StatusBar style="auto" />
        </View>
    );
}