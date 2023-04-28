import { View,Text, TextInput,Button } from "react-native";

export default function login({navigation, route}){
    const {title, name}=route.params;
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{marginBottom:20}}>Estamos Iniciando sesión</Text>
            <Text>Usuario:{title}</Text>
            <Text>Clave: {name}</Text>
            <Button
        title='Ir a Inicio'
        onPress={()=>{
          navigation.navigate('Inicio')
        }}
      />
        </View>
    );

}


