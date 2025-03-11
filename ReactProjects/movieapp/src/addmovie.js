import React from 'react';

export default class AddMovie extends React.Component {
    constructor(){
        super();
        this.state={
            moviename:'',
            movietype:'',
            moviedesc:'',
            message:'',
            movieList:[],
            isUpdate:false,
            row:0
        }
        this.readMovieName=this.readMovieName.bind(this);
        this.readMovieType=this.readMovieType.bind(this);
        this.readMovieDesc=this.readMovieDesc.bind(this);
        this.saveMovie=this.saveMovie.bind(this);
        this.editMovie=this.editMovie.bind(this);
        this.deleteMovie=this.deleteMovie.bind(this);
        this.updateMovie=this.updateMovie.bind(this);
        this.getAll=this.getAll.bind(this);
    }
    readMovieName(e){
        this.setState({moviename:e.target.value});
    }
    readMovieType(e){
        this.setState({movietype:e.target.value});
    }
    readMovieDesc(e){
        this.setState({moviedesc:e.target.value});
    }
    saveMovie(){
        if(this.state.moviename!="" && this.state.movietype!="" && this.state.moviedesc){
           // this.setState({message:"Successfully saved..."});
            var data={
                "name":this.state.moviename,
                "type":this.state.movietype,
                "desc":this.state.moviedesc
            }
           // this.setState({movieList:this.state.movieList.concat(data)})
           fetch("http://localhost:4000/movies",{
            method:"POST",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
           })
           .then(response=>response.json())//http response
           .then(result=>{
            alert(result.message);
            this.getAll();
            })//http result
           .catch(err=>alert(err.data));//http errors
        }
    }
    getAll(){
        fetch("http://localhost:4000/movies")
        .then(response=>response.json())
        .then(result=>this.setState({movieList:result}))
        .catch(err=>alert(err));
    }
    editMovie(index){
        this.setState({row:index});
        this.setState({moviename:this.state.movieList[index].name});
        this.setState({movietype:this.state.movieList[index].type});
        this.setState({moviedesc:this.state.movieList[index].desc});
        this.setState({isUpdate:true});
    }
    updateMovie(){
        this.state.movieList[this.state.row].name=this.state.moviename;
        this.state.movieList[this.state.row].type=this.state.moviedesc;
        this.state.movieList[this.state.row].desc=this.state.movietype;
        this.setState({movieList:this.state.movieList});
        this.setState({isUpdate:false});
    }
    deleteMovie(index){
        this.state.movieList.splice(index,1);
        this.setState({movieList:this.state.movieList});
    }
    render(){
        return(
            <div>
                <h3>Add Movie</h3>
                <hr />
                <form>
                    <div>
                        <label>Movie Name</label>
                        <input type='text' value={this.state.moviename} onChange={this.readMovieName} />
                    </div>
                    <div>
                        <label>Movie Type</label>
                        <input type='text' value={this.state.movietype} onChange={this.readMovieType} />
                    </div>
                    <div>
                        <label>Movie Desc</label>
                        <input type='text' value={this.state.moviedesc} onChange={this.readMovieDesc} />
                    </div>
                    {this.state.isUpdate?
                    <input type='button' value="Update" onClick={this.updateMovie} />
                    :
                    <input type='button' value="Save" onClick={this.saveMovie} />
                    }
                    

                </form>
                <h1>{this.state.message}</h1>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th>MovieName</th>
                            <th>MovieType</th>
                            <th>MovieDesc</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movieList.map((item,index)=>(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td>{item.desc}</td>
                                <td><button onClick={()=>this.editMovie(index)}>Edit</button></td>
                                <td><button onClick={()=>this.deleteMovie(index)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* <p>{this.state.moviename}</p>
                <p>{this.state.movietype}</p>
                <p>{this.state.moviedesc}</p> */}
            </div>
        );
    }
    componentDidMount(){
        this.getAll();
    }
}



// var f=new Promise((resolve,reject)=>{
//     resolve('HI')
// });

// var f1=new Promise((resolve,reject)=>{
//     f.then(response=>resolve(response))
//     .catch(err=>console.log(err))
//     resolve('welcome')
// });

// f1.then().then()