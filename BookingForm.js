import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function BookingForm({ onSubmit }) {
  const seededRandom = function (seed) {
    var m = 2 ** 35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
      return (s = s * a % m) / m;
    };
  }

  const fetchAPI = function (date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for (let i = 17; i <= 23; i++) {
      if (random() < 0.5) {
        result.push(i + ':00');
      }
      if (random() < 0.5) {
        result.push(i + ':30');
      }
    }
    return result;
  };

  const submitAPI = function (formData) {
    return true;
  };

  const navigate = useNavigate();

  function navigateToConfirmPage() {
    navigate("/confirm");
  }

  const initDate = new Date().toISOString().slice(0, 10);
  let initTimes = fetchAPI(new Date());

  const [date, setDate] = useState(initDate);
  const [availableTimes, setAvailableTimes] = useState(initTimes[0]);
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e) => {
    e.preventDefault();
    submitAPI();
    navigateToConfirmPage();
    onSubmit({ availableTimes });
  }

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <h1>Book a Table</h1>
        <label htmlFor="res-date">Choose date</label>
        <input value={date} onChange={e => setDate(e.target.value)} type="date" id="res-date" />
        <label htmlFor="res-time">Choose time</label>
        <select value={availableTimes} onChange={e => setAvailableTimes(e.target.value)} id="res-time">
          {initTimes.map(time => <option key={time}>{time}</option>)}
        </select>
        <label htmlFor="guests">Number of guests</label>
        <input type="number" value={guests} onChange={e => setGuests(e.target.value)} placeholder="1" min="1" max="10" id="guests" />
        <label htmlFor="occasion">Occasion</label>
        <select value={occasion} onChange={e => setOccasion(e.target.value)} id="occasion">
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        <input type="submit" value="Make Your reservation" aria-label="Confirm your reservation" />
      </fieldset>
    </form>
  );
}

export default BookingForm;