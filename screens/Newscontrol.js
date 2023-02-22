import { async } from '@firebase/util';
import React, {} from 'react';
import { useState } from 'react';
import { StyleSheet, Text, SafeAreaView,TextInput} from 'react-native';
import NewsModel from '../components/NewsModel';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot
} from 'firebase/firestore';
import {  database } from '../config/firebase';

export default function Newscontrol() {
  const [title,setTitle] = useState("");

  const addNews = async() =>{
    try {
      const docRef = await  addDoc(collection(database, "News"), {
        title: "ada",
        last: "false",
        born: 186
      });
      console.log("Document written with ID: ", docRef.id);

    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <NewsModel />
      <TextInput
       placeholder="enter "
       onSubmitEditing={addNews}
       />
    </SafeAreaView>
  );

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  infoContainer:{
    flex: 1
  },
  emptyContainer:{
    alignItems: "center",
    justifyContent: "center",
    marginTop: 200,
    opacity: 0.5
  },
  buttonContainer:{

  },
  input:{
    backgroundColor: "#fff",
    padding: 10,
    fontSize: 15,
    width: "100%",
    alignSelf: "center",
    marginTop: 20
  },
  button:{
    backgroundColor: "#D8E9A8",
    padding: 10,
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20
  },
  buttonText:{
    fontSize: 17,
    color: "#000",
    
  }
  });
