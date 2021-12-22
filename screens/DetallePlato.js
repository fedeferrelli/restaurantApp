import React, {useContext} from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native-elements';
import {Button } from 'react-native-elements';
import globalStyles from '../styles/global'
import PedidoContext from '../context/pedidos/pedidosContext';

import { useNavigation } from '@react-navigation/core';




const DetallePlato = () => {

    // pedido context

    const { platoDetalle } = useContext(PedidoContext);

    const {nombre, precio, categoria, descripcion, id, image} = platoDetalle

    // Hook para redireccionar

    const navigation = useNavigation();
   
   
    return ( 
        <View style={[globalStyles.view, styles.view]}>

        <View style={styles.card}>

            <Image
                style={styles.imagen}
                source={{ uri: image }}
            /> 

            <Text style={styles.nombre}>{nombre}</Text>

            <Text style={styles.descripcion}>{descripcion}</Text>

            <Text style={styles.precio}>${precio}</Text>

            </View>

            <Button 
                title="Ordenar plato"
                style={styles.button}
                buttonStyle={globalStyles.button}
                titleStyle={globalStyles.buttonText}
                onPress={()=>navigation.navigate('formulario')}
                
                />

               
             
        </View>
     );
}
 
export default DetallePlato;


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

 

    buffer:{
        height:5
    }

})