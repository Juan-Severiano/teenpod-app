import { SafeAreaView } from "react-native-safe-area-context";
import WebView from "react-native-webview";

export default () => {
    return(
    <SafeAreaView style={{ flex: 1, backgroundColor: '#eee' }}>
        <WebView
          source={{ uri: 'https://teenpod.pythonanywhere.com/admin/app/podcast/add/' }}
          style={{ flex: 1 }}
        />
    </SafeAreaView>
    )
}
