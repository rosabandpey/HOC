import React from 'react';


const user={
    permission:["ADD_TASK","EDIT_TASK","DELETE_TASK","VIEW_TASK"]         
 }

 export default function ACL (Component) {
    return class MyACL extends React.Component {
      render () {
        return (
          
            (!this.props.permission  ||  user.permission.includes(this.props.permission)) && (
            <Component {...this.props} />)
          
        )
  
        }
    }
    
   

}