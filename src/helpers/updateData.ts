import baseUrl from "../api/baseUrl";

export const updateData = async (url, params) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const res = await baseUrl.put(url, params, config);
  return res.data;
};

export const updateDataWithImage = async (url, parmas) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.put(url, parmas, config);
  return res;
};
