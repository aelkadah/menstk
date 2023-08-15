import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { getSubsOfCat } from "../../../features/subcategorySlice";
import { LoadingSpinner } from "../..";

const AdminSubsContainer = ({ id }) => {
  //   if (id) console.log(id);

  const [pending, setPending] = useState(true);

  const dispatch = useDispatch();

  const run = async () => {
    setPending(true);
    await dispatch(getSubsOfCat(id));
    setPending(false);
  };

  useEffect(() => {
    if (id && id != "") {
      // console.log(id);

      run();
    }
  }, []);

  const [data, setData] = useState([]);

  useEffect(() => {
    if (!pending) {
      console.log(subs);
      setData(subs);
    }
  }, [pending]);

  //   const error = useSelector((state) => state.subcategory.error);

  const loading = useSelector((state) => state.subcategory.loading);
  const subs = useSelector((state) => state.subcategory.subs.data);

  return (
    <Row>
      {!loading ? (
        data?.length >= 1 ? (
          data?.map((item, index) => {
            return (
              <Col xs={12} sm={6} key={index}>
                {item?.name}
              </Col>
            );
          })
        ) : (
          <h3 className="text-center">لا يوجد تصنيفات فرعية لهذا التصنيف</h3>
        )
      ) : (
        <LoadingSpinner />
      )}
    </Row>
  );
};

export default AdminSubsContainer;
