import { Link } from "react-router-dom";
import { TableCell, TableRow } from "@mui/material";
import {
  BanknotesIcon,
  CheckCircleIcon,
  ChevronLeftIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

const UserOrderCard = () => {
  return (
    <TableRow>
      <TableCell className="mainFont text-end">1000919#</TableCell>

      <TableCell className="mainFont text-end ">
        <span className="truncate-two">
          مصر - الدقهلية - المنصورة - مدينة السلام - عمارة 8 - بلوك 9
        </span>
      </TableCell>
      <TableCell className="mainFont text-end">25/7/2023</TableCell>
      <TableCell className="mainFont text-end text-nowrap">
        25999.00 ج.م
      </TableCell>
      <TableCell className="mainFont text-end text-nowrap">
        <span className="d-flex align-items-center text-danger ">
          <CheckCircleIcon width={"18px"} className="pe-0 ps-1" />
          لم يصل
        </span>
        {/* <span className="d-flex align-items-center text-success">
      <CheckCircleIcon width={"18px"} className="pe-0 ps-1" />
      تم التوصيل
    </span> */}
      </TableCell>
      <TableCell className="mainFont text-end text-nowrap">
        <span className="d-flex align-items-center">
          <BanknotesIcon width={"18px"} className="pe-0 ps-1" />
          كاش
        </span>
        {/* <span className="d-flex align-items-center">
      <CreditCardIcon width={"18px"} className="pe-0 ps-1" />
      بطاقة إلكترونية
    </span> */}
      </TableCell>
      <TableCell className="mainFont text-end">
        <Link to={`/user/orders/:id`} className="d-flex align-items-center">
          <ChevronLeftIcon width={"15px"} />
          التفاصيل
        </Link>
      </TableCell>
    </TableRow>
  );
};

export default UserOrderCard;
