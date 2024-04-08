import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from './src/context/BlogContext';
import IndexScreen from './src/screens/IndexScreen';
import ShowScreen from './src/screens/ShowScreen';
import CreateScreen from './src/screens/CreateScreen';
import EditScreen from './src/screens/EditScreen';
import { Feather, Foundation  } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
   
    <Provider >
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{ headerTitle: "Memo 🔔" ,headerStyle:{backgroundColor:"#618264"}, headerTintColor: '#D0E7D2'}}>
      <Stack.Screen name='Index' component={IndexScreen} 
        options={({navigation})=>({
          headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate("Create")}>
              <Feather name="plus" size={26} color="#D0E7D2" />
            </TouchableOpacity>
          ),
      })}/>
      <Stack.Screen name='Show' component={ShowScreen}
       options={({navigation, route})=>({
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Edit", {id: route.params.id})}>
            <Foundation name="pencil" size={26} color="#D0E7D2" />
          </TouchableOpacity>
        ),
    })}/>
      <Stack.Screen name='Create' component={CreateScreen}/> 
      <Stack.Screen name='Edit' component={EditScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D0E7D2',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
