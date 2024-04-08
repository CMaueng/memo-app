import React from 'react';
import { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';


const ShowScreen = ({route}) => {
    const {state} = useContext(Context);

    const blogPost = state.find ((blogPost) => blogPost.id === route.params.id);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{blogPost.id}</Text>
      <Text style={styles.title}>{blogPost.title}</Text>
      <Text style={styles.subTitle}>{blogPost.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1 ,
    backgroundColor:'#fff'
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
  },
  subTitle: {
    fontSize: 18,
  },
});

export default ShowScreen;