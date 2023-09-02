import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
const Home =({navigation}) => {

    return (
        <View style={style.main} >
       <View style={style.container} >
            <Image 
                style={style.images}
               source={require('../../assets/project_logo.png')}
            ></Image>
            <View style={style.menu}>
            <View style={{width:"50%"}}></View>
            <View  style={style.options}>
            <Text style={style.plans} onPress={()=>navigation.navigate('Workout_plan')} >Exercise Plans</Text>
            <Text style={style.plans} onPress={()=>navigation.navigate('ListNutrition')}>Diet Plans</Text>
            <TouchableOpacity style={style.login_button} onPress={()=>navigation.navigate('Login')} >
            <Text style={style.plans}>Login</Text></TouchableOpacity>
            </View>
            </View>
        </View>
        <View style={style.middle} >
            <View style={style.m1}>HI</View>
            <View style={style.m2}>Hello</View>
        </View>
        </View>
    );
};

const style=StyleSheet.create({
    main:{
        backgroundColor:"white",
        height:"auto",
    },
    container:{
        // flex:1,
        flexDirection:'row',
        gap:10,
        alignItems:"center",
        justifyContent:"space-between",
        borderBottomWidth:1
    },
    plans:{
        fontSize:20
    },
    menu:{
        flex:1,
        alignItems:"center",
        flexDirection:"row",
        // borderWidth:1,
        gap:15,
        justifyContent:"space-between",
       

    },
    options:{
        width:"50%",
        flex:1,
        alignItems:"center",
        flexDirection:"row",
        gap:15,
        // borderWidth:1,
        // borderColor:"red",
        justifyContent:"space-between",
         padding:"15px"

    },
    login_button:{
        padding:10,
        borderRadius:12,
        backgroundColor : "#899CE8" 
    },
    images:{
        width:"10%",
        height:100
    },
    middle:{
        flexDirection:"row",
        width:"100%",
        flex:1
    },
    m1:{
        backgroundColor:"red"
    },
    m2:{
        backgroundColor:"yellow"
    }

})
export default Home;
