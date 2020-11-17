import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, Button } from 'react-native';
import auth from '@react-native-firebase/auth'

const LoginPage = (props) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = () => {
        auth()
  .createUserWithEmailAndPassword(email, password)
  .then((response) => {
    console.log(response);
  })
  .catch(error => {
    console.log(error);
  });   
    }

    const signIn = () => {
        auth()
            .signInWithEmailAndPassword(email, password)
            .then(response => console.log(response))
            .catch(error => console.log(error))
    }
    return (
        <SafeAreaView>
            <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center' }}>Login</Text>
        <View style={{ backgroundColor: '#eceff1', padding: 5, margin: 5, borderRadius: 5 }}>
            <TextInput 
            placeholder="Type your mail.."
            onChangeText={text => setEmail(text)}
            />
        </View>
        <View style={{ backgroundColor: '#eceff1', padding: 5, margin: 5, borderRadius: 5 }}>
            <TextInput 
            placeholder="Type your password.."
            onChangeText={text => setPassword(text)}
            />
        </View>
        <Button
        title="Sign Up"
        onPress={signUp}
        />
        <Button
        title="Sign In"
        onPress={signIn}
        />
        </SafeAreaView>
    )
}

export default LoginPage;
