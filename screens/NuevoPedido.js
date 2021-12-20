import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';

import globalStyles from '../styles/global';

import { useNavigation } from '@react-navigation/core';


const NuevoPedido = () => {

    const navigation = useNavigation();
    return (  
        
            <View style={globalStyles.view}>
                <Button 
                title="Nuevo pedido"
               // style={styles.button}
                containerStyle={globalStyles.button}
                buttonStyle={globalStyles.button}
                titleStyle={globalStyles.buttonText}
                onPress={()=>navigation.navigate('menu')}
                
                />
                  
               
            </View>

       
    );
}
 
export default NuevoPedido;

/* const styles = StyleSheet.create({

    view:{
        flex: 1,
        //backgroundColor: 'red',
        justifyContent: 'center',
       // alignItems: 'center',
        alignContent: 'center'
    },

    button:{
        width: '90%' 
    }

}
) */