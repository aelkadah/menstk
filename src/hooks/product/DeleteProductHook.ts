import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteProduct, getAllProducts } from "../../features/productSlice";

const DeleteProductHook = (product) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteProduct(product?._id));
    dispatch(getAllProducts([2]));
  };

  return [show, handleShow, handleClose, handleDelete];
};

export default DeleteProductHook;
