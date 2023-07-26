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

const AdminOrdersContainer = () => {
  return (
    <div className="px-3">
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
    </div>
  );
};

export default AdminOrdersContainer;

// import { Button, Row, Table } from "react-bootstrap";
// import AdminOrderCard from "./AdminOrderCard";
// import {
//   BanknotesIcon,
//   CheckCircleIcon,
//   ChevronDownIcon,
//   CircleStackIcon,
//   Cog6ToothIcon,
//   CreditCardIcon,
// } from "@heroicons/react/24/outline";

// const AdminOrdersContainer = () => {
//   return (
//     <Row className="px-3">
//       <Table responsive>
//         <thead>
//           <tr>
//             <th className="py-3">رقم الطلب</th>
//             <th className="py-3">الاسم</th>
//             <th className="py-3">العنوان</th>
//             <th className="py-3">التاريخ</th>
//             <th className="py-3">الإجمالي</th>
//             <th className="py-3">الحالة</th>
//             <th className="py-3">طريقة الدفع</th>
//             <th className="py-3">الإجراءات</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>5811#</td>
//             <td>محمد أبوتريكة</td>
//             <td>قطر - الدور التاني - الشقة على اليمين</td>
//             <td>24/7/2023</td>
//             <td>25999.00 ج.م</td>
//             <td>
//               <span className="d-flex align-items-center justify-content-start text-warning">
//                 <CheckCircleIcon width={"18px"} className="me-0 ms-1" />
//                 جار التحضير
//               </span>
//               {/* <span className="d-flex align-items-center justify-content-start text-success">
//                 <CheckCircleIcon width={"18px"} className="me-0 ms-1" />
//                 تم الدفع
//               </span> */}
//             </td>
//             <td>
//               {/* <span className="d-flex align-items-center justify-content-start">
//                 <BanknotesIcon width={"18px"} className="me-0 ms-1" />
//                 كاش
//               </span> */}
//               <span className="d-flex align-items-center justify-content-start">
//                 <CreditCardIcon width={"18px"} className="me-0 ms-1" />
//                 بطاقة إلكترونية
//               </span>
//             </td>
//             <td className="d-flex gap-2">
//               <Button className="p-2 rounded-3">
//                 <Cog6ToothIcon width={"26px"} />
//               </Button>
//               {/* <div className="orderSettings">
//                 <Cog6ToothIcon width={"20px"} />
//               </div>
//               <div className="orderSettings">
//                 <ChevronDownIcon width={"20px"} />
//               </div> */}
//             </td>
//           </tr>
//         </tbody>
//       </Table>
//     </Row>
//   );
// };

// export default AdminOrdersContainer;
