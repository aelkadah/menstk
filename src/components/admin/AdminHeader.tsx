import { Row, Form, InputGroup } from "react-bootstrap";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import messi from "../../assets/images/Messi.jpg";

const AdminHeader = () => {
  return (
    <div className="dashboardHeader">
      <InputGroup className="rounded rounded-4">
        <InputGroup.Text>
          <MagnifyingGlassIcon width={"20px"} />
        </InputGroup.Text>
        <Form.Control placeholder="بتدور على ايه..." />
      </InputGroup>

      <div className="w-auto d-flex justify-content-between align-items-center gap-3">
        <span>
          <BellIcon width={"20px"} />
        </span>
        <span>
          <img src={messi} alt="user avatar..." className="avatar" />
        </span>
      </div>
    </div>
  );
};

export default AdminHeader;
