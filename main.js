var SpeechRecognition = window.webkitSpeechRecognition;
var Content;
var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
    recognition.start();
} 


camera = document.getElementById("camera");
Webcam.set({
    width:500,
    height:400,
    image_format : 'jpeg',
    jpeg_quality:90
});



function speak(){
    var synth = window.speechSynthesis;
    speak_data = "Taking your next Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    Webcam.attach(camera);
    setTimeout(function(){
        takeSnapshot();
        save();    
    },5000);
}

setTimeout(function()
{
    img_id = "selfie1";
    takeSnapshot();
    speak_data = "Taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);

setTimeout(function()
{
    img_id = "selfie2";
    takeSnapshot();
    speak_data = "Taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);

setTimeout(function()
{
    img_id = "selfie3";
    takeSnapshot();
    speak_data = "Taking your next selfie in 10 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
}, 5000);

function takeSnapshot()
{
    console.log(img_id);

    Webcam.snap(function(data_uri) {
        if(img_id=="selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src"'+data_uri+'"/>'; 
        }
        if(img_id=="selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src"'+data_uri+'"/>'; 
        }
        if(img_id=="selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src"'+data_uri+'"/>'; 
        }
    }
    )
}

function save(){
    link = document.getElementById("link");
    image = document.getElementById("self").src;
   link.href = image;
   link.click();
   }