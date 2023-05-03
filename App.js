
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import { TextInput, Button} from 'react-native-paper';
// Importar componentes para la navegación y generación de la pila de screens
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons} from '@expo/vector-icons'
import contacts from './screens/contacts';
import ProductsScreen from './screens/Products';
import { useState,useEffect } from 'react';

// Crear constante para generar las rutas de los screens

let users = [
  {username:'hruiz',name:'Humberto Ruiz',password:'11a'},
  {username:'jdoe',name:'John Doe',password:'22a'},
  {username:'richarley12',name:'R',password:'33c'}
]
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='HomeTabs'
      >
      <Stack.Screen style={{fontFamily:"fantasy", fontSize:30, color:'red'}} 
        name="HomeTabs" component={HomeTabs} options={{title:'AutoCard'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
function RegistrationScreen({navigation}) {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const[errorusername,setErrorusername]=useState('')
  const[errorname,setErrorname]=useState('')
  const[errormess,setErrormess]=useState('')
  const handleRegister = () => {

    const nameRegex = /^[a-zA-Z\s]*$/;
    const usernameRegex = /^[a-zA-Z0-9]*$/;
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/;
  
    if (!nameRegex.test(name)) {
      alert('El nombre debe contener solo letras y espacios');
      return;
    }
  
    if (!usernameRegex.test(username)) {
      alert('El nombre de usuario debe contener solo letras y números');
      return;
    }
  
    if (!passwordRegex.test(password)) {
      alert('La contraseña debe contener al menos una letra y un número');
      return;
    }
  


    const newUser = {
      name: name,
      username: username,
      password: password
    }; 
    users.push(newUser);
    navigation.navigate('Home');
    setName('');
    setUsername('');
    setPassword('');
    console.log(users);
  };
  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <View style={styles.container}>
      <Text style={{marginBottom:20,fontFamily:"fantasy", fontSize:20}} >Registro</Text>
      <TextInput
        style={{marginBottom:10}}
        label="Usuario"
        mode="outlined"
        right={<TextInput.Icon icon="account"/>}
        onFocus={()=>{setErrorusername(''),
        setErrorname(''),
        setErrormess('')}}
        onChangeText={(username) => {
          const regex = /^[a-zA-Z0-9]+$/;
          if (regex.test(username)) {
            setErrorusername('')
            const userExists = users.find(user => user.username === username);
              if (userExists) {
              setErrorusername('Usuario repetido escriba otro usuario')
              setUsername('')
            }
            setUsername(username);
          }else{
            setUsername('')
            setErrorusername('Usuario incorrecto sólo letras y/o números');
          }
        }}
        value={username}/>
              <Text style={{color:'red'}}>{errorusername}</Text>
        <TextInput
        style={{marginBottom:10}}
        label="Nombre"
        mode="outlined"
        right={<TextInput.Icon icon="account"/>}
        onFocus={()=>{setErrorusername(''),
        setErrorname(''),
        setErrormess('')}}
        onChangeText={(name) => {
          const regex = /^[a-zA-Z\s]+$/;
          if (regex.test(name)) {
            setErrorname('')
            setName(name);
          }else{
            setName('')
            setErrorname('Nombre incorrecto sólo letras');
          }
        }}
        value={name}></TextInput>
        <Text style={{color:'red'}}>{errorname}</Text>
<TextInput
  style={{marginBottom:10}}
  label="Contraseña"
  mode="outlined"
  right={<TextInput.Icon icon="eye"/>}
  onFocus={()=>{setErrorusername(''),
    setErrorname(''),
    setErrormess('')}}
  onChangeText={(password) => {
    setPassword(password);
    const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/;
    if (!regex.test(password)) {
      setErrormess('Reucerda que la contraseña debe tener al menos una letra y un número');
    } else {
      setErrormess('');
    }
  }}
  value={password} />
<Text style={{color:'orange'}}>{errormess}</Text>  
        <TouchableOpacity onPress={() => {
            handleRegister();
          }}>
        <Text style={{color:'red', fontSize:20, marginTop:20}}>Registrarse</Text>
      </TouchableOpacity>
    </View>
  );
}

function HomeScreen({navigation}){
  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');
  const[errormess,setErrormess]=useState('')
  return(
    <View style={styles.container}>
      <Text style={{marginBottom:20, fontFamily:"sans-serif", fontSize:20}}>Inicio de Sesión</Text>
      <TextInput
      style={{marginBottom:10}}
      label="Nombre de usuario"
      mode="outlined"
      right={<TextInput.Icon icon="account"/>}
      onChangeText={username=>setUsername(username)}
      onFocus={()=>{setErrormess('')}}
      value={username}>
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
      let findUser = users.find(usr=> usr.username == username && usr.password == password);
      if(findUser != undefined){
        setErrormess('')
        const{name,username} = findUser
        setUsername('')
        setPassword('')
        navigation.navigate('contacts',{name:name, username:username})

      }else{
        setErrormess('Correo y/o contraseña incorrecta');
      }
       }}
      > Iniciar sesión </Button>
      <Text style={{color:'red'}}>{errormess}</Text>
    </View>
  );
}
// function ProductsScreen({navigation}){
  
// }

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
      <Tab.Screen name="Home" component={ProductsScreen} options={{
        tabBarStyle:{display:'none'},
        tabBarIcon: (tabInfo) => (<MaterialIcons name="home" size={22}/>)
      }}/>
       <Tab.Screen name="Registration" component={RegistrationScreen} options={{
        tabBarIcon: (tabInfo) => (<MaterialIcons name="register" size={22}/>)
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
