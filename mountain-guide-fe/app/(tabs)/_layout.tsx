import { View, Text } from 'react-native';
import React from 'react';
import { Tabs } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="compass" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="users" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="search" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="map" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="tripPlanner"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="walk" size={28} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
