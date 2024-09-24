import React from "react";
import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View,TextInput, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ButtonGradient(){
    return(
        <TouchableOpacity style={styles.container}>
            <LinearGradient
         // Button Linear Gradient
           colors={['#69BFB8', '#C5E5E6','#69BFB8','#C5E5E6' ]}
           start={{x:0, y:0}}
           end={{x:1, y:1}}

           style={styles.button}
         >
         <Text style={styles.text}>Iniciar Sesion</Text>
      </LinearGradient>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({
    container:{

        alignItems: 'center',
        width:200,
        marginTop: 60
    },
    text:{
        fontSize: 14,
        color: '#000',
        fontWeight: 'bold'
    },

    button:{
        width: '80%',
        height: 50,
        borderRadius:25,
        padding: 10,
        alignItems: 'center',
        justifyContent:'center'
    }

  });