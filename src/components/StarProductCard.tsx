import { TouchableOpacity, View, Image } from "react-native";
import styles from '../../styles.css';
import Icons from "./base/Icons";
import PoppinsText from "./PoppinsText";

export default function StarProductCard() {
    // Data loading
    const product = {
        shop: "Allthingsyouwhantshop",
        name: "Robe de soirée",
        details: "Une belle robe pour sortir fraichement avec ses copines en soirée. Avec elle vous ne passerez pas inaperçue belle demoiselle.",
        img: "https://img.ltwebstatic.com/images3_pi/2021/08/26/162996716498f8b2e7aef6ab03e135442601a53a8b_thumbnail_600x.webp"
    };
    // Component rendering
    return (
        <View style={styles.starProductCard}>
            {/* Product Image */}
            <TouchableOpacity style={styles.starProductCardTopSection}>
                <Image
                    resizeMode={"cover"}
                    style={styles.starProductImg}
                    source={{ uri: product.img }}
                />
            </TouchableOpacity>
            <View style={styles.starProductCardBottomSection}>
                {/* Product Details */}
                <PoppinsText content={product.name} style={styles.starProductName} />
                <PoppinsText
                    content={product.details}
                    variant={"Regular"}
                    style={styles.starProductDetails}
                    numberOfLines={4}
                />
                {/* Shop Details */}
                <TouchableOpacity style={styles.starProductShopDetailsBox}>
                    <Icons framework="Feather" name="shopping-bag" color={"black"} size={25} />
                    <PoppinsText content={product.shop} variant={"Medium"} style={styles.starProductShopName} />
                </TouchableOpacity>
            </View>
        </View>
    );
}