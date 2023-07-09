const CategoryCard = ({ image, title }) => {
  return (
    <div className="categoryCard m-0 p-0">
      <div className="catImage">
        <img src={image} alt="..." />
      </div>
      <h5 className="text-center w-75 py-3">{title}</h5>
    </div>
  );
};

export default CategoryCard;
