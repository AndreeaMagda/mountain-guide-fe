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
import { styles } from '../../styles/globalStyles';

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

export default Trail;
