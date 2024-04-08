import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'


const BlogPostForm = ({onSubmit, initialValues}) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

  return (
    <View>
      <Text style={styles.lable}>Title:</Text>
      <TextInput 
        style={styles.input}
        value={title}
        onChangeText={(text) => setTitle(text)}
      />

      <Text style={styles.lable}>Content:</Text>
      <TextInput 
        style={styles.input}
        multiline = {true}
        numberOfLines= {3}
        value={content}
        onChangeText={(text) => setContent(text)}
      />
      <Button 
       
        color="#618264"
        title='Saving' 
        onPress={() =>  onSubmit (title, content) }
      />
    </View>
  );
};
BlogPostForm.defaultProps = {
 initialValues:{ title : "", content:""}
};

export default BlogPostForm;

const styles = StyleSheet.create({
    lable:{
        fontSize: 20,
        marginBottom: 5,
        marginLeft: 5,
    },
    input:{
        fontSize: 18,
        borderWidth: 2,
        borderColor: '#000',
        marginBottom: 15,
        padding: 5,
        margin: 10,
    },
});