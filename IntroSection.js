import { useNavigate } from 'react-router-dom';
import restaurantTable from '../assets/images/restaurant-table.jpg';
import './IntroSection.css';

function IntroSection() {
  const navigate = useNavigate();

  function navigateToBooking() {
    navigate("/booking");
  }

  return (
    <section className="intro-section">
      <div className="intro-container">
        <h1>Little Lemon</h1>
        <p>We are a family owned Mediterranean restaurant focused on traditional recipes served with modern twist.</p>
        <button onClick={navigateToBooking} aria-label="Go to booking page">Reserve a Table</button>
      </div>
      <div className="image-container">
        <img src={restaurantTable} alt="Table in restaurant" className="table-image" />
      </div>
    </section>
  );
}

export default IntroSection;