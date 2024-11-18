import { View, Text, StyleSheet, Alert } from 'react-native';
import { Button } from '../components/Button';

export default function Home() {

    const handleSave = () => {
        Alert.alert('Salvar', 'sucesso');
    }

    return (
        <View style={styles.container} >
            <Text>You are in Home!</Text>
            <Button handleSave={handleSave} />
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