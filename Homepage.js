import IntroSection from "./IntroSection";
import greekSalad from '../assets/images/greek-salad.jpg';
import bruschetta from '../assets/images/bruschetta.jpg';
import dessert from '../assets/images/dessert.jpg';
import './Homepage.css';


function Homepage() {
  return (
    <>
      <IntroSection />
      <section className="week-special">
        <h2>This weeks specials</h2>
        <div className="specials-container">
          <div className="specials">
            <img src={greekSalad} alt="Greek Salad" />
            <div className="name-price">
              <h3>Greek Salad</h3>
              <h3 className="price">$12.00</h3>
            </div>
            <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
          </div>
          <div className="specials">
            <img src={bruschetta} alt="Bruchetta" />
            <div className="name-price">
              <h3>Bruschetta</h3>
              <h3 className="price">$5.99</h3>
            </div>
            <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil</p>
          </div>
          <div className="specials">
            <img src={dessert} alt="Fruit Dessert" />
            <div className="name-price">
              <h3>Fruit Dessert</h3>
              <h3 className="price">$5.00</h3>
            </div>
            <p>This comes straight form grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Homepage;