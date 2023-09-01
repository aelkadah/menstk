import { useState } from "react";
import { Link } from "react-router-dom";
import { Collapse, TableCell, TableRow } from "@mui/material";
import { Button, Col, Row } from "react-bootstrap";
import {
  BanknotesIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

const AdminOrderCard = ({ order }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell className="mainFont border-0 text-end">1000919#</TableCell>
        <TableCell className="mainFont border-0 text-end">
          {order?.user?.name}
        </TableCell>
        <TableCell className="mainFont border-0 text-end">
          <span className="truncate-two">
            {`${order?.shippingAddress?.city} - ${order?.shippingAddress?.details}`}
          </span>
        </TableCell>
        <TableCell className="mainFont border-0 text-end text-nowrap">
          {order?.createdAt?.split("T")[0]}
        </TableCell>
        <TableCell className="mainFont border-0 text-end text-nowrap">
          {order?.totalOrderPrice} ج.م
        </TableCell>
        <TableCell className="mainFont border-0 text-end text-nowrap">
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
        <TableCell className="mainFont border-0 text-end text-nowrap">
          {order?.paymentMethodType == "cash" ? (
            <span className="d-flex align-items-center">
              <BanknotesIcon width={"20px"} className="pe-0 ps-1" />
              كاش
            </span>
          ) : (
            <span className="d-flex align-items-center text-primary">
              <CreditCardIcon width={"20px"} className="pe-0 ps-1" />
              بطاقة إلكترونية
            </span>
          )}
        </TableCell>
        <TableCell className="mainFont border-0 text-end">
          <span className="d-flex gap-2">
            <Button
              className="p-2 rounded-3 d-flex align-items-center"
              to={`/admin/orders/${order?._id}`}
              as={Link}
            >
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
            <Row className="mainFont">
              {order?.cartItems?.length >= 1
                ? order?.cartItems?.map((item, index) => {
                    return (
                      <Col
                        xs={12}
                        md={6}
                        className="d-flex justify-content-start align-items-center py-3"
                        key={index}
                      >
                        <div>
                          <img
                            src={item?.product?.imageCover}
                            alt={item?.product?.title}
                            style={{ width: "auto", maxHeight: "100px" }}
                          />
                        </div>
                        <div>
                          <h5 className="fw-bold truncate-two">
                            {item?.product?.title}
                          </h5>
                          <div className="d-flex gap-3 text-black-50">
                            <h6 className="text-nowrap">
                              الكمية:
                              <span className="fw-bold text-black">
                                {" "}
                                {item?.quantity}
                              </span>
                            </h6>
                            <h6 className="text-nowrap">
                              الإجمالي:
                              <span className="fw-bold text-black">
                                {" "}
                                {item?.quantity} * {item?.price} ={" "}
                                {item?.quantity * item?.price} ج.م
                              </span>
                            </h6>
                          </div>
                        </div>
                      </Col>
                    );
                  })
                : null}
            </Row>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
};

export default AdminOrderCard;
