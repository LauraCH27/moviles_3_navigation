import { StyleSheet, Text, View,TouchableOpacity,Switch } from 'react-native';
import { TextInput, Button} from 'react-native-paper';
import { useState,useEffect } from 'react';



export default function RentaScreen({navigation, onPress}) {
  let [numAlquiler, setAlquiler] = useState('');
  let [nomUsuario, setUsuario] = useState('');
  let [matrícula, setMatrícula] = useState('');
  let [fecha , setFecha ] = useState('');
  const [disponible, setDisponible] = useState(false);
  const toggleDisponible = () => {
  setDisponible(previousState => !previousState);
  
  };

return(
  <View style={styles.container}>
    
    <View style={{flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',}}>
    <Text style={{ fontFamily:"fantasy", fontSize:20,
     textAlign: 'center',
    justifyContent:'center'}}>RENTAR</Text>
    <TextInput
    style={{marginBottom:10,marginTop:30}}
    label="Número de alquiler"
    mode="outlined"
    right={<TextInput.Icon icon=""/>}
    onChange={(numAlquiler)=> setAlquiler(numAlquiler)
    }value={numAlquiler}
    >
   </TextInput>
    <TextInput
    style={{marginBottom:10}}
    label="Nombre de usuario"
    mode="outlined"
    onChange={(nomUsuario)=> setUsuario(nomUsuario)
    }value={nomUsuario}
    right={<TextInput.Icon icon=""/>} >
    </TextInput>
    <TextInput
    style={{marginBottom:10}}
    label="Matrícula"
    mode="outlined"
    onChange={(matrícula)=> setMatrícula(matrícula)
    }value={matrícula}
    right={<TextInput.Icon icon=""/>} >
    </TextInput>
    
    <TextInput
    style={{marginBottom:10}}
    label="Fecha alquiler"
    mode="outlined"
    onChange={(fecha)=> setFecha(fecha)
    }value={fecha}
    right={<TextInput.Icon icon=""/>} >
    </TextInput>
    <View style={{  alignItems: 'center', marginTop:10 }}>
    <Text style={{fontSize:15}}>Estado</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={disponible ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleDisponible}
        value={disponible}
      />
    <Text style={{ textAlign: 'center'}}>{disponible ? 'Disponible' : 'No disponible'}</Text>
    </View>

    <Button icon="login" 
      mode="contained"
      style={{marginTop:20,fontFamily:"Helvetica", backgroundColor: '#13907D'}}  
    > RENTAR </Button>
    <Text style={{color:'red'}}></Text>
    </View>
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
    
