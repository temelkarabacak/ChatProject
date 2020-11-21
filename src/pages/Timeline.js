import React from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native'

import auth from '@react-native-firebase/auth';
import { timelinePage } from './styles';
import { PostItem, PostInput, Header, TopicSelectModal } from '../components';

export function Timeline() {
    const user = auth().currentUser;
    console.log(user);
    return (
        <SafeAreaView style={timelinePage.container}>
        <View style={timelinePage.container}>
            <Header />
        </View>
        </SafeAreaView>
    )
}