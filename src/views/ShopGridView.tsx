import { ScrollView, TouchableOpacity, Text, View, RefreshControl } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import styles from '../../styles.css';
import Icons from '../components/base/Icons';
import ShopCard from "../components/ShopCard";
import api from '../mrktplace-models/api.json';
import shopsJson from '../data/shops.json';
import Shop from '../mrktplace-models/Shop';

export default function ShopGridView({ navigation }: { navigation: any }) {
    // Properties
    const [refresh, setRefresh] = useState(false);
    const [shops, setShops] = useState([]);
    const scrollRef: any = useRef();
    // Datas fecthing
    const getDatas = () => {
        setRefresh(true);
        fetch(api.serverIp + api.shops.get, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then(response => response.json())
            .then(jsonData => {
                // console.log(jsonData.shops); //! debug
                const data: any = [];
                jsonData.shops.forEach((shop: any, index: number) => {
                    data.push(
                        <ShopCard key={index} navigation={navigation} shop={new Shop(shop)} />
                    );
                });
                setShops(data);
            })
            .catch(error => {
                console.error("API ERROR -> " + error);
            })
            .finally(() => setRefresh(false));
    };
    useEffect(() => {
        getDatas();
    }, []);
    // Component rendering
    return (
        <View style={styles.shopsGridViewContainer}>
            {/* Titre */}
            {/* <Text style={styles.viewTitle}>Boutiques</Text> */}
            {/* Cards */}
            <ScrollView
                ref={scrollRef}
                style={styles.shopsGridView}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.shopsGridViewContent}
                refreshControl={
                    <RefreshControl refreshing={refresh} onRefresh={getDatas} />
                }
            >
                {shops}
                <TouchableOpacity
                    style={[styles.goToTopBtn, (shops.length % 2 != 0) ? styles.shopCard : null]}
                    onPress={() => {
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