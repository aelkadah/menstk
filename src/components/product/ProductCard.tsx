import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const ProductCard = ({ image }) => {
  return (
    <div className="productCard rounded-2">
      <div className="favBtn rounded-bottom-2 pt-3 pb-2 px-1">
        <HeartIcon width="25px" />
      </div>
      <div className="prodImg">
        <img src={image} alt="iphone" />
      </div>
      <div>
        <h6 className="fw-normal mb-1">
          ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود
        </h6>
        <p className="prodDesc fw-light mb-2">
          ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود ساعة يد جالاكسي 4 كلاسيك مقاس
          46 مم أسود ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود
        </p>
        <div
          className="d-flex justify-content-end align-items-center"
          style={{ direction: "ltr" }}
        >
          <h3 className="fw-bold text-primary mb-1">4599</h3>
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
        <ShoppingCartIcon width="20px" height="20px" />
      </div>
    </div>
  );
};

export default ProductCard;
