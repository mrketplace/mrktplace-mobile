import React from "react";
import { Alert, Linking, Platform, StatusBar, TouchableOpacity, View } from 'react-native';
import InAppBrowser from "react-native-inappbrowser-reborn";
import styles from '../../styles.css';

export default function ShopCard(props: any) {
    // Properties
    const url = 'https://dribbble.com';
    const sleep = async (timeout: any) => {
        return new Promise(resolve => setTimeout(resolve, timeout))
    }
    const openPage = async () => {
        try {
            if (await InAppBrowser.isAvailable()) {
                // A delay to change the StatusBar when the browser is opened
                const animated = true;
                const delay = animated && Platform.OS === 'ios' ? 400 : 0;
                setTimeout(() => StatusBar.setBarStyle('light-content'), delay);
                const result = await InAppBrowser.open(url, {
                    // iOS Properties
                    dismissButtonStyle: 'cancel',
                    preferredBarTintColor: '#453AA4',
                    preferredControlTintColor: 'white',
                    readerMode: false,
                    animated,
                    modalPresentationStyle: 'fullScreen',
                    modalTransitionStyle: 'partialCurl',
                    modalEnabled: true,
                    enableBarCollapsing: false,
                    // Android Properties
                    showTitle: true,
                    toolbarColor: '#6200EE',
                    secondaryToolbarColor: 'black',
                    enableUrlBarHiding: true,
                    enableDefaultShare: true,
                    forceCloseOnRedirection: false,
                    // Specify full animation resource identifier(package:anim/name)
                    // or only resource name(in case of animation bundled with app).
                    animations: {
                        startEnter: 'slide_in_right',
                        startExit: 'slide_out_left',
                        endEnter: 'slide_in_left',
                        endExit: 'slide_out_right'
                    },
                    headers: {
                        'my-custom-header': 'my custom header value'
                    }
                });
                // A delay to show an alert when the browser is closed
                await sleep(800);
                Alert.alert('Response', JSON.stringify(result));
            } else {
                Linking.openURL(url);
            }
        } catch (error: any) {
            Alert.alert(error.message);
        } finally {
            // Restore the previous StatusBar of the App
            // StatusBar.setBarStyle(statusBarStyle);
        }
    }
    // Component rendering
    return (
        <TouchableOpacity onPress={openPage}>
            <View style={styles.shopCard}>


            </View>
        </TouchableOpacity>
    );
}