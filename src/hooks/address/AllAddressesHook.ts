import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllAddresses } from "../../features/addressSlice";

const AllAddressesHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllAddresses());
  }, []);

  const addressesLoading = useSelector((state) => state.address.loading);
  const addresses = useSelector((state) => state.address.allAddresses?.data);

  return [addresses, addressesLoading];
};

export default AllAddressesHook;
