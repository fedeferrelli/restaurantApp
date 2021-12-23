import React, {useContext, useState} from 'react';
import {View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import { Image, Button, Icon } from 'react-native-elements';

import globalStyles from '../styles/global'
import PedidoContext from '../context/pedidos/pedidosContext';

import { useNavigation } from '@react-navigation/core';


const Formulario = () => {

    // pedido context

    const { platoDetalle, guardarPedido } = useContext(PedidoContext);

    const {nombre, precio, image} = platoDetalle

    // Hook para redireccionar

    const navigation = useNavigation();

    // state de unidades

    const [unidades, setUnidades] = useState(1)

    // state de importe total

    const [importeTotal, setImporteTotal] = useState(precio)



    // funcion para adicionar cantidades via boton

    const upCantidades = () =>{
        setUnidades(unidades+1)
        setImporteTotal((unidades+1)*precio)
    }

    const downCantidades = () =>{

        if(unidades>1){
            setUnidades(unidades-1)
            setImporteTotal((unidades-1)*precio)
        }else{
            setUnidades(1)
            setImporteTotal(precio)

        }
    }

    // funcion para confirma orden

    const ConfirmarOrden = () =>{
        Alert.alert(
            `Deseas confirmar tu pedido?${"\n"}${unidades} ${nombre} por $${precio*unidades} `,
           // `Deseas confirmar tu pedido?  ${unidades} ${nombre} por $${precio*unidades} `,
            'Una vez confirmado el pedido no podrás modificarlo',
            [{
                text: 'Cancelar',
                syle: 'cancel'
            },
            
            {
                text: 'Confirmar',
                onPress: () =>{

                    // almacenar el pedido
                    const joaquin={
                        ...platoDetalle,
                        unidades,
                        importeTotal                        
                    }

                    //console.log(joaquin)
                    guardarPedido(joaquin)

                    // navegar hacia el resumen

                    navigation.navigate('resumenPedido')
                    }
            },

            
            ]
        )
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
                //title="-"
                buttonStyle={[styles.botonera, styles.botonLeft]}
                titleStyle={globalStyles.buttonText}
                onPress={()=>downCantidades()}
                icon={{
                    name: 'remove-circle',
                    type: 'meterial-community',
                    size: 28,
                    color: 'black',               
                  }}

                />
                
                <TextInput
                    style={styles.cantidades}
                    //onChangeText={onChangeNumber}
                    value={unidades.toString()}
                    keyboardType="numeric"
                 />
                
                <Button 
               // title="+"
                buttonStyle={[styles.botonera, styles.botonRight]}
                titleStyle={globalStyles.buttonText}
                onPress={()=>upCantidades()}
                icon={{
                  name: 'add-circle',
                  type: 'meterial-community',
                  size: 28,
                  color: 'black',               
                }}
                />
                 
           </View>

           <Text style={styles.precioTotal}>Importe</Text>

           <Text style={[styles.precioTotal, styles.importe]}>${importeTotal}</Text>

            </View>

            <Button 
                title="Confirmar pedido"
                buttonStyle={globalStyles.button}
                titleStyle={globalStyles.buttonText}
                onPress={()=>ConfirmarOrden()}
                
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
        marginTop: 40,
    },

    importe:{
        fontSize: 28,
        marginTop: 10,
    }



})