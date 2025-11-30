import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./userForm.css";


const UserForm = ()=>{
    const[firstName,setFirstName] = useState("");
const[lastName,setLastName] = useState("");
const[email,setEmail]= useState("");
const[phone,setPhone]= useState("");
const[comment,setComment] = useState("");
const {state} = useLocation();

    return(
        <>
        <section className="userfill">
            
                <form className="userform">
                    
                        <div className="user-input">
                        <label>First Name</label>
                        
                        <input 
                        type="text"
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                        
                        />
                        </div>
                        <div className="user-input">
                        <label>Last Name</label>
                        
                        <input 
                        type="text"
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}

                        />
                        </div>
                         <div className="user-input">
                        <label>Email</label>
                       
                        <input 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}

                        
                        />
                        </div>
                         <div className="user-input">
                        <label>Phone Number</label>
                       
                        <input 
    
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        
                        />
                        </div>
                        <div className="user-data">
                            <div className="date">
                                <p>Date: {state?.date}</p>
                            </div>
                            <div className="time">
                                <p>Time: {state?.time}</p>
                            </div>
                            <div className="guests">
                                <p>{state?.guests} :Guests</p>
                            </div>
                            <div className="occasion">
                                <p>{state?.occasion}</p>
                            </div>
                            <div className="seating">
                                <p>{state?.seatingOption}</p>
                            </div>

                        </div>
                        <div className="user-comment">

                        </div>
                </form>

        
        </section>
        </>
    )
}
export default UserForm;