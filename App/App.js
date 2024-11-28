import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  Button,
  Alert,
} from "react-native";
import axios from "axios";
import TaskItem from "./src/components/TaskItem";
import TaskForm from "./src/components/TaskForm";

const API_URL = "http://10.68.152.141:3000/tarefas";

export default function App() {
  const [tarefas, setTarefas] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [tarefaToEdit, setTarefaToEdit] = useState(null);

  const fetchTarefas = async () => {
    try {
      const response = await axios.get(API_URL);
      setTarefas(response.data);
    } catch (error) {
      Alert.alert("Error", "Falha ao buscar tarefas");
    }
  };

  useEffect(() => {
    fetchTarefas();
  }, []);

  const addTarefa = async (tarefa) => {
    try {
      await axios.post(API_URL, tarefa);
      fetchTarefas();
      setIsFormVisible(false);
    } catch (error) {
      Alert.alert("Error", "Falha ao criar tarefas");
    }
  };

  const atualizarTarefa = async (id, atualizarTarefa) => {
    try {
      await axios.put(`${API_URL}/${id}`, atualizarTarefa);
      fetchTarefas();
      setTarefaToEdit(null);
      setIsFormVisible(false);
    } catch (error) {
      Alert.alert("Error", "Falha ao atualizar as tarefas");
    }
  };

  const deletarTarefa = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      fetchTarefas();
    } catch (error) {
      Alert.alert("Erro", "Não foi possivel deletar a tarefa!");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {isFormVisible ? (
        <TaskForm
          onSubmit={
            tarefaToEdit
              ? (tarefa) => atualizarTarefa(tarefaToEdit.id, tarefa)
              : addTarefa
          }
          initialData={tarefaToEdit}
          onCancel={() => {
            setTarefaToEdit(null);
            setIsFormVisible(false);
          }}
        />
      ) : (
        <>
          <Button
            title="Adicionar Tarefa"
            onPress={() => setIsFormVisible(true)}
          />
          <FlatList
            data={tarefas}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TaskItem
                tarefa={item}
                onEdit={() => {
                  setTarefaToEdit(item);
                  setIsFormVisible(true);
                }}
                onDelete={() => deletarTarefa(item.id)}
              />
            )}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',    
  },
});
