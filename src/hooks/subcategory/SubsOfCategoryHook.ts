import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubsOfCat } from "../../features/subcategorySlice";

const SubsOfCategoryHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(getSubsOfCat(id));
  }, [id]);

  const loading = useSelector((state) => state.subcategory.loading);
  const subs = useSelector((state) => state.subcategory.subs?.data);

  return [loading, subs];
};

export default SubsOfCategoryHook;
