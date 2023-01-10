import IntroSection from "./IntroSection";
import restaurantInside from '../assets/images/restaurant-inside.jpg';
import './About.css';

function About() {
  return (
    <>
      <IntroSection />
      <section className="about">
        <p>
          Little Lemon is a charming neighborhood bistro that servers simple
          food and classic cocktails in a lively but casual environment. The restaurant
          features a locally-sourced menu with daily specials.
        </p>
        <img src={restaurantInside} alt="Inside restaurant" />
      </section>

    </>
  );
}

export default About;