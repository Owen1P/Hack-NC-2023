import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const EditProfileScreen = ({ navigation }) => {
  const [newName, setNewName] = useState('');
  const [newNationality, setNewNationality] = useState('');
  const [firstLanguage, setFirstLanguage] = useState('');
  const [targetLanguage, setTargetLanguage] = useState('');
  const [location, setLocation] = useState('');
  const [isNationalityOpen, setNationalityOpen] = useState(false);
  const [isFirstLanguageOpen, setFirstLanguageOpen] = useState(false);
  const [isTargetLanguageOpen, setTargetLanguageOpen] = useState(false);

  const nationalityOptions = ['Select Nationality', 'German', 'American', 'Spanish'];
  const firstLanguageOptions = ['Select First Language', 'English', 'Spanish', 'German'];
  const targetLanguageOptions = ['Select Target Language', 'English', 'Spanish', 'German'];

  const saveChanges = async () => {
    try {
      await AsyncStorage.setItem('name', newName);
      await AsyncStorage.setItem('nationality', newNationality);
      await AsyncStorage.setItem('firstLanguage', firstLanguage);
      await AsyncStorage.setItem('targetLanguage', targetLanguage);
      await AsyncStorage.setItem('location', location);
      // Update the profile information in real-time
      navigation.setParams({ name: newName, nationality: newNationality });
      navigation.navigate('Profile');
    } catch (error) {
      console.error('Error saving user data:', error);
    }
  };

  useEffect(() => {
    // Fetch profile information when the component mounts
    const loadUserData = async () => {
      try {
        const savedName = await AsyncStorage.getItem('name');
        const savedNationality = await AsyncStorage.getItem('nationality');
        const savedFirstLanguage = await AsyncStorage.getItem('firstLanguage');
        const savedTargetLanguage = await AsyncStorage.getItem('targetLanguage');
        const savedLocation = await AsyncStorage.getItem('location');

        if (savedName) {
          setNewName(savedName);
        }
        if (savedNationality) {
          setNewNationality(savedNationality);
        }
        if (savedFirstLanguage) {
          setFirstLanguage(savedFirstLanguage);
        }
        if (savedTargetLanguage) {
          setTargetLanguage(savedTargetLanguage);
        }
        if (savedLocation) {
          setLocation(savedLocation);
        }
      } catch (error) {
        console.error('Error loading user data:', error);
      }
    };
    loadUserData();
  }, []);

  const openNationalityDropdown = () => {
    setNationalityOpen(!isNationalityOpen);
    setFirstLanguageOpen(false);
    setTargetLanguageOpen(false);
  };

  const openFirstLanguageDropdown = () => {
    setFirstLanguageOpen(!isFirstLanguageOpen);
    setNationalityOpen(false);
    setTargetLanguageOpen(false);
  };

  const openTargetLanguageDropdown = () => {
    setTargetLanguageOpen(!isTargetLanguageOpen);
    setNationalityOpen(false);
    setFirstLanguageOpen(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Edit Profile</Text>
      <TextInput
        placeholder="New Name"
        value={newName}
        onChangeText={(text) => setNewName(text)}
        style={styles.input}
      />
      <TouchableOpacity onPress={openNationalityDropdown} style={styles.dropdownButton}>
        <Text style={styles.dropdownButtonText}>{newNationality || 'Select Nationality'}</Text>
      </TouchableOpacity>
      {isNationalityOpen && (
        <ScrollView style={styles.dropdownList}>
          {nationalityOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setNewNationality(option);
                setNationalityOpen(false);
              }}
            >
              <Text style={styles.dropdownItem}>{option}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      <TouchableOpacity onPress={openFirstLanguageDropdown} style={styles.dropdownButton}>
        <Text style={styles.dropdownButtonText}>{firstLanguage || 'Select First Language'}</Text>
      </TouchableOpacity>
      {isFirstLanguageOpen && (
        <ScrollView style={styles.dropdownList}>
          {firstLanguageOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setFirstLanguage(option);
                setFirstLanguageOpen(false);
              }}
            >
              <Text style={styles.dropdownItem}>{option}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      <TouchableOpacity onPress={openTargetLanguageDropdown} style={styles.dropdownButton}>
        <Text style={styles.dropdownButtonText}>{targetLanguage || 'Select Target Language'}</Text>
      </TouchableOpacity>
      {isTargetLanguageOpen && (
        <ScrollView style={styles.dropdownList}>
          {targetLanguageOptions.map((option, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setTargetLanguage(option);
                setTargetLanguageOpen(false);
              }}
            >
              <Text style={styles.dropdownItem}>{option}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}
      <TextInput
        placeholder="Location"
        value={location}
        onChangeText={(text) => setLocation(text)}
        style={styles.input}
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
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
  },
  dropdownButton: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 16,
  },
  dropdownButtonText: {
    color: '#000',
  },
  dropdownList: {
    width: '100%',
    maxHeight: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  dropdownItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default EditProfileScreen;
