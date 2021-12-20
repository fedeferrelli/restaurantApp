import {SELECCIONAR_PRODUCTOS} from '../../types/index.js';


export default (state, action) => {

    switch (action.type){

        case SELECCIONAR_PRODUCTOS:
            return{
                ...state,
                plato: action.payload
            }

        default: 
            return state;
    }
}