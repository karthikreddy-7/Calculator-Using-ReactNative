import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text,Switch, View, Touchable, TouchableOpacity, } from 'react-native';
export default function App() {
  const[resultText,setResultText]=useState("");
  const[calcText,setcalcText]=useState("");
  const onButtonClick = (text) =>{
    console.log(text);
    if (text=="="){
      return calculation()
    }
    setResultText(resultText+text);
  };
  const calculation = () =>{
    setcalcText(eval(resultText))
  }
  const onOperationClick = (text) =>{
    let operations=["DEL","AC","+","-","*","/"]
    if (text=="AC"){
        setResultText("");
        setcalcText("");
        return;
    }
    if (text=="DEL"){
      return  setResultText(resultText.toString().substring(0,resultText.length-1))
    }
    console.log(text);
    if (operations.includes(resultText.toString().split("").pop())){
      return ;
    }
    setResultText(resultText+text);
  };
  return (
  <View style={styles.container}>
    <View style={styles.result}>
      <Text style={styles.resultText}>{resultText}</Text>
    </View>
    <View style={styles.calculation}>
    <Text style={styles.calculationText}>{calcText}</Text>
    </View>
    <View style={styles.buttons}>
      <View style={styles.numbers}>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>{onButtonClick(1)}}>
            <Text style={styles.number}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onButtonClick(2)}}>
            <Text style={styles.number}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onButtonClick(3)}}>
            <Text style={styles.number}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>{onButtonClick(4)}}>
            <Text style={styles.number}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onButtonClick(5)}}>
            <Text style={styles.number}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onButtonClick(6)}}>
            <Text style={styles.number}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>{onButtonClick(7)}}>
            <Text style={styles.number}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onButtonClick(8)}}>
            <Text style={styles.number}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onButtonClick(9)}}>
            <Text style={styles.number}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity onPress={()=>{onButtonClick(".")}}>
            <Text style={styles.number}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onButtonClick(0)}}>
            <Text style={styles.number}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{onButtonClick("=")}}>
            <Text style={styles.number}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.operations}>
        <TouchableOpacity onPress={()=>onOperationClick("DEL")}>
          <Text style={styles.operationbutton}>DEL</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onOperationClick("AC")}>
          <Text style={styles.operationbutton}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onOperationClick("+")}>
          <Text style={styles.operationbutton}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onOperationClick("-")}>
          <Text style={styles.operationbutton}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onOperationClick("/")}>
          <Text style={styles.operationbutton}>/</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>onOperationClick("*")}>
          <Text style={styles.operationbutton}>*</Text>
        </TouchableOpacity>      
      </View>
    </View>
  </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  result:{
    backgroundColor:"grey",
    flex:2,
    alignItems:'flex-end',
    justifyContent:'center'
  },
  calculation:{
    flex:1,
    backgroundColor:"#d6d6c2",
    alignItems:'flex-end',
    justifyContent:'center'
  },
  buttons:{
    flex:7,
    flexDirection:"row"
  },
  numbers:{
    backgroundColor:"#434343",
    flex:3
  },
  operations:{
    backgroundColor:"#636363",
    flex:1,
    justifyContent:'space-around',
    alignItems:'center'
  },
  resultText:{
    fontSize:30,
    fontWeight:'bold',
    color:'white'
  },
  calculationText:{
    fontSize:25,
    color:'black',
    fontWeight:'bold'
  },
  row:{
    flexDirection:'row',
    flex:1,
    justifyContent:'space-around',
    alignItems:'center',
  },
  number:{
    color:'white',
    fontSize:25,
  },
  operationbutton:{
    color:'white',
    fontSize:25,
  }

});
