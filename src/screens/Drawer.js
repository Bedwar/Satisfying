import { createDrawerNavigator, DrawerItem, DrawerContentScrollView } from '@react-navigation/drawer';
import { View, Text} from 'react-native';
import Home from '../screens/Home';
import Icon from 'react-native-vector-icons/MaterialIcons';

import drawerStyles from '../styles/screens/drawerStyles' ;

const DrawerNavigator = createDrawerNavigator();

const Drawer = (props) => {

  const email = props.route.params.email;

  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        drawerActiveTintColor: 'darkslateblue',
        headerTitleStyle: {
          fontSize: 35,
          color: 'white',
          marginLeft: 10,
          fontFamily: 'AveriaLibre-Regular'
        },
        drawerLabelStyle: { fontSize: 50, color: 'white', fontFamily: 'AveriaLibre-Regular' },
        drawerStyle: { backgroundColor: 'darkslateblue', width: '50%', fontFamily: 'AveriaLibre-Regular' },
        headerBackground: () => (
          <View style={{
            alignItems: 'center',
            marginBottom: 5,
            backgroundColor: 'darkslateblue',
            height: 60,
            paddingHorizontal: 20
          }} />
        ),
      }}

      drawerContent={(props) =>

        <DrawerContentScrollView {...props}>
          <View style={drawerStyles.emailHeader}>
            <Text style={drawerStyles.text}>{email}</Text>
          </View>

          <View style={drawerStyles.separator}></View>

          <DrawerItem style={drawerStyles.header} icon={({ focused, size }) => (
            <Icon
              name="description"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          )} labelStyle={drawerStyles.text} label="Pesquisas" onPress={() => { props.navigation.goBack() }} />

          <DrawerItem style={drawerStyles.header} icon={({ focused, size }) => (
            <Icon
              name="logout"
              size={size}
              color={focused ? '#7cc' : '#ccc'}
            />
          )} labelStyle={drawerStyles.text} label="Sair" onPress={() => { props.navigation.popToTop() }} />
        </DrawerContentScrollView>

      }>
      <DrawerNavigator.Screen name="Pesquisas" component={Home} />

    </DrawerNavigator.Navigator>
  );
};



export default Drawer;