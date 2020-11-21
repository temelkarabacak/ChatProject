import React, { useState } from 'react';
import { View, SafeAreaView, Text, Image, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import {authStyle} from './styles';
import { Input, Button } from '../components';
import auth from '@react-native-firebase/auth';

const Sign = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordAgain, setPasswordAgain] = useState("");

    async function sign() {
        if (password === passwordAgain) {
           try {
               await auth().createUserWithEmailAndPassword(email, password);
               props.navigation.goBack();
           } catch (err) {
               Alert.alert("Vahid Chat", "An error occured, please try again!")
           }
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#cfd8dc' }}>
                <ScrollView contentContainerStyle={{ flex: 1 }}>
                    <View style={authStyle.container}>
                        <Image 
                            style={authStyle.logo}
                            source={require('../assets/logoVahid.png')}
                        />
                        <Text style={authStyle.logoText}>VAHIDCHAT</Text>
                    </View>
                    <View>
                        <Input 
                            inputProps={{
                                placeholder: "Type your e-mail address..",
                                keyboardType: "email-address"
                            }}
                            onType={(value) => setEmail(value)}
                        />
                        <Input 
                            inputProps={{
                                placeholder: "Type your password..",
                                secureTextEntry: true
                            }}
                            onType={(value) => setPassword(value)}
                        />
                        <Input 
                            inputProps={{
                                placeholder: "Type your password again..",
                                secureTextEntry: true
                            }}
                            onType={(value) => setPasswordAgain(value)}
                        />
                        <Button
                        title="Create Account"
                        onPress={() => sign()}
                        />
                        <Button
                        title="Cancel"
                        noBorder
                        onPress={() => props.navigation.goBack()}
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export {Sign}
