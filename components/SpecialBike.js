const SpecialBike = () => {
  const imagePath = `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/card-3.png`;
  return (
    <div className="section special-section">
      <div className="section-title">
        <h3 className="second-title to-left show-on-scroll">best seller</h3>
        <h3 className="main-title to-right show-on-scroll">xtrada hardtail</h3>
        <div className="special-price to-top show-on-scroll">$1,099.00</div>
        <div className="to-top show-on-scroll">
          <a href="#" className="btn">
            buy now
          </a>
        </div>
      </div>
      <div className="special-img">
        <img
          src={imagePath}
          alt=""
          className="to-left show-on-scroll"
        />
      </div>
    </div>
  );
};

export default SpecialBike;
