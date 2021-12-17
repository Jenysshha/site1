var currentValue=0;

var s="",s1="",s2="",s3="";

window.onload=function(){
s="",s1="",s2="",s3="";
document.getElementById('myForm').reset();
alert("oj");
} 

function textChange(text){
s2="Я "+document.getElementById("fname").value+".";
s=s1+s2+s3;
document.getElementById("myTextarea").value=s;
}

function selectChange(text){
var e=document.getElementById("country");
var value=e.options[e.selectedIndex].value;
s3="Я из "+ value+".";
s=s1+s2+s3;
document.getElementById("myTextarea").value=s;
}
function handleClick(myRadio){
    currentValue=myRadio.value;
s1="Дорогой Grinch!";
s=s1+s2+s3;
document.getElementById("myTextarea").value=s;
}
function clearButton(){
s="",s1="",s2="",s3=""; 
document.getElementById('myForm').reset();
}