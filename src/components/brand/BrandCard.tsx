const BrandCard = ({ brand }) => {
  return (
    <div className="brandCard m-0 p-0">
      <div className="brandImage">
        <img src={brand?.image} alt="..." />
      </div>
      <h5 className="text-center w-75 py-3">{brand?.title}</h5>
    </div>
  );
};

export default BrandCard;
