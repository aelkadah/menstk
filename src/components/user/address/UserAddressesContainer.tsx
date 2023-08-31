import { Row } from "react-bootstrap";
import { LoadingSpinner } from "../..";
import UserAddressCard from "./UserAddressCard";
import AllAddressesHook from "../../../hooks/address/AllAddressesHook";

const UserAddressesContainer = () => {
  const [addresses, addressesLoading] = AllAddressesHook();

  return (
    <Row>
      {!addressesLoading ? (
        addresses?.length >= 1 ? (
          addresses?.map((address, index) => {
            return <UserAddressCard key={index} address={address} />;
          })
        ) : (
          <h3 className="text-center">لا يوجد عناوين حتى الآن</h3>
        )
      ) : (
        <LoadingSpinner />
      )}
    </Row>
  );
};

export default UserAddressesContainer;
