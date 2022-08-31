import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function NoticiaPage() {
    return (
        <View style={styles.container}>
            <View style={styles.titulo}>
                <Text style={styles.titulo}>Android Pay? Google pode lançar sistema mobile de pagamentos em 2015
                </Text>
            </View>
            <View>
                <Image
                    style={styles.roboo}
                    source={require('../assets/roboo.png')}
                />
            </View>
            <View >
                <Text style={styles.text}>O Apple Pay ainda não está totalmente consolidado no mercado: só funciona nos Estados Unidos e em estabelecimentos parceiros com equipamento de leitura NFC. E, de acordo com um relato do China Business Week, ele logo deve ganhar um concorrente de peso para piorar a situação. Isso porque a Google estaria preparando um sistema de pagamentos via celular muito parecido que, ao menos provisoriamente, levaria o nome de Android Pay.  </Text>

                <Text style={styles.text}>O Android Pay estaria em desenvolvimento na China, em uma parceria com a China UnionPay, maior operadora de cartões de crédito e débito do país — segunda do mundo, atrás somente da Visa. Essa aliança traz o benefício de um maior número de estabelecimentos envolvidos, dando uma vantagem inicial ao serviço em relação aos concorrentes.</Text>

                <Text style={styles.text}>Ainda segundo o site, o sistema seria o mesmo: bastaria aproximar o smartphone do terminal de pagamento para processar a compra, com base na tecnologia sem fio Near </Text>
            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        padding: 5,
        fontSize: 28
    },
    roboo: {
        height: 200,
        width: 200
    },
    text: {
        fontSize: 18,
        padding: 12
    }

});
