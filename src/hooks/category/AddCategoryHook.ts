import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createCategory, getAllCategories } from "../../features/categorySlice";
import notify from "../../helpers/notify";
import upload_image from "../../assets/images/img_upload.png";

const AddCategoryHook = () => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => {
    setShow(false);
    setPending(true);
    setName("");
    setSelectedFile(null);
    setImg(upload_image);
  };

  const [name, setName] = useState("");
  const [img, setImg] = useState(upload_image);
  const [selectedFile, setSelectedFile] = useState(null);
  const [pending, setPending] = useState(true);

  const error = useSelector((state) => state.category.error);
  const loading = useSelector((state) => state.category.loading);

  const onNameChange = (e) => setName(e.target.value);
  const onImgChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "" || selectedFile === null)
      return notify("من فضلك أكمل البيانات!", "warn");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);

    setPending(true);
    await dispatch(createCategory(formData));
    setPending(false);
  };

  useEffect(() => {
    if (!pending) {
      handleClose();
      if (!loading && !error) dispatch(getAllCategories());
    }
  }, [pending]);

  return [
    show,
    handleShow,
    handleClose,
    name,
    onNameChange,
    onImgChange,
    handleSubmit,
  ];
};

export default AddCategoryHook;
