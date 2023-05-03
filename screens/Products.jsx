import { StyleSheet, Text, View,TouchableOpacity,Switch } from 'react-native';
import { TextInput, Button} from 'react-native-paper';
import { useState,useEffect } from 'react';

let cars=[
    {placa:'ABC123',marca:'chevrolet',disponible:true},{placa:'CDE456',marca:'mazda',disponible:false},
    {placa:'FGH789',marca:'ford',disponible:false},{placa:'IJK012',marca:'audi',disponible:true},
]

export default function ProductsScreen({navigation, onPress}) {
    let [placa, setPlaca] = useState('');
    let [marca, setMarca] = useState('');
    let [disponible, setDisponible] = useState(false);
    let toggleSwitch = () => setDisponible(previousState => !previousState);

    const addCar= () => {
    let newCar= {
        placa: placa,
        marca: marca,
        disponible: disponible
    };
    cars.push(newCar);
    setPlaca('');
    setMarca('');
    setDisponible(false);
    console.log(cars);
    }

    return(
        <View style={styles.container}>
          <Text style={{marginBottom:10,fontFamily:"sans-serif", fontSize:20}}>Auto</Text>
          <TextInput
          style={{marginBottom:10}}
          label="Número de placa"
          mode="outlined"
          
          right={<TextInput.Icon icon=""/>}
          onChange={(placa)=> setPlaca(placa)
          }
          value={placa}
          >
            </TextInput>
          

          <TextInput
          style={{marginBottom:10}}
          label="Marca"
          mode="outlined"
          onChange={(marca)=> setMarca(marca)
          }
          value={marca}
          right={<TextInput.Icon icon=""/>} >
          </TextInput>

          <Switch
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={disponible ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}  
          />
          <Text>{disponible ? "Disponible" : "No disponible"}</Text>
          <TouchableOpacity onPress={()=> addCar(disponible)}>
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