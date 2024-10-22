import {collection, addDoc} from 'firebase/firestore';

const addNewUser = async (db, newUser) => {
    console.log('Adding new user to Firestore');
    console.log(newUser);
  try {
    const docRef = await addDoc(collection(db, 'dbMarket'), newUser);
    console.log('Document written with ID: ', docRef.id);
  } catch (error) {
    console.error('Error adding document: ', error);
  }
};


export const dbFunctions = {
    addNewUser,
};