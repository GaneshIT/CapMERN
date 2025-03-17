import { useContext } from "react";
import LocationContext from "./locationcontext";
export default function Contact(){
   const{location,updateLocation}= useContext(LocationContext);
   const changeLocation=()=>{
        updateLocation('Chennai');
   }
    return(
        <div>
            <h1>{location}</h1>
            <button onClick={changeLocation}>ChangeLocation</button>
            <h3>Contact page loading...</h3>
        </div>
    )
}