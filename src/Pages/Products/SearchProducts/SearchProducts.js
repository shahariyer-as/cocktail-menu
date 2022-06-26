import React, { useEffect, useState } from "react";
import Product from "../product/Product";
const SearchProducts = () => {
  const [searchText, setSearchText] = useState("");
  const [products, setProduct] = useState([]);
  //   console.log("Home ~ products", products);
  // console.log("Home ~ searchText", searchText)

  useEffect(() => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data.drinks));
  }, [searchText]);

  const handleSearchField = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };

  return (
    <div>
      {/* --------search button -------- */}

      <div className="search-banner d-flex mx-5" >
        <div >
        <h1 className="header-option"> Search your cocktail menu</h1>
        </div>
      <div className="px-5">
        <input className="px-5 rounded" onChange={handleSearchField} placeholder="Search ...." type="text" />
      </div>
      </div>
      <div>
        {products?.map((product) => (
          <Product product={product} key={product.idDrink} />
        ))}
      </div>
    </div>
  );
};

export default SearchProducts;
