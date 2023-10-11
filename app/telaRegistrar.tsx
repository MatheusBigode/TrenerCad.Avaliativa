import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useState } from 'react';


export default function Agendamento() {

  const [name, setName] = useState()
  const [idade, setIdade] = useState()
  const [nacionalidade, setNacionalidade] = useState()
  const [experiencia, setExperiencia] = useState()
  const [registros, setRegistros] = useState<string[]>([]);
  

  function handleAddRegistro() {
        setRegistros([name, idade, nacionalidade, experiencia, registros])
        console.log("Nome: " + name + "\n" +
            "Idade: " + idade + "\n" +
            "Nacionalidade: " + nacionalidade + "\n" +
            "Anos de experiência: " + experiencia + "\n");

        Alert.alert(
          name + ', seus dados foram cadastrados!'
          )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>
        Insira seus dados
      </Text>

        <TextInput
            style={styles.input}
            placeholder="Nome completo"

            value={ name }
            onChangeText={(e) => setName(e)}
        />

        <TextInput
            style={styles.input}
            placeholder="Idade"
            
            value={ idade }
            onChangeText={(e) => setIdade(e)}
        />

        <TextInput
            style={styles.input}
            placeholder="Nacionalidade"
            
            value={ nacionalidade }
            onChangeText={(e) => setNacionalidade(e)}
        />

        <TextInput
            style={styles.input}
            placeholder="Anos de experiência"
            
            value={ experiencia }
            onChangeText={(e) => setExperiencia(e)}
        />

        <TouchableOpacity onPress={handleAddRegistro} style={styles.enviar}>
          <Text style={{textAlign: 'center',  color: 'white'}}>
            Salvar e enviar
          </Text>
        </TouchableOpacity>

        <View style={styles.ficha}>
            <Text style={styles.ficTec}>Ficha técnica</Text>

            <Text style={styles.info}>Nome: {name}</Text>
            <Text style={styles.info}>Idade: {idade}</Text>
            <Text style={styles.info}>Nacionalidade: {nacionalidade}</Text>
            <Text style={styles.info}>Experiência: {experiencia}</Text>
        </View>
    </View>
  );
}
          

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: "10%",
  },
  logo: {
    alignSelf: 'center',
    height: '15%',
    width: '20%'
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginBottom: 40
  },
  divInputs: {

  },
  input: {
    alignSelf: 'center',
    color: '#000',
    backgroundColor: "#E0DFE0",
    borderRadius: 5,
    fontWeight: "200",
    width: '94%',
    margin: 10,
    padding: "4%",
  },
  enviar: {
    backgroundColor: '#0dbb91',
    margin: "3%",
    borderRadius: '5%',
    padding: "4%",
  },
  ficha: {
    margin: 10,
    width: 310,
    alignSelf: 'center',
    backgroundColor: "#0dbb91",
    borderRadius: 10,
    padding: 20

  },
  info: {
    color: 'white',
    marginBottom: 10,
    fontSize: 15
  },
  ficTec: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'white'
  }
});
