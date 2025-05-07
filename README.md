### DONE hien thi map

```
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView, { Marker, UrlTile } from 'react-native-maps';

const MapScreen = () => {
  const GOONG_MAP_API_KEY = 'CqJGWaabFV9MNodiMThwxZpkhBLgyZcalsD93NHG';

  // 👉 Danh sách nhiều địa điểm
  const locations = [
    {
      id: '1',
      title: 'AEON Mall',
      description: 'Địa điểm số 1',
      latitude: 20.989685,
      longitude: 105.7514914,
    },
    {
      id: '2',
      title: 'Lotte Mart',
      description: 'Địa điểm số 2',
      latitude: 21.0759511,
      longitude: 105.8100871,
    },
    {
      id: '3',
      title: 'Vincom Center',
      description: 'Địa điểm số 3',
      latitude: 21.0108794,
      longitude: 105.773362,
    },
  ];

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 20.989685,
          longitude: 105.7514914,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <UrlTile
          urlTemplate={`https://tiles.goong.io/assets/goong_map_web/{z}/{x}/{y}.png?api_key=${GOONG_MAP_API_KEY}`}
          maximumZ={20}
          flipY={false}
        />

        {/* 👉 Duyệt qua danh sách và tạo nhiều Marker */}
        {locations.map((loc) => (
          <Marker
            key={loc.id}
            coordinate={{ latitude: loc.latitude, longitude: loc.longitude }}
            title={loc.title}
            description={loc.description}
          />
        ))}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
```
