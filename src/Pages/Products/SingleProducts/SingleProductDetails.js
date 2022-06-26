import React from 'react';
import NavBar from '../../NavBar/NavBar';

const SingleProductDetails = (props) => {
// console.log("SingleProductDetails ~ props", props)
    const {strDrink,strDrinkThumb,strCategory,dateModified,strInstructions,strIngredient1,strIngredient2,strIngredient3,strMeasure1,strMeasure2,strMeasure3}=props.sp;
    return (
        <div>
            <NavBar></NavBar>
            <div className='mx-5 d-flex gap-5'>
                <div > 
                <img className='rounded mb-2' src={strDrinkThumb} width="420" alt=""/>
                <h5 >Date : {dateModified}</h5>
                </div>
                <div className='container details-item rounded p-5'>
                    <h1 >Drink Name : {strDrink}</h1>
                    <h4>Category :  {strCategory}</h4>
<br/>
<h5>{strIngredient1},<br/>{strIngredient2},<br/>{strIngredient3}</h5>
<br/> 
<h6>Measure 1:{strMeasure1} <br/> Measure 2:{strMeasure2} <br/> Measure 3:{strMeasure3}</h6>
<br/><br/>
                    <p>Instructions : {strInstructions}</p>
                </div>
            </div>
            
        </div>
    );
};

export default SingleProductDetails;