import { useState } from "react";
import "./bookingform.css";
function BookingForm({ availableTimes, dispatch,submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData ={
      date,
      time,
      guests,
      occasion,
    };
    submitForm(formData);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({type:"UPDATE_TIMES", date:selectedDate});
    }

  return (
    <>
      <form onSubmit={handleSubmit} className="bookingform">
        <h1>Reservation</h1>
        <div className="left-column">
          <label htmlFor="res-date">Choose date</label>
          <br />
          <input
            type="date"
            id="res-date"
            value={date}
            onChange={handleDateChange}
          />
          <br />

          <label htmlFor="res-time">Choose time</label>
          <br />
          <select
            id="res-time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <br />
            <option value="">Select time</option>
            {availableTimes && availableTimes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
        <div className="right-column">
          <label htmlFor="guests">Number of guests</label>
          <br />
          <input
            type="number"
            placeholder="1"
            min="1"
            max="10"
            id="guests"
            value={guests}
            onChange={(e) => setGuests (Number(e.target.value))}
          />
          <br />

          <label htmlFor="occasion">Occasion</label>
          <br />
          <select
            id="occasion"
            value={occasion}
            onChange={(e) => setOccasion(e.target.value)}
          >
            <option value="">Select occasion</option>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
        </div>

        <input type="submit" value="Make Your Reservation" />
      </form>
    </>
  );
}
export default BookingForm;
