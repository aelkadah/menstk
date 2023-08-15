import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import upload_image from "../../assets/images/img_upload.png";
import { getAllBrands, updateBrand } from "../../features/brandSlice";

const UpdateBrandHook = (brand) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (brand) setName(brand?.name);
  }, []);

  const [showUpdate, setShowUpdate] = useState(false);
  const handleShowUpdate = () => setShowUpdate(true);
  const handleCloseUpdate = () => {
    setShowUpdate(false);
    setPending(true);
    setSelectedFile(null);
    setImg(upload_image);
  };

  const [name, setName] = useState("");
  const [img, setImg] = useState(upload_image);
  const [selectedFile, setSelectedFile] = useState(null);
  const [pending, setPending] = useState(true);

  const onNameUpdate = (e) => setName(e.target.value);
  const onImgUpdate = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImg(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (name === "" || selectedFile === null)
      return notify("من فضلك أكمل البيانات!", "warn");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("image", selectedFile);

    setPending(true);
    await dispatch(updateBrand([brand?._id, formData]));
    setPending(false);

    dispatch(getAllBrands());
  };

  return [
    showUpdate,
    handleShowUpdate,
    handleCloseUpdate,
    name,
    onNameUpdate,
    onImgUpdate,
    handleUpdate,
  ];
};

export default UpdateBrandHook;
