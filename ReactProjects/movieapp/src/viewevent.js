import { useParams } from "react-router-dom";
export default function ViewEvent(){
   const{id,name}=useParams();
    return(
        <div>
                {id+','+name}
        </div>
    );
}