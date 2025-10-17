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
    </>
  );
}

const Cards = () => {
  return (
    <section className="cards">
      <div className="greek">
        <img src="/icons_assets/greek salad.jpg" alt="greek salad" />
        <div className="span">
          <span className="item">Greek salad</span>
          <span className="price">$12.00</span>
        </div>
        <p>
          The famous greek salad of crispy lettuce, peppers,olives and our
          Chicago style feta cheese, garnished with crunchy garlic and rosemary
          croutons.
        </p>
      </div>
      <div className="brusc">
        <img src="/icons_assets/bruschetta.jpg" alt="bruschetta" />
        <div className="span">
          <span className="item">Bruchetta</span>
          <span className="price">$5.99</span>
        </div>
        <p>
          Our Bruchetta is made from grilled bread that has been smeared with
          garlic and seasoned with salt and olive oil.
        </p>
      </div>
      <div className="lemon">
        <img src="/icons_assets/lemon dessert.jpg" alt="lemon dessert" />
        <div className="span">
          <span className="item">Lemon Dessert</span>
          <span className="price">$5.00</span>
        </div>
        <p>
          This comes straight from grandma's recipe book, every last ingredient
          has been sourced and is as authentic as can be imagined.
        </p>
      </div>
    </section>
  );
};
export default Homepage;
