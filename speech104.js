// speech104.js:  
// 10.4 Speech Recognition with p5.speech
//
  let lang;
  let speechRec;
  let continuous = true;
  let voice;
  let reply;
  let myName = "Cassandra";
  let dia, mes, ano;
  let hours, minutes, seconds;
  let feeling;
  
  function setup() {
  noCanvas();
  lang = 'ar-LB';
    createP("ar-LB");
    console.log("ar-LB");
    createP("version 08142046");
} //setup
  
function mouseClicked() {
  speechRec = new p5.SpeechRec(lang, gotSpeech);
  speechRec.start(continuous);
  voice = new p5.Speech();
}
  function gotSpeech() {
     console.log(speechRec);
     objeto = speechRec.resultString;
    console.log(objeto);
    createP(objeto);
     recognize();
    voice.speak(reply);
    createP(reply);
    console.log("mod 1916")
    console.log(reply);
     confidence = speechRec.resultConfidence;
     console.log(confidence);
     
  if(confidence > 0.3){
     voice.speak(objeto);
     
    //objeto = null;
    //voice.cancel();
  } else {
     voice.speak( "Sorry ?");
     voice.speak( "Can you say it again?" )
     }
  }
function recognize(){
  if (objeto == "مرحبا"){
      reply = "-------- " + "اهلا";
  } else if (objeto == "what's your name") {
      reply = "I am Cassandra, Enivaldo's personal AI";
  } else if (objeto == "what time is it"){
      tempo();
      reply = "it is " +  hours + " hours and " + minutes+" minutes"; 
  } else if (objeto == "what day is it"){
      reply = "today is " + dia + " of " + mes + " of " + ano;
  } else if (objeto == "where are you from"){
    reply = "I am from Nat al , Brazil";
  }else if (objeto == "how are you"){
    tempo();
    feel();
    reply = feeling;
  } else {
    reply = "ماذا قلت؟--------------";
  }
  }

function tempo() {
  currentTime = new Date();
  dia = currentTime.getDate();
  hours = currentTime.getHours();
  minutes = currentTime.getMinutes();
  seconds = currentTime.getSeconds();
  mes = currentTime.getMonth() + 1;
  ano = currentTime.getFullYear();
  console.log(dia , mes, ano);
  }
function feel(){
  if(hours < 18){
    feeling = "I am not in a good mood";
  } else {
    feeling = "i am feeling good, thank you";
  }
}
