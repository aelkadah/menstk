import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviews, updateReview } from "../../features/reviewSlice";
import notify from "../../helpers/notify";

const UpdateReviewHook = (productId, review) => {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const [pending, setPending] = useState(true);
  const [title, setTitle] = useState("");
  const [rate, setRate] = useState(0);

  useEffect(() => {
    if (review) {
      setTitle(review?.title);
      setRate(review?.ratings);
    }
  }, [review]);

  const onChangeTitle = (e) => setTitle(e.target.value);
  const onChangeRate = (newRating) => setRate(newRating);

  const handleUpdateReview = async (e) => {
    e.persist();

    if (rate == 0) return notify("من فضلك اختر تقييم", "warn");
    else if (title == "") return notify("من فضلك أدخل تفاصيل التقييم", "warn");

    setPending(true);
    await dispatch(updateReview([review?._id, { title, ratings: rate }]));
    setPending(false);
    await dispatch(getAllReviews([productId, 10]));
  };

  const loading = useSelector((state) => state.review.loading);
  const error = useSelector((state) => state.review.error);

  useEffect(() => {
    if (!pending && !loading && !error) {
      setPending(true);
      handleClose();
      setRate(0);
      setTitle("");
    }
  }, [pending]);

  return [
    show,
    handleShow,
    handleClose,
    rate,
    onChangeRate,
    title,
    onChangeTitle,
    handleUpdateReview,
  ];
};

export default UpdateReviewHook;
