import { useEffect, useState } from "react";
import "./customerSay.css"
function CustomerSay (){
    const [user,setUser] =useState([]);
    const fetchUser = ()=>{
        fetch("https://randomuser.me/api/?results=4")
        .then((response)=>response.json())
        .then((data)=>setUser(data.results))
    }
   
    useEffect(()=>{
        fetchUser()
    },[])
    
    return (
        <div className="container">
        <h1>Testimonials</h1>
        {user.length>0 ? (
            user.map((user,index)=>(
                <div key={index} className="customer">
                    <img src={user.picture.large} alt="user-image" />
                    <h2>
                        {user.name.first}
                    </h2>
                    <p>loreum ipsum
                    </p>
                </div>
            ))
        ):null

        }
        
        </div>
    )
};
export default CustomerSay;