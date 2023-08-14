import baseUrl from "../api/baseUrl";

export const insertData = async (url, params) => {
  const res = await baseUrl.post(url, params);
  return res;
};

export const insertDataToken = async (url, params) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const res = await baseUrl.post(url, params, config);
  return res;
};

export const insertDataWithImage = async (url, parmas) => {
  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const res = await baseUrl.post(url, parmas, config);
  return res;
};
