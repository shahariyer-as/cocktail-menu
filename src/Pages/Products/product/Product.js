import React from 'react';
import { Link } from "react-router-dom";

const product = (props) => {
// console.log("product ~ props", props.product)
    const {idDrink,strDrinkThumb,strDrink,strInstructionsIT}=props.product
    return (
        <div>
      
  <div className="col container m-2 ">
    <div className="card h-100">
      <img src={strDrinkThumb} className="card-img-top p-2"  alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{strDrink}</h5>
        <p className="card-text">{strInstructionsIT.slice(0,50)}</p>
        <Link to={`/sp/${idDrink}`}><button type="button" className="btn btn-danger">See more Details</button></Link>
      </div>
    </div>
  </div>
        </div>
    );
};

export default product;