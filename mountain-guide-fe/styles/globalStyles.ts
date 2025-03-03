import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
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
