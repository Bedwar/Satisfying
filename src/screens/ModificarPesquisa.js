import { format } from 'date-fns';
import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import Modal from 'react-native-modal';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import globalStyles from '../styles/globalStyles';
import changeSearchStyles from '../styles/screens/modificarPesquisaStyles';

const parseDate = (dateString) => {
  const [day, month, year] = dateString.split('/').map(Number);
  return new Date(year, month - 1, day);
};

const ModificarPesquisa = (props) => {
  const research = props.route.params.research;
  const [date, setDate] = useState(
    research.date ? parseDate(research.date) : null,
  );
  const [open, setOpen] = useState(false);
  const [nomePesquisa, setNomePesquisa] = useState(research.title || '');
  const [errorNome, setErrorNome] = useState('');
  const [errorData, setErrorData] = useState('');
  const [sucessoMessage, setSucessoMessage] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [image, setImage] = useState(research.image || null);

  const handleModificarPesquisa = (nome, data) => {
    setErrorNome('');
    setErrorData('');
    setSucessoMessage('');
    if (nome !== '' && data !== '') {
      setSucessoMessage('Nova pesquisa registrada!');
    } else {
      if (nome == '') {
        setErrorNome('Preencha o nome da pesquisa');
      }
      if (data == '') {
        setErrorData('Preencha a data');
      }
    }
  };

  const handleImagePicker = () => {
    Alert.alert(
      'Selecione',
      'Informe de onde voce quer pegar a foto',
      [
        {
          text: 'Galeria',
          onPress: () => pickImageFromGalery(),
          style: 'default',
        },
        {
          text: 'Camera',
          onPress: () => pickImageFromCamera(),
          style: 'default',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const pickImageFromGalery = async () => {
    const result = await launchImageLibrary((options = {mediaType: 'photo'}));
    const assets = result?.assets[0];
    setImage(assets?.uri);
  };

  const pickImageFromCamera = async () => {
    const result = await launchCamera((options = {mediaType: 'photo'}));
    const assets = result?.assets[0];
    setImage(assets?.uri);
  };

  return (
    <View style={changeSearchStyles.container}>
      <View style={changeSearchStyles.header}>
        <TouchableOpacity onPress={() => props.navigation.pop()}>
          <Icon
            name="arrow-back"
            size={30}
            style={changeSearchStyles.headerImg}
          />
        </TouchableOpacity>
        <Text style={changeSearchStyles.title}>Modificar pesquisa</Text>
      </View>

      <View style={changeSearchStyles.content}>
        <View style={changeSearchStyles.inputWrapper}>
          <Text style={changeSearchStyles.label}>Nome</Text>
          <TextInput
            // style={changeSearchStyles.input}
            placeholder="Preencha o nome da pesquisa"
            value={nomePesquisa}
            onChangeText={setNomePesquisa}
          />
          {errorNome ? (
            <Text style={globalStyles.errorText}>{errorNome}</Text>
          ) : null}
        </View>

        <View style={changeSearchStyles.inputWrapper}>
          <Text style={changeSearchStyles.label}>Data</Text>
          <TextInput
            value={format(date, 'dd/MM/yyyy')}
            right={
              <TextInput.Icon
                icon="calendar-month"
                size={35}
                color={'#00000077'}
                style={changeSearchStyles.dateIcon}
                onPress={() => setOpen(true)}
              />
            }
            editable={false}
          />
          <DatePicker
            title={'Selecione a data'}
            modal
            locale="pt"
            mode="date"
            open={open}
            date={date}
            onConfirm={date => {
              setOpen(false);
              setDate(date);
            }}
            onCancel={() => {
              setOpen(false);
            }}
          />
          {errorData ? (
            <Text style={globalStyles.errorText}>{errorData}</Text>
          ) : null}
        </View>

        <View style={changeSearchStyles.inputWrapper}>
          <Text style={changeSearchStyles.label}>Imagem</Text>
          <TouchableOpacity
            style={changeSearchStyles.imageTouchable}
            onPress={handleImagePicker}>
            {image ? (
              <Image source={image} style={changeSearchStyles.pickedImage} />
            ) : (
              <Text style={changeSearchStyles.imageButtonText}>
                Câmera/Galeria de imagens
              </Text>
            )}
          </TouchableOpacity>

          {sucessoMessage ? (
            <Text style={globalStyles.sucessoMessage}>{sucessoMessage}</Text>
          ) : null}
        </View>
      </View>

      <View style={[changeSearchStyles.btnContainer]}>
        <View style={changeSearchStyles.button1}>
          <TouchableOpacity
            onPress={() =>
              handleModificarPesquisa(nomePesquisa, format(date, 'dd/MM/yyyy'))
            }>
            <Text style={changeSearchStyles.buttonText}>SALVAR</Text>
          </TouchableOpacity>
        </View>
        <View style={[changeSearchStyles.button2]}>
          <TouchableOpacity
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
            onPress={() => setModalVisible(true)}>
            <Icon name="delete" size={30} color="white" />
            <Text
              style={{
                color: 'white',
                fontFamily: 'AveriaLibre-Regular',
                fontSize: 20,
              }}>
              Apagar
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <Modal isVisible={isModalVisible} style={globalStyles.modal}>
        <View style={globalStyles.modalContent}>
          <Text style={globalStyles.modalText}>
            Tem certeza de apagar essa pesquisa?
          </Text>
          <View style={globalStyles.buttonContainer}>
            <TouchableOpacity
              style={[globalStyles.modalButton, {backgroundColor: 'tomato'}]}
              onPress={() => setModalVisible(false)}>
              <Text style={globalStyles.modalButtonText}>SIM</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                globalStyles.modalButton,
                {backgroundColor: 'darkslateblue'},
              ]}
              onPress={() => setModalVisible(false)}>
              <Text style={globalStyles.modalButtonText}>CANCELAR</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6A5ACD',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: 'darkslateblue',
    height: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
    color: 'white',
    marginLeft: 10,
    fontFamily: 'AveriaLibre-Regular',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'flex-start',
    marginHorizontal: 160,
    fontFamily: 'AveriaLibre-Regular',
  },
  input: {
    width: '60%',
    backgroundColor: 'white',
    height: 30,
    paddingHorizontal: 15,
    paddingVertical: 5,
    fontFamily: 'AveriaLibre-Regular',
  },
  imageButton: {
    backgroundColor: 'white',
    height: 55,
    width: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    borderRadius: 5,
    marginBottom: 10,
    marginHorizontal: 160,
  },
  button: {
    backgroundColor: '#37BD6D',
    width: '77%',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 157,
    borderRadius: 10,
    fontFamily: 'AveriaLibre-Regular',
  },
  btnDelete: {
    width: '100%',
    alignItems: 'center',
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 40,
  },
  errorMessage: {
    color: 'tomato',
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
  },
  sucessoMessage: {
    color: 'limegreen',
    marginBottom: 1,
    fontSize: 15,
    fontFamily: 'AveriaLibre-Regular',
  },
  buttonText: {
    fontSize: 20,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
  },
  modal: {
    marginHorizontal: 150,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#6A5ACD',
    padding: 20,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 20,
    color: 'white',
    alignSelf: 'center',
    fontFamily: 'AveriaLibre-Regular',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    padding: 10,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  modalButtonText: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'AveriaLibre-Regular',
  },
});

export default ModificarPesquisa;
