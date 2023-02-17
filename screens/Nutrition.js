import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback
} from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import {
  collection,
  addDoc,
  orderBy,
  query,
  onSnapshot
} from 'firebase/firestore';
import { signOut } from 'firebase/auth';
import { auth, database } from '../config/firebase';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../colors';


export default function Nutrition() {

  const [messages, setMessages] = useState([]);
  const navigation = useNavigation();
  useLayoutEffect(() => {

      const collectionRef = collection(database, 'nutrition');
      const q = query(collectionRef, orderBy('createdAt', 'desc'));
      console.log(collectionRef);


  const unsubscribe = onSnapshot(q, querySnapshot => {
      console.log('querySnapshot unsusbscribe');
      console.log(unsubscribe)
        setMessages(
          querySnapshot.docs.map(doc => ({
            _id: doc.data()._id,
            text: doc.data().title,
          }))
        );
      });
  return unsubscribe;
    }, []);



}

