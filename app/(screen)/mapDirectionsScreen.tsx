import React, { useEffect, useRef, useState } from 'react';
import { Dimensions, Text, View } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const GoongMapComponent = () => {
  const [routeCoordinates, setRouteCoordinates] = useState<{ latitude: number; longitude: number }[]>([]);
  const mapRef = useRef(null);

  // Kích thước của bản đồ
  const { width, height } = Dimensions.get('window');

  
  useEffect(() => {
    // URL Goong API với API Key của bạn
    const url = `https://rsapi.goong.io/direction?origin=21.0759511%2C105.8100871&destination=20.989685%2C105.7514914&vehicle=car&api_key=1xR36Z0rKiXkXcewt25CPlN0d6Ojj4uH0zAQVKAL`;

    // Lấy dữ liệu từ Goong API
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        const encodedPolyline = data.routes[0].overview_polyline.points;
        const coordinates = decodePolyline(encodedPolyline);
        setRouteCoordinates(coordinates);
      })
      .catch((error) => console.error('Error fetching directions:', error));
  }, []);

  // Hàm giải mã polyline
  const decodePolyline = (encoded: string) => {
    let points = [];
    let index = 0, len = encoded.length;
    let lat = 0, lng = 0;

    while (index < len) {
      let b, shift = 0, result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dLat = result & 0x01 ? ~(result >> 1) : (result >> 1);
      lat += dLat;

      shift = 0;
      result = 0;
      do {
        b = encoded.charCodeAt(index++) - 63;
        result |= (b & 0x1f) << shift;
        shift += 5;
      } while (b >= 0x20);
      let dLng = result & 0x01 ? ~(result >> 1) : (result >> 1);
      lng += dLng;

      points.push({ latitude: lat / 1E5, longitude: lng / 1E5 });
    }
    return points;
  };

  return (
    <View style={{ flex: 1 }}>
      <Text style={{ textAlign: 'center', padding: 10 }}>
        Tuyến đường từ điểm xuất phát đến đích
      </Text>
      <MapView
        ref={mapRef}
        style={{ width, height }}
        initialRegion={{
          latitude: 21.0759511,
          longitude: 105.8100871,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        {/* Vẽ tuyến đường từ polyline */}
        <Polyline
          coordinates={routeCoordinates}
          strokeColor="#FF0000"
          strokeWidth={4}
        />
        {/* Đánh dấu điểm xuất phát */}
        <Marker coordinate={{ latitude: 21.0759511, longitude: 105.8100871 }} title="Bắt đầu" pinColor='blue' />
        {/* Đánh dấu điểm đích */}
        <Marker coordinate={{ latitude: 20.989685, longitude: 105.7514914 }} title="Đích" />
      </MapView>
    </View>
  );
};

export default GoongMapComponent;
