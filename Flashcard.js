import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const flashcards = [
  { english: 'Hello', spanish: 'Hola' },
  { english: 'Name', spanish: 'Nombre' },
  { english: 'Food', spanish: 'Comida' },
  { english: 'Water', spanish: 'Agua' },
  { english: 'Left', spanish: 'Izquierda' },
  { english: 'Right', spanish: 'Derecha' },
  { english: 'Straight', spanish: 'Recto' },
  { english: 'Safety', spanish: 'Seguridad' },
  { english: 'Shelter', spanish: 'Refugio' },
  { english: 'Family', spanish: 'Familia' },
];


export default function FlashcardApp() {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleCard = () => {
    setIsFlipped(!isFlipped);
  };

  const nextCard = () => {
    if (currentCard < flashcards.length - 1) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setIsFlipped(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.flashcard}>
        <View style={styles.card}>
          <View
            style={[
              styles.cardInner,
              isFlipped ? styles.flipped : null,
            ]}
            onTouchEnd={toggleCard}
          >
            <View style={styles.cardFront}>
              <Text style={[isFlipped ? styles.hiddenText : styles.cardText, { fontSize: 40 }]}>
                {flashcards[currentCard].english}
              </Text>
            </View>
            <View style={styles.cardBack}>
              <Text style={[isFlipped ? styles.cardText : styles.hiddenText, { fontSize: 40 }]}>
                {flashcards[currentCard].spanish}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.controls}>
        <TouchableOpacity onPress={prevCard} disabled={currentCard === 0}>
          <Icon name="angle-left" size={100} color="#6EBA88" />
        </TouchableOpacity>
        <View style={styles.countContainer}>
          <Text style={[styles.cardCount, { fontWeight: 'bold' }]}>
            {currentCard + 1} of {flashcards.length}
          </Text>
        </View>
        <TouchableOpacity onPress={nextCard} disabled={currentCard === flashcards.length - 1}>
          <Icon name="angle-right" size={100} color="#6EBA88" />
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  flashcard: {
    width: '80%',
    height: 200,
    backgroundColor: '#6EBA88',
    borderRadius: 10,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  card: {
    flex: 1,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardInner: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#51AFE5',
    width: '100%',
    transformStyle: 'preserve-3d',
  },
  flipped: {
    transform: [{ rotateY: '180deg' }, { scaleX: -1 }],
  },
  cardFront: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardBack: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  hiddenText: {
    display: 'none',
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-between', // Add space between elements
    alignItems: 'center',
    width: '80%', // Optional: Adjust the width to your preference
    marginTop: 20,
  },
  countContainer: {
    flex: 1, // Takes up available space between icons
    alignItems: 'center', // Center text horizontally
    
  },
  cardCount: {
    fontSize: 25,
    color: '#6EBA88',
  },
  cardText: {
    fontSize: 40,
    color: 'white',
  },
});
