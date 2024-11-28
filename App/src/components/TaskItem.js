import React from 'react';
import { StyleSheet, Text, SafeAreaView, Button } from 'react-native';

export default function TaskItem({ tarefa, onEdit, onDelete }) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <SafeAreaView style={styles.container}>      
        <SafeAreaView style={styles.info}>
          <Text style={styles.title}>{tarefa.titulo}</Text>
          <Text>{tarefa.descricao}</Text>
        </SafeAreaView>
        <SafeAreaView style={styles.actions}>
          <Button title="Editar" onPress={onEdit} />
          <Button title="Deletar" onPress={onDelete} color="red" />
        </SafeAreaView>
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',  // Centraliza verticalmente
    alignItems: 'center',      // Centraliza horizontalmente
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 5,
    
  },
  info: {
    flex: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 100,
  },
});
