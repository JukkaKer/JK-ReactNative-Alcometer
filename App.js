import React, { useState } from 'react';
import { Text, TextInput, ScrollView, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { RadioButton } from 'react-native-paper';
import styles from './styles/style';

export default function App() {
  const [weight, setWeight] = useState(0);
  const [bottles, setBottles] = useState(1);
  const [time, setTime] = useState(1);
  const [gender, setGender] = useState('male');
  const [bloodAlcohol, setBloodAlcohol] = useState(0);

  function calculate() {
    let result = 0;
    let genderMult = gender === 'male' ? 0.7 : 0.6;
    let litres = bottles * 0.33;
    let grams = litres * 8 * 4.5;
    let burn = weight / 10;
    let gramsLeft = grams - burn * time;

    result = gramsLeft / (weight * genderMult);

    if(weight == null || weight <= 0) alert('You must input a weight higher than 0!')
    if(result < 0) result = 0;

    setBloodAlcohol(result.toFixed(2));


  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Alcometer</Text>

      <Text style={styles.field}>Weight</Text>
      <TextInput
       style={styles.input} 
       onChangeText={text => setWeight(text)}
       keyboardType='numeric'
      />

      <Text style={styles.field}>Bottles</Text>
      <Picker
        selectedValue={bottles}
        onValueChange={(itemValue, ItemId) =>
          setBottles(itemValue)
        }>
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="3" value="3" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="5" value="5" />
      </Picker>

      <Text style={styles.field}>Time</Text>
      <Picker
        selectedValue={time}
        onValueChange={(itemValue, ItemId) =>
          setTime(itemValue)
        }>
        <Picker.Item label="1" value="1" />
        <Picker.Item label="2" value="2" />
        <Picker.Item label="4" value="4" />
        <Picker.Item label="6" value="6" />
        <Picker.Item label="12" value="12" />
        <Picker.Item label="24" value="24" />
      </Picker>

      <Text style={styles.field}>Gender</Text>
      <RadioButton.Group onValueChange={value => setGender(value)} value={gender}>
        <RadioButton.Item
          label='Male'
          value='male'
          status={ gender === 'male' ? 'checked' : 'unchecked' }
        />
      
        <RadioButton.Item
          label='Female'
          value='female'
          status={ gender === 'female' ? 'checked' : 'unchecked' }
        />
      </RadioButton.Group>
      <Text style={styles.result}>{bloodAlcohol}</Text>
      <Button title="Calculate" onPress={calculate} />
    </ScrollView>
  );
}

