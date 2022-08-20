function startclassifiation()
{
navigator.mediaDevices.getUserMedia({audio: true});
classifier = ml5.soundClassifier('',modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResult (error,results) 
{
if (error)
{console.error(error);}

else
{
console.log(results);
rardom_number_r = Math.floor(Math.random()* 255) +1 ;
rardom_number_g = Math.floor(Math.random()* 255) +1 ;
rardom_number_b = Math.floor(Math.random()* 255) +1 ;

document.getElementById("result_label").innerHTML = 'I Can Hear - ' +
results[0].label;
document.getElementById("confidence").innerHTML = 'Accuracy - ' +
(results[0].cofidence*100).toFixed + "%" ;
document.getElementById("result_label").style.color ="rgb("
+ random_number_r + "," + random_number_g + "," + random_number_r + ")";

img =  document.getElementById('know me');
img1 =  document.getElementById('cat');
img2 =  document.getElementById('dog');
img3 =  document.getElementById('cow');


if(results[0].label == "Meow")
{
    img.src = 'cat.png';
}
else if (results[0].label == "Boww")
{
    img.src = 'dog.jpg'
}
else if (results[0].label == "Mooo")
{
    img.src = 'cow.png';
}
else 
{
    img.src = 'IDK animal';
}
}
}