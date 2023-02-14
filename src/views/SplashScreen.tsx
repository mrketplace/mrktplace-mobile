import { View, Text } from "react-native";

export default function SplashScreen() {
    return (
        <View style={{ width: '100%', height: '100%', backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>The MarketPlace</Text>
        </View>
    );
}