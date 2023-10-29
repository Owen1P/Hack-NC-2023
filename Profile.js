import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProfileScreen = () => {
  const [name, setName] = useState(''); // Initialize name state
  const [nationality, setNationality] = useState(''); // Initialize nationality state

  // Function to save user data to AsyncStorage
  const saveUserData = async () => {
    try {
      await AsyncStorage.setItem('name', name);
      await AsyncStorage.setItem('nationality', nationality);
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  // Function to load user data from AsyncStorage
  const loadUserData = async () => {
    try {
      const savedName = await AsyncStorage.getItem('name');
      const savedNationality = await AsyncStorage.getItem('nationality');

      if (savedName) {
        setName(savedName);
      }

      if (savedNationality) {
        setNationality(savedNationality);
      }
    } catch (error) {
      console.error('Error loading user data:', error);
    }
  };

  useEffect(() => {
    // Load user data when the component mounts
    loadUserData();
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={styles.profileImage}
        source={require('./icon.png')}
      />
      <Text style={styles.profileName}>{name || 'Name'}</Text>
      <Text style={styles.profileBio}>{nationality || 'Nationality'}</Text>
      <Text style={styles.profileInfo}>First language: Spanish</Text>
      <Text style={styles.profileInfo}>Target language: English</Text>
      <Button
        title="Edit Profile"
        onPress={() => {
          // Add navigation logic to edit the profile here

          // For example, you can navigate to an EditProfileScreen
          // and pass the saveUserData function as a prop to save changes.
        }}
        />
        <Button
        title="Edit Profile"
        onPress={() => {
  navigation.navigate('EditProfile');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  profileBio: {
    fontSize: 18,
    marginTop: 5,
  },
  profileInfo: {
    fontSize: 16,
    marginTop: 5,
  },
});

export default ProfileScreen;