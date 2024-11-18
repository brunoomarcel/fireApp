import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function Results() {
    // Capturar os parâmetros passados
    const params = useRouter();

    return (
        <View style={styles.container}>
            {/* Crie um plano personalizado para essa pessoa que quer conquistar o objetivo de mudança de corpo de acordo com os parâmetros passados. Analise esses parâmetros e crie um plano personalizado. */}
            <Text style={styles.header}>Resultados:</Text>
            <Text style={styles.text}>Nome: {params.name}</Text>
            <Text style={styles.text}>Gênero: {params.gender === 'male' ? 'Masculino' : 'Feminino'}</Text>
            <Text style={styles.text}>Peso: {params.weight} kg</Text>
            <Text style={styles.text}>Altura: {params.height} cm</Text>
            <Text style={styles.text}>Idade: {params.age} anos</Text>
            <Text style={styles.text}>Objetivo: {params.objective}</Text>
            <Text style={styles.text}>Nível: {params.level}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
});
