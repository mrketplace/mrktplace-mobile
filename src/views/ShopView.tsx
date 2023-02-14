import { useState } from "react";
import { WebView } from "react-native-webview";
import ErrorView from "./ErrorView";

export default function ShopView({ route }: { route: any }) {
    // Checking
    const [isReachable, setReachable] = useState(true);
    // Component rendering
    return (isReachable) ? <WebView
        source={{ uri: route.params.shopUrl }}
        // TODO Correct error management
        onError={() => setReachable(false)}
        containerStyle={{ backgroundColor: 'green', margin: 0, padding: 0 }}
        renderError={(errorName) => <ErrorView />}
    /> : <ErrorView />;
}