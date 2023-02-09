import { StatusBar } from "expo-status-bar";
import { Text, View } from 'react-native';
import styles from '../../styles.css';

export default function NotifsView() {
    // Component rendering
    return (
        <View style={styles.container}>
            <Text style={{ fontFamily: 'Poppins-SemiBold' }}>NotifsView</Text>
            <StatusBar style="auto" />
        </View>
    );
}