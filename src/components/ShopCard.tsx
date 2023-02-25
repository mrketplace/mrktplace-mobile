import { Image, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../styles.css';

export default function ShopCard(props: any) {
    // Properties
    const navigation: any = useNavigation();
    // Component rendering
    return (
        <TouchableOpacity onPress={() => {
            console.log(props.shop);
            navigation.navigate('ShopView', { shopUrl: props.shop.url });
        }}>
            <View style={styles.shopCard}>
                <Image
                    resizeMode={"cover"}
                    style={styles.shopCardImg}
                    source={{ uri: props.shop.img }}
                />
            </View>
        </TouchableOpacity>
    );
}