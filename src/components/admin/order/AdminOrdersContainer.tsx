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
import AdminOrderCard from "./AdminOrderCard";
import AllOrdersHook from "../../../hooks/order/AllOrdersHook";

const AdminOrdersContainer = () => {
  const [ordersResults, orders, pageCount, getPage, loading] = AllOrdersHook();

  return (
    <Row>
      {!loading ? (
        <TableContainer
          component={Paper}
          className="shadow-none border-0 w-100 p-0 m-0"
        >
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell className="mainFont fw-bold text-end text-nowrap">
                  رقم الطلب
                </TableCell>
                <TableCell className="mainFont fw-bold text-end text-nowrap">
                  الاسم
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
                return <AdminOrderCard order={item} key={index} />;
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <LoadingSpinner padd={5} />
      )}

      {pageCount && getPage ? (
        <Pagination pageCount={pageCount} onPress={getPage} />
      ) : null}
    </Row>
  );
};

export default AdminOrdersContainer;
