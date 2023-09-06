import { Link } from "react-router-dom";

const CategoryCard = ({ category }) => {
  return (
    <div className="categoryCard m-0 p-0">
      <Link to={`/categories/${category?._id}`}>
        <div className="catImage">
          <img src={category?.image} alt="..." />
        </div>
      </Link>
      <h5 className="text-center w-75 py-3">{category?.name}</h5>
    </div>
  );
};

export default CategoryCard;
