import { TouchableOpacity } from 'react-native';
import { style } from './style';

export function ButtonInitConvert() {
    return (
        <TouchableOpacity>
            <Text style={style.button}>Calcular</Text>
        </TouchableOpacity>
    );
}