import { StyleSheet, Text, View, Image, StatusBar } from 'react-native';

export default function NoticiaPage() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../assets/roboo.png')}
        />
      </View>
      <View  style={styles.noticia}>
      <Text style={styles.titulo}>Notícias</Text>
      <Text style={styles.titulo}>Detalhes</Text>
      <Text style={styles.titulo}>Celulares</Text>
      <Text style={styles.titulo}>Sobre</Text>
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
      <StatusBar style backgroundColo="#010D24" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 10,
    alignItems: 'center',
    justifyContent: 'center',

  },
  noticia: {
    flexDirection:"row",
    padding: 1
  },
  titulo: {
    flex: 1,
    alignContent: "space-between",
    fontSize: 20,
    paddingLeft: 14,
  },
  logo: {
    height: 75,
    width: 60,
    marginRight: 15,
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
    paddingBottom: 10,
  },
  titulo3: {
    flex: 1,
    alignContent: "space-between",
    fontSize: 20,
    paddingLeft: 37
  },
});
