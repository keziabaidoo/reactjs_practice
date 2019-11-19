import React from 'react';
import Sidebar from './Sidebar';
import MainContent from './MainContent';

const ShopPage = () => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <Sidebar/>
                </div>
                <div className="col-md-9">
                    <MainContent/>
                </div>
            </div> 
        </div>
    )
}

export default ShopPage;