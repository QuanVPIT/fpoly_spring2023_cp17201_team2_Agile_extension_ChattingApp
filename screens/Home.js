import React, { useEffect } from "react";
import { View, TouchableOpacity, Text, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';
import colors from '../colors';
import { Entypo } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';
import { AntDesign } from '@expo/vector-icons';
import { auth, database } from '../config/firebase';
import { Button } from "react-native-web";

const catImageUrl = "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=49ed3252c0b2ffb49cf8b508892e452d";

const Home = () => {

    const navigation = useNavigation();

    const onSignOut = () => {
        signOut(auth).catch(error => console.log('Error logging out: ', error));
      };

    useEffect(() => {
        navigation.setOptions({
            headerLeft: () => (
                <FontAwesome name="search" size={24} color={colors.gray} style={{marginLeft: 15}}/>
            ),
            headerRight: () => (
                <TouchableOpacity
                style={{marginRight: 10}}
                onPress={onSignOut}
              >
               <AntDesign name="logout" size={24} color={colors.gray} style={{marginRight: 10}}/> 
              </TouchableOpacity>
                
            ),
        });
    }, [navigation]);

    return (
        <View style={styles.container}>
                <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("Onboarding1")}>
                    <Text>Check IBM</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("Yourday")}>
                    <Text>Your day</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("Nutrition")}>
                    <Text>Food Advise</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("Chat")}>
                    <Text>Go To chatbox</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate("Chat")}>
                    <Text>Go To profile</Text>
                </TouchableOpacity>
            {/* <View style={styles.containerchat}>
                <TouchableOpacity
                    onPress={() => navigation.navigate("Chat")}
                    style={styles.chatButton}>
                    <Entypo name="chat" size={24} color={colors.lightGray} />
                </TouchableOpacity>
            </View> */}
        </View>

    );
    };

    export default Home;

    const styles = StyleSheet.create({
        button:{
            padding: 16,
        },
        container:{
            flex:1,
            backgroundColor: "#fff",
            alignItems: 'center',
            justifyContent: 'center',

        },
        containerchat: {
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            backgroundColor: "#fff",
        },
        chatButton: {
            backgroundColor: colors.primary,
            height: 50,
            width: 50,
            borderRadius: 25,
            alignItems: 'center',
            justifyContent: 'center',
            shadowColor: colors.primary,
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: .9,
            shadowRadius: 8,
            marginRight: 20,
            marginBottom: 50,
        }
    });