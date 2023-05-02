import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { TextInput, Button} from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons} from '@expo/vector-icons'
import { useState,useEffect } from 'react';



export default function ProductsScreen({navigation, route}) {
    
  return(
    <View style={styles.container}>
      <Text style={{marginBottom:10,fontFamily:"sans-serif", fontSize:20}}>Auto</Text>
      <TextInput
      style={{marginBottom:10}}
      label="Número de placa"
      mode="outlined"
      right={<TextInput.Icon icon=""/>}>
        </TextInput>
      <TextInput
      style={{marginBottom:10}}
      label="Marca"
      mode="outlined"
      right={<TextInput.Icon icon=""/>} >
      </TextInput>
      <TextInput
      style={{marginBottom:10}}
      Estado
      mode=""
      right={<TextInput.Icon icon="eye"/>} 
      >
      </TextInput>
    </View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });