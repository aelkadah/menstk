import { Row } from "react-bootstrap";
import UserAddressCard from "./UserAddressCard";
import LoggedUserHook from "../../../hooks/auth/LoggedUserHook";
import { LoadingSpinner } from "../..";

const UserAddressesContainer = () => {
  const [loading, userData] = LoggedUserHook();

  return (
    <Row>
      {!loading ? (
        userData?.addresses?.length >= 1 ? (
          userData?.addresses?.map((address, index) => {
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
