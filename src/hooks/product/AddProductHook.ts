import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../features/brandSlice";
import { getAllCategories } from "../../features/categorySlice";
import { getSubsOfCat } from "../../features/subcategorySlice";
import { createProduct } from "../../features/productSlice";
import notify from "../../helpers/notify";

const AddProductHook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllCategories([100]));
    dispatch(getAllBrands([100]));
  }, [dispatch]);

  const categories = useSelector((state) => state.category.allCategories.data);
  const brands = useSelector((state) => state.brand.allBrands.data);

  const [images, setImages] = useState([]);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState(0);
  const [priceAfterDiscount, setPriceAfterDiscount] = useState(0);
  const [qty, setQty] = useState(0);
  const [cat, setCat] = useState("");
  const [brand, setBrand] = useState("");
  const [pending, setPending] = useState(true);

  const [subCatID, setSubCatID] = useState([]);
  const [selectedSubID, setSelectedSubID] = useState([]);
  const [options, setOptions] = useState([]);
  const onSelect = (selectedList) => setSelectedSubID(selectedList);
  const onRemove = (selectedList) => setSelectedSubID(selectedList);

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeDesc = (e) => setDesc(e.target.value);
  const onChangePrice = (e) => setPrice(e.target.value);
  const onChangePriceAfter = (e) => setPriceAfterDiscount(e.target.value);
  const onChangeQty = (e) => setQty(e.target.value);
  const onChangeCat = (e) => setCat(e.target.value);

  const onChangeBrand = (e) => setBrand(e.target.value);

  const subs = useSelector((state) => state.subcategory.subs.data);

  useEffect(() => {
    if (cat !== "") dispatch(getSubsOfCat(cat));
  }, [cat]);

  useEffect(() => {
    if (subs && subs?.length >= 1) setOptions(subs);
    else setOptions([]);
  }, [subs]);

  const onChangeColor = (e) => setShowColor(!showColor);
  const [showColor, setShowColor] = useState(false);
  const [colors, setColors] = useState([]);
  const handelChangeComplete = (color) => {
    setColors([...colors, color.hex]);
    setShowColor(!showColor);
  };
  const removeColor = (color) => {
    const newColor = colors.filter((e) => e !== color);
    setColors(newColor);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (images?.length < 1) return notify("من فضل إختر صور المنتج", "warn");
    else if (title == "") return notify("من فضل أدخل اسم المنتج", "warn");
    else if (desc == "") return notify("من فضلك أدخل مواصفات المنتج", "warn");
    else if (price == 0) return notify("من فضلك أدخل سعر المنتج", "warn");
    else if (qty == 0) return notify("من فضلك أدخل الكمية المتاحة", "warn");
    else if (brand == "") return notify("من فضلك إختر ماركة المنتج", "warn");
    else if (cat == "") return notify("من فضلك إختر تصنيف رئيسي", "warn");

    const formData = new FormData();
    formData.append("imageCover", images[0]);
    images.slice(1).map((item) => formData.append("images", item));
    formData.append("title", title);
    formData.append("description", desc);
    formData.append("quantity", qty);
    formData.append("price", price);
    formData.append("priceAfterDiscount", priceAfterDiscount);
    formData.append("brand", brand);
    formData.append("category", cat);
    selectedSubID.map((item) => formData.append("subcategory", item._id));
    colors.map((color) => formData.append("availableColors", color));

    setPending(true);
    dispatch(createProduct(formData));
    setPending(false);
  };

  useEffect(() => {
    if (!pending) setTimeout(() => navigate("/admin/products"), 1000);
  }, [pending]);

  return [
    categories,
    brands,
    setImages,
    title,
    onChangeTitle,
    desc,
    onChangeDesc,
    price,
    onChangePrice,
    priceAfterDiscount,
    onChangePriceAfter,
    qty,
    onChangeQty,
    cat,
    onChangeCat,
    options,
    onSelect,
    onRemove,
    brand,
    onChangeBrand,
    colors,
    showColor,
    removeColor,
    onChangeColor,
    handelChangeComplete,
    handleSubmit,
  ];
};

export default AddProductHook;
