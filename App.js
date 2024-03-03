import React, {useState} from 'react'
import { Button, TextInput, StyleSheet, View, Text, FlatList } from 'react-native';

export default function App () {
const [enteredGoalText, setEnteredGoalText ] = useState('');
const [courseGoals, setCourseGoals] =useState([]);

  function goalInputHandler (enteredText) {
    setEnteredGoalText(enteredText);

  }
  function addGoalHandler (){
    const words = enteredGoalText.split(' ');
    const newGoals = words.map((word, index) => ({ type: word, text: word}));
    setCourseGoals(currentCourseGoals => [...currentCourseGoals, ...newGoals]);
    setEnteredGoalText('');

  }

  return (
      <View style={styles.appContainer}> 
        <View style= {styles.inputContainer}>
          <TextInput style= {styles.textInput} 
          placeholder='My Goal' 
          onChangeText={goalInputHandler} 
          value={enteredGoalText} /> 
          <Button title="Add Goal" onPress={addGoalHandler} />
        </View>
            
        <FlatList  
        data={courseGoals} 
        renderItem={({ item }) => (
          <View style= {[styles.goalsContainer, { backgroundColor: getBackgroundColor(item.type) }]}>
          <Text>{item.text}</Text>
          </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
  );

}

function getBackgroundColor(word) {
  const colors = ['yellow', 'red', 'orange', 'violet', 'blue', 'green'];
  const colorIndex = word.length % colors.length;
  return colors[colorIndex];
}
const styles = StyleSheet.create({

appContainer: {
  paddingTop: 50,
  paddingHorizontal: 16,
},

inputContainer: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  paddingBottom: 24,
  borderBottomWidth: 1,
},

textInput: {
 borderWidth: 1,
 width: '70%',
 marginRight: 8,
 padding: 8,

},
goalsContainer: {

  paddingTop: 20,
  marginBottom: 2,
},

});