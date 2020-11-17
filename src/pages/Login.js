import React from 'react';
import { SafeAreaView, View, Text, Dimensions, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import { auth } from '@react-native-firebase/auth';
import { authStyle } from './styles';
import { Input, Button } from '../components';

const Login = (props) => {
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
                    <View style={{ flex: 1 }}>
                        <Input 
                            inputProps={{
                                placeholder: "Type your e-mail..",
                                keyboardType: "email-address"
                            }}
                        />
                        <Input 
                            inputProps={{
                                placeholder: "Type your password..",
                                secureTextEntry: true
                            }}
                        />
                        <Button title="Sign In"/>
                        <Button title="Sign Up" noBorder onPress={() => props.navigation.navigate('Sign')}/>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export {Login}
