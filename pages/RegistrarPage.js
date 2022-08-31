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
            </View >
            <View style={styles.titulo}>
               
                <TextInput style={styles.registrar} placeholder="Email" />
            </View>
            <View style={styles.titulo}>
                <TextInput style={styles.registrar} placeholder="Senha" />
            </View>

            <View style={styles.titulo1}><Button title="Entra" color="#20E609"/></View>

            <View style={styles.titulo1}><Button title="Novo Usuario" color="#20E609"/></View>

            <View style={styles.titulo1}><Button title="Esqueci a minha senha" color="#000000" /></View>

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
        height: 100,
        width: 100
    },
    titulo: {
        fontSize: 20,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 10,
    },
    titulo1: {
        paddingTop: 10,
        paddingBottom: 10,
        width: 329,
        height: 40
        
    },
    registrar: {
        borderWidth: 1,
        fontSize: 28,
        paddingRight: 10
    },
    
});
