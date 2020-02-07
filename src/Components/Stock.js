import React from 'react';



const Stock = (props) => {
    const{img,stockin,price ,price2}=props;
    return(
       <div className ="col-xs-6 col-md-3">
          <button class="btn btn-primary btn-possition">Free Shipping</button>
           <img src={img} height="290" width="100%" />
            <p>{stockin}</p>
            <div class="text-content">
             <span>$<b><big>{price2}</big></b>.90</span><br />
             <span>{price}</span>
             </div>
             <button class="btn btn-primary btn-content" role="button">Add to cart</button>   
        </div>
    )
}

export default Stock;