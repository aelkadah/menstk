import { Link } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import {
  CubeIcon,
  ReceiptPercentIcon,
  ShoppingCartIcon,
  SparklesIcon,
  SwatchIcon,
  TagIcon,
} from "@heroicons/react/24/outline";

const DashboardPage = () => {
  const sections = [
    { title: "الطلبيات", link: "/admin/orders", count: 51 },
    { title: "المنتجات", link: "/admin/products", count: 154 },
    { title: "التصنيفات", link: "/admin/categories", count: 36 },
    { title: "التصنيفات الفرعية", link: "/admin/subcategories", count: 120 },
    { title: "الماركات", link: "/admin/brands", count: 40 },
    { title: "الخصومات", link: "/admin/coupons", count: 9 },
  ];

  return (
    <Row className="p-3">
      {sections.map((item, index) => {
        return (
          <Col xs={12} sm={6} md={4} key={index}>
            <Link to={item?.link}>
              <div className="dashCard rounded-2 mb-4 p-4 gap-3">
                <div>
                  <h5 className="m-0 dashTitle">{item?.title}</h5>
                  <h3 className="m-0 fw-bold">{item?.count}</h3>
                </div>

                <div className="dashIcon p-3 rounded-circle">
                  {item?.title == "الطلبيات" ? (
                    <ShoppingCartIcon width={"30px"} />
                  ) : null}
                  {item?.title == "المنتجات" ? (
                    <CubeIcon width={"30px"} />
                  ) : null}
                  {item?.title == "التصنيفات" ? (
                    <TagIcon width={"30px"} />
                  ) : null}
                  {item?.title == "التصنيفات الفرعية" ? (
                    <SwatchIcon width={"30px"} />
                  ) : null}
                  {item?.title == "الماركات" ? (
                    <SparklesIcon width={"30px"} />
                  ) : null}
                  {item?.title == "الخصومات" ? (
                    <ReceiptPercentIcon width={"30px"} />
                  ) : null}
                </div>
              </div>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
};

export default DashboardPage;
