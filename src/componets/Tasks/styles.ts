import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{
    width:'100%',
    backgroundColor: '#1f1e25',
    borderRadius:5,
    flexDirection:'row',
    alignItems:'center',
    marginBottom:10
    },

    strikethrough: {
        textDecorationLine: 'line-through', // Adiciona um risco no texto
    },
    buttonImage: {
        width: 24, // Ajuste o tamanho da imagem conforme necessário
        height: 24, // Ajuste o tamanho da imagem conforme necessário
        resizeMode: 'contain', // Garante que a imagem se ajuste corretamente dentro do espaço definido
      },
      rectangle:{
        backgroundColor: '#1f1e25',
        borderRadius: 10, // Define a curvatura das bordas
        padding: 3, // Adiciona um espaço interno para o conteúdo
        marginTop: 5,
        marginBottom: 5
      },
          
    name: {
        flex:1,
        fontSize:16,
        color: '#808080',
        marginLeft:16
    },

    buttonText: {
        color: '#fff',
        fontSize:24
    },

    button: {
        width:56,
        height:56,
        borderRadius:5,
        backgroundColor:'#1f1e25',
        alignItems: 'center',
        justifyContent: 'center'
    }
    
});