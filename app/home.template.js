import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, Button, ScrollView } from 'react-native';

import { Picker } from '@react-native-picker/picker';

export default function Home() {
    // Estados para armazenar os valores dos inputs
    const [name, setName] = useState('');
    const [gender, setGender] = useState('male');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [age, setAge] = useState('');
    const [objective, setObjective] = useState('emagrecimento');
    const [level, setLevel] = useState('iniciante');

    // Função de envio (sem integração ainda)
    const handleSubmit = () => {
        console.log('Dados prontos para envio:');
        console.log(`Nome: ${name}`);
        console.log(`Gênero: ${gender}`);
        console.log(`Peso: ${weight} kg`);
        console.log(`Altura: ${height} cm`);
        console.log(`Idade: ${age} anos`);
        console.log(`Objetivo: ${objective}`);
        console.log(`Nível: ${level}`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>

            <Image style={styles.image} source={require('../assets/icon.png')} />

            <Text style={styles.header}>O FireApp te ajuda a chegar no corpo dos seus sonhos</Text>

            {/* Input para Nome */}
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                value={name}
                onChangeText={setName}
            />

            {/* Input para Gênero */}
            <View style={styles.pickerContainer}>
                <Text style={styles.label}>Gênero:</Text>
                <Picker
                    selectedValue={gender}
                    style={styles.picker}
                    onValueChange={(itemValue) => setGender(itemValue)}
                >
                    <Picker.Item label="Masculino" value="male" />
                    <Picker.Item label="Feminino" value="female" />
                </Picker>
            </View>

            {/* Input para Peso */}
            <TextInput
                style={styles.input}
                placeholder="Digite seu peso (kg)"
                value={weight}
                onChangeText={setWeight}
                keyboardType="numeric"
            />

            {/* Input para Altura */}
            <TextInput
                style={styles.input}
                placeholder="Digite sua altura (cm)"
                value={height}
                onChangeText={setHeight}
                keyboardType="numeric"
            />

            {/* Input para Idade */}
            <TextInput
                style={styles.input}
                placeholder="Digite sua idade"
                value={age}
                onChangeText={setAge}
                keyboardType="numeric"
            />

            {/* Input para Objetivo */}
            <View style={styles.pickerContainer}>
                <Text style={styles.label}>Objetivo:</Text>
                <Picker
                    selectedValue={objective}
                    style={styles.picker}
                    onValueChange={(itemValue) => setObjective(itemValue)}
                >
                    <Picker.Item label="Emagrecimento" value="emagrecimento" />
                    <Picker.Item label="Hipertrofia" value="hipertrofia" />
                    <Picker.Item label="Manutenção" value="manutencao" />
                </Picker>
            </View>

            {/* Input para Nível */}
            <View style={styles.pickerContainer}>
                <Text style={styles.label}>Nível:</Text>
                <Picker
                    selectedValue={level}
                    style={styles.picker}
                    onValueChange={(itemValue) => setLevel(itemValue)}
                >
                    <Picker.Item label="Iniciante (1 a 3 dias de treino)" value="iniciante" />
                    <Picker.Item label="Intermediário (4 a 5 dias de treino)" value="intermediario" />
                    <Picker.Item label="Avançado (6+ dias de treino)" value="avancado" />
                </Picker>
            </View>

            {/* Botão para enviar */}
            <Button title="Enviar" onPress={handleSubmit} />
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
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
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingLeft: 10,
        width: '100%',
        borderRadius: 5,
    },
    pickerContainer: {
        width: '100%',
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        overflow: 'hidden',
    },
    picker: {
        height: 40,
        width: '100%',
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
        fontWeight: 'bold',
    },

    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
});