import React, { useEffect, useState } from "react";
import Products from "../Products";

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

    e.preventDefault("");
  };

  return (
    <div>
      <div> Cocktail Menu</div>
      {/* --------search button -------- */}

      <div>
        <input className="px-5 rounded" onChange={handleSearchField} placeholder="Search your cocktail ...." type="text" />
      </div>
      <div>
        {products?.map((product) => (
          <Products product={product} key={product.idDrink} />
        ))}
      </div>
    </div>
  );
};

export default SearchProducts;
