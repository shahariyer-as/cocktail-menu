import React from 'react';

const Products = (props) => {
console.log("Products ~ product", props.product)
// console.log("Products ~ props", props.product)
    
    const {idDrink,strDrinkThumb }= props.product
    return (
        <div>
            <h1>{idDrink}</h1>
            <div>
            <img src={strDrinkThumb} width={140} alt=""/>
            </div>
        </div>
    );
};

export default Products;