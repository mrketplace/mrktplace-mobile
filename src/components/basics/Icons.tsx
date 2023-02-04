import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';

export default function Icons(props: any) {
    // Properties
    var icon: any = null;
    switch (props.framework) {
        case 'FontAwesome': icon = <FontAwesome name={props.name} color={props.color} size={props.size} style={props.style ?? null} />; break;
        case 'Ionicons': icon = <Ionicons name={props.name} color={props.color} size={props.size} style={props.style ?? null} />; break;
        case 'Octicons': icon = <Octicons name={props.name} color={props.color} size={props.size} style={props.style ?? null} />; break;
        case 'AntDesign': icon = <AntDesign name={props.name} color={props.color} size={props.size} style={props.style ?? null} />; break;
        case 'Feather': icon = <Feather name={props.name} color={props.color} size={props.size} style={props.style ?? null} />; break;
        case 'Fontisto': icon = <Fontisto name={props.name} color={props.color} size={props.size} style={props.style ?? null} />; break;
        case 'Entypo': icon = <Entypo name={props.name} color={props.color} size={props.size} style={props.style ?? null} />; break;
        case 'MaterialIcons': icon = <MaterialIcons name={props.name} color={props.color} size={props.size} style={props.style ?? null} />; break;
        case 'MaterialCommunityIcons': icon = <MaterialCommunityIcons name={props.name} color={props.color} size={props.size} style={props.style ?? null} />; break;
        default: icon = <FontAwesome name={props.name} color={props.color} size={props.size} style={props.style ?? null} />; break;
    }
    // Component rendering
    return icon;
}