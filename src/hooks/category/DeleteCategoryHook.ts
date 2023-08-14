import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteCategory, getAllCategories } from "../../features/categorySlice";

const DeleteCategoryHook = (category) => {
  const dispatch = useDispatch();

  const [deleteShow, setShow] = useState(false);
  const handleDeleteShow = () => setShow(true);
  const handleDeleteClose = () => setShow(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    await dispatch(deleteCategory(category?._id));
    dispatch(getAllCategories());
  };

  return [deleteShow, handleDeleteShow, handleDeleteClose, handleDelete];
};

export default DeleteCategoryHook;
