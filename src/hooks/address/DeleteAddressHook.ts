import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loggedUser } from "./../../features/authSlice";
import { deleteAddress } from "../../features/addressSlice";

const DeleteAddressHook = (address) => {
  const dispatch = useDispatch();

  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const [pending, setPending] = useState(true);

  const loading = useSelector((state) => state.address.loading);
  const error = useSelector((state) => state.address.error);

  const handleDelete = async (e) => {
    e.preventDefault();

    setPending(true);
    await dispatch(deleteAddress(address?._id));
    setPending(false);
  };

  useEffect(() => {
    if (!pending && !loading && !error) {
      dispatch(loggedUser());
      handleCloseDelete();
    }
  }, [pending]);

  return [showDelete, handleShowDelete, handleCloseDelete, handleDelete];
};

export default DeleteAddressHook;
