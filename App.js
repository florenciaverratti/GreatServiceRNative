import {AddItem, CustomFlatList, CustomModal} from './components/index';
import { Button, FlatList, Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8E7E9',
    //justifyContent: 'center', //vertical
    //alignItems: 'center'//horizontal
  },
  textBarra: {
    color: 'white',
    fontSize: 25,
    alignSelf: 'center',
    marginTop: 45  ,
  },
  barra: {
    height: 80,
    backgroundColor: '#40798c',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    marginLeft: 15,
    marginRight: 15,
    backgroundColor: '#579BB2',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  item: {
    fontSize: 20,
    color: '#000000',
  },
modalContainer: {
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 30,
  paddingVertical: 20,
  height: 200,
},
modalTitle: {
  fontSize: 16
},
modalMessageContainer : {
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 10,
},
modalMessage: {
  fontSize: 14,
},
  botonMas:{
    alignItems: 'flex-end',
    marginBottom: 30,
    marginRight: 30,
  }
});

export default function App() {
  const [nuevoItem, setNuevoItem] = useState('');
  const [listaItem, setListaItem] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [seleccionarItem, setSeleccionarItem] = useState(null);
  
  const recibirItem = (text) => {
    setNuevoItem(text);
  }

  const agregarItem = () => {
    setListaItem((prevItem) => [
      ...prevItem,
      { id: Date.now(),value: nuevoItem }
    ]);
    setNuevoItem('');
    setModalVisible(!modalVisible);
  }
  
  const modalagregarItem= () => {
    setModalVisible(!modalVisible);
  }

  const renderizar = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity onPress={() => borrarItem(item.id)} >
        <Text> X </Text>
      </TouchableOpacity>
    </View>
  )
  
  const borrarItem = (id) =>{
    setListaItem(listaItem.filter((item) => item.id !== id));
    setSeleccionarItem(null);
  }

  return (
    <View style={styles.container}>
      <View style={styles.barra}>
        <Text style={styles.textBarra}> To do list</Text>
      </View>

      <CustomFlatList
        data={listaItem}
        renderItem={renderizar}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
      
      <CustomModal animationType='slide' visible={modalVisible}>
          
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Añadir Item</Text>
          </View>
          <View style={styles.modalMessageContainer}> 
            <AddItem
              placeholder='nombre del Item' 
              selectionColor='#31081f' 
              placeholderTextColor={'#70a9a1'} 
              onChangeText={recibirItem}
              item={nuevoItem}

              textButton1='Guardar'
              addItem1={agregarItem}
              color1='#40798c'

              textButton2='Cancelar'
              color2='#cccccc'
              addItem2={() => setModalVisible(!modalVisible)}
            />
          </View>   
      </CustomModal>
      <View style={styles.botonMas}>
        <Button 
        title='+' 
        onPress={() => modalagregarItem()} 
        color='#40798c' 
        />
      </View>
    </View>
  );
}

