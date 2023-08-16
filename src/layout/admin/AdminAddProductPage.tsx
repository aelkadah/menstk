import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ArrowSmallRightIcon } from "@heroicons/react/24/outline";
import Multiselect from "multiselect-react-dropdown";
import { CompactPicker } from "react-color";
import AddProductHook from "../../hooks/product/AddProductHook";
import add from "../../assets/images/add.png";

const AddProductPage = () => {
  const [
    categories,
    brands,
    setImages,
    title,
    onChangeTitle,
    desc,
    onChangeDesc,
    price,
    onChangePrice,
    priceAfter,
    onChangePriceAfter,
    qty,
    onChangeQty,
    cat,
    onChangeCat,
    options,
    onSelect,
    onRemove,
    brand,
    onChangeBrand,
    colors,
    showColor,
    removeColor,
    onChangeColor,
    handelChangeComplete,
    handleSubmit,
  ] = AddProductHook();

  return (
    <Row className="py-3">
      <Row className="d-flex justify-content-start align-items-center px-3 pb-3">
        <Link className="backBtn" to={`/admin/products`}>
          <ArrowSmallRightIcon width={"20px"} />
        </Link>
        <h3 className="w-auto fw-bold m-0 mb-1 py-0 px-2">إضافة منتج</h3>
      </Row>
      <Row className="justify-content-center my-3">
        <Col xs={12} md={10}>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>صور المنتج</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                multiple
                onChange={(e) => setImages([...e.target.files])}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>اسم المنتج</Form.Label>
              <Form.Control
                type="text"
                placeholder="أدخل اسم المنتج هنا..."
                value={title}
                onChange={onChangeTitle}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>وصف المنتج</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="أدخل وصف هنا..."
                value={desc}
                onChange={onChangeDesc}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>السعر</Form.Label>
              <Form.Control
                type="number"
                placeholder="أدخل سعر المنتج هنا..."
                value={price}
                onChange={onChangePrice}
                className="text-end"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>السعر بعد الخصم</Form.Label>
              <Form.Control
                type="number"
                placeholder="أدخل السعر بعد الخصم المنتج هنا..."
                value={priceAfter}
                onChange={onChangePriceAfter}
                className="text-end"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>الكمية</Form.Label>
              <Form.Control
                type="number"
                value={qty}
                onChange={onChangeQty}
                className="text-end"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>الماركة</Form.Label>
              <Form.Select value={brand} onChange={onChangeBrand}>
                <option value="">إختر الماركة</option>
                {brands?.length >= 1
                  ? brands?.map((brand, index) => {
                      return (
                        <option value={brand?._id} key={index}>
                          {brand?.name}
                        </option>
                      );
                    })
                  : null}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>التصنيف الرئيسي</Form.Label>
              <Form.Select value={cat} onChange={onChangeCat}>
                <option value="">إختر التصنيف الرئيسي</option>
                {categories?.length >= 1
                  ? categories?.map((category, index) => {
                      return (
                        <option value={category?._id} key={index}>
                          {category?.name}
                        </option>
                      );
                    })
                  : null}
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>التصنيف الفرعي</Form.Label>
              <Multiselect
                className="mt-1 text-end"
                placeholder="التصنيف الفرعي"
                options={options}
                onSelect={onSelect}
                onRemove={onRemove}
                displayValue="name"
                style={{ color: "red" }}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>الالوان المتاحه للمنتج</Form.Label>
              <div className="mt-1 d-flex">
                {colors.length >= 1
                  ? colors.map((color, index) => {
                      return (
                        <div
                          key={index}
                          onClick={() => removeColor(color)}
                          className="ms-2 border mt-1"
                          style={{
                            backgroundColor: color,
                            height: "30px",
                            width: "30px",
                            cursor: "pointer",
                            borderRadius: "50%",
                          }}
                        ></div>
                      );
                    })
                  : null}

                <img
                  onClick={onChangeColor}
                  src={add}
                  alt=""
                  width="30px"
                  height="35px"
                  style={{ cursor: "pointer" }}
                />
                {showColor === true ? (
                  <CompactPicker onChangeComplete={handelChangeComplete} />
                ) : null}
              </div>
            </Form.Group>
            <Button className="w-100 mt-2" onClick={handleSubmit}>
              إضافة المنتج
            </Button>
          </Form>
        </Col>
      </Row>
    </Row>
  );
};

export default AddProductPage;
