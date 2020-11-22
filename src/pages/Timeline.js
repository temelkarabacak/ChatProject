import React, { useState } from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native';

import { timelinePage } from './styles';
import { PostItem, PostInput, Header, TopicSelectedModal } from '../components';

const Timeline = () => {
    const [topicModalFlag, setTopicModalFlag] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState(null);
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
            onSendPost={(value) => console.log(value)}
            />

            <TopicSelectedModal 
            visibility={topicModalFlag}
            onClose={() => selectedTopic ? setTopicModalFlag(false) : null}
            onTopicSelect={(value) => {
                setSelectedTopic(value);
                setTopicModalFlag(false);
            }}
            />

        </View>
        </SafeAreaView>
    )
}

export {Timeline};