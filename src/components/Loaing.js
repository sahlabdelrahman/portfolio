import React from 'react';
import loadingGif from '../assets/images/gif/loading-arrow.gif';


function Loading(){
    return(
        <div>
            <h4>rooms data loading...</h4>
            <img src={loadingGif} alt='loading' />
        </div>
    );
}

export default Loading;