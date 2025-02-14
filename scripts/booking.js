//JS Promise ->it is a special object
//To implement async/await process
//it will exectue callback function either reject r resolve
//promise states->Pending-> To either Reject or Resolve

document.querySelector('li').addEventListener('click',()=>alert('Hi'));


document.getElementsByClassName('btn').addEventListener('click',()=>alert('hi'))

function pText(){
    document.getElementById('text').innerText="Welcome";
}

sessionStorage.setItem('list',["A","B","C"])
var items=sessionStorage.getItem('list');
var li="<ul>";
for(let i=0;i<items.length;i++)
{
    li=li+`<li>${items[i]}`;
}
li=li+"</ul>"
document.getElementById('list').innerHTML=li;
//how to create promise object
var p=new Promise(function(resolve,reject){
    //logic
    var age=15;
    if(age>18)
        resolve('Eligible');
    else
        reject('Not Eligible');
})
//how to exectue promise object
p.then(
        (result)=>{
        alert(result)
        },
        (err)=>{
        alert(err);
        }
)


var d=new Date();
document.getElementById('time').innerText=d.toLocaleTimeString();

setInterval(function(){
var d=new Date();
document.getElementById('time').innerText=d.toLocaleTimeString();
},1000)



var a1=[3,5,6]
var a2=[1,2,...a1]
var a3=[...a1,...a2];

f1(...a1); //function calling
function f1(a,b,c){
    console.log(a,b,c);
}


class booking{
    constructor(){

    }
    createBooking(){
        console.log("Create Booking...");
    }
}
class RedBus extends booking{
     getAll(){
        console.log('Get ALL...')
     }
}



