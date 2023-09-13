prediction = "";

Webcam.set({
    width:400,
    height:325,
    image_format: 'png',
    png_quality:100
});

    camera = document.getElementById('camera');

Webcam.attach( '#camera' )

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id = "captured image" src = "'+ data_uri +'"/>';
    });
}
    console.log("ml5.js version :", ml5.version)

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ACWET2ldt/.json', modelLoaded);

function modelLoaded()
{
    console.log("MODELLOADED");
}

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = 'The prediction is' + prediction_1;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}