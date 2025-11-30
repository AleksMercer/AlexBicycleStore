const SlideItem = ({ name, image, description }) => {
  return (
    <div className="slide">
      <div className="slide-txt">
        <div className="slide-title">
          <h3>{name}</h3>
        </div>
        <div className="slide-description">
          <div
            className="section-title best-seller-badge"
            style={{ display: "none" }}
          >
            <h3 className="second-title">best seller</h3>
          </div>
          <p>{description}</p>
        </div>
        <div className="slide-btn">
          <a href="#" className="hero-btn buy-now-btn">
            buy now
          </a>
        </div>
      </div>
      <div className="slide-img">
        <img src={image} alt="" />
      </div>
    </div>
  );
};

export default SlideItem;
