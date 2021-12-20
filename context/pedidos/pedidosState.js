import React, { useReducer, useState } from 'react';

import PedidosReducer from './pedidosReducer';
import PedidosContext from './pedidosContext';

import { SELECCIONAR_PRODUCTOS } from '../../types/index'


const PedidosState = (props) =>{

    

// crear statet inicial

const initialState = {
    pedido:[],
    plato: null
}

// useReducer con dispatch para ejecutar las funciones

const [state, dispatch] = useReducer(PedidosReducer, initialState)

// funcion para seleccionar el plato que el usuario quiere ver detalle

const detallePlato = (plato) =>{

   dispatch({
       type: SELECCIONAR_PRODUCTOS,
       payload: plato
   })

}


    return(
        <PedidosContext.Provider
        value={{
            pedido: state.pedido,
            platoDetalle: state.plato,
            detallePlato            
        }}
        
        >
           
            {props.children}
        </PedidosContext.Provider>   
    )
};


export default PedidosState;