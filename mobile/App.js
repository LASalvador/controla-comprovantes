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
import escolhaContaScreen from './src/screen/escolhaContaScreen';
import usuariosConta from './src/screen/usuariosConta';
import novoUsuario from  './src/screen/novoUsuarioScreen';
import novaConta from './src/screen/novaContaScreen';
import camera from './src/screen/cameraScreen';
import SplashScreen from './src/screen/splashScreen';
import api from './src/services/api';

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
            account_id: action.conta,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignout: true,
            userToken: null,
            account_id: null,
          };
        case 'SWITCH':
          return {
            ...prevState,
            account_id: action.conta
          };
        case 'LOADING':
          return {
            ...prevState,
            isLoading: action.value
          }
      }
    },
    {
      isLoading: true,
      isSignout: false,
      userToken: null,
      account_id: null,
    }
  );

  React.useEffect(() => {
      const bootstrapAsync = async () => {
      let userToken;

      try {
        userToken = await AsyncStorage.getItem('userToken');
        conta_id = await AsyncStorage.getItem('contaId');
      } catch (e) {
        navigation.navigation.navigate('Login')
      }
      
      dispatch({ type: 'RESTORE_TOKEN', token: userToken });
      dispatch({type: 'SWITCH', conta: conta_id})
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
        // await AsyncStorage.setItem('contaId', String(1));

        dispatch({ type: 'SIGN_IN', token: user.uid , conta: null});
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
        
        dispatch({ type: 'SIGN_IN', token: user.uid, conta: response.data.conta_id });
      },

      switchAccount: async data => {
        await AsyncStorage.setItem('contaId', String(data.conta_id));

        dispatch({type: 'SWITCH', conta: data.conta_id})
      },
      loading: data => {
        dispatch({type: 'LOADING', value: data.value})
      }
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
          ) : state.account_id == null ? (
              <>
                <Drawer.Screen 
                  name="Escolha a Conta" 
                  component={escolhaContaScreen}
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
                name="Extrato" 
                component={extratoScreen} 
              />
              <Drawer.Screen 
                name="Usuarios" 
                component={usuariosConta} 
              />
              <Drawer.Screen 
                name="Novo Usuario" 
                component={novoUsuario} 
              />
              <Drawer.Screen 
                name="Nova Conta" 
                component={novaConta} 
              />
              <Drawer.Screen 
                name="camera" 
                component={camera} 
              />
            </>
      )}
      </Drawer.Navigator>
    </NavigationContainer>
   </AuthContext.Provider>
  );
}

export default App;