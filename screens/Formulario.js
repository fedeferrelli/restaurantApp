import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput } from 'react-native';
import { Image } from 'react-native-elements';
import {Button } from 'react-native-elements';
import globalStyles from '../styles/global'
import PedidoContext from '../context/pedidos/pedidosContext';

import { useNavigation } from '@react-navigation/core';


const Formulario = () => {

    // pedido context

    const { platoDetalle } = useContext(PedidoContext);

    const {nombre, precio, categoria, descripcion, id, image} = platoDetalle

    // Hook para redireccionar

    const navigation = useNavigation();

    // state de unidades

    const [unidades, setUnidades] = useState(1)

    // funcion para adicionar cantidades via boton

    const upCantidades = () =>{
        setUnidades(unidades+1)
    }

    const downCantidades = () =>{
        
        unidades>1 ? setUnidades(unidades-1) : 1
    }


    return ( 
        <View style={[globalStyles.view, styles.view]}>

        <View style={styles.card}>

            <Image
                style={styles.imagen}
                source={{ uri: image }}
            /> 

            <Text style={styles.nombre}>{nombre}</Text>

           <View style={styles.unidades}>
                <Button 
                title="-"
                buttonStyle={[styles.botonera, styles.botonLeft]}
                titleStyle={globalStyles.buttonText}
                onPress={()=>downCantidades()}

                />
                
                <TextInput
                    style={styles.cantidades}
                    //onChangeText={onChangeNumber}
                    value={unidades.toString()}
                    keyboardType="numeric"
                 />
                
                <Button 
                title="+"
                buttonStyle={[styles.botonera, styles.botonRight]}
                titleStyle={globalStyles.buttonText}
                onPress={()=>upCantidades()}
                />
           </View>

           <Text style={styles.precioTotal}>Importe</Text>

           <Text style={styles.precioTotal}>${unidades*precio}</Text>

            </View>

            <Button 
                title="Ordenar plato"
                buttonStyle={globalStyles.button}
                titleStyle={globalStyles.buttonText}
                onPress={()=>navigation.navigate('formulario')}
                
                />

               
             
        </View>
     );
}
 
export default Formulario;

const styles = StyleSheet.create({

    view:{
        justifyContent: 'space-between',       
        marginBottom: 15
    },

    card:{
        width: '100%',
    },

    nombre:{
        width:'100%',
        textAlign: 'center',
        fontSize:28,
        fontWeight: 'bold',
        marginBottom: 25,
        color:'#FFDA00',
        backgroundColor: 'black',
        paddingVertical:10,
    },

    imagen:{
        width: '100%',
        height: 250,
    },

    descripcion:{
        width:'100%',
        paddingHorizontal:40,
        textAlign: 'center',
        fontSize:16,
        color: 'black',
        lineHeight: 25,
        letterSpacing: 1.05  
    },

    precio:{
        width:'100%',
        textAlign: 'center',
        fontSize:28,
        fontWeight: 'bold',
        marginVertical: 20,
    },


    unidades:{
        flexDirection:'row',
        width: '100%',
       // backgroundColor: 'green',
        justifyContent: 'center',
        height: 50
    },

    botonera:{
        width: 100,
        height: '100%',
        backgroundColor: '#FFDA00',
        borderColor:'black',
        borderWidth: 0.5,
        //borderBottomColor:'grey',
        //borderBottomWidth: 0.5,
    },

    botonRight:{
        borderTopRightRadius:50,
        borderBottomRightRadius:50
    },

    botonLeft:{
        borderTopLeftRadius:50,
        borderBottomLeftRadius:50
    },

    cantidades:{
        width:100,
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
        borderTopColor:'grey',
        borderTopWidth: 0.5,
        borderBottomColor:'grey',
        borderBottomWidth: 0.5,  
    },

    precioTotal:{
        width: '100%',
        textAlign:'center',
        fontSize: 20,
        fontWeight: 'bold',
    }



})