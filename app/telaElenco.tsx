import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList} from 'react-native';
import { Link } from "expo-router";
import { useNavigation } from '@react-navigation/native'



export default function RegistrosList() {
  const navigation = useNavigation()
  const footballPlayers = [
    {
    name: "Cristiano Ronaldo",
    position: "Forward",
    age: 36,
    },
    {
    name: "Lionel Messi",
    position: "Attacking Midfielder",
    age: 34,
    },
    {
    name: "Neymar Jr.",
    position: "Forward",
    age: 29,
    },
    {
    name: "Kylian Mbappé",
    position: "Forward",
    age: 23,
    },
    {
    name: "Sergio Ramos",
    position: "Defender",
    age: 35,
    },
    {
    name: "Kevin De Bruyne",
    position: "Midfielder",
    age: 30,
    },
    {
    name: "Robert Lewandowski",
    position: "Forward",
    age: 32,
    },
    {
    name: "Virgil van Dijk",
    position: "Defender",
    age: 30,
    },
    {
    name: "Luka Modric",
    position: "Midfielder",
    age: 35,
    },
    {
    name: "Erling Haaland",
    position: "Forward",
    age: 21,
    },
    ];

  return (
    <View style={styles.container}>

      <Text style={styles.titulo}>Elenco</Text>
      <Text style={styles.text}>

      </Text>

      <View>
      <FlatList
            contentContainerStyle={{justifyContent: "center", alignItems: "center"}}
            style={styles.lista} 
            data={footballPlayers}
            renderItem={(
                ({item}) => (
                    <View style={styles.ficha}>
                        <Text style={styles.info}>Nome: {item.name}</Text>
                        <Text style={styles.info}>Data de nascimento: {item.position}</Text>
                    </View>
                )
            )}/>
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
    alignItems: 'center'
  },
  logo: {
    alignSelf: 'center',
    height: '15%',
    width: '17%'
  },
  titulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'black',
    alignSelf: 'center'
  },
  text: {
    margin: '6%',
    textAlign:'justify',
  },
  lista: {
    textAlign: 'center',
    width: '100%',
    color: 'white',

  },
  ficha: {
    margin: 10,
    width: 300,
    backgroundColor: "#0dbb91",
    borderRadius: 10,
    padding: 20

  },
  info: {
    color: 'white'
  }
});
