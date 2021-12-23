import React, {useContext, useState, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableHighlight} from 'react-native';

import { Image } from 'react-native-elements';

import globalStyles from '../styles/global'
import PedidoContext from '../context/pedidos/pedidosContext';

import { useNavigation } from '@react-navigation/core';
import { map } from 'lodash';





const ResumenPedido = () => {

    // pedido context

    const { pedido } = useContext(PedidoContext);

        const [aPagar, setAPagar] = useState(0)


    const MostrarCategoria = (categoria, i) => {

        if(i>0){
        const categoriaAnterior = pedido[i-1].categoria

        if(categoriaAnterior!=categoria){
            return(
                <Text style={styles.separador}>{categoria} </Text>
            )
        }}
        else{
            return(
                <Text  style={styles.separador}>{categoria} </Text>
            )
        }
    }

useEffect(() => {

    const garpar=(precio)=>{
        let suma = 0
        pedido.map(ped=>{          
            suma = suma+ped.importeTotal
            setAPagar(suma)
        })
        
    }
    garpar()
}, [])

  console.log(pedido) 
   
    return (
        
        <View style={styles.scroll}>
            <Text style={{color: 'white'}}>Total a Pagar</Text>
            <Text style={{color: 'white'}}>${aPagar}</Text>
        <ScrollView style={styles.scroll}>
            
            {pedido.map((pedido, i) => {
                const {nombre, precio, categoria, descripcion, id, image, unidades,
                    importeTotal } = pedido
             
                return(

                <View  key={id}>   

                {MostrarCategoria(categoria, i)}

           

                <TouchableHighlight>

                <View style={styles.vista}>

                    <Image
                    style={styles.imagen}
                    source={{ uri: image }}
                    />  

                    <View style={styles.texto}>    
                        <Text style={styles.titulo}>{nombre}</Text>
                        <Text style={styles.descripcion} >{unidades} unidades </Text>
                        <Text style={styles.precio}>${importeTotal}</Text>
                    </View>

                    </View> 
                
                </TouchableHighlight> 
                

                </View>
               
                )
            })}
        </ScrollView>

        </View>
     )
       
}
 
export default ResumenPedido;


const styles = StyleSheet.create({

    vista:{
        padding:5,
        marginHorizontal: 5,
        
        flexDirection: 'row',
        shadowColor: "#000",
       // borderRadius: 10,
        backgroundColor:'#fff',

       /*  marginVertical:8,

        shadowOffset: {
            width: 0,
	        height: 3,
            },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7, */

        borderBottomWidth:1,
        borderBottomColor:'lightgrey'
    },

    imagen:{
        width: 100,
        height: 100,
      //  borderRadius: 10,

    },

    texto:{
        flexDirection: 'column',
        paddingLeft:5,
        justifyContent:'center'
        
    },

    titulo:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000'
    },


    descripcion:{
        color:'grey'
    },

    precio:{
        color:'black',
        fontWeight:'bold',
        fontSize:18
    },

    separador:{
        height:35, 
        fontSize: 20, 
        paddingLeft:5, 
        backgroundColor:'#000', 
        color:'#FFDA00', 
        textTransform: 'uppercase'  },

        scroll:{
            backgroundColor:'#000',

            
        }
})
