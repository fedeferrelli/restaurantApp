import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import NuevoPedido from './screens/NuevoPedido';
import Menu from './screens/Menu';
import DetallePlato from './screens/DetallePlato';
import ResumenPedido from './screens/ResumenPedido';
import ProgresoPedido from './screens/ProgresoPedido';
import Formulario from './screens/Formulario';

// importar state de context
import FirebaseState from './context/firebase/firebaseState';
import PedidosState from './context/pedidos/pedidosState';


const Stack = createNativeStackNavigator();

const App = () =>{

  return(
  <>
  <FirebaseState>
  <PedidosState>

    <NavigationContainer>
  

      <Stack.Navigator
          screenOptions={{
            headerStyle:{
              backgroundColor: '#FFDA00'
            },
            headerTitleStyle:{
              fontWeight: 'bold',
            }
      
          }}      
      >
        <Stack.Screen
        name='nuevoPedido'
        component={NuevoPedido}
        options={{
          title: 'Nuevo Pedido'}}
        />

        <Stack.Screen
        name='menu'
        component={Menu}
        options={{
          title: 'Menu'}}
        />

        <Stack.Screen
        name="detallePlato"
        component={DetallePlato}
        options={{
          title:'Detalle del Plato'
        }}
        />

        <Stack.Screen
        name='formulario'
        component={Formulario}
        options={{
          title: 'Cantidades'
        }}
        />

        <Stack.Screen
        name='resumenPedido'
        component={ResumenPedido}
        options={{
          title: 'Resumen del Pedido'
        }}
        />

        <Stack.Screen
        name='progesoPedido'
        component={ProgresoPedido}
        options={{
        title: 'Progreso del Pedido'
        }}

        />


      </Stack.Navigator>

    </NavigationContainer> 

    </PedidosState>
    </FirebaseState>
  </>
  
  )
};

export default App;