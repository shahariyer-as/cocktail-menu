import React, { useEffect, useState } from 'react';
import SearchProducts from '../../Products/SearchProducts/SearchProducts';
import HomeProduct from '../HomeProduct/HomeProduct';

const Home = () => {
  const [cocktails,setCocktail]=useState([])
  // console.log("Home ~ cocktails", cocktails)
  useEffect(()=>{
    fetch(``)
    .then(res=>res.json())
    .then(data=>setCocktail(data.drinks))
  },[])
    return (
        <div>
          <SearchProducts></SearchProducts>  

          {/* home cocktail  */}
          <div>
            {
              cocktails?.map(cocktail=><HomeProduct 
                cocktail={cocktail}
                key={cocktail.idDrink}
                />)
            }
          </div>
        </div>
    );
};

export default Home;