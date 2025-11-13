import SlideItem from "./SlideItem";

const Hero = () => {
  const bikeData = [
    {
      name: "polygon siskiu",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/card-1.png`,
      description:
        "Meet the Polygon Siskiu, your ultimate trail companion. Engineered with a lightweight aluminum frame and advanced geometry, it conquers technical climbs and descents with equal prowess. The responsive suspension system soaks up bumps and roots, giving you unparalleled control and confidence. Whether you're navigating tight switchbacks or enjoying a flowy descent, the Siskiu offers a perfectly balanced and agile ride. It's the best-selling choice for riders who demand performance and versatility on every trail.",
    },
    {
      name: "mt bromo n7",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/card-3.png`,
      description:
        "Conquer any terrain with the formidable Mt Bromo N7, inspired by the rugged beauty of its namesake volcano. This hardtail master combines a incredibly durable steel frame with a precision 1x drivetrain for simple, reliable shifting. Its aggressive tread tires provide maximum grip on loose gravel and rocky paths, making it a go-to for adventurous explorers. The N7 is built for endurance and comfort, allowing you to tackle long distances without fatigue. Discover unmatched reliability and style with this best-selling model.",
    },
    {
      name: "cascade mount",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/card-5.png`,
      description:
        "Experience the perfect blend of comfort and capability with the Cascade Mount. Designed for the everyday adventurer, its ergonomic frame and swept-back handlebars ensure an upright, comfortable riding position. The versatile tire setup rolls efficiently on pavement yet provides ample traction for light trails and forest paths. Equipped with reliable disc brakes and a wide range of gearing, it's ready for any hill your journey presents. Join the countless riders who have made the Cascade Mount their best-selling choice for daily commutes and weekend explorations.",
    },
  ];

  return (
    <div className="hero">
      <div className="slide-container" id="hero-slide">
        {bikeData.map(({ name, image, description }, index) => (
          <SlideItem name={name} image={image} key={index} description={description} />
        ))}

        <div className="hero-txt">you ride</div>

        <ul className="slide-control">
          <li className="slide-prev">
            <i className="bx bx-chevron-left"></i>
          </li>
          <li className="slide-control-item active">01</li>
          <li className="slide-control-item">02</li>
          <li className="slide-control-item">03</li>
          <li className="slide-next">
            <i className="bx bx-chevron-right"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
