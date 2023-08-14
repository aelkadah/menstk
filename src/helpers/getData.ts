import baseUrl from "../api/baseUrl";

export const getData = async (url, params) => {
  const res = await baseUrl.get(url, params);
  return res;
};

export const getDataToken = async (url, params) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const res = await baseUrl.get(url, params, config);
  return res;
};
