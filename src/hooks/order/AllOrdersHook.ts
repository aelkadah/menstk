import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrders } from "../../features/orderSlice";

const AllOrdersHook = (limit) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllOrders([limit]));
  }, []);

  const loading = useSelector((state) => state.order.loading);
  const orders = useSelector((state) => state.order.allOrders?.data);
  const ordersResults = useSelector((state) => state.order.allOrders?.results);
  const paginationResult = useSelector(
    (state) => state.order.allOrders?.paginationResult
  );

  let pageCount = 0;
  if (paginationResult) pageCount = paginationResult.numberOfPages;
  const getPage = (page) => dispatch(getAllOrders([limit, page]));

  return [ordersResults, orders, pageCount, getPage, loading];
};

export default AllOrdersHook;
