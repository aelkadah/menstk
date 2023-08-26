import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneCategory } from "../../features/categorySlice";

const OneCategoryHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(getOneCategory(id));
  }, [id]);

  const loading = useSelector((state) => state.category.loading);
  const category = useSelector((state) => state.category.oneCategory.data);

  return [loading, category];
};

export default OneCategoryHook;
