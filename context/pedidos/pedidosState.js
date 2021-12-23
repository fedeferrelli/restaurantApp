import React, { useReducer, useState } from 'react';

import PedidosReducer from './pedidosReducer';
import PedidosContext from './pedidosContext';

import { SELECCIONAR_PRODUCTOS, CONFIRMAR_PEDIDO } from '../../types/index'


const PedidosState = (props) =>{

// crear state inicial

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

// cuando el usuario confirma el pedido 

const guardarPedido = pedido =>{
    dispatch({
        type: CONFIRMAR_PEDIDO,        
        payload: pedido
    })
}


    return(
        <PedidosContext.Provider
        value={{
            pedido: state.pedido,
            platoDetalle: state.plato,
            detallePlato,
            guardarPedido            
        }}
        
        >
           
            {props.children}
        </PedidosContext.Provider>   
    )
};


export default PedidosState;