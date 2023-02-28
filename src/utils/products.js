
// export const productos = [
//     { id: '1' ,categoria: 'interior', name: " Monstera ",   price: 37, foto:'' , info: "extra info", stock: 10},
//     { id: '2' ,categoria: 'interior', name: " Potus ", price: 27, foto:' ' , info: "extra info", stock: 10},
//     { id: '3' ,categoria: 'interior', name: " Sanvinera ",    price: 40, foto:' ', info: "extra info" , stock: 10},
//     { id: '4' ,categoria: 'exterior', name: " Rosario ", price: 55, foto:' ' , info: "extra info", stock: 10} ,
//     { id: '5' ,categoria: 'exterior', name: " Rosario ", price: 55, foto:' ' , info: "extra info", stock: 10} ,
//     { id: '6' ,categoria: 'exterior', name: " Rosario ", price: 55, foto:' ' , info: "extra info", stock: 10} , 
//   ] 


import { getFirestore, doc, getDoc, getDocs, collection } from "firebase/firestore";


const getAll = async () => {
    const db = getFirestore();
    const productCollection = collection(db, "items");
    const snapshot = await getDocs(productCollection);
    const producto = snapshot.docs.map((doc)=>({ id: doc.id, ...doc.data() }));

    return producto
} 

const get = async (id) => {
    const db = getFirestore();
    const productDoc = doc(db, "items", id);
    const snapshot = await getDoc(productDoc);
    const producto = { id: snapshot.id, ...snapshot.data() };

    return producto
}

export const productosServicios = { getAll, get };

