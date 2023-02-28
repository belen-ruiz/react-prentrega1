


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

