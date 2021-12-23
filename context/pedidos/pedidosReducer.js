import {SELECCIONAR_PRODUCTOS, CONFIRMAR_PEDIDO} from '../../types/index.js';


export default (state, action) => {

    switch (action.type){

        case SELECCIONAR_PRODUCTOS:
            return{
                ...state,
                plato: action.payload
            }

        case CONFIRMAR_PEDIDO:
            return{
                ...state,
                pedido: [...state.pedido, action.payload]
            }

        default: 
            return state;
    }
}