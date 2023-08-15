import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubsOfCat } from "../../features/subcategorySlice";

const CatSubsHook = (category) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSubsOfCat(category?._id));
  }, []);

  const loading = useSelector((state) => state.subcategory.loading);
  const error = useSelector((state) => state.subcategory.error);
  const subs = useSelector((state) => state.subcategory.subs.data);

  return [loading, subs];
};

export default CatSubsHook;

// 64db75839fd8cad5d572698b
