import PopularItem from "./PopularItem";

const PopularSection = () => {
  const popularBikesData = [
    {
      name: "xtrada hardtail",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/card-3.png`,
    },
    {
      name: "card-2",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/card-2.png`,
    },
    {
      name: "norco youth bicycle",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/card-6.png`,
    },
    {
      name: "mt bromo n7",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/card-1.png`,
    },
    {
      name: "haibike xduro rx",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/card-5.png`,
    },
    {
      name: "polygon siskiu",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/card-4.png`,
    },
  ];

  return (
    <div className="section">
      <div className="section-title">
        <h3 className="second-title to-right show-on-scroll">
          customer choice
        </h3>
        <h3 className="main-title to-left show-on-scroll">popular bikes</h3>
        <div className="btn-wrapper">
          <div className="to-top show-on-scroll">
            <a href="#" className="btn">
              view all bikes
            </a>
          </div>
        </div>
      </div>
      <div className="section-content">
        <div className="row">
          {popularBikesData.map(({ name, image }, index) => (
            <PopularItem name={name} image={image} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
