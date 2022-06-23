import React, { useEffect, useState } from 'react';

const Home = () => {
    const [products,setProduct]= useState({});
    console.log(products)

    useEffect(()=>{
fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
.then(res=>res.json())
.then(data=>setProduct(data.drinks[0]))
    },[])
    return (
        <div>
            <h2>total: {products.idDrink}</h2>
            <img src={products.strDrinkThumb} alt="" width={200}/>

        </div>
    );
};

export default Home;