import { View,Text, TextInput,Button } from "react-native";

export default function contacts({navigation, route}){
    const{name,username}=route.params;
    
    return(
        <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
            <Text style={{marginBottom:20}}>Estamos en Contáctenos</Text>
            <Text> Nombre completo es:{name} con Usuario: {username}</Text>
         
         
        </View>
    );

}