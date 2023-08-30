import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const Home =({navigation}) => {

    return (
        <View >
       <View style={style.container} >
            <Image 
                style={style.images}
               source={require('../../assets/project_logo.png')}
            ></Image>
            <View style={style.menu}>
            <Text style={style.plans}>Exercise Plans</Text>
            <Text style={style.plans}>Diet Plans</Text>
            <TouchableOpacity style={style.login_button} onPress={()=>navigation.navigate('Login')} >
            <Text style={style.plans}>Login</Text></TouchableOpacity>
            </View>
        </View>
        </View>
    );
};

const style=StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        gap:10,
        alignItems:"center",
        justifyContent:"space-between"
    },
    plans:{
        fontSize:25
    },
    menu:{
        flex:1,
        alignItems:"center",
        flexDirection:"row",
        borderWidth:1,
        
        gap:15,
        justifyContent:"space-around"

    },
    login_button:{
        padding:10,
        borderRadius:12,
        backgroundColor : "#899CE8" 
    },
    images:{
        width:"10%",
        height:100
    }

})
export default Home;
