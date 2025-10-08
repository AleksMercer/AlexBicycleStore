import CategoryItem from "./CategoryItem";

const CategorySection = () => {
  const categoryData = [
    {
      category: "Urban",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/bg-1.jpg`,
    },
    {
      category: "mountain",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/bg-4.jpg`,
    },
    {
      category: "Road",
      image: `${process.env.NEXT_PUBLIC_BASE_PATH || ''}/images/bg-2.jpg`,
    },
  ];

  return (
    <div className="section">
      <div className="section-title">
        <h3 className="second-title to-right show-on-scroll">bike category</h3>
        <h3 className="main-title to-left show-on-scroll">choose your style</h3>
      </div>
      <div className="section-content">
        <div className="row">
          {categoryData.map(({ category, image }, index) => (
            <CategoryItem category={category} image={image} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
