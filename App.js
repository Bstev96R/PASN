import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Image,StyleSheet, Text, View,TextInput, Dimensions } from 'react-native';
import Svg, { Path, Defs, LinearGradient, Stop} from "react-native-svg";
const { width, height}= Dimensions.get('window')
import ButtonGradient from './Components/ButtonGradient';

export default function App() {
  function SvgTop(){
    return(
      
      <Svg
      
      xmlns="http://www.w3.org/2000/svg"
      width={377}
      height={298}
      fill="none"

    >
      <Path
        fill="url(#a)"
        d="M153.405 219.826C98.058 233.722 28.74 205.862 1 190.196V134h376v94c-52.139-42.913-154.411-25.543-223.595-8.174Z"
      />
      <Path
        fill="url(#b)"
        d="M179.238 191.463C83.11 209.726 23.364 197.661 0 189.07V0h377v189.07c-32.543-7.609-101.635-15.869-197.762 2.393Z"
      />
      <Text style={{position:'absolute', marginLeft:'37%',marginTop:'20%', fontSize: 40, fontWeight:'bold'}}>PASN+</Text>

      <Defs>
        <LinearGradient
          id="a"
          x1={188.499}
          x2={377.05}
          y1={211.652}
          y2={227.4}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#328C83" />
          <Stop offset={1} stopColor="#C5E5E6" />
        </LinearGradient>
        <LinearGradient
          id="b"
          x1={5.507}
          x2={77.538}
          y1={2.577}
          y2={270.179}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#328C83" />
          <Stop offset={1} stopColor="#C5E5E6" />
        </LinearGradient>
      </Defs>


    </Svg>
    )
  }

  return (
    <View style={styles.container}>
    <SvgTop/>
    
      <Text style={styles.titulo}>Bienvenido</Text>
      <Text style={styles.Subtitulo}>Inicia sesion con tu cuenta PASN</Text>
      <TextInput style={styles.TextInput} placeholder='xxxxxxxxx@gmail.com'/>
      <TextInput style={styles.TextInput} placeholder='Password'/>
      <Text style={styles.forgotPassword}>Contraseña Olvidada?</Text>
      <ButtonGradient/>
      <Text style={styles.Registro}>don't have account?</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    backgroundColor: '#f1f1f1'
  },
  container: {
    alignItems:'center',
    justifyContent:'center'

  },
  containerSvg:{
    width:width,
    justifyContent: 'flex-start',
    alignItems: 'center',

  },
  titulo:{
    fontSize: 30,
    color: '#34434D',
    fontWeight: 'bold',
  },
  Subtitulo:{
    fontSize: 20,
    color:'gray',
  },
  TextInput:{
borderWidth: 1,
borderColor:'gray',
padding: 10,
width: '80%',
height: 50,
marginTop: 30,
borderRadius: 30,
backgroundColor: '#fff',
  },
  forgotPassword:{
    marginTop: 20,
    color: 'gray'
  },
  Registro:{
    marginTop: 20,
    color: 'gray'
  },
  Logo:{
    marginTop: 40,
  }
});
