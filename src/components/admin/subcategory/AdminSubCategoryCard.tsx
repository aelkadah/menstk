import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getSubsOfCat } from "../../../features/subcategorySlice";
import AdminSubsContainer from "./AdminSubsContainer";

const AdminSubCategoryCard = ({ category }) => {
  let id = "";
  if (category?._id) id = category?._id;

  // const [pending, setPending] = useState(true);

  // const dispatch = useDispatch();

  // const run = async () => {
  //   setPending(true);
  //   await dispatch(getSubsOfCat(id));
  //   setPending(false);
  // };

  // useEffect(() => {
  //   if (id != "") {
  //     // console.log(id);

  //     run();
  //   }
  // }, [id]);

  // useEffect(() => {
  //   if (!pending) console.log(subs);
  // }, [pending]);

  // const loading = useSelector((state) => state.subcategory.loading);
  // const error = useSelector((state) => state.subcategory.error);

  // const subs = useSelector((state) => state.subcategory.subs);

  return (
    <Row className="bg-white mb-3 py-3 px-2 border border-1">
      <h5 className="fw-bold mb-3 px-2">{category?.name}</h5>
      <h5 className="fw-bold mb-3 px-2">{category?._id}</h5>

      <AdminSubsContainer id={id} />

      {/* {category?.subcategories?.map((sub, index) => {
        return (
          <Col xs={12} sm={6} key={index}>
            <AdminSubCatCol sub={sub} />
          </Col>
        );
      })} */}
    </Row>
  );
};

export default AdminSubCategoryCard;
