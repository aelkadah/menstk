import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneBrand } from "../../features/brandSlice";

const OneBrandHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(getOneBrand(id));
  }, [id]);

  const brandLoading = useSelector((state) => state.brand.loading);
  const brand = useSelector((state) => state.brand.oneBrand.data);

  return [brandLoading, brand];
};

export default OneBrandHook;
