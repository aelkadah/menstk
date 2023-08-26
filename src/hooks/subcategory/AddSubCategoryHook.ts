import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import notify from "../../helpers/notify";
import {
  createSubCategory,
  getSubsOfCat,
} from "../../features/subcategorySlice";

const AddSubCategoryHook = (id) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [pending, setPending] = useState(true);
  const [name, setName] = useState("");

  const onChangeName = (e) => setName(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name == "") return notify("من فضلك أكمل البيانات", "warn");

    setPending(true);
    await dispatch(createSubCategory({ name, category: id }));
    setPending(false);
  };

  useEffect(() => {
    if (!pending) {
      dispatch(getSubsOfCat(id));
      setPending(true);
      handleClose();
      setName("");
    }
  }, [pending]);

  return [show, handleShow, handleClose, name, onChangeName, handleSubmit];
};

export default AddSubCategoryHook;
