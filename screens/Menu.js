import React, {useContext, useEffect} from 'react';
import {ScrollView, View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import { Image } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native'

import FirebaseContext from '../context/firebase/firebaseContext';
import PedidoContext from '../context/pedidos/pedidosContext';



const Menu = () => {

    // context de firebase

    const { menu, ObtenerProductos } = useContext(FirebaseContext)

    // context de pedido

    const { detallePlato } = useContext(PedidoContext)

    // hook para redireccionar

    const navigation = useNavigation();

    useEffect(() => {
        ObtenerProductos()
    }, [])
    

    const MostrarCategoria = (categoria, i) => {

        if(i>0){
        const categoriaAnterior = menu[i-1].categoria

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

    
    
    return ( 
        <ScrollView style={styles.scroll}>
            {menu.map((plato, i) => {
                const {nombre, precio, categoria, descripcion, id, image} = plato
              
                return(

                <View  key={id}>   

                {MostrarCategoria(categoria, i)}

           

                <TouchableHighlight  onPress={()=>{
                    detallePlato(plato),
                    navigation.navigate(detallePlato)
                }
                    
                    }>
                <View style={styles.vista}>

                    <Image
                    style={styles.imagen}
                    source={{ uri: image }}
                    />  

                    <View style={styles.texto}>    
                        <Text style={styles.titulo}>{nombre}</Text>
                        <Text style={styles.descripcion} >{descripcion.slice(0,20)} ... </Text>
                    
                        <Text style={styles.precio}>Precio: ${precio}</Text>
                    </View>

                    </View> 
                
                </TouchableHighlight> 
                

                </View>
               
                )
            })}
        </ScrollView>
     )
       
}
 
export default Menu;


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
