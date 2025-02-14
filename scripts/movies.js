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