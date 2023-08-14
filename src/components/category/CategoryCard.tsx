const CategoryCard = ({ category }) => {
  return (
    <div className="categoryCard m-0 p-0">
      <div className="catImage">
        <img src={category?.image} alt="..." />
      </div>
      <h5 className="text-center w-75 py-3">{category?.name}</h5>
    </div>
  );
};

export default CategoryCard;
