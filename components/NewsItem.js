const NewsItem = ({ image, title, description }) => {
  return (
    <div className="col-4">
      <div className="news-card to-top show-on-scroll">
        <a href="#" className="news-card-img">
          <div className="img-wrapper">
            <div
              className="img"
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          </div>
        </a>
        <h3 className="news-title">
          <a href="#">{title}</a>
        </h3>
        <p className="news-preview">{description}</p>
        <a href="#" className="btn">
          read more
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
