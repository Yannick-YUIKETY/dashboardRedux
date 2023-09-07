import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import Public from './pages/Public'
import Private from './pages/Private'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { initUser, resetUser } from './redux'


function App() {

  const dispatch = useDispatch() ;
  
  //const compteur = useSelector(state => state.compteur) ;

  const userID = useSelector(state => state.user) ;

  //trace le statut de l'utilisateur
  onAuthStateChanged(auth , user =>{
    if (user) {

      dispatch(initUser(user.uid)) ;
      //console.log('user' , user) ;

    }else{

      dispatch(resetUser()) ;
      //console.log('nc') ;

    }
  })

  return (
    <>

      {userID ? <Private/> : <Public/>}

    </>
  )
}

export default App
