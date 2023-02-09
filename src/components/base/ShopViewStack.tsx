import { createStackNavigator } from '@react-navigation/stack';
import ShopGridView from '../../views/ShopGridView';
import ShopView from '../../views/ShopView';

const Stack = createStackNavigator();

export function ShopViewStack() {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="ShopGridView" component={ShopGridView} />
            <Stack.Screen name="ShopView" component={ShopView} />
        </Stack.Navigator>
    );
}