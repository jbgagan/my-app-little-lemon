import { useState } from "react";
function BookingForm() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");

  const [availableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
            onChange={(e) => setDate(e.target.value)}
          />
          <br />

          <label htmlFor="res-time">Choose time</label>
          <br />
          <select
            id="res-time "
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <br />
            <option value="">Select time</option>
            {availableTimes.map((item) => (
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
            onChange={(e) => setOccasion(e.target.value)}
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
