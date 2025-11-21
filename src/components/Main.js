
import { submitAPI } from "./api";
import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import Specials from "./Specials";
import CustomerSay from "./CustomerSay";
import Login from "./Login";
import Chicago from "./Chicago";
import ConfirmedBooking from "./ConfirmedBooking";


function initializeTimes() {
    return ["17:00","18:00","19:00","20:00","21:00","22:00"];
  }

  function updateTimes(state,action) {
    switch (action.type){
      case "UPDATE_TIMES":
        return ["17:00","18:00","19:00","20:00","21:00","22:00"];
        default:
          return state;
    }
  }
function Main() {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const navigate = useNavigate();
  const submitForm =(formData) => {
  const isSubmitted = submitAPI(formData);
  if(isSubmitted){
    navigate("/confirmed")
  }
}
  
  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        
        <Route path="/Chicago" element={<Chicago />} />
        <Route path="/menu" element={<CustomerSay />} />
        <Route
          path="/bookingpage"
          element={
            <BookingPage
                submitForm ={submitForm}
                availableTimes={availableTimes}
                dispatch={dispatch}
                />
            
           
          }
        />
        <Route path="/orderonline" element={<Specials />} />
        <Route path="/login" element={<Login />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
}
export default Main;
