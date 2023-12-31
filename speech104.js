// speech104.js:  
// 10.4 Speech Recognition with p5.speech
//
  let lang;
  let speechRec;
  let continuous = false;
  let voice;
  let reply;
  let myName = "Menaat";
  let dia, mes, ano;
  let hours, minutes, seconds;
  let feeling;
  let mood;
  
  function setup() {
  noCanvas();
  //lang = 'ar-XA-Standard-A';
    lang = "ar-XA";
    p5.Speech
    createP(lang);
    console.log(lang);
    //p5.Speech(listVoices());
    createP("نسخة 08172111");
    mood = Math.random(-1,1);
} //setup
  
function mouseClicked() {
  speechRec = new p5.SpeechRec(lang, gotSpeech);
  speechRec.setVoice(Standard-A);
  speechRec.start(continuous);
  //voice = new p5.Speech(ar-XA-Standard-A);
}
  function gotSpeech() {
     console.log(speechRec);
     objeto = speechRec.resultString;
    console.log(objeto);
    createP(objeto);
     recognize();
    voice.speak(reply);
    createP(confidence);
    //createP(reply);
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
      reply = "اهلا";
      createP("اهلا");
  } else if (objeto == "مااسمك") {
      reply = "aismi manati. 'ana aldhaka' alaistinaeiu limuhamad eabaas aljabaar";
     createP("اسمي مناتي. أنا الذكاء الاصطناعي لمحمد عباس الجبار");
  } else if (objeto == "what time is it"){
      tempo();
      reply = "it is " +  hours + " hours and " + minutes+" minutes"; 
  } else if (objeto == "what day is it"){
      reply = "today is " + dia + " of " + mes + " of " + ano;
  } else if (objeto == "من اين انت"){
    reply = "Ana min Nat al , Bra ziil";
    createP("أنا من ناتال، البرازيل");
  }else if (objeto == "كيف حالك"){
    feel();
    reply = feeling;
  } else {
    reply = "";
    createP("")
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
  if(mood < 0){
    feeling = "Ana mish bee ha yr";
  } else {
    feeling = "Shukran, Ana bee ha yr!";
  }
}
