import React from 'react';
import Stoct from './Stock';
import ProductNumber from './ProductNumber';

const MainContent = () =>{
    return(
        <div className="container">
           <div className="row">
           <div className="col-md-6">
           <ProductNumber/>
            </div>  
           <div className="col-md-6">
              <OrderBy Component/> 
              </div>
             
            </div>
             <div className="row">
                <Stock/>
             </div>
        </div>
    )
}

export default MainContent;