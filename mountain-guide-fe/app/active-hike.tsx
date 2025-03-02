import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { router, Stack } from 'expo-router';
import MapView, { Marker, Polyline } from 'react-native-maps';
import * as Location from 'expo-location';
import { Ionicons } from '@expo/vector-icons';
import { calculateDistance } from '../utils/distance';
import { styles } from '../styles/style-active-hike';
interface Coordinate {
  latitude: number;
  longitude: number;
}

const ActiveHike = () => {
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );
  const [routeCoordinates, setRouteCoordinates] = useState<Coordinate[]>([]);
  const [distance, setDistance] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  useEffect(() => {
    const startLocationTracking = async () => {
      const { status } = await Location.getForegroundPermissionsAsync();
      if (status !== 'granted') {
        alert('Location permission is required for tracking your hike');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
      setRouteCoordinates([
        {
          latitude: location.coords.latitude,
          longitude: location.coords.longitude,
        },
      ]);

      Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000,
          distanceInterval: 10,
        },
        (newLocation) => {
          setLocation(newLocation);
          setRouteCoordinates((prevCoordinates) => {
            const newCoords = [
              ...prevCoordinates,
              {
                latitude: newLocation.coords.latitude,
                longitude: newLocation.coords.longitude,
              },
            ];

            // Calculate new distance
            if (prevCoordinates.length > 0) {
              const lastCoord = prevCoordinates[prevCoordinates.length - 1];
              const newDistance = calculateDistance(
                lastCoord.latitude,
                lastCoord.longitude,
                newLocation.coords.latitude,
                newLocation.coords.longitude
              );
              setDistance((d) => d + newDistance);
            }

            return newCoords;
          });
        }
      );
    };

    startLocationTracking();
  }, []);

  const formatTime = (totalSeconds: number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
    setIsActive(!isPaused); // This will stop/start the timer
  };

  return (
    <>
      <Stack.Screen
        options={{
          headerShown: true,
          title: 'Active Hike',
        }}
      />

      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location?.coords.latitude || 45.8333,
            longitude: location?.coords.longitude || 24.25,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          showsUserLocation
          followsUserLocation
        >
          <Polyline
            coordinates={routeCoordinates}
            strokeColor="#FF0000"
            strokeWidth={3}
          />
        </MapView>

        <View style={styles.statsContainer}>
          <Text style={styles.statsText}>
            Distance: {distance.toFixed(2)} km
          </Text>
          <Text style={styles.statsText}>Duration: {formatTime(seconds)}</Text>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.pauseButton} onPress={togglePause}>
            <Ionicons
              name={isPaused ? 'play' : 'pause'}
              size={24}
              color="white"
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.endButton}
            onPress={() => {
              setIsActive(false);
              router.back();
            }}
          >
            <Text style={styles.endButtonText}>End Hike</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ActiveHike;
