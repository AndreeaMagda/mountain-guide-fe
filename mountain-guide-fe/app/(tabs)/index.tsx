import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
  Image,
  TextInput,
} from 'react-native';
import React from 'react';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { useHeaderHeight } from '@react-navigation/elements';
import QuickActions from '@/components/QuickActions';

const Page = () => {
  const headerHeight = useHeaderHeight();
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
    backgroundColor: Colors.white,
    padding: 12,
    borderRadius: 10,
    marginLeft: 10,
  },
});
