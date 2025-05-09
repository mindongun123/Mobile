import { router } from 'expo-router';
import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
} from 'react-native';
import MapView, { Marker, UrlTile } from 'react-native-maps';

const MapViewScreen = () => {
  const [selectedLocation, setSelectedLocation] = useState<{
    id: string;
    title: string;
    rate: number;
    description: string;
    latitude: number;
    longitude: number;
    price: number;
  } | null>(null);

  const GOONG_MAP_API_KEY = 'CqJGWaabFV9MNodiMThwxZpkhBLgyZcalsD93NHG';

  const locations = [
    {
      id: '1',
      title: 'AEON Mall',
      rate: 4.5,
      description: 'AEON Mall is a large shopping mall in Hanoi.',
      latitude: 20.989685,
      longitude: 105.7514914,
      price: 1000000,
    },
    {
      id: '2',
      title: 'Lotte Mart',
      rate: 4.0,
      description: 'Lotte Mart is a popular shopping destination in Hanoi.',
      latitude: 21.0759511,
      longitude: 105.8100871,
      price: 1256000,
    },
    {
      id: '3',
      title: 'Vincom Center',
      rate: 4.7,
      description: 'Vincom Center is a high-end shopping mall in Hanoi.',
      latitude: 21.0108794,
      longitude: 105.773362,
      price: 1504000,
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 20.989685,
          longitude: 105.7514914,
          latitudeDelta: 0.05,
          longitudeDelta: 0.05,
        }}
      >
        <UrlTile
          urlTemplate={'https://tiles.goong.io/assets/goong_map_web/{z}/{x}/{y}.png?api_key=${GOONG_MAP_API_KEY}'}
          maximumZ={20}
          flipY={false}
        />

        {locations.map((loc) => (
          <Marker
            key={loc.id}
            coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
            onPress={() => setSelectedLocation(loc)}
          >
            <View style={styles.customMarker}>
              <View style={styles.markerDot} />
              <View style={{ backgroundColor: 'white', borderRadius: 4 }}>
                <Text style={styles.markerText}>{loc.title}</Text>
                <Text style={styles.price}>{loc.price} đ</Text>
              </View>
            </View>
          </Marker>
        ))}
      </MapView>

      {/* Hiển thị thông tin khi Marker được bấm */}
      <Modal visible={!!selectedLocation} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={() => setSelectedLocation(null)}>
          <View style={styles.modalOverlay}>
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{selectedLocation?.title}</Text>
              <Text>{selectedLocation?.rate} ⭐</Text>
              <Text>{selectedLocation?.description}</Text>
              <Text style={styles.cardPrice}>{selectedLocation?.price?.toLocaleString()} đ</Text>
              <Pressable
                onPress={() => {
                  setSelectedLocation(null);
                  router.push('/(screen)/mapDirectionsScreen');
                }}
                style={styles.cardButton}
              >
                <Text style={styles.cardButtonText}>Xem khách sạn</Text>
              </Pressable>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default MapViewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  customMarker: {
    alignItems: 'center',
  },
  markerDot: {
    width: 16,
    height: 16,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#fff',
  },
  markerText: {
    fontSize: 14,
    paddingHorizontal: 4,
    borderRadius: 4,
    marginTop: 4,
    color: '#000',
    elevation: 2,
    textAlign: 'center',
    fontWeight: '600',
  },
  price: {
    paddingLeft: 6,
    fontSize: 12, 
    color: '#007AFF',
    fontWeight: 'bold',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 10,
    width: '90%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 6,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  cardPrice: {
    fontSize: 14,
    color: '#007AFF',
    marginTop: 8,
  },
  cardButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    borderRadius: 6,
    marginTop: 12,
    alignItems: 'center',
  },
  cardButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});