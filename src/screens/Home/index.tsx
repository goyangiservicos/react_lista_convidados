import { Image, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList, Alert, ImageBackground } from "react-native";
import { Fragment , useState} from "react";
import { Participant } from "../../componets/Tasks";
import { styles } from "./styles";
import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
export function Home() {
  const [totalCheck, setTotalCheck] = useState(0);
  

  
  const [participants, setParticipants] = useState<string[]>([]); 
  const [participantsName, setParticipantsName] = useState('');
  const [checkedCount, setCheckedCount] = useState(0);
   const currentDate = new Date();
   const formattedDate = format(new Date(), "EEEE, d 'de' MMMM 'de' yyyy", { locale: ptBR });
   const [totalParticipants, setTotalParticipants] = useState(0); // Adicionando estado para o total de participantes
 //funcao que valida se o nome ja existe e se sim, da um alerta e aborta o processo 
   function handleParticipantAdd() {
  //if(participants.includes("Elaine")){
    if(participants.includes(participantsName)){
   return Alert.alert("Já existe", "O participante já esta cadastrado");
  }

  if (participantsName.trim() === "") {
    return Alert.alert("Nome não informado", "Por favor, insira um nome válido.");
  }
  //se nao tem, ele adicina na lista e ja deixa o campo vazio 
  //setParticipants(prevState =>[...prevState, "Pepito"]); //os ... "despeja" tudo dentro da array no mesmo nivel
  setParticipants(prevState =>[...prevState, participantsName]);
  setParticipantsName("");
  setTotalParticipants(prevTotal => prevTotal + 1); // Incrementando o total de participantes

}
//funcao que apresenta um alerta de remocao sim ou nao, o cancel, fecha a caixa de dialogo sem acoes 
function handleParticipantRemove(name: string) {
  Alert.alert("Remover", `Remover o participante ${name}?`, [
    {
      text: 'Sim',
      onPress: () => {
        setParticipants(prevState => prevState.filter(participant => participant !== name));
        setTotalParticipants(prevTotal => prevTotal - 1); // Decrementando o total de participantes
        setTotalCheck(prevTotalCheck =>  prevTotalCheck - 1);
      }
    },
    {
      text: "Não",
      style: 'cancel'
    }
  ]);
  console.log(`Você clicou em remover o participante! ${name}`);
}


return (  
  <View style={styles.container}>
<Text style={[styles.eventName, { flexDirection: 'row' }]}>
  <Image
    source={require('../../../assets/rocket.png')}
    style={{ marginRight: 5 }} // Ajuste a margem conforme necessário
  />
  <Text style={styles.to}>{' '}to</Text>
  <Text style={styles.do}>do</Text>
</Text>
<Text style={styles.eventDate}>{formattedDate}</Text>
    
    <View style={styles.form}>

     <TextInput 
     
     style={styles.input}
     placeholder="Adicione uma nova tarefa"
     placeholderTextColor="#6b6b6b"
     onChangeText={setParticipantsName}
    
     value={participantsName}
      
     />
   
     <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
    <Image
    source={require( '../../../assets/plus.png')} 
    style={styles.buttonImage} 
  />
</TouchableOpacity>
     </View>

<View style={styles.containerMenu}>
 
  
    <View style={styles.itemContainer}>
    <Text style={styles.textLeft}>
    Criadas {''}
    </Text>
     <Text style={styles.totalParticipants}>{totalParticipants}</Text>
      
    </View>

  <View style={styles.itemContainer}>
  <Text style={styles.textRight}>
    Concluídas {''}
    </Text>
      <Text style={styles.totalParticipants}>{totalCheck}</Text>
    </View>
  </View>


<View style={styles.line}></View>
<FlatList 
data={participants}
keyExtractor={item => item} 
renderItem={({item}) => (
    <Participant 
    key={item}
    name={item}
    setTotalCheck ={setTotalCheck}
    onRemove={()=>handleParticipantRemove(item)}/>   
)}
showsVerticalScrollIndicator ={false} 
ListEmptyComponent={() => (
  <View>
    <Image
      source={require('../../../assets/Clipboard.png')} 
      style={styles.image} 
    />
      <Text style={styles.listEmptyTextFrase2}>
          Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.listEmptyText}>
          Crie tarefas e organize seus itens a fazer
      </Text>
      
  </View>

)}

/>
 
  </View>

  )
}