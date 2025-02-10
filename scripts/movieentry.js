a=10;  //hoisting
var a;

var f1=()=>{
    return 10;
}
var result=f1();//
console.log(result);
 
var movieData=[{
    "id":1,
    "name":"ABC",
    "desc":"Test",
    "type":"Action"
},
{
    "id":2,
    "name":"XYZ",
    "desc":"Test",
    "type":"Action1"
}]; //object-> key/value pair
//console.log(movieData[1].name);//movieData["name"]

//for-in  -> To work with object collection
//for-of  -> To work with Array,string,number

for(var item in movieData){
    console.log(movieData[item].name);
    console.log(movieData[item].desc);
    console.log(movieData[item].type);
    console.log("**************")
}

var movieList=[];
document.getElementById('mlist').style.display='none';
function addMovie(){
    let m={
        "name":document.getElementById('name').value,
        "desc":document.getElementById('desc').value,
        "type":document.getElementById('type').value,
    }
    movieList.push(m);
    document.getElementById('mlist').style.display='block';

    console.log(movieList);
    let r="";
    for(let item in movieList){
        r=r+"<tr><td>"+(item+1)+"</td><td>"+movieList[item].name+"</td><td>"+movieList[item].desc+"</td><td>"+movieList[item].type+"</td></tr>"
    }
    document.getElementById('movielist').innerText=r;
}

 
var j=""