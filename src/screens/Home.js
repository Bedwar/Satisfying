import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import globalStyles from '../styles/globalStyles';
import CardPesquisa from '../components/CardPesquisa';

const Home = (props) => {

    // Simulação de dados de pesquisa
    const researchData = [
        { title: 'SECOMP 2023', date: '10/10/2023', image: require('../../assets/images/secomp-icon.png') },
        { title: 'UBUNTU 2022', date: '05/06/2022', image: require('../../assets/images/ubuntu-icon.png') },
        { title: 'MENINAS CPU', date: '01/04/2022', image: require('../../assets/images/meninas-icon.png') }
    ];

    const showNovaPesquisa = () => {
        props.navigation.navigate('NovaPesquisa')
    }

    const showAcoesPesquisa = (research) => {
        props.navigation.navigate('AcoesPesquisa', { research: research })
    }

    return (
        
        <View style={globalStyles.container}>
        
            <View style={globalStyles.header}>
                <View style={globalStyles.container}>
                    <Image source={require('../../assets/icons/search-icon.png')} style={globalStyles.searchIcon} size={10} />
                    <TextInput
                        style={globalStyles.inputs}
                        placeholder="Insira o termo de busca..."
                    />
                </View>
            </View>

            <ScrollView
                horizontal={true} 
                showsHorizontalScrollIndicator={false} 
                style={globalStyles.scrollContainer} 
            >
                {researchData.map((research, index) => (
                    <TouchableOpacity 
                        key={index}
                        style={globalStyles.researchCard}
                        onPress={() => {showAcoesPesquisa(research)}} >
                            <CardPesquisa item={research} />
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <TouchableOpacity
                style={globalStyles.button}
                onPress={showNovaPesquisa} >
                <Text style={globalStyles.buttonText}>NOVA PESQUISA</Text>
            </TouchableOpacity>
        </View>
    );
};



export default Home;
