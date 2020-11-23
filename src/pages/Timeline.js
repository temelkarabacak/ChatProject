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
    const [postList, setPostList] = useState([]);

    const SelectingTopic = (value) => {
        setSelectedTopic(value);
        setTopicModalFlag(false);
        database()
            .ref(value)
            .on('value', (snapshot) => {
                const data = snapshot.val();
                const formattedData = Object.keys(data).map(key => ({...data[key]}))
                formattedData.sort((a, b) => {
                    return new Date(a.time) - new Date(b.time);
                })
                setPostList(formattedData);
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

    const renderPosts = ({item}) => <PostItem post={item} />

    return (
        <SafeAreaView style={timelinePage.container}>
        <View style={timelinePage.container}>

            <Header 
            title={selectedTopic}
            onTopicModalSelect={() => setTopicModalFlag(true)}
            onLogout={() => auth().signOut()}
            />

            <FlatList
            keyExtractor={(_, i) => i.toString()}
            data={postList}
            renderItem={renderPosts}
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