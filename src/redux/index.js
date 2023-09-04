import { configureStore } from "@reduxjs/toolkit";

import { sliceCompteur } from "./compteurStore";


//exportation des actions
export const { plus, moins } =sliceCompteur.actions ;

//export const { fonction 1, fonction 2 , ...} = monSlice.actions ;

//exportation du store
export const store = configureStore({
    reducer:{
        compteur : sliceCompteur.reducer,
        //monreducer : monSlice.reducer
    }

})