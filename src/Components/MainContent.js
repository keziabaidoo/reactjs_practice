import React from 'react';
import Stock from './Stock';
import ProductNumber from './ProductNumber';
import OrderBy from './OrderBy';

import images from '../images/5.jpg';
import image from '../images/6.jpg';
import imag  from '../images/8.jpg';
import main from '../images/12.jpg';
import side from '../images/9.jpg';
import pic from '../images/0.jpg';

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
                <Stock img={images}/>
                <Stock img={image}/>
                <Stock img={imag}/>
                <stock img={main}/>
                <stock img={side}/>
                <stock img={pic}/>
             </div>
        </div>
    )
}

export default MainContent;