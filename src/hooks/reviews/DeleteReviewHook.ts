import { useDispatch } from "react-redux";
import { deleteReview, getAllReviews } from "../../features/reviewSlice";

const DeleteReviewHook = (reviewId, productId) => {
  const dispatch = useDispatch();

  const handleDeleteReview = async (e) => {
    e.persist();
    await dispatch(deleteReview(reviewId));
    await dispatch(getAllReviews([productId, 10]));
  };

  return [handleDeleteReview];
};

export default DeleteReviewHook;
