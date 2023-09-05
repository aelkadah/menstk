import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const SearchProductsHook = () => {
  const dispatch = useDispatch();

  const [pending, setPending] = useState(true);
  const [searchWord, setSearchjWord] = useState("");

  const onChangeSearch = (e) => {
    setSearchjWord(e.target.value);
  };

  useEffect(() => {
    if (searchWord !== "") {
    }
  }, [searchWord]);

  return [searchWord, onChangeSearch];
};

export default SearchProductsHook;
