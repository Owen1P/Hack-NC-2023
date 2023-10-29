import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import axios from 'axios'

const Chatbot = () => {
    const [messages, setMessages] = useState([])

    const CHATGPT_API_KEY = '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'

    const handleSend = async (newMessages = []) => {
        try {
            const userMessage = newMessages[0];

            setMessages(previousMessages => GiftedChat.append(previousMessages, userMessage));

            const messageText = userMessage.text.toLowerCase(); // Corrected the typo

            const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
                prompt: `${messageText}`, // Use template strings
                max_tokens: 60,
                temperature: 0,
                n: 1,
            }, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${CHATGPT_API_KEY}`, // Use template strings
                }
            });
            console.log(response.data);

            const convo = response.data.choices[0].text.trim();
            const botMessage = {
                _id: new Date().getTime() + 1,
                text: convo,
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'Lingo Bot'
                }
            };
            setMessages(previousMessages => GiftedChat.append(previousMessages, botMessage));
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <View
                style={{
                    backgroundColor: '#fff',
                    padding: 10,
                    alignItems: 'center',
                    justifyContent: 'center', // Corrected typo
                    borderBottomWidth: 6,
                    borderColor: '#6EBA88',
                    marginTop: 40,
                    marginBottom: 5
                }}
            >
                <Text style={{
                    fontSize: 38,
                    fontWeight: 'bold',
                    color: '#6EBA88',
                }}>
                    Lingo Bot
                </Text>
            </View>
            <GiftedChat
                messages={messages}
                onSend={newMessages => handleSend(newMessages)}
                user={{ _id: 1 }}
            />
        </View>
    );
}

export default Chatbot;
