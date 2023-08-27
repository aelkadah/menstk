import { Link } from "react-router-dom";
import { PlusIcon, HeartIcon } from "@heroicons/react/24/outline";
import RemoveWishlistHook from "../../../hooks/wishlist/RemoveWishlistHook";

const WishlistCard = ({ product }) => {
  const [handleRemove] = RemoveWishlistHook(product?._id);

  return (
    <div className="productCard rounded-2 mb-5">
      <div
        className="favBtn rounded-bottom-2 pt-3 pb-2 px-1"
        onClick={handleRemove}
      >
        <HeartIcon width="25px" color="red" fill={`red`} />
      </div>
      <Link to={`/products/${product?._id}`}>
        <div className="prodImg">
          <img src={product?.imageCover} alt="iphone" />
        </div>
        <div>
          <h6 className="fw-normal mb-1 truncate-two">{product?.title} </h6>
          <p className="prodDesc fw-light mb-2">{product?.description}</p>
          <div
            className="d-flex justify-content-end align-items-center"
            style={{ direction: "ltr" }}
          >
            <h3 className="fw-bold text-primary mb-1">{product?.price}</h3>
            <div style={{ lineHeight: "0.9" }}>
              <p className="fw-bold text-primary m-0">.99</p>
              <p className="m-0" style={{ fontSize: "10px" }}>
                EGP
              </p>
            </div>
          </div>
          <h6 className="text-decoration-line-through text-black-50 ms-1 me-0">
            5200.00 ج.م
          </h6>
        </div>
        <div className="addBtn ">
          <PlusIcon width="20px" height="20px" />
        </div>
      </Link>
    </div>
  );
};

export default WishlistCard;
