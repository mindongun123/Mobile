import { router } from 'expo-router';
import React from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Callout, Marker, UrlTile } from 'react-native-maps';

const MapViewScreen = () => {

  const GOONG_MAP_API_KEY = 'CqJGWaabFV9MNodiMThwxZpkhBLgyZcalsD93NHG';

  const locations = [
    {
      id: '1',
      title: 'AEON Mall',
      rate: 4.5,
      description: 'AEON Mall is a large shopping mall in Hanoi.',
      latitude: 20.989685,
      longitude: 105.7514914,
      price: 100000,
    },
    {
      id: '2',
      title: 'Lotte Mart',
      rate: 4.0,
      description: 'Lotte Mart is a popular shopping destination in Hanoi.',
      latitude: 21.0759511,
      longitude: 105.8100871,
      price: 125600,
    },
    {
      id: '3',
      title: 'Vincom Center',
      rate: 4.7,
      description: 'Vincom Center is a high-end shopping mall in Hanoi.',
      latitude: 21.0108794,
      longitude: 105.773362,
      price: 150400,
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
          urlTemplate={`https://tiles.goong.io/assets/goong_map_web/{z}/{x}/{y}.png?api_key=${GOONG_MAP_API_KEY}`}
          maximumZ={20}
          flipY={false}
        />

        {locations.map((loc) => (
          <Marker
            key={loc.id}
            coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
            title={loc.title}
            description={loc.description}
            pinColor="blue"
          >
            <View style={styles.customMarker}>
              <Text style={styles.markerText}>{loc.title}{"\n"}<Text style={styles.price}>{loc.price} {"đ"}</Text></Text>
              <Image
                source={require('../../assets/images/location.png')}
                style={styles.markerIcon}
              />
            </View>
            <Callout onPress={() => {
              router.push("/(screen)/mapDirectionsScreen");
            }}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutTitle}>{loc.title}</Text>
                <Text>{loc.rate} ⭐</Text>
                <Text>{loc.description}</Text>

              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>
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
  markerText: {
    fontSize: 12,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 2,
    backgroundColor: 'white',
    paddingHorizontal: 4,
    borderRadius: 4,
    elevation: 2,
    textAlign: 'center',
  },
  price: {
    fontSize: 12,
    color: '#007AFF',
    fontWeight: 'bold',
  },
  markerIcon: {
    width: 24,
    height: 24,
  },

  calloutContainer: {
    padding: 5,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  calloutTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  calloutPrice: {
    fontSize: 12,
    color: '#007AFF',
  },
});
