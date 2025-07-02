import React from 'react';
import { SafeAreaView } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{ uri: 'https://reptrack-ten.vercel.app/' }}
        style={{ flex: 1 }}
      />
    </SafeAreaView>
  );
}