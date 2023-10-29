import React from 'react';
import { Image, TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import FlashcardApp from './Flashcard.js';
import ChatBot from './ChatBot.js';

const Stack = createStackNavigator();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 350,
    height: 200,
    marginBottom: 40,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#51AFE5',
    padding: 25,
    margin: 25,
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
            headerShown: false, // Hide the header
          }}
        />

        {/* <Stack.Screen name="Flashcards" component={FlashcardApp} */}
         <Stack.Screen
         name="Flashcards"
         component={FlashcardApp}
         options={{
           title: 'Flashcards', // Set the title
           headerTitleStyle: {
             fontSize: 24, // Set the font size
             fontWeight: 'bold',
             
           },
           headerTintColor: '#6EBA88',
           
         }} />
        <Stack.Screen name="ChatBot" component={ChatBot}options={{
           title: '', // Set the title
           headerTitleStyle: {
             fontSize: 20, // Set the font size
             fontWeight: 'bold',
             
             
           },
           headerTintColor: '#6EBA88',
         }} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/LingoAlly.png')} style={styles.logo} />
      <View style={styles.buttonContainer}>
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

