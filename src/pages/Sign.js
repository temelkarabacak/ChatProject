import React from 'react';
import { View, SafeAreaView, Text, Dimensions, Image, ScrollView, KeyboardAvoidingView } from 'react-native';
import {authStyle} from './styles';
import { Input, Button } from '../components';

const Sign = () => {
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
                        />
                        <Input 
                            inputProps={{
                                placeholder: "Type your password..",
                                secureTextEntry: true
                            }}
                        />
                        <Input 
                            inputProps={{
                                placeholder: "Type your password again..",
                                secureTextEntry: true
                            }}
                        />
                        <Button
                        title="Create Account"
                        />
                        <Button
                        title="Cancel"
                        noBorder
                        />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export {Sign}
