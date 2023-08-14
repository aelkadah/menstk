import baseUrl from "../api/baseUrl";

export const deleteData = async (url) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const res = await baseUrl.delete(url, config);
  return res;
};
