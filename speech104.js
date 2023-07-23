// speech104.js:  
// 10.4 Speech Recognition with p5.speech
//
  let lang;
  let speechRec;
  let continuous = true;
  let voice;
  
  function setup() {
  noCanvas();
  lang = 'en-US';
} //setup
  
function mouseClicked() {
  speechRec = new p5.SpeechRec(lang, gotSpeech);
  speechRec.start(continuous);
  voice = new p5.Speech();
  return false;
}
  function gotSpeech() {
     console.log(speechRec);
     objeto = speechRec.resultString;
     confidence = speechRec.resultConfidence;
     console.log(confidence);
     console.log(objeto);
     if(objeto == "Cassandra"){
     voice.speak("Yeah! That's my name!");
     }
     else{
     voice.speak(objeto);
     }
     objeto = null;
     if(confidence < 0.6){
     console.log ('?');
     }
  }
 


