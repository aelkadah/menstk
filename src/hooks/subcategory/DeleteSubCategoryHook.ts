import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  deleteSubCategory,
  getSubsOfCat,
} from "../../features/subcategorySlice";

const DeleteSubCategoryHook = (subcategory) => {
  const dispatch = useDispatch();

  const [showDelete, setShowDelete] = useState(false);
  const handleCloseDelete = () => setShowDelete(false);
  const handleShowDelete = () => setShowDelete(true);

  const [pending, setPending] = useState(true);

  const handleDelete = async (e) => {
    e.preventDefault();
    setPending(true);
    await dispatch(deleteSubCategory(subcategory?._id));
    setPending(false);
    dispatch(getSubsOfCat(subcategory?.category));
  };

  useEffect(() => {
    if (!pending) {
      setPending(true);
      handleCloseDelete();
    }
  }, [pending]);

  return [showDelete, handleShowDelete, handleCloseDelete, handleDelete];
};

export default DeleteSubCategoryHook;
