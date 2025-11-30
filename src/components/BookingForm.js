import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./bookingform.css";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("");
  const [seatingOption, setSeatingOption] = useState("indoor");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion,
      seatingOption,
    };
    if (date && seatingOption && time && guests >= 1 && occasion) {
      submitForm(formData);
      navigate("/userForm",{state:formData});
    }
    console.log(formData);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({ type: "UPDATE_TIMES", date: selectedDate });
  };

  return (
    <>
      <section className="reservation-section">
        <div className="form-container">
          <h1>Reservation</h1>
          <form id="booking-form" onSubmit={handleSubmit}>
            <div className="seating-option">
              <label className="radio-group">
                Indoor
                <input
                  type="radio"
                  value="indoor"
                  name="seating"
                  onChange={(e) => setSeatingOption(e.target.value)}
                  checked={seatingOption === "indoor"}
                />
              </label>
              <label className="radio-group">
                Outdoor
                <input
                  type="radio"
                  value="outdoor"
                  onChange={(e) => setSeatingOption(e.target.value)}
                  name="seating"
                  checked={seatingOption === "outdoor"}
                />
              </label>
            </div>

            <div className="form-grid">
              <div className="input-group">
                <label htmlFor="res-date">Date</label>

                <input
                  type="date"
                  id="res-date"
                  name="res-date"
                  value={date}
                  onChange={handleDateChange}
                  required
                />
              </div>

              <div className="input-group">
                <label htmlFor="res-time">Choose time</label>

                <select
                  id="res-time"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  required
                >
                  <option value="">Select time</option>
                  {availableTimes &&
                    availableTimes.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                </select>
              </div>

              <div className="input-group">
                <label htmlFor="guests">Number of guests</label>

                <input
                  type="number"
                  placeholder="1"
                  min="1"
                  max="10"
                  id="guests"
                  required
                  value={guests}
                  onChange={(e) => setGuests(Number(e.target.value))}
                />
              </div>

              <div className="input-group">
                <label htmlFor="occasion">Occasion</label>

                <select
                  id="occasion"
                  required
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                >
                  <option value="">Select occasion</option>
                  <option value="Birthday">Birthday</option>
                  <option value="Anniversary">Anniversary</option>
                </select>
              </div>
            </div>
          </form>
        </div>
      </section>
      <div className="img-gallery">
        <img src="./icons_assets/restaurant.jpg" alt="rest-img" />
        <img src="./icons_assets/chef.jpg" alt="chef-img" />
        <img src="./icons_assets/restauranfood.jpg" alt="food-img" />
      </div>
      <button type="submit" form="booking-form" className="submit-button">
        Make a Reservation
      </button>
    </>
  );
}
export default BookingForm;
