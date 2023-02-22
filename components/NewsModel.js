import { Platform, Pressable, StyleSheet, Text, ToastAndroid, View, SafeAreaView } from 'react-native'
import React, { useEffect, useState } from 'react'
import { MaterialIcons } from '@expo/vector-icons';


const NewsModel =  () => {
  return (
    <View style={styles.container}>
      <View>
        <Text>1111111111111111</Text>

      </View>
      <View>
        <Text>1111111111111111</Text>
      </View>
        {/* delete button */}
        <Pressable style={styles.delete} >
          <MaterialIcons name="delete" size={24} color="#FF6768" />
        </Pressable>
    </View>
  )
}
export default NewsModel


const styles = StyleSheet.create({
    container:{
      flexDirection: "column",
      alignSelf: "center",
      backgroundColor: "#ffffff",
      width: "90%",
      borderRadius: 10,
      padding: 13,
      alignItems: "right",
      marginTop: 15
  },
  title:{
      color: "#fff",
      fontSize: 20,
      flex: 1,
      fontWeight: "500"
  },
  delete:{
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    
  }
})