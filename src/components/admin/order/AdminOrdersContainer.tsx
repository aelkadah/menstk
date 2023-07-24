import { Row } from "react-bootstrap";
import AdminOrderCard from "./AdminOrderCard";
import { ChevronDownIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

const AdminOrdersContainer = () => {
  return (
    <Row className="px-1">
      {/* <Table>
        <Thead>
          <Tr>
            <Th>رقم الطلب</Th>
            <Th>الاسم</Th>
            <Th>العنوان</Th>
            <Th>التاريخ</Th>
            <Th>الإجمالي</Th>
            <Th>الحالة</Th>
            <Th>طريقة الدفع</Th>
            <Th>الإجراءات</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>5811#</Td>
            <Td>محمد أبوتريكة</Td>
            <Td>قطر, الدور التاني - الشقة على اليمين</Td>
            <Td>24/7/2023</Td>
            <Td>25999.00 ج.م</Td>
            <Td>قيد الإنتظار</Td>
            <Td>عند الإستلام</Td>
            <Td className="d-flex gap-2">
              <div className="orderSettings">
                <Cog6ToothIcon width={"20px"} />
              </div>
              <div className="orderSettings">
                <ChevronDownIcon width={"20px"} />
              </div>
            </Td>
          </Tr>
          <Tr>
            <Td>5811#</Td>
            <Td>محمد أبوتريكة</Td>
            <Td>قطر, الدور التاني - الشقة على اليمين</Td>
            <Td>24/7/2023</Td>
            <Td>25999.00 ج.م</Td>
            <Td>قيد الإنتظار</Td>
            <Td>عند الإستلام</Td>
            <Td className="d-flex gap-2">
              <div className="orderSettings">
                <Cog6ToothIcon width={"20px"} />
              </div>
              <div className="orderSettings">
                <ChevronDownIcon width={"20px"} />
              </div>
            </Td>
          </Tr>
        </Tbody>
      </Table> */}
    </Row>
  );
};

export default AdminOrdersContainer;
