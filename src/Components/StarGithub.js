import React from 'react';

const StarGithub = () => {
    return (
        <div>
            <h5>Leave a star on Github if this respository was useful:)<br /></h5>
           <button type="button" className="btn btn-default btn-lg">
           <span className="glyphicon glyphicon-star" aria-hidden="true"></span> Star
           <button type="button" className="btn btn-default" data-toggle="tooltip" data-placement="right" title="Tooltip on right">848</button>
           </button>  
    </div >
    )
}

export default StarGithub;