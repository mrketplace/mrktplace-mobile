import { TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles.css';

export default function ShopCard(props: any) {
    // Properties
    const navigation: any = useNavigation();
    // Component rendering
    return (
        <TouchableOpacity onPress={() => navigation.navigate('ShopView', { uri: props.shopUri })}>
            <View style={styles.shopCard}>


            </View>
        </TouchableOpacity>
    );
}