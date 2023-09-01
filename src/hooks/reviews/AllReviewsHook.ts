import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReviews } from "../../features/reviewSlice";

const AllReviewsHook = (product, limit) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) dispatch(getAllReviews([product?._id, limit]));
  }, []);

  const loading = useSelector((state) => state.review.loading);
  const error = useSelector((state) => state.review.error);
  const reviewsResults = useSelector(
    (state) => state.review.allReviews.results
  );
  const reviews = useSelector((state) => state.review.allReviews);
  const paginationResult = useSelector(
    (state) => state.review.allReviews.paginationResult
  );

  let pageCount = 0;
  if (paginationResult) pageCount = paginationResult.numberOfPages;
  const getPage = (page) =>
    dispatch(getAllReviews([product?._id, limit, page]));

  return [reviewsResults, reviews, pageCount, getPage, loading];
};

export default AllReviewsHook;
