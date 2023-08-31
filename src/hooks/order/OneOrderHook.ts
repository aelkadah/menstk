import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificOrder } from "../../features/orderSlice";

const OneOrderHook = (id) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(getSpecificOrder(id));
  }, [id]);

  const loading = useSelector((state) => state.order.loading);
  const order = useSelector((state) => state.order.oneOrder?.data);

  return [order, loading];
};

export default OneOrderHook;
