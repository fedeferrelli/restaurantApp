import React, { useReducer, useState } from 'react';
import FirebaseReducer from './firebaseReducer';
import FirebaseContext from './firebaseContext';

import firebase from '../../firebase/index';

import {OBTENER_PRODUCTOS_EXITO} from '../../types/index';

import _ from 'lodash'


const FirebaseState = (props) =>{



// crear statet inicial

const initialState = {
    menu:[]
}

// useReducer con dispatch para ejecutar las funciones

const [state, dispatch] = useReducer(FirebaseReducer, initialState)

// Funcion que se ejecuta para consultar y treaewr los productos

const ObtenerProductos = () =>{

    // consultar firebase

    firebase.db
        .collection('productos')
        .where('existencia', '==',true) //traer solo los que estan en existencia
        .onSnapshot(handleSnapshot)


        function handleSnapshot(snapshot){
            let platos = snapshot.docs.map(doc =>{
                return{
                    id:doc.id,
                    ...doc.data()
                }
            });
            
            // ordenar por categoeia con lodash

            platos = _.sortBy(platos, 'categoria', 'nombre')

            dispatch({
                type: OBTENER_PRODUCTOS_EXITO,
                payload: platos
            });
        }
}



    return(
        <FirebaseContext.Provider
        value={{
            menu: state.menu,
            firebase,
            ObtenerProductos
        }}
        >
           
            {props.children}
        </FirebaseContext.Provider>   
    )
};


export default FirebaseState;