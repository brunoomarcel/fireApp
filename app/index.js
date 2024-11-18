import React, { useState } from 'react';
import { Image, StyleSheet, View, Text, TextInput, Button, ScrollView, ActivityIndicator, Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import axios from 'axios';

export default function Root() {

    const [data, setData] = useState({
        name: '',
        gender: '',
        weight: '',
        height: '',
        age: '',
        objective: '',
        level: '',
    });

    // Estado para controlar o carregamento
    const [isLoading, setIsLoading] = useState(false);

    const router = useRouter();

    const handleSubmit = async () => {

        // Validar se todos os campos foram preenchidos
        if (
            !data.name || 
            !data.gender || 
            !data.weight || 
            !data.height || 
            !data.age || 
            !data.objective || 
            !data.level
        ) {
            alert('Por favor, preencha todos os campos antes de enviar.');
            return;
        }

        setIsLoading(true); // Inicia o carregamento

        try {
            const response = await axios.post('http://localhost:3333/create', data);
            global.dietaResponse = response.data;

            router.push({
                pathname: '/results',
            });

            setData({ 
                name: '',
                gender: '',
                weight: '',
                height: '',
                age: '',
                objective: '',
                level: '',
            });   
        } catch (error) {
            console.error('Erro ao enviar os dados:', error);
        } finally {
            setIsLoading(false); // Finaliza o carregamento
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                <Image style={styles.image} source={require('../assets/adaptive-icon.png')} />

                <Text style={styles.header}>O FireApp te ajuda a chegar no corpo dos seus sonhos</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                    value={data.name}
                    onChangeText={(text) => setData ({...data, name: text})}
                />

                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Gênero:</Text>
                    <Picker
                        selectedValue={data.gender}
                        onValueChange={(itemValue) => setData({ ...data, gender: itemValue })}
                        style={styles.picker}
                    >
                        <Picker.Item label="Masculino" value="male" />
                        <Picker.Item label="Feminino" value="female" />
                    </Picker>

                </View>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu peso (kg)"
                    value={data.weight}
                    onChangeText={(text) => setData ({...data, weight: text})}
                    keyboardType="numeric"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite sua altura (cm)"
                    value={data.height}
                    onChangeText={(text) => setData ({...data, height: text})}
                    keyboardType="numeric"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Digite sua idade"
                    value={data.age}
                    onChangeText={(text) => setData ({...data, age: text})}
                    keyboardType="numeric"
                />

                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Objetivo:</Text>
                    
                    <Picker
                        selectedValue={data.objective}
                        onValueChange={(itemValue) => setData({ ...data, objective: itemValue })}
                        style={styles.picker}
                    >
                        <Picker.Item label="Selecione seu objetivo" value="" />
                        <Picker.Item label="Perda de Peso" value="perda_peso" />
                        <Picker.Item label="Hipertrofia" value="hipertrofia" />
                        <Picker.Item label="Manutenção" value="manutencao" />
                    </Picker>
                </View>

                <View style={styles.pickerContainer}>
                    <Text style={styles.label}>Nível Atividade Física:</Text>
                    <Picker
                        selectedValue={data.level}
                        onValueChange={(itemValue) => setData({ ...data, level: itemValue })}
                        style={styles.picker}
                    >
                        <Picker.Item label="Nível Atividade Física" value="" />
                        <Picker.Item label="INICIANTE - 1 a 3 dias" value="iniciante" />
                        <Picker.Item label="INTERMDIÁRIO - 3 a 5 dias" value="intermediario" />
                        <Picker.Item label="AVANÇADO - 5 a 7 dias" value="avancado" />
                    </Picker>
                </View>

                <View style={{ marginTop: 30 }}>
                    {/* Mostra o indicador de carregamento ou o botão */}
                    {isLoading ? (
                        <ActivityIndicator size="large" color="#0000ff" />
                    ) : (
                        <Button title="Receber Plano" onPress={handleSubmit} />
                    )}
                </View>

                <Text style={ { fontSize: 14, marginTop: 60 } }>FireApp © 2024</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    input: {
        width: '100%',
        height: 40,
        padding: 10,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 5,
        backgroundColor: '#FFF',
    },
    pickerContainer: {
        width: '100%',
        marginBottom: 15,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    picker: {
        height: 50,
        width: '100%',
        backgroundColor: '#FFF',
        borderWidth: 1,
        borderColor: '#CCC',
        borderRadius: 5,
    },
});
