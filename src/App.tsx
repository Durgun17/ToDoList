import { useState } from 'react';
import React from 'react';
import {View, Text, StyleSheet, TextInput, Button, FlatList, TouchableOpacity} from 'react-native';
import ToDoCard from "./components/ToDoCard";
import SaveCard from './components/SaveCard';

function App() {

  const [list, setList] = useState([
    "Çöp dökülecek",
    "Oda toplanacak",
    "Ayakkab temizlenecek",
    "Markete gidilecek",
  ]);

  const [text, setText] = useState("");

  const handleAddTodoPress = () => {
    setList([...list, text]);
    setText("");
  };

  const handleDeleteTodoPress = (index) => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
  };

  const [isFocus, setFocus] = useState(false);

  const handleTodoDone = () => {
    setFocus(!isFocus);
  };


  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Text style={styles.title}>YAPILACAKLAR </Text>
        <Text style={styles.font}>0</Text>
      </View>
      <FlatList
      data={list}
      renderItem={({ item, index }) => (
        <ToDoCard
          text={item}
          deleteTodo={() => handleDeleteTodoPress(index)}
          todoDone={() => handleTodoDone()}
        />
      )}
      />
       <SaveCard
          value={text}
          onChangeText={setText}
          onPress={handleAddTodoPress}
        />
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#102027',
  },
  head: {
    color: 'yellow',
    flex: 1,
    flexDirection: 'row',
    marginTop: 10,
  },
  title: {
    flex: 10,
    fontSize: 35,
    color: 'orange',
    fontWeight: "bold",
  },
  font: {
    alignItems: 'center',
    flex: 1,
    fontSize: 35,
    fontWeight: "bold",
    color: 'orange',
  },
  footer: {
    borderRadius: 20,
    margin: 15,
    padding: 20,
    backgroundColor: '#a8a8a8',
  },
  footer_input_text: {
    borderRadius: 5,
    borderBottomWidth: 1,
    flex: 1,
  },
  footer_button:{
    weight: 25,
    height: 40,
    backgroundColor: "gray",
    color: "red",
    borderRadius: 15,
    marginTop: 8,
  },
  footer_button_text : {
  
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginTop: 5,
  }
});
