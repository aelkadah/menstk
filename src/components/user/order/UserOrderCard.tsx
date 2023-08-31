import { Link } from "react-router-dom";
import { TableCell, TableRow } from "@mui/material";
import {
  BanknotesIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  CreditCardIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

const UserOrderCard = ({ order }) => {
  return (
    <TableRow>
      <TableCell className="mainFont text-end text-wrap">11111</TableCell>
      <TableCell className="mainFont text-end">
        <span className="truncate-two">
          {order?.shippingAddress?.city} - {order?.shippingAddress?.details}
        </span>
      </TableCell>
      <TableCell className="mainFont text-end text-nowrap">
        {order?.createdAt?.split("T")[0]}
      </TableCell>
      <TableCell className="mainFont text-end text-nowrap">
        {order?.totalOrderPrice} ج.م
      </TableCell>
      <TableCell className="mainFont text-end text-nowrap">
        {order?.isDelivered ? (
          <span className="d-flex align-items-center text-success">
            <CheckCircleIcon width={"20px"} className="pe-0 ps-1" />
            تم التوصيل
          </span>
        ) : (
          <span className="d-flex align-items-center text-danger ">
            <XCircleIcon width={"20px"} className="pe-0 ps-1" />
            لم يصل
          </span>
        )}
      </TableCell>
      <TableCell className="mainFont text-end text-nowrap">
        {order?.isPaid ? (
          <span className="d-flex align-items-center text-primary">
            <CreditCardIcon width={"20px"} className="pe-0 ps-1" />
            بطاقة إلكترونية
          </span>
        ) : (
          <span className="d-flex align-items-center">
            <BanknotesIcon width={"20px"} className="pe-0 ps-1" />
            كاش
          </span>
        )}
      </TableCell>
      <TableCell className="mainFont text-end">
        <Link
          to={`/user/orders/${order?._id}`}
          className="d-flex align-items-center"
        >
          <ChevronLeftIcon width={"15px"} />
          التفاصيل
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default UserOrderCard;
