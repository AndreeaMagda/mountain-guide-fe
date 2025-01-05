import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  TextInput,
  ScrollView,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useHeaderHeight } from '@react-navigation/elements';
import QuickActions from '@/components/QuickActions';
import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

interface LocationType {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

interface Place {
  name: string;
  description: string;
}

const Page = () => {
  const headerHeight = useHeaderHeight();

  const [location, setLocation] = useState<LocationType | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Suggested places to display in cards
  const suggestedPlaces: Place[] = [
    {
      name: 'Vf Moldoveanu',
      description: 'Highest peak in Romania, located in the Făgăraș Mountains.',
    },
    {
      name: 'Vf Suranu',
      description: 'A beautiful peak in the Parâng Mountains.',
    },
    {
      name: 'Vf Vanatoarea lui Buteanu',
      description: 'A scenic peak in the Făgăraș Mountains.',
    },
    {
      name: 'Piatra Craiului',
      description:
        'Renowned for its stunning ridgeline and a popular destination for hikers.',
    },
  ];

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }

        const userLocation = await Location.getCurrentPositionAsync({});
        setLocation({
          latitude: userLocation.coords.latitude,
          longitude: userLocation.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        });
      } catch (error) {
        setErrorMsg('Failed to get location');
      }
    };

    getLocation();
  }, []);

  if (errorMsg) {
    return <Text>{errorMsg}</Text>;
  }

  if (!location) {
    return <Text>Loading...</Text>;
  }

  return (
    <>
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Image
                source={{
                  uri: 'https://www.kymillman.com/wp-content/uploads/f1/pages/driver-profiles/driver-faces/charles-leclerc-f1-driver-profile-picture.png',
                }}
                style={{ width: 40, height: 40, borderRadius: 10 }}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {}}
              style={{
                marginRight: 20,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Ionicons
                name="notifications"
                size={20}
                color={Colors.Black}
              ></Ionicons>
            </TouchableOpacity>
          ),
        }}
      />
      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <Text style={styles.headingText}>let’s seek another peak</Text>
        <View style={styles.searchSectionWrapper}>
          <View style={styles.searchBar}>
            <Ionicons name="search" size={18} style={{ marginRight: 5 }} />
            <TextInput placeholder="Search.." />
          </View>
          <TouchableOpacity onPress={() => {}} style={styles.filterBtn}>
            <Ionicons name="filter" size={18} color={Colors.White} />
          </TouchableOpacity>
        </View>
        <QuickActions />
        <View style={styles.containerMap}>
          <MapView style={styles.map} region={location}>
            {/* Marker for current location */}
            <Marker
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title="Your Location"
            />
          </MapView>
        </View>
        {/* Suggested places section */}
        <Text style={styles.sectionTitle}>Most Visited Peaks</Text>
        <ScrollView style={styles.suggestedPlacesContainer}>
          {suggestedPlaces.map((place, index) => (
            <View key={index} style={styles.card}>
              <Text style={styles.cardTitle}>{place.name}</Text>
              <Text style={styles.cardDescription}>{place.description}</Text>
              <TouchableOpacity style={styles.cardButton}>
                <Text style={styles.cardButtonText}>View Details</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  headingText: {
    fontSize: 28,
    fontWeight: '800',
    color: Colors.black,
    marginTop: 20,
  },
  searchSectionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.white,
    flex: 1,
    padding: 10,
    borderRadius: 10,
  },
  filterBtn: {
    backgroundColor: Colors.primary,
    padding: 12,
    borderRadius: 10,
    marginLeft: 10,
  },
  containerMap: {
    flex: 1,
    marginTop: 20,
  },
  map: {
    width: '100%',
    height: '50%',
    marginBottom: 20,
  },
  suggestedPlacesContainer: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 10,
  },
  card: {
    backgroundColor: Colors.white,
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: Colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.black,
  },
  cardDescription: {
    fontSize: 14,
    color: Colors.darkGray,
    marginVertical: 5,
  },
  cardButton: {
    marginTop: 10,
    backgroundColor: Colors.primary,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  cardButtonText: {
    color: Colors.white,
    textAlign: 'center',
    fontWeight: '600',
  },
});
