import React, { useState } from 'react'
import {addDataToCollection} from '../../../commonjs/db'

const Ajouter = () => {

    const [catName , setCatName] = useState("") ;

    //recuperation et mise à jour de la donnée de l'input
    const handleChangeCategory = (event) => { 

        setCatName(event.target.value) ;

    }

    //Sauvegarde en base de donnée
    const save = async () => { 
        if (catName != '') {
            console.log('save') ;

            const data = {name: catName} 

            await addDataToCollection("category" ,data) ;

            setCatName("") ;
        }else{
            console.log('nosave')
        }
    }
  
    return (
    <div className='flex flex-row gap-4'>

   
    <input name='formCategory' value={catName} onChange={handleChangeCategory} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
    <button  onClick={save} className="btn btn-primary">Ajouter</button>
    </div>
  )
}

export default Ajouter