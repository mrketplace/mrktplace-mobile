import { useRef } from "react";
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Carousel from "react-native-snap-carousel";
import CarouselItem from "./CarouselItem";
import styles from '../../styles.css';

export default function SnapCarousel() {
    // Properties
    const datas: any[] = [1, 2, 3, 4];
    const carouselRef: any = useRef();
    // Item building
    const renderItem = ({ item }: { item: any }) => (
        <CarouselItem content={item} />
    );
    // Component rendering
    return (<View style={styles.carouselContainer}>
        <Carousel
            ref={carouselRef}
            data={datas}
            renderItem={renderItem}
            sliderWidth={Dimensions.get('window').width}
            itemWidth={Dimensions.get('window').width * 0.85}
            slideStyle={styles.carouselSlide}
        />
    </View>
    );
}


