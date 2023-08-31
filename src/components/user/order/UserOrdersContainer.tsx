import { Row } from "react-bootstrap";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { LoadingSpinner, Pagination } from "../..";
import UserOrderCard from "./UserOrderCard";
import AllOrdersHook from "../../../hooks/order/AllOrdersHook";

const UserOrdersContainer = () => {
  const [ordersResults, orders, pageCount, getPage, loading] =
    AllOrdersHook(10);

  return (
    <Row className=" mt-3">
      {!loading ? (
        orders?.length >= 1 ? (
          <TableContainer component={Paper} className="shadow-none border-0">
            <Table aria-label="collapsible table">
              <TableHead>
                <TableRow>
                  <TableCell className="mainFont fw-bold text-end text-nowrap">
                    رقم الطلب
                  </TableCell>
                  <TableCell className="mainFont fw-bold text-end text-nowrap">
                    العنوان
                  </TableCell>
                  <TableCell className="mainFont fw-bold text-end text-nowrap">
                    التاريخ
                  </TableCell>
                  <TableCell className="mainFont fw-bold text-end text-nowrap">
                    الإجمالي
                  </TableCell>
                  <TableCell className="mainFont fw-bold text-end text-nowrap">
                    الحالة
                  </TableCell>
                  <TableCell className="mainFont fw-bold text-end text-nowrap">
                    طريقة الدفع
                  </TableCell>
                  <TableCell className="mainFont fw-bold text-end text-nowrap">
                    الإجراءات
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {orders?.map((item, index) => {
                  return <UserOrderCard order={item} key={index} />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <h3 className="text-center py-5">لا يوجد طلبيات حتى الآن</h3>
        )
      ) : (
        <LoadingSpinner padd={5} />
      )}

      {pageCount && getPage ? (
        <Pagination pageCount={pageCount} onPress={getPage} />
      ) : null}
    </Row>
  );
};

export default UserOrdersContainer;
