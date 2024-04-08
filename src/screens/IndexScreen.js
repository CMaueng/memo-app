import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import React from 'react'
import { useContext } from 'react';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';

const IndexScreen = ({ navigation }) => {
    const { state, addBlogPost, deleteBlogPost } = useContext(Context);
    return (
        <View>
            <FlatList
                data={state}
                keyExtractor={(blogPosts) => blogPosts.title}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigation.navigate("Show", {id: item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title} - {item.id}
                                </Text>
                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather style={styles.icon} name="trash" />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                } } />
        </View>
    );
}

const styles =StyleSheet.create({
    row:{
        flexDirection:'row',
        justifyContent:'center',
        paddingVertical:5,
        marginLeft:10,
        marginRight:5,
        borderBottomWidth:2,
    },
    icon:{
        fontSize:24,
    },
    title:{
        fontSize:20,
    },

});

export default IndexScreen;