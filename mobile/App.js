import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { AsyncStorage, Text, View } from 'react-native';
import Firebase from './config/firebase';
import formScreen from './src/screen/formScreen';
import homeScreen from './src/screen/homeScreen';
import extratoScreen from './src/screen/extratoScreen';
import cadastroScreen from './src/screen/cadastroScreen';
import loginScreen from './src/screen/loginScreen';
import categoriaScreen from './src/screen/categoriaScreen';
import formCategotiaScreen from './src/screen/formCategoriaScreen';
import consultaCategoriaScreen from './src/screen/consultaCategoriaScreen';
import escolhaContaScreen from './src/screen/escolhaContaScreen';
import api from './src/services/api';


function SplashScreen() {
  return (
    <View>
      <Text>Loading...</Text>
    </View>
  );
}

const AuthContext = React.createContext();
const Drawer = createDrawerNavigator();

function App({navigation}) {
  const [state, dispatch] = React.useReducer(
    (prevState, action) => {
      switch (action.type) {
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignout: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
          };
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
    }
  );

  React.useEffect(() => {
      const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (e) {
        navigation.navigation.navigate('Login')
      }
      
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
    };
    
    bootstrapAsync();
  }, []);
  
  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        await Firebase.auth().signInWithEmailAndPassword(data.email, data.password)

        const user = Firebase.auth().currentUser
        
        const post_data = {
          email: data.email,
          uid: user.uid
        }

        const response = await api.post('login', post_data)

        await AsyncStorage.setItem('userToken', user.uid);
        await AsyncStorage.setItem('userId', String(response.data.usuario.id));
        await AsyncStorage.setItem('contaId', String(1));

        dispatch({ type: 'SIGN_IN', token: user.uid });
      },
      signOut: async () => { 
        await AsyncStorage.removeItem('userToken');
        dispatch({ type: 'SIGN_OUT' }) 
      },
      signUp: async data => {
        await Firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        const user = Firebase.auth().currentUser

        const post_data = {
          nome: data.name,
          email: data.email,
          uid: user.uid,
          perfil_id: data.perfil_conta
        }

        const response = await api.post('usuario', post_data);
        
        await AsyncStorage.setItem('userToken', user.uid);
        await AsyncStorage.setItem('userId', String(response.data.user_id));
        await AsyncStorage.setItem('contaId', String(response.data.conta_id));
        
        dispatch({ type: 'SIGN_IN', token: user.uid });
      },
    }),
    []
  );

  return (
   <AuthContext.Provider value={authContext}>
      <NavigationContainer>
      <Drawer.Navigator>
      {state.isLoading ? (
            <Drawer.Screen name="Splash" component={SplashScreen} />
          ) : state.userToken == null ? (
            <>
              <Drawer.Screen 
                name="Cadastro" 
                component={cadastroScreen} 
                initialParams={{authContext}}
                />
              <Drawer.Screen 
                name="Login" 
                component={loginScreen} 
                initialParams={{authContext}}
                />
            </>
          ) : (
            <>
               <Drawer.Screen 
                name="Escolha a Conta" 
                component={escolhaContaScreen}
                initialParams={{authContext}}
                />
              <Drawer.Screen 
                name="Inicio" 
                component={homeScreen}
                initialParams={{authContext}}
                />
              <Drawer.Screen 
                name="Transacoes" 
                component={formScreen} 
              />
              <Drawer.Screen 
                name="Categoria" 
                component={categoriaScreen} 
              />
               <Drawer.Screen 
                name="Cadastro de Categoria" 
                component={formCategotiaScreen} 
              />
              <Drawer.Screen 
                name="Consultar Categoria" 
                component={consultaCategoriaScreen} 
              />
              <Drawer.Screen 
                name="Extrato" 
                component={extratoScreen} 
              />
            </>
      )}
      </Drawer.Navigator>
    </NavigationContainer>
   </AuthContext.Provider>
  );
}

export default App;