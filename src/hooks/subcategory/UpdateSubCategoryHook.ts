import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import notify from "../../helpers/notify";
import {
  getSubsOfCat,
  updateSubCategory,
} from "../../features/subcategorySlice";

const UpdateSubCategoryHook = (subcategory) => {
  const dispatch = useDispatch();

  const [showEdit, setShowEdit] = useState(false);
  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  const [pending, setPending] = useState(true);
  const [name, setName] = useState("");

  useEffect(() => {
    if (subcategory) setName(subcategory?.name);
  }, [subcategory]);

  const onChangeName = (e) => setName(e.target.value);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (name == "") return notify("من فضلك أدخل اسم التصنيف الفرعي", "warn");

    setPending(true);
    await dispatch(updateSubCategory([subcategory?._id, { name }]));
    setPending(false);

    dispatch(getSubsOfCat(subcategory?.category));
  };

  useEffect(() => {
    if (!pending) {
      setPending(true);
      handleCloseEdit();
      setName("");
    }
  }, [pending]);

  return [
    showEdit,
    handleShowEdit,
    handleCloseEdit,
    name,
    onChangeName,
    handleUpdate,
  ];
};

export default UpdateSubCategoryHook;
