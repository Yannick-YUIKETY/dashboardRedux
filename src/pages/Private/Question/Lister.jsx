import React, { useEffect } from 'react'
import Item from './Item'
import { useState } from 'react'
import {getAll} from '../../../commonjs/db'

const Lister = () => {

    const [asks , setAsks] = useState([]) ;
    const initData = async () =>{

        const dataTemp = await getAll('questions') ;

        setAsks(dataTemp) ;
    }

    useEffect(() => {

      initData() ;
    
    }, [])
    
    

  return (
    <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Cat.</th>
        <th>question</th>
        <th></th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      
      {asks?.map(data =><Item key={data.id} question={data}/>)}
      
    </tbody>
  </table>
</div>
  )
}

export default Lister