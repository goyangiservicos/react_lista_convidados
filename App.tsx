import {Home} from "./src/screens/Home";
import { StatusBar } from 'react-native';
export default function App() {

  return (
    <>
    <StatusBar barStyle="dark-content"//barStyle="light-content" cor dos incones da barra superior do celular 
    backgroundColor="transparent" // cor do fundo da barra dos incones superiores 
    translucent //sobrepoem a barra - o fundo fica da cor do aplcativo com os incones claros 
    /> 
    
    <Home/>
    </>
    );
}

//arquivo que vai chamar a aplicação 