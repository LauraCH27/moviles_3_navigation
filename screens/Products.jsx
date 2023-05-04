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
    const Table = ({ data }) => {
      return (
        <View style={styles.table}>
          <View style={styles.row}>
            <Text style={styles.cell}>Placa</Text>
            <Text style={styles.cell}>Marca</Text>
            <Text style={styles.cell}>Estado</Text>
          </View>
          {data.map((car, index) => (
            <View key={index} style={styles.row}>
              <Text style={styles.cell}>{car.placa}</Text>
              <Text style={styles.cell}>{car.marca}</Text>
              <Text style={styles.cell}>{car.disponible ? 'Disponible' : 'No disponible'}</Text>
            </View>
          ))}
        </View>
      );
    };
    const MyComponent = ({ cars }) => {
      const [showTable, setShowTable] = useState(false);
    
      const handleListButtonClick = () => {
        setShowTable(true);
      };
    
      const handleHideTableClick = () => {
        setShowTable(false);
      };
      return (
        <View>
          
          <TouchableOpacity>
            <Button onPress={handleListButtonClick} 
            icon="login" mode="contained" style={{marginTop:20, fontFamily:"Helvetica", backgroundColor:'#13907D', marginVertical:30, marginHorizontal:10,width:150}}> LISTAR </Button>
          </TouchableOpacity>
          
          {showTable && (
            <View>
              <View style={styles.table}>
              <Table data={cars}/>
              </View>
    
              <TouchableOpacity>
            <Button onPress={handleHideTableClick} 
            icon="login" mode="contained" style={{marginTop:20, fontFamily:"Helvetica", backgroundColor:'#13907D', marginVertical:30, marginHorizontal:10,width:150}}> OCULTAR </Button>
          </TouchableOpacity>
            </View>
          )}
        </View>
      );
    };
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
          justifyContent: 'center',}}>
          <Text style={{marginBottom:10, fontFamily:"fantasy", fontSize:20,
           textAlign: 'center',
          justifyContent: 'center',}}>Auto</Text>
          <TextInput
          style={{marginBottom:10,marginTop:30}}
          label="Número de placa"
          mode="outlined"
          
          right={<TextInput.Icon icon=""/>}
          onChangeText={(placa)=> setPlaca(placa)
          }
          value={placa}>
            </TextInput>
          <TextInput
          style={{marginBottom:10}}
          label="Marca"
          mode="outlined"
          onChangeText={(marca)=> setMarca(marca)
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
          <View style={{flexDirection: 'row', justifyContent: 'center', marginTop:50, paddingHorizontal:30, paddingVertical:0, marginVertical:20}}>
          <TouchableOpacity onPress={() => addCar(disponible)}>
            <Button icon="login" mode="contained" style={{marginTop:20, fontFamily:"Helvetica", backgroundColor: '#13907D', marginVertical:30, marginHorizontal: 10, width:150}}> GUARDAR </Button>
          </TouchableOpacity>
          <MyComponent cars={cars} />
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
    marginBottom: 5,
    fontSize: 15,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',

  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  table: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    margin: 16,
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
  },
  cell: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 4,
    textAlign: 'center',
  },
});