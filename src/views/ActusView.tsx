import { StatusBar } from "expo-status-bar";
import { useState, useRef, useEffect } from "react";
import { RefreshControl, ScrollView } from 'react-native';
import styles from '../../styles.css';
import ShopCard from "../components/ShopCard";
import SnapCarousel from "../components/SnapCarousel";
import StarProductCard from "../components/StarProductCard";
import ViewTitleText from "../components/ViewTitleText";
import aLaUneJson from '../data/a_la_une.json';
import Shop from "../mrktplace-models/Shop";
import api from '../mrktplace-models/api.json';
import User from "../mrktplace-models/User";
import Ad from "../mrktplace-models/Ad";

export default function ActusView() {
    // Properties
    const [refresh, setRefresh] = useState(false);
    const [ads, setAds] = useState([]);
    // Datas fecthing
    const getDatas = () => {
        setRefresh(true);
        fetch(
            api.serverIp + api.ads.get,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + User.authUser?.token,
                },
            })
            .then(response => response.json())
            .then(jsonData => {
                console.log(jsonData.ads); //! debug
                const data: any = [];
                jsonData.ads.forEach((ad: any, index: number) => {
                    // console.log(ad); //! debug
                    data.push(new Ad(ad));
                });
                setAds(data);
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
        <ScrollView
            style={styles.actusScrollView}
            refreshControl={
                <RefreshControl refreshing={refresh} onRefresh={getDatas} />
            }
        >
            <StatusBar style="auto" />
            {/* "A la une" Section */}
            <ViewTitleText title={"A la une"} />
            <SnapCarousel data={ads} autoplay={true} />
            {/* "Week news" Section */}
            <ViewTitleText title={"Nouveautés de la semaine"} />
            <SnapCarousel data={aLaUneJson} autoplay={true} />
            {/* "Star product" Section */}
            <ViewTitleText title={"Article du moment"} />
            <StarProductCard />
        </ScrollView>
    );
}