import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import HomeView from '../../views/HomeView';
import Icons from './Icons';
import ShopGridView from '../../views/ShopGridView';
import { ShopViewStack } from './ShopViewStack';

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
    // Properties
    const { colors } = useTheme();
    // Component rendering
    return (
        <Tab.Navigator screenOptions={{
            headerShown: true,
            // tabBarActiveTintColor: colors.activeIcon,
            // tabBarInactiveTintColor: colors.inactiveIcon,
            // tabBarHideOnKeyboard: true,
            // tabBarStyle: style.bottomTabs
        }}>
            <Tab.Screen name="Place" component={HomeView} options={{
                tabBarIcon: ({ size, color }) => (<Icons framework="Ionicons" name="earth" color={color} size={size} />)
            }} />
            <Tab.Screen name="Boutiques" component={ShopViewStack} options={{
                tabBarBadge: 'New',
                tabBarIcon: ({ size, color }) => (<Icons framework="Feather" name="shopping-bag" color={color} size={size} />)
            }} />
            <Tab.Screen name="Actus" component={HomeView} options={{
                tabBarBadge: '12',
                tabBarIcon: ({ size, color }) => (<Icons framework="FontAwesome" name="newspaper-o" color={color} size={size} />)
            }} />
            <Tab.Screen name="Notifications" component={HomeView} options={{
                tabBarBadge: '99+',
                tabBarIcon: ({ size, color }) => (<Icons framework="Octicons" name="bell" color={color} size={size} />)
            }} />
        </Tab.Navigator>
    );
}