import React from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlashcardApp from './Flashcard.js';
import ChatBot from './ChatBot.js';
import Profile from './Profile.js';
import EditProfileScreen from './EditProfileScreen.js'; // Import EditProfileScreen

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 350,
    height: 175,
    marginLeft: 25,
    marginBottom: 0,
  },
  profileButton: {
    backgroundColor: '#FFFFFF',
    width: 80,
    height: 80,
    padding: 5,
    marginTop: 30,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: '#51AFE5',
  },
  profileButtonText: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Impact',
    letterSpacing: 1.5,
  },
  buttonImage: {
    width: 50,
    height: 50,
  },
  button: {
    backgroundColor: '#51AFE5',
    padding: 25,
    margin: 20,
    marginBottom: 25,
    width: 200,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Impact',
    letterSpacing: 1.5,
  },
});

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name=" "
          component={HomeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Flashcards"
          component={FlashcardApp}
          options={{
            title: 'Flashcards',
            headerTitleStyle: {
              fontSize: 24,
              fontWeight: 'bold',
            },
            headerTintColor: '#6EBA88',
          }}
        />
        <Stack.Screen
          name="ChatBot"
          component={ChatBot}
          options={{
            title: '',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerTintColor: '#6EBA88',
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: 'Profile',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerTintColor: '#6EBA88',
          }}
        />
        <Stack.Screen
          name="EditProfile"
          component={EditProfileScreen}
          options={{
            title: 'Edit Profile',
            headerTitleStyle: {
              fontSize: 20,
              fontWeight: 'bold',
            },
            headerTintColor: '#6EBA88',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Image
            source={require('./assets/examplePerson.jpg')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.header}>
        <Image source={require('./assets/LingoAlly.png')} style={styles.logo} />
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Flashcards')}>
          <Text style={styles.buttonText}>Learn</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Connect')}>
          <Text style={styles.buttonText}>Connect</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatBot')}>
          <Text style={styles.buttonText}>Lingo Bot</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
