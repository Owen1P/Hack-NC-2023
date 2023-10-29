// EditProfileScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfileScreen = ({ navigation }) => {
  const [newName, setNewName] = useState('');
  const [newNationality, setNewNationality] = useState('');

  const saveChanges = async () => {
    try {
      // Save the new data to AsyncStorage
      await AsyncStorage.setItem('name', newName);
      await AsyncStorage.setItem('nationality', newNationality);

      // Navigate back to the profile screen
      navigation.navigate('Profile');
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Edit Profile</Text>
      <TextInput
        placeholder="New Name"
        value={newName}
        onChangeText={(text) => setNewName(text)}
      />
      <TextInput
        placeholder="New Nationality"
        value={newNationality}
        onChangeText={(text) => setNewNationality(text)}
      />
      <Button title="Save Changes" onPress={saveChanges} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default EditProfileScreen;