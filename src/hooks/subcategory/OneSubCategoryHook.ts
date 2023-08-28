import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneSubCategory } from "../../features/subcategorySlice";

const OneSubCategoryHook = (id) => {
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.subcategory.loading);
  const subcategory = useSelector((state) => state.subcategory.oneSub?.data);

  useEffect(() => {
    if (id) dispatch(getOneSubCategory(id));
  }, [id]);

  return [subcategory, loading];
};

export default OneSubCategoryHook;
