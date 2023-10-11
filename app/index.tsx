import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { Link } from "expo-router";


export default function App() {
  return (
    <View style={styles.container}>
       <Image source={require('../assets/logo.png')} style={styles.logo}/>

      <Text style={styles.titulo}>TrenerCad</Text>

      <View style={styles.divInputs}>
        <TouchableOpacity style={styles.agendamentoButton}>
          <Link 
          href="/telaRegistrar"
          style={{textAlign: 'center',  color: 'white', fontSize: 17}}>
            Registrar
          </Link>
        </TouchableOpacity>

        <TouchableOpacity style={styles.registrosButton}>
          <Link 
          href="/telaElenco"
          style={{textAlign: 'center',  color: 'white', fontSize: 17}}>
            Elenco
          </Link>
        </TouchableOpacity>
      </View>
      
      <StatusBar style="auto" />
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
    width: '30%',
    marginBottom: 20,
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center',
    marginBottom: 20
  },
  divInputs: {

  },
  agendamentoButton: {
    backgroundColor: '#0dbb91',
    margin: "3%",
    borderRadius: '5%',
    padding: "4%",
  },
  registrosButton: {
    backgroundColor: '#0dbb91',
    margin: "3%",
    borderRadius: '5%',
    padding: "4%",
  },
});
