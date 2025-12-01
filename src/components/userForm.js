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
            
                <form id="confirmation" className="userform">
                    
                        <div className="user-input">
                        <label>First Name</label>
                        
                        <input 
                        type="text"
                        value={firstName}
                        onChange={(e)=>setFirstName(e.target.value)}
                        placeholder="First Name"
                        
                        />
                        </div>
                        <div className="user-input">
                        <label>Last Name</label>
                        
                        <input 
                        type="text"
                        value={lastName}
                        onChange={(e)=>setLastName(e.target.value)}
                        placeholder="Last Name"

                        />
                        </div>
                         <div className="user-input">
                        <label>Email</label>
                       
                        <input 
                            value={email}
                            onChange={(e)=>setEmail(e.target.value)}
                            placeholder="Email"

                        
                        />
                        </div>
                         <div className="user-input">
                        <label>Phone Number</label>
                       
                        <input 
    
                        value={phone}
                        onChange={(e)=>setPhone(e.target.value)}
                        placeholder="Phone"
                        
                        />
                        </div>
                        <div className="user-data">
                            <div className="date">
                                <p>Date: <strong>{state?.date}</strong></p>
                            </div>
                            <div className="time">
                                <p>Time: <strong>{state?.time}</strong></p>
                            </div>
                            <div className="guests">
                                <p>Guests: <strong>{state?.guests}</strong></p>
                            </div>
                            <div className="occasion">
                                <p><strong>{state?.occasion}</strong></p>
                            </div>
                            <div className="seating">
                                <p><strong>{state?.seatingOption}</strong> Seating</p>
                            </div>
                            

                        </div>
                        <div className="user-feedback">
                            <label>Special Requests</label>
                           <textarea 
                           rows="10"
                            cols="42"
                            id="user-comment"
                            name="user-comment"
                            placeholder="comment"
                            value={comment}
                            onChange={(e)=>setComment(e.target.value)}
                           />
                            
                           

                        </div>
                        <div className="privacy-policy">
                            <input 
                            type="radio"
                            
                            /><span>You agree to our fridendly <a href="privacy.com">privacy policy</a></span>
                        </div>
                </form>

        
        </section>
         <div className="img-gallery">
        <img src="./icons_assets/restaurant.jpg" alt="rest-img" />
        <img src="./icons_assets/chef.jpg" alt="chef-img" />
        <img src="./icons_assets/restauranfood.jpg" alt="food-img" />
      </div>
      <button type="submit" form="confirmation" className="submit-button">
        Confirm Reservation
      </button>
        </>
    )
}
export default UserForm;