import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../helpers/notify";
import { createReview, getAllReviews } from "../../features/reviewSlice";

const AddReviewHook = (id) => {
  const dispatch = useDispatch();

  const [pending, setPending] = useState(true);
  const [rate, setRate] = useState(0);
  const [review, setReview] = useState("");

  const onChangeRate = (newRating) => setRate(newRating);
  const onChangeReview = (e) => setReview(e.target.value);

  const handleAddReview = async (e) => {
    e.persist();

    if (rate == 0) return notify("من فضلك اختر تقييم", "warn");
    else if (review == "") return notify("من فضلك أدخل تفاصيل التقييم", "warn");

    setPending(true);
    await dispatch(createReview([id, { title: review, ratings: rate }]));
    setPending(false);

    dispatch(getAllReviews([id, 5]));
  };

  const loading = useSelector((state) => state.review.loading);
  const error = useSelector((state) => state.review.error);

  useEffect(() => {
    if (!pending && !loading && !error) {
      setPending(true);
      setRate(0);
      setReview("");
    }
  }, [pending]);

  return [rate, onChangeRate, review, onChangeReview, handleAddReview];
};

export default AddReviewHook;
