import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
export default function Events(){
    const navigate=useNavigate();//how to navigate one to another route
    const[name,setName]=useState('');
    const[type,setType]=useState('');
    const[desc,setDesc]=useState('');
    const[isUpdate,setUpdate]=useState(false);
    const[eventId,setEventId]=useState('');
    const[eventsList,setEventsList]=useState([]);
    const[message,setMessage]=useState('');
    const readName=(e)=>{ //reading name text box value if any change
        setName(e.target.value);//set latest value in the state variable name
    }
    const readType=(e)=>{ //reading type text box value if any change
        setType(e.target.value);//set latest value in the state variable type
    }
    const readDesc=(e)=>{ //reading desc text box value if any change
        setDesc(e.target.value);//set latest value in the state variable desc
    }
    const saveEvents=()=>{
        if(name!="" && type!="" && desc!=""){
             var data={
                 "name":name,
                 "type":type,
                 "desc":desc
             }
            fetch("http://localhost:4000/events",{
             method:"POST",
             headers:{
                 'Content-Type':'application/json'
             },
             body:JSON.stringify(data)
            })
            .then(response=>response.json())//http response
            .then(result=>{
                setMessage(result.message);
                setTimeout(()=>{
                   setMessage('');
                },5000)
             getAll();
             })//http result
            .catch(err=>alert(err.data));//http errors
         }
    }
    const getAll=()=>{
        fetch("http://localhost:4000/events")
        .then(response=>response.json())
        .then(result=>setEventsList(result))
        .catch(err=>alert(err));
    }
    const editEvent=(id)=>{
        setEventId(id);
       fetch(`http://localhost:4000/events/`+id)// 1 object
       .then(response=>response.json())
       .then(response=>{
           setName(response[0].name);
           setType(response[0].type);
           setDesc(response[0].desc);
           setUpdate(true); //update button visible and save button hidden
       })
       .catch(err=>alert(err.message));
       
    }
    const updateEvent=()=>{
       var data={
           "_id":eventId,
           "name":name,//event name textbox value
           "type":type,//event type textbox value
           "desc":desc //event desc textbox value
       }
      fetch("http://localhost:4000/events/"+data._id,{
       method:"PUT",
       headers:{'Content-Type':'application/json'},
       body:JSON.stringify(data)
      })
      .then(response=>response.json())//http response
      .then(result=>{
        setMessage(result.message);
        setTimeout(()=>{
           setMessage('');
        },5000)
       setUpdate(false);//update button hidden and save button visible
       getAll();
       })//http result
      .catch(err=>alert(err.message));//http errors
    }
    const resetForm=()=>{
        setName('');
        setType('');
        setDesc('');
    }
    const deleteConfirm=(id)=>{
        setEventId(id);//latest event id
    }
    const viewEvent=(id)=>{
        const name='event1'
        navigate(`/viewdetails/${id}/${name}`);
    }
    const deleteEvent=()=>{
    fetch("http://localhost:4000/events/"+eventId,{
        method:"DELETE",
        headers:{'Content-Type':'application/json'}
       })
       .then(response=>response.json())//http response
            .then(result=>{
             setMessage(result.message);
             setTimeout(()=>{
                setMessage('');
             },5000)
             getAll();
             })//http result
            .catch(err=>alert(err.data));//http errors
    }
    useEffect(()=>{
            getAll();
    },[])
    return(
        <div className='container'>
            <div className='row' style={{marginTop:"1%"}}>
                <div className='col-md-3'>
                <h3>Events</h3>
                </div>
                <div className='col-md-9'>
                <div style={{height:"30px"}} >
        {(message!='')?<div className='alert alert-success'>{message}</div>:''}
      </div>
                </div>
            </div>
            <hr />
            <div className='row'>
                <div className='col-md-5'>
                    <form>
                <div className='form-group'>
                    <label>Event Name</label>
                    <input type="text" value={name} onChange={readName} className='form-control' />
                    {name}
                </div>
                <div className='form-group'>
                    <label>Event Type</label>
                    <input type="text" value={type} onChange={readType} className='form-control' />
                </div>
                <div className='form-group'>
                    <label>Event Desc</label>
                    <input type="text" value={desc} onChange={readDesc} className='form-control' />
                </div>
                {!isUpdate?
                <input type="button" value="Save" onClick={()=>saveEvents()} className='btn btn-primary' />:
                <input type="button" value="Update" onClick={()=>updateEvent()} className='btn btn-primary' />}
                <input type="button" value="Reset" onClick={()=>resetForm()} className='btn btn-secondary' />
                    </form>
                </div>
                <div className='col-md-7'>
                    
                {(eventsList.length>0)?
                    <table className='table table-bordered'>
                        <thead>
                            <tr><th>Name</th><th>Type</th><th>Desc</th><th>Edit</th><th>View</th><th>Delete</th></tr>
                        </thead>
                        <tbody>
                        {eventsList.map((item,index)=>(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.type}</td>
                                <td>{item.desc}</td>
                                <td><button className='btn btn-primary' onClick={()=>editEvent(item._id)}>Edit</button></td>
                                <td><button className='btn btn-info' onClick={()=>viewEvent(item._id)}>View</button></td>
                                <td><button className='btn btn-danger' data-toggle="modal" data-target="#deleteModal" onClick={()=>deleteConfirm(item._id)}>Delete</button></td>
                            </tr>
                        ))}
                        </tbody>
                    </table>:<h4 style={{marginLeft:"25%"}}>No events data found</h4>}
                </div>
            </div>
            

            {/* Dialog modal */}
            <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Are you sure want to delete?</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      {/* <div className='modal-body'>
        {(message!='')?<div className='alert alert-success'>{message}</div>:''}
      </div> */}
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
        <button type="button" data-dismiss="modal" class="btn btn-primary" onClick={()=>deleteEvent()}>Confirm</button>
      </div>
    </div>
  </div>
            </div>
        </div>
    )
}