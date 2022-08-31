import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

export default function UsuarioPage() {
    return (
        <View style={styles.container}>
            <View>
                <Image
                    style={styles.roboo}
                    source={require('../assets/roboo.png')}
                />
                <Text style={styles.usuario}>Usuario</Text>
            </View>
            <View>
                <Text style={styles.titulo}>Nome</Text>
                <TextInput style={styles.registrar} />
            </View>
            <View>
                <Text style={styles.titulo}>Email</Text>
                <TextInput style={styles.registrar} />
            </View>
            <View>
                <Text style={styles.titulo}>Senha</Text>
                <TextInput style={styles.registrar} />
            </View>
            <View style={styles.titulo1}>
                <Text style={styles.titulo}>Senha</Text>
                <TextInput style={styles.registrar} />
            </View>

            <Button title="Registrar" color="#20E609" style={styles.botao} />

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
    roboo: {
        height: 200,
        width: 180
    },
    usuario: {
        fontSize: 40,
        padding: 10
    },
    titulo: {
        fontSize: 20,
        padding: 10
    },
    titulo1: {
        paddingTop: 10,
        paddingBottom: 10,
    },
    registrar: {
        borderWidth: 1,
        fontSize: 20,
        paddingRight: 90
    },
    botao: {
        fontSize: 10
    }
});
