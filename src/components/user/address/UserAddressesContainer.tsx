import { Row } from "react-bootstrap";
import UserAddressCard from "./UserAddressCard";

const UserAddressesContainer = () => {
  const addresses = [
    {
      alias: "المكتب",
      city: "المنصورة",
      details: "المنصورة مدينة السلام شارع الجامع",
      postalCode: "35511",
      phone: "01021603376",
    },
    {
      alias: "المكتب",
      city: "المنصورة",
      details: "المنصورة مدينة السلام شارع الجامع",
      postalCode: "35511",
      phone: "01021603376",
    },
  ];

  return (
    <Row>
      {addresses?.length >= 1
        ? addresses?.map((address, index) => {
            return <UserAddressCard key={index} address={address} />;
          })
        : null}
    </Row>
  );
};

export default UserAddressesContainer;
