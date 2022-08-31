import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function NoticiaPage() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titulo}>Notícias</Text>
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
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titulo: {
    padding: 30,
    fontSize: 40,
    backgroundColor: '#36E954',
  },
  corpo:{
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

}
});
