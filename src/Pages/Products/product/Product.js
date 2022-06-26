import React from 'react';

const product = (props) => {
console.log("product ~ props", props.product)
    const {idDrink}=props.product
    return (
        <div>
       <h2>{idDrink}</h2>
        </div>
    );
};

export default product;