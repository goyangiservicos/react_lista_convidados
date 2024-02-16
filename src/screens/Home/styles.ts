import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  containerMenu:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems:'center'
  },

  
  itemContainer: {
    flexDirection: 'row', // Garante que os itens dentro do container sejam dispostos horizontalmente
   
},
  
totalParticipantsContainer: {
  justifyContent: 'center', // Centraliza verticalmente o conteúdo dentro da View
  alignItems: 'center', // Centraliza horizontalmente o conteúdo dentro da View
  borderRadius: 15, // Define o raio para tornar o contêiner circular
 
  
},
totalParticipants: {
  width: 30,
  height:30,
  color: 'white', // Cor do texto
  fontSize: 18, // Tamanho da fonte
  textAlign: 'center', // Alinhamento horizontal centralizado
  fontWeight: 'bold',
  backgroundColor: '#1f1e25',
  borderRadius: 15
  },


textLeft: {
  color: '#4EA8DE',
  fontSize: 18,
  fontWeight: 'bold',
  height:30
  },

  textRight: {
    textAlign: 'right',
    color: '#5E60CE',
    fontSize: 18,
      fontWeight: 'bold',
  },
  container: {
      flex: 1,
      backgroundColor: '#131016',
      padding: 24
    },
    eventName: {
      color: '#4EA8DE',
      fontSize: 35,
      fontWeight: 'bold',
      marginTop: 48,
      textAlign: 'center',
    },
    to: {
      color: '#4EA8DE', // Estilo para "to"
    },
    do: {
      color: '#5E60CE', // Estilo para "do"
    },
    eventDate: {
      color:'#6b6b6b',
      textAlign: 'center'
        },
        
    input: {
        flex: 1, //serve para ocupar todo o espaço disponivel 
        marginRight:12, //serve para dar um espaço entre o imput e o botao e nao ficar tudo grudado 
        height:56,
        backgroundColor: '#1f1e25',
        borderRadius:8, 
        color: '#fdfcfe',
        padding: 16,
        fontSize:16
    },

    buttonText: {
        color: '#fff',
        fontSize:24
    },

    button: {
      width: 56,
      height: 56,
      borderRadius: 8,
      backgroundColor: '#1E6F9F',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonImage: {
      width: 24, // Ajuste o tamanho da imagem conforme necessário
      height: 24, // Ajuste o tamanho da imagem conforme necessário
      resizeMode: 'contain', // Garante que a imagem se ajuste corretamente dentro do espaço definido
    },
     
    form:{
        width:'100%',
        flexDirection: "row",
        marginTop: 36, //para dar um espaço entre os titulos e a linha que tem o imput 
        marginBottom: 36 //para o elemento que vier embaixo ja ficar afastado tb
    },
    image: {
      flex: 1,
      marginTop: 36,
      marginBottom: 36,
      alignSelf: 'center',
    },
    
    listEmptyText: {
       color: "#D9D9D9",
       fontSize:14,
       textAlign: "center"

    },
    listEmptyTextFrase2: {
      color: "#D9D9D9",
      fontSize:16,
      textAlign: "center",
      fontWeight: "bold"
  },
  line: {
      width: '100%',
      height: 1,
      backgroundColor: '#1A1A1A',
      marginTop: 20,
      marginBottom: 20
  }
  
  
    
    });