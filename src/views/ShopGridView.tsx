import { ScrollView, TouchableOpacity, Text, View, Vibration } from 'react-native';
import { useRef } from 'react';
import styles from '../../styles.css';
import Icons from '../components/base/Icons';
import ShopCard from "../components/ShopCard";
import shopsJson from '../data/shops.json';

export default function ShopGridView({ navigation }: { navigation: any }) {
    // Datas loading
    const shops: JSX.Element[] = [];
    shopsJson.forEach((shop, index) => {
        shops.push(
            <ShopCard key={index} navigation={navigation} shopName={shop.name} shopUri={shop.uri} />
        );
    });
    shops.push(
        <ShopCard key={15} navigation={navigation} shopName={"shop.name"} shopUri={"https://caf.fr"} />
    );
    // Properties
    const scrollRef: any = useRef();
    // Component rendering
    return (
        <View style={styles.shopsGridViewContainer}>
            {/* Titre */}
            {/* <Text style={styles.viewTitle}>Médicaments</Text> */}
            {/* Cards */}
            <ScrollView
                ref={scrollRef}
                style={styles.shopsGridView}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.shopsGridViewContent}
            >
                {shops}
                <TouchableOpacity
                    style={[styles.goToTopBtn, (shops.length % 2 != 0) ? styles.shopCard : null]}
                    onPress={() => {
                        Vibration.vibrate();
                        scrollRef.current?.scrollTo({
                            y: 0,
                            animated: true,
                        });
                    }
                    }
                >
                    <Icons framework="Feather" name="arrow-up-circle" color={'rgb(100, 100, 100)'} size={50} />
                    <Text style={{ marginTop: 5, fontFamily: 'Poppins-SemiBold', color: 'rgb(100, 100, 100)' }}>Revenir en haut</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}