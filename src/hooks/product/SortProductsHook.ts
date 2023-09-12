import { useState } from "react";

const SortProductsHook = () => {
  const [sort, setSort] = useState("");
  const onChangeSort = (e) => setSort(e.target.value);
  return [sort, onChangeSort];
};

export default SortProductsHook;
