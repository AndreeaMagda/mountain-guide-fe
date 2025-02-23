import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { router } from 'expo-router';

const Trail = () => {
  const trailLocation = {
    latitude: 45.8333,
    longitude: 24.25,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  // Sample images array
  const photos = [
    'https://images.unsplash.com/photo-1551632811-561732d1e306',
    'https://images.unsplash.com/photo-1552057426-9f23e61fa7b1',
    'https://images.unsplash.com/photo-1551632810-549c4b3baf81',
  ];

  const reviews = [
    {
      id: '1',
      user: 'John D.',
      rating: 5,
      comment: 'Beautiful trail with amazing views!',
      date: '2024-03-15',
    },
    {
      id: '2',
      user: 'Sarah M.',
      rating: 4,
      comment: 'Great hike, well maintained path.',
      date: '2024-03-10',
    },
  ];

  const renderPhoto = ({ item }: { item: string }) => (
    <Image source={{ uri: item }} style={styles.galleryImage} />
  );

  const handleStartHike = () => {
    router.push('/active-hike');
  };

  return (
    <View style={styles.mainContainer}>
      <ScrollView style={styles.container}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1551632811-561732d1e306?q=80',
          }}
          style={styles.headerImage}
        />
        <Text style={styles.title}>Trail Name</Text>

        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Length: 5.2 km</Text>
          <Text style={styles.infoText}>Time: 2h 30min</Text>
          <Text style={styles.infoText}>Difficulty: Moderate</Text>
        </View>

        <View style={styles.descriptionContainer}>
          <Text style={styles.sectionTitle}>Description</Text>
          <Text style={styles.descriptionText}>
            This beautiful mountain trail offers stunning views of the
            surrounding peaks and valleys. The path is well-maintained and
            suitable for hikers of intermediate experience. You'll encounter
            diverse vegetation and possibly some local wildlife along the way.
          </Text>
        </View>

        <View style={styles.mapContainer}>
          <Text style={styles.sectionTitle}>Location</Text>
          <MapView style={styles.map} initialRegion={trailLocation}>
            <Marker coordinate={trailLocation} title="Trail Start" />
          </MapView>
        </View>

        <View style={styles.galleryContainer}>
          <Text style={styles.sectionTitle}>Photos</Text>
          <FlatList
            data={photos}
            renderItem={renderPhoto}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>

        <View style={styles.reviewsContainer}>
          <Text style={styles.sectionTitle}>Reviews</Text>
          {reviews.map((review) => (
            <View key={review.id} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <Text style={styles.reviewUser}>{review.user}</Text>
                <Text style={styles.reviewDate}>{review.date}</Text>
              </View>
              <Text style={styles.reviewRating}>
                {'⭐'.repeat(review.rating)}
              </Text>
              <Text style={styles.reviewComment}>{review.comment}</Text>
            </View>
          ))}
        </View>
      </ScrollView>

      <TouchableOpacity style={styles.startButton} onPress={handleStartHike}>
        <Text style={styles.startButtonText}>Start Hike</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  headerImage: {
    width: '100%',
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 20,
  },
  infoContainer: {
    padding: 20,
    paddingTop: 0,
  },
  infoText: {
    fontSize: 16,
    marginBottom: 8,
  },
  descriptionContainer: {
    padding: 20,
    paddingTop: 0,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    lineHeight: 24,
  },
  mapContainer: {
    padding: 20,
    paddingTop: 0,
  },
  map: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  galleryContainer: {
    padding: 20,
    paddingTop: 0,
  },
  galleryImage: {
    width: 200,
    height: 150,
    borderRadius: 10,
    marginRight: 10,
  },
  startButton: {
    backgroundColor: '#FF8C00',
    padding: 16,
    margin: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  reviewsContainer: {
    padding: 20,
    paddingTop: 0,
  },
  reviewCard: {
    backgroundColor: '#f5f5f5',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  reviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  reviewUser: {
    fontWeight: 'bold',
  },
  reviewDate: {
    color: '#666',
  },
  reviewRating: {
    marginBottom: 5,
  },
  reviewComment: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default Trail;
