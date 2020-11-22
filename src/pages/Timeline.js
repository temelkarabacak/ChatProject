import React, { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import { timelinePage } from './styles';
import { PostItem, PostInput, Header, TopicSelectedModal } from '../components';
import moment from 'moment';

const user = auth().currentUser;

const Timeline = () => {
    const [topicModalFlag, setTopicModalFlag] = useState(true);
    const [selectedTopic, setSelectedTopic] = useState(null);

    const SelectingTopic = (value) => {
        setSelectedTopic(value);
        setTopicModalFlag(false);
        database()
            .ref()
            .on('value', (snapshot) => {
                console.log("----------------------------")
                console.log('User data: ', snapshot.val());
            });
    };

    const onSendingPost = (value) => {
        const postObject = {
            userMail:  user.email,
            postText: value,
            time: moment().toISOString()
        }
        database().ref(`${selectedTopic}/`).push(postObject);
    };

    return (
        <SafeAreaView style={timelinePage.container}>
        <View style={timelinePage.container}>

            <Header 
            title={selectedTopic}
            onTopicModalSelect={() => setTopicModalFlag(true)}
            />

            <FlatList
            data={[]}
            renderItem={() => null}
            />

            <PostInput
            onSendPost={onSendingPost}
            />

            <TopicSelectedModal 
            visibility={topicModalFlag}
            onClose={() => selectedTopic ? setTopicModalFlag(false) : null}
            onTopicSelect={SelectingTopic}
            />

        </View>
        </SafeAreaView>
    )
}

export {Timeline};