import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default function Results() {
    const params = global.dietaResponse;
    if (!params) {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Seus Dados:</Text>
                <Text style={styles.text}>Nenhum resultado encontrado.</Text>
            </View>
        );
    }

    const data = params.data;

    return (
        <ScrollView contentContainerStyle={styles.scrollContent}>
            <View style={styles.scrollContent}>

                <Image style={styles.image} source={require('../assets/adaptive-icon.png')} />
                <Text style={styles.header}>Bem vindo, {data.nome}!</Text>
                <Text style={styles.text}>Sexo: {data.sexo}</Text>
                <Text style={styles.text}>Idade: {data.idade}</Text>
                <Text style={styles.text}>Altura: {data.altura} cm</Text>
                <Text style={styles.text}>Peso: {data.peso} kg</Text>
                <Text style={styles.text}>Objetivo: {data.objetivo}</Text>

                <Text style={styles.subheader} >Seu Plano:</Text>
                <Text style={styles.textObjective}>Objetivo: {data.objetivo}</Text>

                {data.refeicoes.map((refeicao, index) => (
                    <View key={index} style={styles.refeicaoContainer}>
                        <Text style={styles.text}>Horário: {refeicao.horario}</Text>
                        <Text style={styles.text}>Nome: {refeicao.nome}</Text>
                        <Text style={styles.text}>Alimentos:</Text>
                        {refeicao.alimentos.map((alimento, idx) => (
                            <Text key={idx} style={styles.text}>- {alimento}</Text>
                        ))}
                    </View>
                ))}

                <Text style={styles.subheader}>Suplementos:</Text>
                {data.suplementos.map((suplemento, index) => (
                    <Text key={index} style={styles.text}>- {suplemento}</Text>
                ))}
                <Text style={ { fontSize: 14, marginTop: 60 } }>FireApp © 2024</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    textObjective: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    subheader: {
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
        fontWeight: '400',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    scrollContent: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5'
    },
});
