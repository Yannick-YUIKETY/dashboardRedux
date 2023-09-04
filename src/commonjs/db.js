import { dbFirestore } from "../firebase";
import { addDoc, collection, doc , getDoc, getDocs, query } from "firebase/firestore";



/** 
 *  created by Y.YUIKETY
 * 
 *  Selectionner un élement à partir de son identifiant dans une collection
 *  Param:
 *  collectionName "nom de la collection"
 *  id : " id de la collection"
 * 
 * date : 28/08/2023
 */


export const getOneByID = async (collectionName , id) => { 

    const rq = doc(dbFirestore ,collectionName , id) ;

    const snapShot = await getDoc(rq) ;

    

    return snapShot.exists ? snapShot.data() : null ;


    /* if (snapShot.exists) {

        return snapShot.data() ;

    } else{
        return null
    }*/
    
} ;





/** 
 *  created by Y.YUIKETY
 * 
 *  Selectionner tous les élements dans une collection
 *  Params:
 *          collectionName "nom de la collection"
 *          
 * 
 * date : 28/08/2023
 */

export const getAll = async (collectionName ) => { 
   

    //Preparation de ma requete sur tasks
    const rq = query(collection(dbFirestore, collectionName)) ;

    //Je lance ma requete
    const snapShot = await getDocs(rq) ;


    //Tester que le ta tableau n'est pas vide 
    if (!snapShot.empty) {

        const dataTemp = snapShot.docs.map(item=>{
            return {id : item.id , ...item.data()} ;

        }) ;

        //mise a jour de task => set sert amettre a jour
        return dataTemp 

    }else{

        return [] ;

    }

}

/****
 * 
 * created by Y.YUIKETY
 * 
 *  Ajouter des données dans une collection firebase
 *  Params:
 *          collectionName "nom de la collection"
 *          data
 *          
 * 
 * date : 30/08/2023
 * 
 */

export const addDataToCollection = async (collectionName , data) =>{

    return await addDoc(collection(dbFirestore, collectionName), data) ;

}