import React, { useState } from "react";
import { Text, TextInput, View, TouchableOpacity, FlatList, Alert} from "react-native";
import { Participant } from "../../components/Participant";
import { styles } from "./style";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');

  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
    }
    if (participantName.trim() === '') {
      return Alert.alert("Nome inválido", "Informe um nome para o participante.");
    }
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
    return Alert.alert("Participante adicionado", `O participante ${participantName} foi adicionado com sucesso.`);
  }

  function handleParticipantRemove(name: string) {
    if (participants.includes(name)) {
      Alert.alert("Remover", `Remover o participante ${name}?`, [
        {
          text: "Cancelar",
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: () => {
            setParticipants(prevState => prevState.filter(participant => participant !== name));
            Alert.alert("Participante removido", `O participante ${name} foi removido com sucesso.`);
          }
        }
      ]);
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventNome}> Nome do evento</Text>
      <Text style={styles.eventData}> Quarta, 27 de agosto de 2025.</Text>
      <View style={styles.form}>
        <TextInput 
            style={styles.input}
            placeholder="Nome do participante"
            placeholderTextColor="#6B6B6B"
            onChangeText={setParticipantName}
            value={participantName}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}> + </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant 
            key={item}
            name={item} // Passa o nome do participante para o componente Participant
            onRemove={() => handleParticipantRemove(item)}
          />
        )}

        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.emptyText}>
            Ninguém chegou ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
    </View>
  )
}