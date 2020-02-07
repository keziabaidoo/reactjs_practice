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
import din from '../images/15.jpg';
import fri from '../images/4.jpg';

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
                <Stock img={images} stockin="Fashion Shirt" price="$100.00"/>
                <Stock img={image} stockin="Din Shirt" price="$100.00" price2="10"/>
                <Stock img={imag} stockin="Windy Shirt" price="$600.00" price2="14"/>
                <Stock img={main} stockin="Bin shirt" price="$800.00" price2="17"/>
                <div className="row">
                <Stock img={side} stockin="By Shirt" price="$900.00" price2="18"/>
                <Stock img={pic} stockin="Sidy Shirt" price="$500.00" price2="16"/>
                <Stock img={din} stockin="Viny Shirt" price="$200.00" price2="12"/>
                <Stock img={fri} stockin="White Shirt" price="$700.00" price2="13"/>
             </div>
             </div>
        </div>
    )
}

export default MainContent;