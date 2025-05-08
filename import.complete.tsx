import React from 'react';
import { WebView } from 'react-native-webview';

export default function GoongMapIframe() {
  const iframeHtml = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
          body, html {
            margin: 0;
            padding: 0;
            height: 100%;
          }
          iframe {
            width: 100%;
            height: 100%;
            border: none;
          }
        </style>
      </head>
      <body>
        <iframe 
          src="https://maps.goong.io/maps/embed?mid=0a2321a9-31af-43f6-82d7-39df2ebb02d9&lat=21.026745&long=105.801982&z=12" 
          allowfullscreen
        ></iframe>
      </body>
    </html>
  `;

  return (
    <WebView
      originWhitelist={['*']}
      source={{ html: iframeHtml }}
      style={{ flex: 1 }}
    />
  );
}
