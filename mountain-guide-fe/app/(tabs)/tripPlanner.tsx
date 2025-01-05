import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useHeaderHeight } from '@react-navigation/elements';

const PlanTripPage = () => {
  const headerHeight = useHeaderHeight();
  const [tripName, setTripName] = useState('');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [destination, setDestination] = useState('');
  const [addedDestinations, setAddedDestinations] = useState<string[]>([]);
  const [showDatePicker, setShowDatePicker] = useState<{
    start: boolean;
    end: boolean;
  }>({
    start: false,
    end: false,
  });

  const addDestination = () => {
    if (destination.trim()) {
      setAddedDestinations([...addedDestinations, destination.trim()]);
      setDestination('');
    }
  };

  return (
    <>
      {/* Transparent Header */}
      <Stack.Screen
        options={{
          headerTransparent: true,
          headerTitle: '',
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginLeft: 20 }}>
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => {}} style={{ marginRight: 20 }}>
              <Text style={styles.saveButton}>Save</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <ScrollView style={[styles.container, { paddingTop: headerHeight }]}>
        {/* Trip Overview */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Trip Overview</Text>
          <TextInput
            style={styles.input}
            placeholder="Trip Name"
            value={tripName}
            onChangeText={setTripName}
          />
          <View style={styles.dateContainer}>
            {/* Start Date Picker */}
            <TouchableOpacity
              onPress={() =>
                setShowDatePicker({ ...showDatePicker, start: true })
              }
              style={styles.datePickerButton}
            >
              <Text>Start Date: {startDate.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker.start && (
              <DateTimePicker
                value={startDate}
                mode="date"
                display="default"
                onChange={(_, selectedDate) => {
                  setShowDatePicker({ ...showDatePicker, start: false });
                  if (selectedDate) setStartDate(selectedDate);
                }}
              />
            )}

            {/* End Date Picker */}
            <TouchableOpacity
              onPress={() =>
                setShowDatePicker({ ...showDatePicker, end: true })
              }
              style={styles.datePickerButton}
            >
              <Text>End Date: {endDate.toDateString()}</Text>
            </TouchableOpacity>
            {showDatePicker.end && (
              <DateTimePicker
                value={endDate}
                mode="date"
                display="default"
                onChange={(_, selectedDate) => {
                  setShowDatePicker({ ...showDatePicker, end: false });
                  if (selectedDate) setEndDate(selectedDate);
                }}
              />
            )}
          </View>
        </View>

        {/* Destination Selection */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Destinations</Text>
          <View style={styles.row}>
            <TextInput
              style={[styles.input, styles.destinationInput]}
              placeholder="Add Destination"
              value={destination}
              onChangeText={setDestination}
            />
            <TouchableOpacity style={styles.addButton} onPress={addDestination}>
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
          </View>
          <View style={styles.destinationList}>
            {addedDestinations.map((dest, index) => (
              <View key={index} style={styles.destinationItem}>
                <Text>{dest}</Text>
                <Ionicons
                  name="close"
                  size={20}
                  onPress={() =>
                    setAddedDestinations(
                      addedDestinations.filter((_, i) => i !== index)
                    )
                  }
                />
              </View>
            ))}
          </View>
        </View>

        {/* Itinerary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Itinerary</Text>
          <Text style={styles.placeholderText}>Feature coming soon...</Text>
        </View>

        {/* Budget */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Budget</Text>
          <Text style={styles.placeholderText}>Feature coming soon...</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default PlanTripPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
    paddingHorizontal: 20,
  },
  saveButton: {
    fontSize: 16,
    color: Colors.primary,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  datePickerButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: Colors.lightGray,
    borderRadius: 10,
    flex: 1,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  destinationInput: {
    flex: 1,
  },
  addButton: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  destinationList: {
    marginTop: 10,
  },
  destinationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.lightGray,
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
  },
  placeholderText: {
    color: Colors.darkGray,
    fontStyle: 'italic',
  },
});
