import { useState } from "react";
import { Collapse, TableCell, TableRow } from "@mui/material";
import { Button, Col, Row } from "react-bootstrap";
import {
  BanknotesIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog6ToothIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

import watch1 from "../../../assets/images/watch/1.jpg";

const AdminOrderCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        {/* <TableRow sx={{ "& > *": { borderBottom: "unset" } }}> */}
        <TableCell className="mainFont border-0 text-end">1000919#</TableCell>
        <TableCell className="mainFont border-0 text-end">
          محمد أبوتريكة
        </TableCell>
        <TableCell className="mainFont border-0 text-end ">
          <span className="truncate-two">
            مصر - الدقهلية - المنصورة - مدينة السلام - عمارة 8 - بلوك 9
          </span>
        </TableCell>
        <TableCell className="mainFont border-0 text-end">25/7/2023</TableCell>
        <TableCell className="mainFont border-0 text-end text-nowrap">
          25999.00 ج.م
        </TableCell>
        <TableCell className="mainFont border-0 text-end text-nowrap">
          <span className="d-flex align-items-center text-danger ">
            <CheckCircleIcon width={"18px"} className="pe-0 ps-1" />
            لم يصل
          </span>
          {/* <span className="d-flex align-items-center text-success">
      <CheckCircleIcon width={"18px"} className="pe-0 ps-1" />
      تم التوصيل
    </span> */}
        </TableCell>
        <TableCell className="mainFont border-0 text-end text-nowrap">
          <span className="d-flex align-items-center">
            <BanknotesIcon width={"18px"} className="pe-0 ps-1" />
            كاش
          </span>
          {/* <span className="d-flex align-items-center">
      <CreditCardIcon width={"18px"} className="pe-0 ps-1" />
      بطاقة إلكترونية
    </span> */}
        </TableCell>
        <TableCell className="mainFont border-0 text-end">
          <span className="d-flex gap-2">
            <Button className="p-2 rounded-3 d-flex align-items-center">
              <Cog6ToothIcon width={"22px"} />
            </Button>
            <Button
              variant="secondary"
              className="d-flex align-items-center p-2 rounded-3"
              aria-label="expand row"
              onClick={() => setOpen(!open)}
            >
              {open ? (
                <ChevronUpIcon width={"22px"} />
              ) : (
                <ChevronDownIcon width={"22px"} />
              )}
            </Button>
          </span>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell align="right" className="py-0" colSpan={8}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Row>
              <Col
                className="d-flex justify-content-start align-items-center mainFont"
                // key={index}
              >
                <Col xs={3} sm={2} lg={1}>
                  <img src={watch1} alt="" width={"100%"} />
                </Col>
                <Col xs={9} sm={10} lg={11}>
                  <h6 className="fw-bold">
                    ساعة يد جالاكسي 4 كلاسيك مقاس 46 مم أسود
                  </h6>
                  <div className="d-flex gap-4">
                    <h6>
                      الكمية:
                      <span className="fw-bold"> 20</span>
                    </h6>
                    <h6>
                      اللون:
                      <span className="fw-bold"> احمر</span>
                    </h6>
                  </div>
                </Col>
              </Col>
            </Row>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default AdminOrderCard;
