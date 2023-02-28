import { getFirestore, doc, getDoc, getDocs, collection } from "firebase/firestore";
import { async } from "@firebase/util";


const getAll = () => {
    const db = getFirestore();
} 

const get = async (id) => {
    const db = getFirestore();
    const itemDoc = doc(db, "items", "4RDp2wwwSL4mfmev8XqS");
    const snapshot = await getDoc(itemDoc);
    const producto = { id: snapshot.id, ...snapshot.data() };

    return producto
}

 const productos = { getAll, get };