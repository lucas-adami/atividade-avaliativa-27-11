import React, { useState } from "react";
import { StyleSheet, TextInput, Button, SafeAreaView } from "react-native";

export default function TaskForm({ onSubmit, onCancel, initialData }) {
  const [titulo, setTitulo] = useState(initialData?.titulo || "");
  const [descricao, setDescricao] = useState(initialData?.descricao || "");

  const handleSubmit = () => {
    if (titulo.trim() && descricao.trim()) {
      onSubmit({ titulo, descricao });
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Titulo"
        value={titulo}
        onChangeText={setTitulo}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <SafeAreaView style={styles.actions}>
        <Button title="Salvar" onPress={handleSubmit} />
        <Button title="Cancelar" onPress={onCancel} color="red" />
      </SafeAreaView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                 // Garantir que o contêiner ocupe toda a tela
    justifyContent: 'center',  // Centraliza o conteúdo verticalmente
    alignItems: 'center',      // Centraliza o conteúdo horizontalmente
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '80%',             // Largura ajustada para garantir que o input não ocupe toda a tela
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-between",  // Alinha os botões na mesma linha
    width: '60%',                   // Ajusta a largura do contêiner dos botões
  },
});
