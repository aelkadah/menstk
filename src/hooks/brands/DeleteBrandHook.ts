import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteBrand, getAllBrands } from "../../features/brandSlice";

const DeleteBrandHook = (brand) => {
  const dispatch = useDispatch();

  const [deleteShow, setShow] = useState(false);
  const handleDeleteShow = () => setShow(true);
  const handleDeleteClose = () => setShow(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteBrand(brand?._id));
    dispatch(getAllBrands([50]));
  };

  return [deleteShow, handleDeleteShow, handleDeleteClose, handleDelete];
};

export default DeleteBrandHook;
