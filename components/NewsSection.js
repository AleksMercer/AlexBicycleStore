import NewsItem from "./NewsItem";

const NewsSection = () => {
  const newsData = [
    {
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/bg-6.jpg`,
      title:
        "Conquering the Peaks: How Our Mountain Bikes Perform in Extreme Conditions?",
      description:
        "When the temperature drops and the trails get tough, our bikes are put to the ultimate test. This Giant model, built with a robust frame and advanced tire traction, proved its worth on snowy mountain paths. Riders report exceptional stability and control, even on the most challenging and slippery terrains. It's more than just a bike; it's your ticket to year-round adventure.",
    },
    {
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/bg-5.jpg`,
      title: "Rediscover Your City: The Joy of Urban Exploration on Two Wheels",
      description:
        "The best views often come after a pleasant ride. Our city bikes, designed for comfort with their ergonomic seating and handy front baskets, are perfect for your urban adventures. They transform your daily commute or weekend exploration into a delightful experience. As one happy customer shared, it's the perfect way to find a new perspective on your own city.",
    },
    {
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ""}/images/bg-3.jpg`,
      title:
        "Coast to Coast: Our Road Bikes Shine on the Iconic Golden Gate Route",
      description:
        "There's no better test for a road bike than the legendary routes of California. Our lightweight models, engineered for speed and endurance, recently tackled the scenic paths around the Golden Gate Bridge. The aerodynamic frame and precision gearing made for an effortless and breathtaking ride. It's proof that our bikes are built not just for distance, but for creating unforgettable memories.",
    },
  ];

  return (
    <div className="section">
      <div className="section-title">
        <h3 className="second-title to-right show-on-scroll">bike news</h3>
        <h3 className="main-title to-left show-on-scroll">latest news</h3>
      </div>
      <div className="section-content">
        <div className="row">
          {newsData.map(({ image, title, description }, index) => (
            <NewsItem
              key={index}
              image={image}
              title={title}
              description={description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
