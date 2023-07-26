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
import AdminOrderCard from "./AdminOrderCard";
import { Pagination } from "../..";

const AdminOrdersContainer = () => {
  const getPage = () => {
    return;
  };

  return (
    <Row className="px-3">
      <TableContainer component={Paper} className="shadow-none border-0">
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
            <AdminOrderCard />
            <AdminOrderCard />
            <AdminOrderCard />
          </TableBody>
        </Table>
      </TableContainer>

      <Pagination pageCount={12} onPress={getPage} />
    </Row>
  );
};

export default AdminOrdersContainer;
