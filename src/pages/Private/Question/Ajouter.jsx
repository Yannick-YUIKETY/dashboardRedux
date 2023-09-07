import React, { useEffect, useState } from 'react'
import {addDataToCollection, getAll} from '../../../commonjs/db'

const Ajouter = () => {

    const [ask , setAsk] = useState("") ;
    const [categories , setCategories] = useState([]) ;
    const [selectedCategory , setSelectedCategory] = useState("") ;


    //recuperation et mise à jour de la donnée de l'input || changement d'etat de l'input

    const handleChangeAsk = (event) => { 

        setAsk(event.target.value) ;

    }
    //changement d'etat du select
    const handleDropCategory = (event) => { 

        setSelectedCategory(event.target.value)
    
    }

    //Sauvegarde en base de donnée
    const save = async () => { 
        if (ask != '' && selectedCategory != '') {
            //console.log('save') ;


            const data = {

                category: selectedCategory,
                question : ask

            } 

            await addDataToCollection("questions" ,data) ;

            setAsk("") ;
        }else{
            //console.log('nosave')
        }
    }
    
    
    const initData = async () =>{

        const dataTemp = await getAll('category') ;

        setCategories(dataTemp) ;
    }

    useEffect(() => {

      initData() ;
    
    }, [])
    
    return (
    <div className='flex flex-row gap-4'>

    <select value={selectedCategory} onChange={handleDropCategory} className="select select-bordered w-full max-w-xs">
    
        <option defaultValue={''}>Selectionner une Catégorie</option>
        {categories?.map(data=><option key={data.id} value={data.id}>{data?.name}</option>)}

    </select>

    <input value={ask} onChange={handleChangeAsk} type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
    <button  onClick={save} className="btn btn-primary">Ajouter </button>
    </div>
  )
}

export default Ajouter