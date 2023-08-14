import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

const notify = (msg, type) => {
  if (!type || type === "success") toast.success(msg);
  else if (type === "warn") toast.warn(msg);
  else if (type === "error") toast.error(msg);
};

export default notify;
