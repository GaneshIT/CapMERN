function Location(props){
    return (
        <div>
            <h1 style={{backgroundColor:"yellow",color:"blue"}}>
                Location:{props.myLoc}<br/>
                State:{props.state}
            </h1>
        </div>
    );
}

export default Location;
