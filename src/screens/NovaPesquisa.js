import { format } from 'date-fns';
import React, { useState } from 'react';
import { Alert, Image, Text, TouchableOpacity, View } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { TextInput } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import newSearchStyles from '../styles/screens/novaPesquisaStyles';


export default function NovaPesquisa(props) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [nomePesquisa, setNomePesquisa] = useState('');
  const [errorNome, setErrorNome] = useState('');
  const [errorData, setErrorData] = useState('');
  const [sucessoMessage, setSucessoMessage] = useState('');
  const [image, setImage] = useState(null);

  const handleCadastroPesquisa = (nome, data) => {
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
    <View style={newSearchStyles.container}>
      <View style={newSearchStyles.header}>
        <TouchableOpacity onPress={() => props.navigation.pop()}>
          <Icon name="arrow-back" size={30} style={newSearchStyles.headerImg} />
        </TouchableOpacity>
        <Text style={newSearchStyles.title}>Nova pesquisa</Text>
      </View>

      <View style={newSearchStyles.content}>
        <View style={newSearchStyles.inputWrapper}>
          <Text style={newSearchStyles.label}>Nome</Text>
          <TextInput
            style={newSearchStyles.input}
            placeholder="Preencha o nome da pesquisa"
            value={nomePesquisa}
            onChangeText={setNomePesquisa}
          />
          {errorNome ? (
            <Text style={newSearchStyles.errorText}>{errorNome}</Text>
          ) : null}
        </View>

        <View style={newSearchStyles.inputWrapper}>
          <Text style={newSearchStyles.label}>Data</Text>
          <TextInput
            value={format(date, 'dd/MM/yyyy')}
            inlineImageLeft="calendar-month"
            right={
              <TextInput.Icon
                icon="calendar-month"
                size={35}
                color={'#00000077'}
                style={newSearchStyles.dateIcon}
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
            <Text style={newSearchStyles.errorText}>{errorData}</Text>
          ) : null}
        </View>

        <View style={newSearchStyles.inputWrapper}>
          <Text style={newSearchStyles.label}>Imagem</Text>
          <TouchableOpacity
            style={newSearchStyles.imageTouchable}
            onPress={handleImagePicker}>
            {image ? (
              <Image
                source={{uri: image}}
                style={newSearchStyles.pickedImage}
              />
            ) : (
              <Text style={newSearchStyles.imageButtonText}>
                Câmera/Galeria de imagens
              </Text>
            )}
          </TouchableOpacity>

          {sucessoMessage ? (
            <Text style={newSearchStyles.sucessoMessage}>{sucessoMessage}</Text>
          ) : null}
        </View>
      </View>

      <View style={newSearchStyles.btnContainer}>
        <TouchableOpacity
          style={newSearchStyles.button}
          onPress={() =>
            handleCadastroPesquisa(nomePesquisa, format(date, 'dd/MM/yyyy'))
          }>
          <Text style={newSearchStyles.buttonText}>CADASTRAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// export default NovaPesquisa;
