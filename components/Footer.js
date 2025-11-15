const Footer = () => {
  return (
    <footer>
      <div className="section-content">
        <div className="row">
          <div className="col-4">
            <a href="#" className="logo">
              <h1
                style={{
                  fontSize: "3rem",
                  fontWeight: "900",
                  letterSpacing: "2px",
                }}
              >
                Alex K Bikes
              </h1>
            </a>
            <p className="footer-description">
              We are your trusted partner in the world of cycling, offering a
              curated selection of premium bikes for every terrain and
              adventure. Our mission is to fuel your passion and help you
              discover the joy of the ride, one journey at a time.
            </p>
            <ul className="socials">
              <li>
                <a href="#">
                  <i className="bx bxl-facebook-circle"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-twitter"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="bx bxl-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul className="footer-menu">
              <li>
                <a href="#">about</a>
              </li>
              <li>
                <a href="#">service</a>
              </li>
              <li>
                <a href="#">product</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
          <div className="col-2">
            <ul className="footer-menu">
              <li>
                <a href="#">gallery</a>
              </li>
              <li>
                <a href="#">gears</a>
              </li>
              <li>
                <a href="#">faq</a>
              </li>
              <li>
                <a href="#">contact</a>
              </li>
            </ul>
          </div>
          <div className="col-4">
            <h3 className="footer-header">news letter</h3>
            <p className="footer-description">
              Stay in the loop! Subscribe to our newsletter for exclusive deals,
              the latest bike news, and expert tips delivered directly to your
              inbox. Don't miss out on your next great adventure.
            </p>
            <div className="subscribe-form">
              <input type="text" name="" placeholder="Your Email..." />
              <button className="btn">subscribe now</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
