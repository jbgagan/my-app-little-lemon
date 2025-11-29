import Cards from "./Cards";
import CustomerSay from "./CustomerSay";
import About from "./About";
import Footer from "./Footer";
function Homepage() {
  return (
    <>
      <section className="intro">
        <div className="content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are family owned Mediterranean restaurant, focused on traditional
            recipes served with a modern twist.
          </p>
          <button>Reserve a Table</button>
        </div>
        <img src="./icons_assets/restauranfood.jpg" alt="resturant" />
      </section>
      <div className="highlight">
        <h1>This week's specials!</h1>
        <button>Online Menu</button>
      </div>
      <section className="cards">
        <Cards />
      </section>
      <section className="testimonials">
        <CustomerSay />

      </section>
      <section>
        <About />

      </section>
      <section>
        <Footer />
      </section>
    </>
  );
};
export default Homepage;
