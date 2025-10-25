/* global fetchAPI */
import { fetchAPI } from "./api";
import { useReducer } from "react";
import BookingForm from "./BookingForm";

function updateTimes(state,action) {
  switch(action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(new Date(action.date));
      default:
        return state;
  }
}

function initializeTimes(){
  
  return fetchAPI(new Date());
}
function BookingPage({submitForm}) {
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);


  return (
    <>
      <BookingForm 
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </>
  );
}
export default BookingPage;
