
import { StyleSheet, Text, View } from 'react-native';
import { TextInput, Button} from 'react-native-paper';
// Importar componentes para la navegación y generación de la pila de screens
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons} from '@expo/vector-icons'
import contacts from './screens/contacts';
import { useState } from 'react';
// Crear constante para generar las rutas de los screens

let users = [
  {email:'hruiz@gmail.com',name:'Humberto Ruiz',password:'11', role:1},
  {email:'jdoe@gmail.com',name:'John Doe',password:'22', role:2}
]

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeTabs'
      >
        <Stack.Screen name="HomeTabs" component={HomeTabs} options={{title:'Laura.HA'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({navigation}){
  const[email,setEmail]=useState('');
  const[password,setPassword]=useState('');
  const[errormess,setErrormess]=useState('')
  return(
    <View style={styles.container}>
      <Text style={{marginBottom:20}}>Inicio de Sesión</Text>
      <TextInput
      style={{marginBottom:10}}
      label="Correo Electronico"
      mode="outlined"
      right={<TextInput.Icon icon="account"/>}
      onChangeText={email=>setEmail(email)}
      onFocus={()=>{setErrormess('')}}
      value={email}>
      </TextInput>
      <TextInput
      style={{marginBottom:10}}
      label="Contraseña"
      mode="outlined"
      right={<TextInput.Icon icon="eye"/>}
      onChangeText={password=>setPassword(password)}
      value={password}>
        
      </TextInput>
      <Button icon="login" 
      mode="contained"
       onPress={() =>{
      let findUser = users.find(usr=> usr.email == email && usr.password == password);
      if(findUser != undefined){
        setErrormess('')
        const{name,email} = findUser
        setEmail ('')
        setPassword('')
        navigation.navigate('contacts',{name:name, email:email})

      }else{
        setErrormess('Correo y/o contraseña incorrecta');
      }
       }}
      > Iniciar sesión </Button>
      <Text style={{color:'red'}}>{errormess}</Text>   
    </View>
  );
}

function ProductsScreen({navigation}){
  let title = "Este es el titulo"
  let fullname = "Pepito Perez"
  return(
    <View style={styles.container}>
      <Text style={{marginBottom:10}}>Estamos en Productos</Text>
    </View>
  );
}

function HomeTabs(){
  return(
    <Tab.Navigator
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor:'red',
        tabBarInactiveTintColor:'gray',
        tabBarActiveBackgroundColor:'orange',
        tabBarInactiveBackgroundColor:'powderblue'
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarStyle:{display:'none'},
        tabBarIcon: (tabInfo) => (<MaterialIcons name="home" size={22}/>)
      }}/>
      <Tab.Screen name="Products" component={ProductsScreen} options={{
        tabBarIcon: (tabInfo) => (<MaterialIcons name="apps" size={22}/>)
      }}/>
      <Tab.Screen name="contacts" component={contacts} options={{
        tabBarIcon: (tabInfo) => (<MaterialIcons name="chat" size={22}/>)
      }}/>
    </Tab.Navigator>
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


/* function Contacts({navigation,route}){
    return(
        <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
            <Text style={{marginBottom:10}}>Estamos en Contáctenos</Text>
        </View>
    );
}*/
