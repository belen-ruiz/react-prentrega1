


import { getFirestore, doc, getDoc, getDocs, collection, query,
    where, } from "firebase/firestore";


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



// const getByName = async (name) => {
//     const db = getFirestore();
//     const productCollection = collection(db, "items");
  
//     const q = query(productCollection, where("name", "===", name));
//     const snapshot = await getDocs(q);
  
//     const productos = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  
//     return productos;
//   };


export const productosServicios = { getAll, get };

