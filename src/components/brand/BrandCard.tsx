import { Link } from "react-router-dom";

const BrandCard = ({ brand }) => {
  return (
    <div className="brandCard m-0 p-0">
      <Link to={`/brands/${brand?._id}`}>
        <div className="brandImage">
          <img src={brand?.image} alt="..." />
        </div>
      </Link>
      <h5 className="text-center w-75 py-3">{brand?.name}</h5>
    </div>
  );
};

export default BrandCard;
