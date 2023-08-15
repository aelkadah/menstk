import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createSubCategory } from "../../features/subcategorySlice";
import { getAllCategories } from "../../features/categorySlice";
import notify from "../../helpers/notify";

const AddSubCategoryHook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllCategories([100]));
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [pending, setPending] = useState(true);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const onChangeName = (e) => setName(e.target.value);
  const onChangeCategory = (e) => setCategory(e.target.value);

  const categories = useSelector((state) => state.category.allCategories.data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name == "" || category == "" || category == "0")
      return notify("من فضلك أكمل البيانات", "warn");

    setPending(true);
    await dispatch(createSubCategory({ name, category }));
    setPending(false);
  };

  useEffect(() => {
    if (!pending) {
      //   dispatch(getAllSubCategories());
      handleClose();
      setName("");
      setCategory("");
    }
  }, [pending]);

  return [
    show,
    handleShow,
    handleClose,
    name,
    onChangeName,
    category,
    onChangeCategory,
    categories,
    handleSubmit,
  ];
};

export default AddSubCategoryHook;
