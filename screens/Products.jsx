import { StyleSheet, Text, View,TouchableOpacity,Switch } from 'react-native';
import { TextInput, Button} from 'react-native-paper';
import { useState,useEffect } from 'react';



export default function ProductsScreen({navigation, onPress}) {
    let [placa, setPlaca] = useState('');
    let [marca, setMarca] = useState('');
    const [disponible, setDisponible] = useState(false);
    const toggleDisponible = () => {
    setDisponible(previousState => !previousState);
  };
    const [field1, setField1] = useState('');
    const [field2, setField2] = useState('');
    const [field3, setField3] = useState('');

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
        <View style={{flex: 1,
          backgroundColor: '#fff',
          //alignItems: 'center',
          justifyContent: 'center', marginTop:50}}>
          
          <View style={{flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',}}>
          <Text style={{ fontFamily:"fantasy", fontSize:20,
           textAlign: 'center',
          justifyContent: 'center'}}>Auto</Text>
          <TextInput
          style={{marginBottom:10,marginTop:30}}
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
          </View>
          <View style={{ flexDirection: 'row',justifyContent: 'center', marginTop:50}} >
          <Text style={{fontSize:15,marginRight: 10}}>Estado:</Text>
          <Switch
            trackColor={{ false: "#757575", true: "#1BA792" }}
            thumbColor={disponible ? "#1BA792" : "#3e3e3e"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleDisponible}       
          />
          </View>
         
          <View style={{ textAlign: 'center'}}>
          <Text>{disponible ? "Disponible" : "No disponible"}</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center', marginTop:50, paddingHorizontal:30, paddingVertical:0, marginVertical:20}}>
          <TouchableOpacity onPress={() => addCar(disponible)}>
            <Button icon="login" mode="contained" style={{marginTop:20, fontFamily:"Helvetica", backgroundColor: '#13907D', marginVertical:30, marginHorizontal: 10, width:150}}> GUARDAR </Button>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigateToList()}>
            <Button icon="login" mode="contained" style={{marginTop:20, fontFamily:"Helvetica", backgroundColor:'#13907D', marginVertical:30, marginHorizontal:10,width:150}}> LISTAR </Button>
          </TouchableOpacity>
        </View>

          </View>    
          <View style={{flexDirection: 'row', justifyContent: 'center',
          marginHorizontal:15,marginVertical:30,marginTop:30,}}>
          <View style={styles.column}>
          <Text style={styles.label}>#placa</Text>
          <TextInput
          style={styles.input}
          value={field1}
          onChangeText={setField1}
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Marca</Text>
        <TextInput
          style={styles.input}
          value={field2}
          onChangeText={setField2}
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.label}>Estado</Text>
        <TextInput
          style={styles.input}
          value={field3}
          onChangeText={setField3}
        />
      </View>
    </View>
          </View>
      );
}
const styles = StyleSheet.create({
    container: {
      
    },
    column: {
      flex: 1,
      
      
      //marginHorizontal: 5,
  },
  label: {
    flex:1,
    fontWeight: 'bold',
    //marginBottom: 5,
    fontSize: 17,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#121715',
    backgroundColor:'#CAE8DE',
    borderRadius: 5
   
    

  },
  input: {
    borderWidth: 1,
    borderColor: '#121715',
    borderRadius: 5,
    //paddingHorizontal: 5,
    //paddingVertical: 5,
    
  },
  });
