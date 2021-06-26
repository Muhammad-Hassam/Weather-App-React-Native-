import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View ,TextInput,Button,StatusBar,ImageBackground} from 'react-native';

export default function App() {

  const key = '87e794f41494a00278a7066a3e7e4d87';
  const [city, setCity] = useState('karachi');
  const [feels_like,setFeelsLike] = useState('');
  const [mainTemp,setMainTemp] = useState('');
  const [description,setDescription] = useState('');
  const [main,setMain] = useState('');
  const [iconID,setIconID] = useState('');

  useEffect(()=> {
    Weather()},[]);

const Weather=()=>{
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}&units=metric`;
const promise=fetch(url)
promise.then((res)=>{
const json=res.json()
json.then(data=>{
  if(data.message==='city not found'){
    console.log('error')
  }
  else{
    setFeelsLike(data.main.feels_like);
    setMainTemp(data.main.temp);
    setDescription(data.weather[0].description);
    setMain(data.weather[0].main);
    setIconID(data.weather[0].icon);
  }
})
})
promise.catch((error)=>console.log(error))
}

const image={};
  return (
    <>
      <StatusBar  backgroundColor="#1e90ff"/>
    <View style={styles.container}>
      <ImageBackground  imageStyle={{opacity:0.6}} source={{uri: "https://images.unsplash.com/photo-1591804227855-d6fe0b648d0e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=322&q=80"}} style={styles.image}>
      <View style={styles.input_container}>
       <Text style={styles.main_head}>Weather App</Text>
       <TextInput style={styles.input} onChangeText={setCity} value={city}></TextInput>
      </View>
      <View style={{marginLeft:20,marginRight:20}}>
      <Button style={styles.buttons} onPress={()=>Weather()} title='Check Weather'/>    
      </View>
      <View style={styles.weather_container}> 
      <View style={{ flexDirection: 'row', alignItems: 'flex-start',marginBottom:10,justifyContent:'center',marginTop:30 }}>
          <Text style={{ fontSize: 20, lineHeight: 55,fontSize:55 }}>{mainTemp}{' '}</Text>
          <Text style={{ fontSize: 15, lineHeight: 18 }}>o</Text>
          <Text style={{ fontSize: 20, lineHeight: 55,fontSize:50 }}>
            C
          </Text>
        </View>
  <Text style={{ fontSize: 20,fontSize:24,marginTop:50,lineHeight: 40 }}>City: {city}</Text>
        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
          <Text style={{ fontSize: 20, lineHeight: 40,fontSize:25 }}>Feels like: {feels_like}</Text>
          <Text style={{ fontSize: 15, lineHeight: 18 }}>o</Text>
          <Text style={{ fontSize: 20, lineHeight: 40 }}>
            C
          </Text>
        </View>
  <Text style={{ fontSize: 20, lineHeight: 40,fontSize:24 }}>Weather Parameter: {main}</Text>
  <Text style={{ fontSize: 20, lineHeight: 40,fontSize:24 }}>Description : {description}</Text>
      </View>
      </ImageBackground>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   alignContent:'center'
  },
  main_head:{
    backgroundColor: 'rgba(52, 52, 52, 0.8)',
    textAlign:'center',
    fontSize: 30,
    backgroundColor:'transparent',
    textDecorationLine:'underline'
  },
  input_container:{
marginLeft:20,
marginRight:20,    
    marginTop:40,
  },
  input:{
  marginTop:50,
  marginBottom:10,
   backgroundColor:"#e6e2da",
   padding:(10,10),
   borderRadius:10,
  },
  image: {
    flex:1,
    resizeMode: "cover",
  },
  weather_container:{
    marginTop:30,
marginLeft:20,
  },
  buttons:{
    paddingTop:10,
    paddingBottom:10,
  }
});
