import { useRef, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselItem from "./CarouselItem";
import styles from '../../styles.css';
import aLaUneJson from '../data/a_la_une.json';

export default function SnapCarousel() {
    // Data loading
    const aLaUne: any[] = [];
    aLaUneJson.forEach((img) => {
        aLaUne.push(img);
    });
    // Item building
    const renderItem = ({ item }: { item: any }) => (
        <CarouselItem img={item.src} />
    );
    // Properties
    const [activeSlide, setActiveSlide] = useState(0);
    const carouselRef: any = useRef();
    // Component rendering
    return (
        <View style={styles.carouselContainer}>
            <Carousel
                ref={carouselRef}
                data={aLaUne}
                renderItem={renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width * 0.85}
                slideStyle={styles.carouselSlide}
                inactiveSlideOpacity={0.4}
                onSnapToItem={(index) => setActiveSlide(index)}
            />
            {/* TODO: Finish this */}
            <Pagination
                dotsLength={aLaUne.length}
                activeDotIndex={activeSlide}
                containerStyle={styles.carouselPagination}
                dotStyle={styles.carouselDot}
                inactiveDotStyle={{ /* Define styles for inactive dots here*/ }}
                inactiveDotOpacity={0.4}
                inactiveDotScale={0.6}
                animatedDuration={100}
            />
        </View>
    );
}


