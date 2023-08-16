// speech104.js:  
// 10.4 Speech Recognition with p5.speech
//
  let lang;
  let speechRec;
  let continuous = false;
  let voice;
  let reply;
  let myName = "Cassandra";
  let dia, mes, ano;
  let hours, minutes, seconds;
  let feeling;
  
  function setup() {
  noCanvas();
  lang = 'ar-LB';
    createP(lang);
    console.log(lang);
    //p5.Speech(listVoices());
    createP("version 08161556");
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
    //console.log("mod 1916")
    console.log(reply);
     confidence = speechRec.resultConfidence;
     console.log(confidence);
     
  if(confidence > 0.5){
     voice.speak(objeto);
     
    //objeto = null;
    //voice.cancel();
  } else {
     voice.speak( "Min fadlika karrara");
     createP( "من فضلك كرر" );
     }
  }
function recognize(){
  if (objeto == "مرحبا"){
      reply = "-------- " + "اهلا";
  } else if (objeto == "ما اسمك") {
      reply = "anā kāsāndarā, althakāʾu aliāṣṭināʿiyyu alshakhṣiyyu li Eniwaldu";
  } else if (objeto == "what time is it"){
      tempo();
      reply = "it is " +  hours + " hours and " + minutes+" minutes"; 
  } else if (objeto == "what day is it"){
      reply = "today is " + dia + " of " + mes + " of " + ano;
  } else if (objeto == "من أين أنت"){
    reply = "Ana min Natal , Brazil";
  }else if (objeto == "كيف حالك"){
    tempo();
    feel();
    reply = feeling;
  } else {
    reply = "...";
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
    feeling = "Ana mish behayr";
  } else {
    feeling = "Shukran, Ana behayr!";
  }
}
