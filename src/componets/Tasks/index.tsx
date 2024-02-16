import React, { Dispatch, SetStateAction, useState } from 'react';
import { View, Text, TouchableOpacity, Image } from "react-native";
import { CheckBox } from 'react-native-elements';
import { styles } from './styles';

type Props = {
    name: string;
     onRemove: () => void;
     setTotalCheck: Dispatch<SetStateAction<number>>;
}

export function Participant({ name,  onRemove,  setTotalCheck }: Props) {
    const [isChecked, setIsChecked] = useState(false);
    
     const handleCheckboxChange = (isChecked: boolean) => {
        setIsChecked(isChecked);
        setTotalCheck(prevTotalCheck => isChecked ? prevTotalCheck + 1 : prevTotalCheck - 1);
      
    }
     

    return (
        <View style={styles.rectangle}>
            <View style={styles.container}>
                <CheckBox
                    checked={isChecked}
                    onPress={() => handleCheckboxChange(!isChecked)}
                />
                <Text style={styles.name}>{name}</Text>
                <TouchableOpacity style={styles.button} onPress={onRemove}>
                    <Image source={require('../../../assets/lixo.png')}  />
                </TouchableOpacity>
            </View>
        </View>
    );
}
