import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificOrder } from "../../features/orderSlice";

const UpdateOrderHook = (order) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [paid, setPaid] = useState(false);
  const [delivered, setDelivered] = useState(false);

  useEffect(() => {
    if (order) {
      console.log(order);

      setPaid(order?.isPaid);
      setDelivered(order?.isDelivered);
    }
  }, [order]);

  const onChangePaid = (e) => setPaid(e.target.value);
  const onChangeDelivered = (e) => setDelivered(e.target.value);

  const [pending, setPending] = useState(true);

  const handleUpdate = async (e) => {
    e.persist();

    console.log("paid: " + order?.isPaid);
    console.log("delivered: " + order?.isDelivered);

    // setPending(true);
    // await dispatch();
    // setPending(false);
  };

  const loading = useSelector((state) => state.order.loading);
  const error = useSelector((state) => state.order.error);

  //   useEffect(() => {
  //     if (!pending && !loading && !error) dispatch(getSpecificOrder(id));
  //   }, [pending]);

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
