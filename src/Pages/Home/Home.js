import React, { useEffect, useState } from 'react';

const Home = () => {
    const [searchText, setSearchText]= useState("")
    const [products,setProduct]= useState([]);
    // console.log("Home ~ searchText", searchText)


    useEffect(()=>{
        const url=`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${searchText}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setProduct(data.drinks))
            },[searchText]);

    console.log(products)
const handleSearchField=e =>{
    const searchTextValue=e.target.value;
    setSearchText(searchTextValue);   
}

    return (
        <div>
<div> Cocktail Menu</div>

<div>
    <input onChange={handleSearchField} placeholder="search" type="text"/>
</div>
            <h2>total: {products.length}</h2>
            <img src={products.strDrinkThumb} alt="" width={200}/>

        </div>
    );
};

export default Home;