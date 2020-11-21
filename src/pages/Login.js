import React, { useState } from 'react';
import { SafeAreaView, View, Text, Dimensions, Image, ScrollView, KeyboardAvoidingView, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { authStyle } from './styles';
import { Input, Button } from '../components';
import { resolveErrorCode } from '../Functions';

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // const login = () => {
    //     auth()
    //         .signInWithEmailAndPassword(email, password)
    //         .then(() => alert("OK"))
    //         .catch((err) => Alert.alert("VahidChat", resolveErrorCode(err.code)))
    // }

    async function login() {
        try {
            if (email === '' || password === '') {
                Alert.alert('Vahid Chat', resolveErrorCode('auth/null-value'));
            } else {
                await auth().signInWithEmailAndPassword(email, password);
                // alert(email + "   " + password);
                props.navigation.navigate('Timeline');
            }
        } catch (error) {
            
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
                        <Text style={authStyle.logoText}>Vahid Chat</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Input 
                            inputProps={{
                                placeholder: "Type your e-mail..",
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
                        <Button 
                        title="Sign In"
                        onPress={() => login()}
                        />
                        <Button title="Sign Up" noBorder onPress={() => props.navigation.navigate('Sign')}/>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export {Login}
