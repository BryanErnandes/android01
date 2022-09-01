import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function NoticiaPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.titulo}>Notícias</Text>
        <Image
          style={styles.roboo}
          source={require('../assets/roboo.png')}
        />
      </View>
      <View style={styles.corpo}>
        <Image
          style={styles.robo}
          source={require('../assets/roboo.png')}
        />
        <Text style={styles.texto}>Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
      </View>
      <View style={styles.corpo}>
        <Image
          style={styles.robo}
          source={require('../assets/roboo.png')}
        />
        <Text style={styles.texto}>Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
      </View>
      <View style={styles.corpo}>
        <Image
          style={styles.robo}
          source={require('../assets/roboo.png')}
        />
        <Text style={styles.texto}>Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
      </View>
      <View style={styles.corpo}>
        <Image
          style={styles.robo}
          source={require('../assets/roboo.png')}
        />
        <Text style={styles.texto}>Android Pay? Google pode lançar sistema mobile de pagamentos em 2015</Text>
      </View>
      <View style={styles.rodape}>
        <Text style={styles.titulo3}>Inicio</Text>
        <Text style={styles.titulo3}>Meio</Text>
        <Text style={styles.titulo3}>Fim</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: "row",
    paddingTop: 10,

  },
  titulo: {
    flex: 1,
    alignContent: "space-between",
    fontSize: 20,
    paddingLeft: 30
  },
  roboo: {
    height: 49,
    width: 50,
    marginRight: 15
  },
  corpo: {
    flex: 1,
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10
  },
  robo: {
    height: 100,
    width: 100,
  },
  texto: {
    fontSize: 20,
    padding: 10
  },
  rodape:{
    flexDirection:"row",
    padding: 6
  },
  titulo3: {
    flex: 1,
    alignContent: "space-between",
    fontSize: 20,
    paddingLeft: 30
  },
});
