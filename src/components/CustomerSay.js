import { useEffect, useState } from "react";
import "./customerSay.css";
function CustomerSay() {
  const [user, setUser] = useState([]);
  const fetchUser = () => {
    fetch("https://randomuser.me/api/?results=4")
      .then((response) => response.json())
      .then((data) => setUser(data.results));
  };

  useEffect(() => {
    fetchUser();
  }, []);

 
  const starRating =()=>{
    const rating = Math.floor(Math.random()*5) + 1
    return "⭐".repeat(rating);
  }
  return (
    <div className="container">
      <h1>Testimonials</h1>
      {user.length > 0
        ? user.map((user, index) => (
            <div key={index} className="customer">
              <img src={user.picture.large} alt="user-image" />
              <h3>{user.name.first}</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Architecto itaque saepe deserunt a veritatis excepturi magnam
                officiis dignissimos quaerat facere provident nisi quos.
              </p>
              <div className="starRating">
                {
                  starRating()
                }
              </div>
              
               </div>
          ))
        : null}
    </div>
  );
}
export default CustomerSay;
