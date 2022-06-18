import React from 'react';
import ACL from './ACL';

function Button (props){

    return(

       <button>{props.children}</button>

    )

}

export default  ACL(Button)