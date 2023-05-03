import { StyleSheet, Text, View,TouchableOpacity,Switch } from 'react-native';
import { TextInput, Button} from 'react-native-paper';
import { useState,useEffect } from 'react';



export default function ProductsScreen({navigation, onPress}) {

    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
          />
          <Text>{isEnabled ? "Disponible" : "No disponible"}</Text>
          <TouchableOpacity onPress={onPress}>
          <View style={{ backgroundColor: 'blue', padding:10, marginTop:20 }}>
            <Text style={{ color: 'white', textAlign: 'center', fontFamily:"Georgia" }}>Guardar</Text>
          </View>
        </TouchableOpacity>
          
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