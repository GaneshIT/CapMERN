var a=10;
var b="10"
var c=false;
//how to print value in document
//document.write("<h1>Hai</h1>");
//console.log("hai");
function showMsg(){
    var msg="Welcome to my shop";
    alert(msg);
}
function getFname(){
  var fname=  document.getElementById("txtfname").value;
  document.getElementById('displaymsg').innerHTML="<span style='color:red'>"+fname+"</span>";
}
function saveUser(){
    var fname=  document.getElementById("txtfname").value;
    var lname=  document.getElementById("txtlname").value;
    var email=  document.getElementById("txtemail").value;
    var pwd=  document.getElementById("txtpwd").value;
    document.getElementById('displaymsg').innerHTML="<span style='color:green'>Saved successfully...</span>";
}
function gender(input){
    if(input=='m')
        document.getElementById('female').checked=false;
    else
        document.getElementById('male').checked=false;
    // if(document.getElementById('male').checked)
    // {
    //     alert('m')
    //     document.getElementById('female').checked=false;
    // }
    // else{
    //     alert('f')
    //     document.getElementById('male').checked=false;
    // }
   
}
//showMsg();//calling


