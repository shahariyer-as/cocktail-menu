import React from 'react';
import NavBar from '../../NavBar/NavBar';

const SingleProductDetails = (props) => {
console.log("SingleProductDetails ~ props", props)
    const {idDrink}=props.sp;
    return (
        <div>
            <NavBar></NavBar>
            <p>product id{idDrink}</p>
        </div>
    );
};

export default SingleProductDetails;