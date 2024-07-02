import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Image, Text, ActivityIndicator } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { getCurrentPositionAsync, requestForegroundPermissionsAsync } from 'expo-location';
import LocationList from './locationList';

export default function Maps() {
  const [location, setLocation] = useState(null);
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  async function requestLocationPermissions() {
    const { granted } = await requestForegroundPermissionsAsync();

    if (granted) {
      const currentPosition = await getCurrentPositionAsync();
      setLocation(currentPosition);


      const { latitude, longitude } = currentPosition.coords;
      const API_URL = `https://maps.googleapis.com/maps/api/place/textsearch/json?query=lixo+eletronico+descarte&location=${latitude},${longitude}&radius=10000&key=AIzaSyCCpFGOXWWoy785t0MsjG1mesaR0UDN1kQ`;
    
      try {
        const response = await axios.get(API_URL);
        setPlaces(response.data.results);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching places:', error);
      }
    }
  }

  useEffect(() => {
    requestLocationPermissions();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#71FE6A" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {location && (
        <>
        <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
          latitudeDelta: 0.1,
          longitudeDelta: 0.8,
        }}

      >
        {places.map((point, index) => (
              <Marker
                key={index}
                coordinate={{
                  latitude: point.geometry.location.lat,
                  longitude: point.geometry.location.lng,
                }}
                title={point.name}
                description={point.formatted_address}
              />
            ))}
          </MapView>
          <View style={styles.location}>
            <Image
              source={require('../assets/greenLocationIcon.png')}
              style={styles.locationIcon}
            />
            <Text style={styles.simpleText}>Locais de Descarte:</Text>
          </View>
          <LocationList locations={places}/>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '90%',
  },
  map: {
    height: 350
  },
  simpleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#71FE6A',
    marginLeft: 8,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    marginTop: 15,
  },
  locationIcon: {
    width: 40,
    height: 40
  }, 
});
