import React from 'react';

export default class AddMovie extends React.Component {
    constructor(){
        super();
        this.state={
            moviename:'',
            movietype:'',
            moviedesc:'',
            message:'',
            movieList:[]
        }
        this.readMovieName=this.readMovieName.bind(this);
        this.readMovieType=this.readMovieType.bind(this);
        this.readMovieDesc=this.readMovieDesc.bind(this);
        this.saveMovie=this.saveMovie.bind(this);
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
            this.setState({message:"Successfully saved..."});
            var data={
                "name":this.state.moviename,
                "type":this.state.movietype,
                "desc":this.state.moviedesc
            }
            this.setState({movieList:this.state.movieList.concat(data)})
        }
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
                    <input type='button' value="Save" onClick={this.saveMovie} />
                </form>
                <h1>{this.state.message}</h1>
                <hr />
                <table>
                    <thead>
                        <tr>
                            <th>MovieName</th>
                            <th>MovieType</th>
                            <th>MovieDesc</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.movieList.map((item)=>(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td>{item.desc}</td>
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
    componentDidMount(){}
}