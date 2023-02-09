import { WebView } from "react-native-webview";

export default function ShopView({ route }: { route: any }) {
    // Component rendering
    return <WebView source={{ uri: route.params.uri }} />;
}