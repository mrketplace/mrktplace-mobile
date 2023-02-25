import { useEffect, useRef, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import CarouselItem from "./CarouselItem";
import styles from '../../styles.css';

export default function SnapCarousel(props: any) {
    // Properties
    const [activeSlide, setActiveSlide] = useState(0);
    const second = 1000;
    const carouselRef: any = useRef();
    // Item building
    const renderItem = ({ item }: { item: any }) => (
        <CarouselItem img={item.img} />
    );
    // Component rendering
    return (
        <View style={styles.carouselContainer}>
            <Carousel
                ref={carouselRef}
                data={props.data}
                renderItem={renderItem}
                sliderWidth={Dimensions.get('window').width}
                itemWidth={Dimensions.get('window').width * 0.85}
                slideStyle={styles.carouselSlide}
                inactiveSlideOpacity={0.4}
                onSnapToItem={(index) => setActiveSlide(index)}
                layout={'default'}
                autoplay={props.autoplay}
                autoplayInterval={props.autoplayInterval || 10000}
                loop={(props.autoplay) ? true : props.loop}
            />
            {/* TODO: Finish this */}
            <Pagination
                dotsLength={props.data.length}
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


