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
    // const [field1, setField1] = useState('');
    // const [field2, setField2] = useState('');
    // const [field3, setField3] = useState('');
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
          <TouchableOpacity onPress={handleListButtonClick}>
          <View style={{ backgroundColor: '#1BA792', padding:10, marginTop:20, borderRadius:5 }}>
            <Text style={{ color: '#FDFEFFC', textAlign: 'center', fontFamily:"Franklin Gothic Medium",fontSize:15 }}>Listar</Text>
          </View>
          </TouchableOpacity>
    
          {showTable && (
            <View>
              <View style={styles.table}>
              <Table data={cars}/>
              </View>
    
              <TouchableOpacity onPress={handleHideTableClick}>
              <View style={{ backgroundColor: '#1BA792', padding:10, marginTop:20, borderRadius:5 }}>
            <Text style={{ color: '#FDFEFFC', textAlign: 'center', fontFamily:"Franklin Gothic Medium",fontSize:15 }}>Ocultar Lista</Text>
          </View>
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
          style={{marginBottom:10}}
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
          <TouchableOpacity style={{}} onPress={()=> addCar(disponible)}>
          <View style={{ backgroundColor: '#1BA792', padding:10, marginTop:20,borderRadius:5 }}>
            <Text style={{ color: '#FDFEFFC', textAlign: 'center',
            fontFamily:"Franklin Gothic Medium", borderRadius:10, fontSize:15 }}>Guardar</Text>
          </View>
          </TouchableOpacity>
          <MyComponent cars={cars} />
          {/* <TouchableOpacity onPress={() => {
            handleListButtonClick();
          }}>
          <View style={{ backgroundColor: '#1BA792', padding:10, marginTop:20, borderRadius:5 }}>
            <Text style={{ color: '#FDFEFFC', textAlign: 'center', fontFamily:"Franklin Gothic Medium",fontSize:15 }}>Listar</Text>
            
          </View>
        </TouchableOpacity> */}
        {/* <View style={{flexDirection: 'row', justifyContent: 'space-between',
        marginHorizontal:15,marginTop:50,}}>
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
    </View> */}
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