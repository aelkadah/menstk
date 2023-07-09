const BrandCard = ({ image, title }) => {
  return (
    <div className="brandCard m-0 p-0">
      <div className="brandImage">
        <img src={image} alt="..." />
      </div>
      <h5 className="text-center w-75 py-3">{title}</h5>
    </div>
  );
};

export default BrandCard;
