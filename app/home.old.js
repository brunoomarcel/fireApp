import { View, Text, StyleSheet, Alert } from 'react-native';
import { Button } from '../src/components/Button';
import { Link } from 'expo-router';

export default function Home() {

    const handleSave = () => {
        Alert.alert('Salvar', 'sucesso');
    }

    return (
        <View style={styles.container} >
            <Text>You are in Home!</Text>
            <Button handleSave={handleSave} />
            <Link href="/index" style={{ marginTop: 20, color: '#DC8227', textDecorationLine: 'underline'}}>Voltar para o Formulário</Link>
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
});