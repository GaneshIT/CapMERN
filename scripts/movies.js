var m=new Map();
m.set(1,"A");
m.set(2,"B");
m.set(3,"C");
m.get(2);//B
class Movies{
    constructor(id,name){
        this.mveId=id;
        this.mName=name;
        this.mveList=new Map();
    }
    getMovies(){
        this.mveList.forEach((k,v)=>{
           document.getElementById('data').innerText= k+","+v;
        })
    }
    createMovies(){
        this.mveList.set(this.mveId,this.mName);
    }
}

const m=new Movies(1,"ABC");
m.createMovies();
m.getMovies();


class Phonepe extends Movies{
    
}
class Paytm extends Movies{
    
}


function findEligible(){
var result="";

var p=new Promise(function(resolve,reject){
    //logic
    var age=17;
    if(age>18)
        resolve('Eligible')
    else
        reject('Not Eligible');
})

p.then(
    (r)=>{
        result=r;//'Eligible'
    },
    (e)=>{
        result=e;//'Not Eligible'
    })

    return result;
}

var emp=[{"id":1,"name":"A","salary":4000},
    {"id":2,"name":"A","salary":4000},
    {"id":3,"name":"A","salary":4000}
];
emp.sort((a,b)=>b.salary-a.salary)
var res= emp[0]; //{"id":emp[0].id,"name":emp[0].name,"salary":emp[0].salary};
//return emp[0];
for(let i=0;i<emp.length;i++){
    emp[i].id;
    emp[i].name;
    emp[i].salary
}

