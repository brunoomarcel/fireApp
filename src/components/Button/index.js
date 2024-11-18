import { TouchableOpacity, Text } from 'react-native';

export const Button = (props) => {
    return (
        <TouchableOpacity 
            style={{
                borderWidth: 1,
                backgroundColor: '#DC8227',
                borderColor: 'black',
                padding: 10,
                width: 100,
                alignItems: 'center',
                borderRadius: 5
                
            }}
            onPress={props.handleSave}
            acctiveOpacity={0.7}
        >
            <Text>Salvar</Text>
        </TouchableOpacity>
    )
};