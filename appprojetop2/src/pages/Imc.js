import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {

    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState();


    function handlerSubmit(){
      const alt = altura / 100;
      const imc = peso / (alt*alt);

      if(imc < 18.6){
        alert('Você está abaixo do peso! ' + imc.toFixed(2));
      }else if (imc >= 18.6 && imc < 24.9){
        alert('Você está no peso ideal! ' + imc.toFixed(2));
      }else if (imc >= 24.9 && imc < 34.9){
        alert('Levemente acima do peso! ' + imc.toFixed(2));
      }
      else{
        alert('Inválido! ' + imc.toFixed(2));
      }

    }

    return(
      <View style={styles.container}>
        <Text style={styles.title}>
          Calcule seu IMC
        </Text>

        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={(peso) => setPeso(peso)}
          placeholder="Peso (kg)"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          value={altura}
          onChangeText={(altura) => setAltura(altura)}
          placeholder="Altura (cm)"
          keyboardType="numeric"
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handlerSubmit}
        >
          <Text style={styles.buttonText}>
            Calcular
          </Text>
        </TouchableOpacity>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title:{
    textAlign: 'center',
    marginTop: 25,
    fontSize: 30
  },
  input:{
    backgroundColor: '#121212',
    borderRadius: 10,
    margin: 15,
    padding: 10,
    color: '#FFF',
    fontsize: 23,
  },
  button:{
    justifyContent: 'center',
    alignItems: 'center',
    margin: 15,
    backgroundColor: '#41Aef4',
    padding: 10,
  },
  buttonText:{
    color: '#FFF',
    fontsize: 25,
  }

});
