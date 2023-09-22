import baseUrl from "../api/baseUrl";

export const getData = async (url, params) => {
  const res = await baseUrl.get(url, params);
  return res;
};

export const getDataToken = async (url, params) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const res = await baseUrl.get(url, config);
  return res;
};

export const getDataTokenWithoutParams = async (url) => {
  const config = {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  };
  const res = await baseUrl.get(url, config);
  return res;
};
