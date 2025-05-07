import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { WebView } from 'react-native-webview';
import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';

export default function GoongMap() {
  const [htmlContent, setHtmlContent] = useState<string | null>(null);

  useEffect(() => {
    const loadHtml = async () => {
      const asset = Asset.fromURI(FileSystem.documentDirectory + 'map.html');

      // Nếu file chưa có trong documentDirectory thì copy từ bundle
      const localPath = Asset.fromModule(require('../assets/map.html'));
      await localPath.downloadAsync();

      const content = await FileSystem.readAsStringAsync(localPath.localUri || '', {
        encoding: FileSystem.EncodingType.UTF8,
      });

      const replaced = content.replace('%GOONG_API_KEY%', 'duTSfwuLT4ruFKNoLss3uIvXftHpl6ywuIDjsYdn');
      setHtmlContent(replaced);
    };

    loadHtml();
  }, []);

  if (!htmlContent) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View>
      <Text>Hello</Text>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={{ flex: 1 }}
      />
    </View>
  );
}
