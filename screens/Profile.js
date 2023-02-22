import { View, Text, TextInput, StyleSheet, Image, TouchableOpacity , ScrollView} from 'react-native'
import React, { useState,useEffect,useLayoutEffect} from 'react';

import {
    collection,
    addDoc,
    orderBy,
    query,
    where,
    doc,
    onSnapshot
  } from 'firebase/firestore'
  import { auth, database } from '../config/firebase';

export default function  Profile() {
    const [email, setEmail] = useState('');
    const [fullname, setfullname] = useState('');

    useLayoutEffect(() => {
        const collectionRef = collection(database, 'users');
        const q = query(collectionRef,where("uid", "==", auth.currentUser.uid));
        const unsubscribe = onSnapshot(q, querySnapshot => {
            querySnapshot.forEach((doc) => {
                setfullname(doc.data().fullname);
                setEmail(doc.data().email);
              });
            });
      }, []);
    return (
        <ScrollView style={styles.ScrollView}>
            <View style={styles.container}>
            {/* View body */}
            <View style={styles.body} >
                <Text>for more safety, update you password regulary</Text>
                <Text style={{ margin: 10, color: "black", fontWeight: "bold", fontSize: 20 }}>Edit profile</Text>
                <View style={styles.Viewinput}>
                    <Image style={styles.icon}
                        source={require('../assets/images/user_icon.png')}></Image>
                    <TextInput style={styles.input}
                        multiline={true}
                        value={fullname}
                        placeholder={"First Name"} />
                </View>
                <View style={styles.Viewinput}>
                    <Image style={styles.icon}
                        source={require('../assets/images/user_icon.png')}></Image>
                    <TextInput style={styles.input}
                        multiline={true}
                        value={fullname}
                        placeholder={"Last Name"} />
                </View>
                <View style={styles.Viewinput}>
                    <Image style={styles.icon}
                        source={require('../assets/images/email.png')}></Image>
                    <TextInput style={styles.input}
                        multiline={true}
                        value={email}
                        placeholder={"Email"} />
                </View>
                <View style={styles.Viewinput}>
                    <Image style={styles.icon}
                        source={require('../assets/images/pass.png')}></Image>
                    <TextInput style={styles.input}
                        multiline={true}
                        placeholder={"Password"} />
                </View>
           
            </View>
            {/*  View footer */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.ViewButton} >
                    <Text style={{ color: "white" }}>Update</Text>
                </TouchableOpacity>
              
            </View>
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ScrollView:{
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,        // justifyContent: 'center',

    },
    footer: {
        marginTop:50,
        flex: 3,
        alignItems: 'center',

    },
    body: {
        flex: 7,
        alignItems: 'center',

    },
    Viewinput: {
        padding: 5,
        borderColor: "gray",
        width: 350,
        borderWidth: 1,
        borderRadius: 14,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5
    },
    input: {
        borderColor: "gray",
        width: "80%",

    },
    icon: {
        width: 20,
        height: 20,
        marginLeft: 15,
        marginRight: 15,
    },
    ViewCheckbox: {
        padding: 5,
        width: 350,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    },
    ViewButton: {
        padding: 5,
        width: 350,
        height: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#92A3FD",
        margin: 10,
        borderRadius: 99,
    },
});

