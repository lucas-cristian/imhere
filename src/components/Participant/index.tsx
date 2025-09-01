import { styles }  from "./style";
import { View, Text, TouchableOpacity } from "react-native";
// Componentes View é contêiner básico para layout em React Native, equivalente a uma <div> no HTML.
// Componentes Text é usado para exibir texto na tela, equivalente a <p> ou <span> no HTML.
type Props = {
    name: string;
    onRemove?: () => void; // Função vazia por isso Void
}

export function Participant({ name, onRemove }: Props) {
    return (
        <View style={styles.container}>
            {/* As chaves {} são usadas para inserir qualquer expressão JavaScript dentro do JSX. */}
            <Text style={styles.name}>
                { name }
            </Text>
            <TouchableOpacity style={styles.button} onPress={onRemove}>
                <Text style={styles.buttonText}> - </Text>
            </TouchableOpacity>
        </View>
    )
}