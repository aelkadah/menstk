import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOneProduct } from "../../features/productSlice";

const OneProductHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(id));
  }, [id]);

  const loading = useSelector((state) => state.product.loading);
  const product = useSelector((state) => state.product.oneProduct.data);

  return [product, loading];
};

export default OneProductHook;
