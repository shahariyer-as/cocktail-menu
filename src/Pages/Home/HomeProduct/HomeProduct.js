import React from 'react';

const HomeProduct = (props) => {
console.log("HomeProduct ~ props", props.cocktail)
    
    // const {idDrink}= props.cocktail
    return (
        <div>
            {/* <h2>ID: {idDrink}</h2> */}
            home product
        </div>
    );
};

export default HomeProduct;