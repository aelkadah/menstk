import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSpecificOrder,
  updateOrderToPaid,
  updateOrderToDelivered,
} from "../../features/orderSlice";
import notify from "../../helpers/notify";

const UpdateOrderHook = (order) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [paid, setPaid] = useState(false);
  const [delivered, setDelivered] = useState(false);

  useEffect(() => {
    if (order) {
      setPaid(order?.isPaid);
      setDelivered(order?.isDelivered);
    }
  }, [order]);

  const onChangePaid = (e) => setPaid(e.target.value);
  const onChangeDelivered = (e) => setDelivered(e.target.value);

  const [pending, setPending] = useState(true);

  const handleUpdate = async (e) => {
    e.persist();

    if (order?.isPaid == false) {
      if (paid == true || paid == "true") {
        if (delivered == true || delivered == "true") {
          setPending(true);
          await dispatch(updateOrderToPaid(order?._id));
          await dispatch(updateOrderToDelivered(order?._id));
          await dispatch(getSpecificOrder(order?._id));
          setPending(false);
          return;
        } else {
          setPending(true);
          await dispatch(updateOrderToPaid(order?._id));
          await dispatch(getSpecificOrder(order?._id));
          setPending(false);
          return;
        }
      } else {
        if (delivered == true || delivered == "true")
          return notify("يجب دفع المبلغ المستحق أولاً", "warn");
        else return notify("لا يوجد تحديثات تمت على الطلبية", "warn");
      }
    } else {
      if (delivered == true || delivered == "true") {
        setPending(true);
        await dispatch(updateOrderToDelivered(order?._id));
        await dispatch(getSpecificOrder(order?._id));
        setPending(false);
        return;
      } else return notify("لا يوجد تحديثات تمت على الطلبية", "warn");
    }
  };

  const loading = useSelector((state) => state.order.loading);
  const error = useSelector((state) => state.order.error);

  useEffect(() => {
    if (!pending && !loading && !error) setShow(false);
  }, [pending]);

  return [
    show,
    handleShow,
    handleClose,
    paid,
    onChangePaid,
    delivered,
    onChangeDelivered,
    handleUpdate,
  ];
};

export default UpdateOrderHook;
