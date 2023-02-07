import React from "react";
import { ScrollView, View } from 'react-native';
import styles from '../../styles.css';
import ShopCard from "../components/ShopCard";

export default function ShopsView() {
    const shops = [];
    for (var i = 0; i < 10; i++) {
        shops.push(
            <ShopCard key={i} />
        );
    }
    // Component rendering
    return (
        <View>
            {/* Titre */}
            {/* <Text style={styles.viewTitle}>Médicaments</Text> */}
            {/* Cards */}
            <ScrollView
                style={styles.shopsGridView}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.shopsGridViewContent}
            >
                {shops}
            </ScrollView>
        </View>
    );
}