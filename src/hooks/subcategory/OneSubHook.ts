import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneSubCategory } from "../../features/subcategorySlice";

const OneSubHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(getOneSubCategory(id));
  }, [id]);

  const subLoading = useSelector((state) => state.subcategory.loading);
  const subcategory = useSelector((state) => state.subcategory.oneSub.data);

  return [subLoading, subcategory];
};

export default OneSubHook;
